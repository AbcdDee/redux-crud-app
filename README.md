# README.md

# Redux CRUD Application

This is a simple CRUD (Create, Read, Update, Delete) application built with React and Redux Toolkit for state management. The application allows users to manage a list of items, providing functionalities to add, remove, update, and display items.

## Project Structure

```
redux-crud-app
├── public
│   ├── index.html          # Main HTML file
├── src
│   ├── components
│   │   ├── AddItem.js      # Component for adding new items
│   │   ├── ItemList.js     # Component for displaying the list of items
│   │   └── EditItem.js     # Component for editing existing items
│   ├── features
│   │   └── itemsSlice.js    # Redux slice for managing items
│   ├── App.js              # Main application component
│   ├── index.js            # Entry point of the React application
│   ├── index.css           # CSS styles for the application
│   └── store.js            # Redux store configuration
├── package.json            # NPM configuration file
├── README.md               # Documentation for the project
└── .gitignore              # Files and directories to ignore by Git
```

## Features

- **Add Item**: Users can input new items and add them to the list.
- **View Items**: The application displays a list of all added items.
- **Edit Item**: Users can edit existing items.
- **Delete Item**: Users can remove items from the list.

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd redux-crud-app
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the application:
   ```
   npm start
   ```

The application will be running on `http://localhost:3000`.

## Technologies Used

- React
- Redux Toolkit
- JavaScript
- CSS

## License

This project is licensed under the MIT License.