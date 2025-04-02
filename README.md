# Store Rating System Frontend

This is the frontend application for the Store Rating System, built with React and Material-UI.

## Features

- User authentication (login/register)
- Role-based access control
- Store rating functionality
- Admin dashboard for user and store management
- Store owner dashboard for rating analytics
- User dashboard for profile management and rating history

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Backend API running on http://localhost:3001

## Installation

1. Clone the repository
2. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and navigate to http://localhost:3000

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   └── PrivateRoute.js
│   ├── pages/
│   │   ├── Login.js
│   │   ├── Register.js
│   │   ├── AdminDashboard.js
│   │   ├── UserDashboard.js
│   │   ├── StoreOwnerDashboard.js
│   │   └── StoreList.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## API Endpoints

The frontend communicates with the following backend endpoints:

- Authentication:
  - POST /api/auth/login
  - POST /api/auth/register

- Admin:
  - GET /api/admin/stats
  - GET /api/admin/users
  - GET /api/admin/stores
  - POST /api/admin/users
  - POST /api/admin/stores

- User:
  - GET /api/user/profile
  - GET /api/user/ratings
  - PUT /api/user/password

- Store Owner:
  - GET /api/store-owner/store
  - GET /api/store-owner/ratings

- Stores:
  - GET /api/stores
  - POST /api/ratings

## Technologies Used

- React
- Material-UI
- React Router
- Axios
- Formik
- Yup 