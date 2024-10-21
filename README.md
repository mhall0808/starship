# Star Wars Starships App

This is a simplified and attractive React application that allows users to interact with Star Wars starships. Users can fetch random starships, create new ones, update existing ones, and delete starships using a .NET backend API. The app uses TypeScript, React Hooks, custom hooks, and is styled with Bootstrap and Bootstrap Icons.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Challenges](#challenges)
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

## Technologies Used

- React with TypeScript
- React Hooks and Custom Hooks
- Axios for HTTP requests
- Bootstrap and React Bootstrap for styling
- Bootstrap Icons
- .NET Backend API
- XUnit for testing

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mhall0808/starship.git
   cd star-wars-starships-app
   ```

2. **Run the Docker container:**

   ```bash
   docker-compose up --build
   ```

## Running the Application

#### Docker should immediately install all the dependencies for ease of use.  Once migrations and seedings are completed, your project should be online.

1. **View the backend server:**

   Ensure your .NET backend API is running and accessible at `http://localhost:5000`.

   You can access Swagger by navigating to `http://localhost:5000/swagger`

3. **View the React application:**

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

## Challenges

There were some unique challenges to this coding exercise.

- **Seeding**: Seeding was a fun challenge.  I had to figure out a reasonable way to not seed with every docker load.
- **Docker Setup**: The Docker setup took a bit of work! I had some issues communicating between the API and the front end.
- **Design**: I wanted to create an attractive design without making it too complex.  I tried several approaches and landed on this one.  This design is simple yet elegant.  It runs on both desktop and mobile without needing additional work.  

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
