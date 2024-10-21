# Star Wars Starships App

This is a simplified and attractive React application that allows users to interact with Star Wars starships. Users can fetch random starships, create new ones, update existing ones, and delete starships using a .NET backend API. The app uses TypeScript, React Hooks, custom hooks, and is styled with Bootstrap and Bootstrap Icons.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- Fetch a random starship from the Star Wars universe.
- Display detailed information about the starship.
- Create new starships.
- Update existing starships.
- Delete starships.
- Attractive and responsive UI using Bootstrap.
- Clean code with proper folder structure and custom hooks.

## Project Structure

```
src/
├── api/
│   └── api.ts
├── components/
│   ├── StarshipCard.tsx
│   └── StarshipModal.tsx
├── hooks/
│   └── useStarships.ts
├── App.tsx
├── App.css
└── index.tsx
```

- **api/**: Contains API functions for interacting with the backend.
- **components/**: Reusable React components.
- **hooks/**: Custom hooks for managing starship data.
- **App.tsx**: Main application component.
- **App.css**: Global styles.
- **index.tsx**: Entry point of the application.

## Technologies Used

- React with TypeScript
- React Hooks and Custom Hooks
- Axios for HTTP requests
- Bootstrap and React Bootstrap for styling
- Bootstrap Icons
- .NET Backend API
- XUnit for testing

## Prerequisites

- Node.js and npm installed on your machine.
- Access to the .NET backend API running at `http://localhost:5000`.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/star-wars-starships-app.git
   cd star-wars-starships-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Install Bootstrap and Bootstrap Icons:**

   (Already included in dependencies, but ensure they are installed.)

   ```bash
   npm install bootstrap bootstrap-icons react-bootstrap
   ```

## Running the Application

1. **Start the backend server:**

   Ensure your .NET backend API is running and accessible at `http://localhost:5000`.

2. **Start the React application:**

   ```bash
   npm start
   ```

   The app will run in development mode. Open `http://localhost:3000` to view it in the browser.

## Usage

- **Fetch Random Starship:**

  Click on the rocket icon to fetch and display a random starship.

- **Create a New Starship:**

  Click on the "Create New Starship" button, fill in the form, and submit to add a new starship.

- **Update Existing Starship:**

  Click on the "Update Starship" button to modify the current starship's details.

- **Delete Starship:**

  Click on the "Delete Starship" button to remove the current starship from the database.

## API Endpoints

The frontend communicates with the backend API using the following endpoints:

- **GET /api/starships**: Retrieve all starships.
- **GET /api/starships/{id}**: Retrieve a starship by ID.
- **GET /api/starships/random**: Retrieve a random starship.
- **POST /api/starships**: Create a new starship.
- **PUT /api/starships/{id}**: Update an existing starship.
- **DELETE /api/starships/{id}**: Delete a starship.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
