# ProShop - A Modern React E-commerce Frontend

Welcome to ProShop, a sleek and professional frontend demonstration for an e-commerce website built with React. This project focuses on a modern, dark-themed UI with gradient effects, a clean component structure, and foundational e-commerce features like user login and registration.

**Note:** This is a frontend-only application. User authentication is simulated using the browser's `localStorage` and React's Context API. No backend or database is connected.

 
*(You can replace this with a screenshot of your own running application!)*

---

## ✨ Features

-   **Modern UI/UX:** A beautiful dark theme with professional styling, hover effects, and eye-catching gradients.
-   **Component-Based Architecture:** Organized and scalable project structure.
-   **Routing:** Seamless navigation between pages using `react-router-dom`.
-   **User Authentication:**
    -   User registration page.
    -   User login page.
-   **Simulated Auth State:** Global state management for user authentication using React's Context API, persisting the session on page refresh via `localStorage`.
-   **Product Display:** A clean grid layout for showcasing products.
-   **Responsive Design:** Styled to be usable across different screen sizes.

---

## 🛠️ Tech Stack

-   **React.js:** A JavaScript library for building user interfaces.
-   **React Router DOM:** For handling client-side routing.
-   **React Context API:** For global state management (user authentication).
-   **CSS Modules:** For locally scoped, component-level styling to avoid class name conflicts.
-   **No External CSS Frameworks:** All styling is custom-written.

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/get-npm) (or yarn) installed on your machine.

### Installation

1.  **Clone the repository** (or download the source code):
    ```sh
    git clone https://github.com/your-username/pro-ecommerce-site.git
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd pro-ecommerce-site
    ```

3.  **Install NPM packages:**
    ```sh
    npm install
    ```

4.  **Run the application:**
    ```sh
    npm start
    ```
    This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload if you make edits.

---

## 📂 Project Structure

The project follows a standard React application structure, separating pages, components, and context for maintainability.