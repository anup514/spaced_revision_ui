// analytics feature module
import { state } from '../core/state.js';

export function renderLifetimeAnalytics() {
    // Aggregate stats first
    aggregateLifetimeStats();
    
    const stats = state.lifetimeStats;
    const { currentBadge, nextBadge } = getCurrentBadge(stats.currentStreak);
    
    // Render badge levels section
    const badgesSection = document.getElementById('lifetime-streak-badges-section');
    if (badgesSection) {
        badgesSection.innerHTML = `
            <div class="lifetime-streak-badges-container">
                <div class="lifetime-streak-badges-title">Badge Levels</div>
                <div class="lifetime-streak-badges-grid">
                    ${badgeTiers.map((badge, index) => {
                        const isUnlocked = stats.currentStreak >= badge.days;
                        const isCurrent = currentBadge && currentBadge.name === badge.name;
                        const isNext = nextBadge && nextBadge.name === badge.name;
                        const progress = Math.min((stats.currentStreak / badge.days) * 100, 100);
                        
                        return `
                            <div class="lifetime-streak-badge-item ${isUnlocked ? 'unlocked' : 'locked'} ${isCurrent ? 'current' : ''} ${isNext ? 'next' : ''}" 
                                 title="${badge.name} Badge - ${badge.days} days">
                                <div class="lifetime-streak-badge-icon-wrapper">
                                    <div class="lifetime-streak-badge-icon" style="color: ${isUnlocked ? badge.color : '#64748b'};">
                                        <i data-lucide="${badge.icon}"></i>
                                    </div>
                                    ${isUnlocked ? '<div class="lifetime-streak-badge-check"><i data-lucide="check"></i></div>' : ''}
                                </div>
                                <div class="lifetime-streak-badge-name">${badge.name}</div>
                                <div class="lifetime-streak-badge-days">${badge.days} days</div>
                                ${!isUnlocked ? `
                                    <div class="lifetime-streak-badge-progress">
                                        <div class="lifetime-streak-badge-progress-bar">
                                            <div class="lifetime-streak-badge-progress-fill" style="width: ${progress}%; background: ${badge.color};"></div>
                                        </div>
                                        <div class="lifetime-streak-badge-progress-text">${Math.max(0, badge.days - stats.currentStreak)} days left</div>
                                    </div>
                                ` : ''}
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
        lucide.createIcons();
    }
    
    // Render filter bar
    const filterBar = document.getElementById('lifetime-analytics-filter-bar');
    if (filterBar) {
        const periods = [
            { value: 'all-time', label: 'All Time' },
            { value: 'last-year', label: 'Last Year' },
            { value: 'last-6-months', label: 'Last 6 Months' },
            { value: 'last-month', label: 'Last Month' }
        ];
        
        filterBar.innerHTML = periods.map(period => `
            <button class="lifetime-analytics-filter-btn ${state.lifetimeAnalyticsPeriod === period.value ? 'active' : ''}" 
                    data-period="${period.value}">
                ${period.label}
            </button>
        `).join('');
        
        // Add event listeners
        filterBar.querySelectorAll('.lifetime-analytics-filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                state.lifetimeAnalyticsPeriod = btn.getAttribute('data-period');
                renderLifetimeAnalytics(); // Re-render with new period
            });
        });
    }
    
    const container = document.getElementById('lifetime-analytics-grid');
    if (!container) return;
    const totalMastered = stats.totalMastered.flashcards + stats.totalMastered.mcqs;
    const flashcardsPercent = totalMastered > 0 ? Math.round((stats.totalMastered.flashcards / totalMastered) * 100) : 0;
    const mcqsPercent = totalMastered > 0 ? Math.round((stats.totalMastered.mcqs / totalMastered) * 100) : 0;
    
    // Filter streak history based on period
    let filteredStreakHistory = stats.streakHistory;
    const today = new Date();
    if (state.lifetimeAnalyticsPeriod === 'last-year') {
        const oneYearAgo = new Date(today);
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
        filteredStreakHistory = stats.streakHistory.filter(item => new Date(item.date) >= oneYearAgo);
    } else if (state.lifetimeAnalyticsPeriod === 'last-6-months') {
        const sixMonthsAgo = new Date(today);
        sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
        filteredStreakHistory = stats.streakHistory.filter(item => new Date(item.date) >= sixMonthsAgo);
    } else if (state.lifetimeAnalyticsPeriod === 'last-month') {
        const oneMonthAgo = new Date(today);
        oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
        filteredStreakHistory = stats.streakHistory.filter(item => new Date(item.date) >= oneMonthAgo);
    }
    
    // Generate streak chart visualization
    const streakChartData = filteredStreakHistory.slice(-30); // Last 30 days for chart
    const maxStreak = Math.max(...streakChartData.map(d => d.streak), stats.currentStreak, 1);
    const chartWidth = 500;
    const chartHeight = 120;
    const padding = 20;
    const barWidth = Math.max(2, (chartWidth - 2 * padding) / streakChartData.length - 1);
    
    // Generate bars
    let streakBars = '';
    let linePath = '';
    streakChartData.forEach((data, index) => {
        const x = padding + index * (barWidth + 1);
        const barHeight = maxStreak > 0 ? Math.max(2, (data.streak / maxStreak) * (chartHeight - 2 * padding)) : 2;
        const y = chartHeight - padding - barHeight;
        const opacity = data.active ? 1 : 0.4;
        const color = data.active ? '#f97316' : '#64748b';
        streakBars += `<rect x="${x}" y="${y}" width="${barWidth}" height="${barHeight}" fill="${color}" opacity="${opacity}" rx="2"/>`;
        
        // Build line path
        const lineY = chartHeight - padding - barHeight;
        if (index === 0) {
            linePath = `M ${x + barWidth / 2} ${lineY}`;
        } else {
            linePath += ` L ${x + barWidth / 2} ${lineY}`;
        }
    });
    
    // Create area path for gradient fill
    const areaPath = linePath + ` L ${padding + (streakChartData.length - 1) * (barWidth + 1) + barWidth / 2} ${chartHeight - padding} L ${padding + barWidth / 2} ${chartHeight - padding} Z`;
    
    // Generate progress timeline chart
    const timelineData = stats.progressTimeline.slice(-12);
    const maxMastered = Math.max(...timelineData.map(d => d.mastered), 1);
    const timelineWidth = 500;
    const timelineHeight = 120;
    const timelinePadding = 20;
    
    let timelinePath = '';
    let timelineArea = '';
    timelineData.forEach((data, index) => {
        const x = timelinePadding + (index / (timelineData.length - 1 || 1)) * (timelineWidth - 2 * timelinePadding);
        const y = timelineHeight - timelinePadding - (data.mastered / maxMastered) * (timelineHeight - 2 * timelinePadding);
        if (index === 0) {
            timelinePath = `M ${x} ${y}`;
            timelineArea = `M ${x} ${timelineHeight - timelinePadding}`;
        } else {
            timelinePath += ` L ${x} ${y}`;
            timelineArea += ` L ${x} ${y}`;
        }
    });
    timelineArea += ` L ${timelinePadding + ((timelineData.length - 1) / (timelineData.length - 1 || 1)) * (timelineWidth - 2 * timelinePadding)} ${timelineHeight - timelinePadding} Z`;
    
    // Generate activity heatmap (last 365 days, grouped by weeks)
    // Organize data by weeks (columns) and days of week (rows)
    const weeks = 53; // 53 weeks to cover full year
    const daysPerWeek = 7;
    const heatmapData = [];
    const monthLabels = [];
    const dayLabels = ['Mon', 'Wed', 'Fri'];
    
    // Get start date (365 days ago)
    const startDate = new Date(today);
    startDate.setDate(startDate.getDate() - 364);
    
    // Adjust start date to Monday
    const dayOfWeek = startDate.getDay();
    const daysToMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    startDate.setDate(startDate.getDate() - daysToMonday);
    
    // Track months for labels
    let currentMonth = -1;
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    // Organize data by week columns
    for (let week = 0; week < weeks; week++) {
        const weekData = [];
        let weekStartDate = new Date(startDate);
        weekStartDate.setDate(weekStartDate.getDate() + week * 7);
        
        // Check if this week starts a new month
        const weekMonth = weekStartDate.getMonth();
        if (weekMonth !== currentMonth) {
            currentMonth = weekMonth;
            monthLabels.push({ week: week, label: monthNames[weekMonth] });
        }
        
        // Get data for each day of the week
        for (let day = 0; day < daysPerWeek; day++) {
            const date = new Date(weekStartDate);
            date.setDate(date.getDate() + day);
            const dateStr = date.toISOString().split('T')[0];
            const activity = stats.activityData[dateStr] || { studyTime: 0, itemsCompleted: 0 };
            const intensity = Math.min(activity.studyTime / 120, 1); // Normalize to 0-1
            weekData.push({ intensity, date: dateStr, studyTime: activity.studyTime });
        }
        heatmapData.push(weekData);
    }
    
    container.innerHTML = `
        <!-- Streak History Card -->
        <div class="lifetime-analytics-card lifetime-analytics-card-large">
            <div class="lifetime-analytics-card-header">
                <div>
                    <div class="lifetime-analytics-label">Streak History</div>
                    <div class="lifetime-analytics-value-small">Current: ${stats.currentStreak} days | Longest: ${stats.longestStreak} days</div>
                </div>
            </div>
            <div class="lifetime-analytics-chart">
                <svg class="lifetime-bar-chart" viewBox="0 0 ${chartWidth} ${chartHeight}" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="streakGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style="stop-color:#f97316;stop-opacity:0.3" />
                            <stop offset="100%" style="stop-color:#f97316;stop-opacity:0" />
                        </linearGradient>
                    </defs>
                    ${areaPath ? `<path d="${areaPath}" fill="url(#streakGradient)" opacity="0.6"/>` : ''}
                    ${linePath ? `<path d="${linePath}" stroke="#f97316" stroke-width="2" fill="none" stroke-linecap="round"/>` : ''}
                    ${streakBars}
                    ${streakChartData.map((data, index) => {
                        const x = padding + index * (barWidth + 1);
                        const barHeight = maxStreak > 0 ? Math.max(2, (data.streak / maxStreak) * (chartHeight - 2 * padding)) : 2;
                        const lineY = chartHeight - padding - barHeight;
                        return `<circle cx="${x + barWidth / 2}" cy="${lineY}" r="3" fill="#f97316" opacity="${data.active ? 1 : 0.6}"/>`;
                    }).join('')}
                </svg>
            </div>
            <div class="lifetime-analytics-subtitle">Last ${streakChartData.length} days</div>
        </div>
        
        <!-- Total Mastered Card -->
        <div class="lifetime-analytics-card">
            <div class="lifetime-analytics-card-header">
                <div>
                    <div class="lifetime-analytics-value">${totalMastered.toLocaleString()}</div>
                    <div class="lifetime-analytics-label">Total Mastered</div>
                </div>
            </div>
            <div class="lifetime-analytics-breakdown">
                <div class="lifetime-breakdown-item">
                    <div class="lifetime-breakdown-bar">
                        <div class="lifetime-breakdown-fill" style="width: ${flashcardsPercent}%; background: #ef4444;"></div>
                    </div>
                    <div class="lifetime-breakdown-label">
                        <span>Flashcards</span>
                        <span class="lifetime-breakdown-value">${stats.totalMastered.flashcards.toLocaleString()}</span>
                    </div>
                </div>
                <div class="lifetime-breakdown-item">
                    <div class="lifetime-breakdown-bar">
                        <div class="lifetime-breakdown-fill" style="width: ${mcqsPercent}%; background: #f97316;"></div>
                    </div>
                    <div class="lifetime-breakdown-label">
                        <span>MCQs</span>
                        <span class="lifetime-breakdown-value">${stats.totalMastered.mcqs.toLocaleString()}</span>
                    </div>
                </div>
            </div>
            <div class="lifetime-analytics-subtitle">Across all courses</div>
        </div>
        
        <!-- Overall Accuracy Card -->
        <div class="lifetime-analytics-card">
            <div class="lifetime-analytics-card-header">
                <div>
                    <div class="lifetime-analytics-value">${stats.overallAccuracy}%</div>
                    <div class="lifetime-analytics-label">Overall Accuracy</div>
                </div>
                <div class="lifetime-analytics-trend lifetime-analytics-trend-up">
                    <i data-lucide="trending-up"></i>
                    <span>+3.2%</span>
                </div>
            </div>
            <div class="lifetime-analytics-progress-ring">
                <svg viewBox="0 0 100 100" class="lifetime-ring-svg">
                    <circle cx="50" cy="50" r="40" stroke="var(--border-light)" stroke-width="8" fill="none"/>
                    <circle cx="50" cy="50" r="40" stroke="#10b981" stroke-width="8" fill="none"
                        stroke-dasharray="${2 * Math.PI * 40}" 
                        stroke-dashoffset="${2 * Math.PI * 40 * (1 - stats.overallAccuracy / 100)}" 
                        stroke-linecap="round" transform="rotate(-90 50 50)"/>
                </svg>
                <div class="lifetime-ring-value">${stats.overallAccuracy}%</div>
            </div>
            <div class="lifetime-analytics-subtitle">Weighted average</div>
        </div>
        
        <!-- Progress Timeline Card -->
        <div class="lifetime-analytics-card lifetime-analytics-card-wide">
            <div class="lifetime-analytics-card-header">
                <div>
                    <div class="lifetime-analytics-label">Progress Timeline</div>
                    <div class="lifetime-analytics-value-small">Growth Over Time</div>
                </div>
            </div>
            <div class="lifetime-analytics-chart">
                <svg class="lifetime-line-chart" viewBox="0 0 ${timelineWidth} ${timelineHeight}" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style="stop-color:var(--primary-color);stop-opacity:0.3" />
                            <stop offset="100%" style="stop-color:var(--primary-color);stop-opacity:0" />
                        </linearGradient>
                    </defs>
                    <path class="lifetime-chart-area" d="${timelineArea}" fill="url(#timelineGradient)"/>
                    <path class="lifetime-chart-line" d="${timelinePath}" stroke="var(--primary-color)" stroke-width="3" fill="none"/>
                    ${timelineData.map((data, index) => {
                        const x = timelinePadding + (index / (timelineData.length - 1 || 1)) * (timelineWidth - 2 * timelinePadding);
                        const y = timelineHeight - timelinePadding - (data.mastered / maxMastered) * (timelineHeight - 2 * timelinePadding);
                        return `<circle class="lifetime-chart-point" cx="${x}" cy="${y}" r="4" fill="var(--primary-color)"/>`;
                    }).join('')}
                </svg>
            </div>
            <div class="lifetime-analytics-subtitle">Last 12 months</div>
        </div>
        
        <!-- Activity Heatmap Card -->
        <div class="lifetime-analytics-card lifetime-analytics-card-wide">
            <div class="lifetime-analytics-card-header">
                <div>
                    <div class="lifetime-analytics-label">Activity Heatmap</div>
                    <div class="lifetime-analytics-value-small">All-Time Study Activity</div>
                </div>
            </div>
        <div class="lifetime-heatmap">
                <div class="lifetime-heatmap-wrapper">
                    <div class="lifetime-heatmap-labels-y">
                        ${dayLabels.map(day => `<div class="lifetime-heatmap-day-label">${day}</div>`).join('')}
                    </div>
                    <div class="lifetime-heatmap-content">
                        <div class="lifetime-heatmap-labels-x">
                            ${monthLabels.map(month => `<div class="lifetime-heatmap-month-label" style="grid-column: ${month.week + 1};">${month.label}</div>`).join('')}
                        </div>
                        <div class="lifetime-heatmap-grid">
                            ${Array.from({ length: 7 }, (_, dayIndex) => 
                                heatmapData.map((weekData, weekIndex) => {
                                    const dayData = weekData[dayIndex];
                                    if (!dayData) return '';
                                    const opacity = Math.max(0.15, dayData.intensity);
                                    const studyTime = Math.round(dayData.studyTime);
                                    return `<div class="lifetime-heatmap-cell" 
                                                style="opacity: ${opacity}; background: var(--primary-color);" 
                                                title="${dayData.date}: ${studyTime} min"
                                                data-week="${weekIndex}"
                                                data-day="${dayIndex}"></div>`;
                                }).join('')
                            ).join('')}
                        </div>
                    </div>
                </div>
            </div>
            <div class="lifetime-heatmap-legend">
                <span>Less</span>
                <div class="lifetime-heatmap-legend-cells">
                    <div class="lifetime-heatmap-legend-cell" style="opacity: 0.1;"></div>
                    <div class="lifetime-heatmap-legend-cell" style="opacity: 0.3;"></div>
                    <div class="lifetime-heatmap-legend-cell" style="opacity: 0.5;"></div>
                    <div class="lifetime-heatmap-legend-cell" style="opacity: 0.7;"></div>
                    <div class="lifetime-heatmap-legend-cell" style="opacity: 1;"></div>
                </div>
                <span>More</span>
            </div>
            <div class="lifetime-analytics-subtitle">Last 52 weeks</div>
        </div>
        
        <!-- Milestones Card -->
        <div class="lifetime-analytics-card lifetime-analytics-card-wide">
            <div class="lifetime-analytics-card-header">
                <div>
                    <div class="lifetime-analytics-label">Achievement Milestones</div>
                    <div class="lifetime-analytics-value-small">${stats.milestones.length} Achievements Unlocked</div>
                </div>
                <button class="lifetime-milestones-see-all-btn" id="lifetime-milestones-see-all-btn">
                    See All
                    <i data-lucide="chevron-right"></i>
                </button>
            </div>
            <div class="lifetime-milestones-grid">
                ${stats.milestones.map(milestone => `
                    <div class="lifetime-milestone-card">
                        <div class="lifetime-milestone-icon lifetime-milestone-icon-${milestone.type}">
                            <i data-lucide="${milestone.icon}"></i>
                        </div>
                        <div class="lifetime-milestone-content">
                            <div class="lifetime-milestone-name">${milestone.name}</div>
                            <div class="lifetime-milestone-description">${milestone.description}</div>
                            <div class="lifetime-milestone-date">Unlocked ${new Date(milestone.date).toLocaleDateString()}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    lucide.createIcons();
    
    // Add event listener for See All button
    const seeAllBtn = document.getElementById('lifetime-milestones-see-all-btn');
    if (seeAllBtn) {
        seeAllBtn.addEventListener('click', () => {
            showAllAchievementsModal();
        });
    }
}

export function aggregateLifetimeStats() {
    // Calculate total mastered items
    let totalFlashcards = 0;
    let totalMCQs = 0;
    
    state.myCourses.forEach(course => {
        // Estimate mastered items based on progress percentage
        // Assuming average course has ~200 flashcards and ~100 MCQs
        const estimatedFlashcards = 200;
        const estimatedMCQs = 100;
        totalFlashcards += Math.floor(estimatedFlashcards * (course.progress / 100));
        totalMCQs += Math.floor(estimatedMCQs * (course.progress / 100));
    });
    
    // Add stats from state
    totalFlashcards += state.stats.flashcardsDone || 0;
    totalMCQs += state.stats.mcqsDone || 0;
    
    state.lifetimeStats.totalMastered = {
        flashcards: totalFlashcards,
        mcqs: totalMCQs
    };
    
    // Calculate overall accuracy (weighted average from courses)
    let totalAccuracy = 0;
    let courseCount = 0;
    state.myCourses.forEach(course => {
        // Estimate accuracy based on progress (higher progress = higher accuracy)
        const estimatedAccuracy = 70 + (course.progress / 100) * 25; // Range: 70-95%
        totalAccuracy += estimatedAccuracy;
        courseCount++;
    });
    
    state.lifetimeStats.overallAccuracy = courseCount > 0 
        ? Math.round(totalAccuracy / courseCount) 
        : 92; // Default accuracy
    
    // Set streak data
    state.lifetimeStats.currentStreak = state.stats.streak;
    state.lifetimeStats.longestStreak = Math.max(state.lifetimeStats.longestStreak || 0, state.stats.streak);
    
    // Generate streak history (last 90 days)
    const streakHistory = [];
    const today = new Date();
    for (let i = 89; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        const dayStreak = i >= (90 - state.stats.streak) ? state.stats.streak - (90 - i) : 0;
        streakHistory.push({
            date: date.toISOString().split('T')[0],
            streak: dayStreak > 0 ? dayStreak : 0,
            active: dayStreak > 0
        });
    }
    state.lifetimeStats.streakHistory = streakHistory;
    
    // Generate activity data (last 365 days)
    const activityData = {};
    for (let i = 364; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        const dateStr = date.toISOString().split('T')[0];
        // Simulate activity - more active on days with streak
        const isActiveDay = i < state.stats.streak;
        activityData[dateStr] = {
            studyTime: isActiveDay ? Math.floor(Math.random() * 120 + 30) : Math.floor(Math.random() * 60),
            itemsCompleted: isActiveDay ? Math.floor(Math.random() * 20 + 5) : Math.floor(Math.random() * 5)
        };
    }
    state.lifetimeStats.activityData = activityData;
    
    // Generate progress timeline (monthly data for last 12 months)
    const progressTimeline = [];
    for (let i = 11; i >= 0; i--) {
        const date = new Date(today);
        date.setMonth(date.getMonth() - i);
        const monthStart = new Date(date.getFullYear(), date.getMonth(), 1);
        const monthStr = monthStart.toISOString().split('T')[0];
        
        // Simulate growth over time
        const baseMastered = totalFlashcards + totalMCQs;
        const growthFactor = 1 - (i / 12) * 0.3; // 30% growth over 12 months
        progressTimeline.push({
            date: monthStr,
            mastered: Math.floor(baseMastered * growthFactor),
            accuracy: Math.max(70, state.lifetimeStats.overallAccuracy - (11 - i) * 2),
            studyTime: Math.floor((Math.random() * 50 + 20) * 30) // Hours per month
        });
    }
    state.lifetimeStats.progressTimeline = progressTimeline;
    
    // Generate milestones
    const milestones = [];
    const totalItems = totalFlashcards + totalMCQs;
    
    // Streak milestones
    if (state.lifetimeStats.currentStreak >= 7) milestones.push({ type: 'streak', name: 'Week Warrior', description: '7 day streak', date: new Date().toISOString().split('T')[0], icon: 'flame', unlocked: true });
    if (state.lifetimeStats.currentStreak >= 30) milestones.push({ type: 'streak', name: 'Monthly Master', description: '30 day streak', date: new Date().toISOString().split('T')[0], icon: 'calendar', unlocked: true });
    if (state.lifetimeStats.longestStreak >= 50) milestones.push({ type: 'streak', name: 'Streak Champion', description: '50+ day streak', date: new Date().toISOString().split('T')[0], icon: 'trophy', unlocked: true });
    
    // Mastery milestones
    if (totalItems >= 100) milestones.push({ type: 'mastery', name: 'Centurion', description: '100 items mastered', date: new Date().toISOString().split('T')[0], icon: 'award', unlocked: true });
    if (totalItems >= 500) milestones.push({ type: 'mastery', name: 'Half Grand', description: '500 items mastered', date: new Date().toISOString().split('T')[0], icon: 'star', unlocked: true });
    if (totalItems >= 1000) milestones.push({ type: 'mastery', name: 'Grand Master', description: '1000 items mastered', date: new Date().toISOString().split('T')[0], icon: 'crown', unlocked: true });
    
    // Accuracy milestones
    if (state.lifetimeStats.overallAccuracy >= 85) milestones.push({ type: 'accuracy', name: 'Sharp Shooter', description: '85%+ accuracy', date: new Date().toISOString().split('T')[0], icon: 'target', unlocked: true });
    if (state.lifetimeStats.overallAccuracy >= 90) milestones.push({ type: 'accuracy', name: 'Perfectionist', description: '90%+ accuracy', date: new Date().toISOString().split('T')[0], icon: 'check-circle', unlocked: true });
    
    state.lifetimeStats.milestones = milestones;
}
