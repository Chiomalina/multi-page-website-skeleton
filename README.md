# Chioma Farm Web Application

Welcome to **Chioma Farm**, a modern and responsive web application built with **React**. This application is designed to showcase various services provided by Chioma Farm, including an online bookstore, one-on-one delivery services, and workstations. The app provides a clean, user-friendly interface and utilizes React's dynamic routing to create a seamless navigation experience for the user.

## Features

- **Home Page**: Displays information about the farm's services and team members.
- **About Page**: Provides a brief story about the farm, its mission, and values.
- **Contact Page**: Displays contact information for getting in touch with the farm.
- **Products Page**: Lists the farm's products, with dynamic data integration.
- **Lazy Loading**: The app uses React's `Suspense` and `lazy` to load components efficiently for a better user experience.
- **Responsive Design**: Fully responsive, making it usable on all screen sizes.
- **Custom Spinner**: Displays a custom loading spinner while content is being loaded.

## Technologies Used

- **React**: For building the user interface with components.
- **React Router**: For handling routing and navigation.
- **CSS Modules**: For scoped and modular CSS styling.
- **React Suspense**: To handle lazy loading of components for improved performance.

## Installation

To run the project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/chioma-farm.git
    ```

2. **Navigate into the project directory**:
    ```bash
    cd chioma-farm
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Start the development server**:
    ```bash
    npm start
    ```

5. Visit `http://localhost:3000` in your browser to view the app.

## Project Structure

```plaintext
/chioma-farm
├── /src
│   ├── /Components
│   │   ├── Bar.js
│   │   ├── MyCustomerSpinner.js
│   │   ├── Footer.js
│   │   ├── HomePage.js
│   │   ├── AboutPage.js
│   │   ├── ContactsPage.js
│   │   └── ProductsPage.js
│   ├── App.js
│   └── /styles
│       └── Bar.module.css
├── /public
│   └── index.html
└── package.json
