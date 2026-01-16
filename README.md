# Spaced Revision - React + Tailwind CSS

This project has been converted from vanilla JavaScript/HTML/CSS to a modern React application using Vite, React Router, Redux Toolkit, and Tailwind CSS.

## Technology Stack

- **Build Tool**: Vite
- **Framework**: React 18
- **Routing**: React Router v6
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: League Spartan (Google Fonts)

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── common/          # Buttons, Cards, Modals, etc.
│   ├── layout/          # Nav, Footer, Layout components
│   └── features/        # Feature-specific components
├── pages/               # Page-level components
├── store/               # Redux store
│   └── slices/          # Redux slices
├── utils/               # Utility functions
├── data/                # Data files
├── App.jsx              # Main app component with routing
├── main.jsx             # Entry point
└── index.css            # Tailwind imports + global styles
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Features

- ✅ Dark mode support
- ✅ Responsive design
- ✅ Course management
- ✅ Chat functionality
- ✅ Feedback system
- ✅ Notifications
- ✅ Video player
- ✅ Flashcards
- ✅ MCQs
- ✅ Test series
- ✅ Analytics
- ✅ Revision queue

## State Management

The application uses Redux Toolkit for state management with the following slices:

- `appSlice`: Theme, UI state (modals, dropdowns)
- `statsSlice`: User stats (streak, mastery, etc.)
- `coursesSlice`: My courses, community courses
- `chatSlice`: Chat messages, active course
- `notificationsSlice`: Notifications list
- `courseDetailSlice`: Course detail state, video player, filters
- `testSlice`: Test interface state
- `revisionSlice`: Revision session state

## Styling

All styling has been converted to Tailwind CSS utility classes. The design maintains the original look and feel with:

- Custom color palette matching the original design
- Dark mode support using Tailwind's class strategy
- Responsive design with mobile-first approach
- Custom animations and transitions

## Migration Notes

- All DOM manipulation has been converted to React state and hooks
- Event listeners replaced with React event handlers
- CSS classes replaced with Tailwind utility classes
- State management migrated from global `state` object to Redux slices
- Routing implemented with React Router instead of manual page visibility

## Development

The project uses Vite for fast development with HMR (Hot Module Replacement). All components are written in JSX with functional components and React hooks.
