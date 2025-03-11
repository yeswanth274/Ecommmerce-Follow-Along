Ecommerce-Follow-Along
## Milestone 1: Project Overview
This project is a step-by-step guide to building a complete e-commerce web application using the MERN stack (MongoDB, Express.js, React.js, Node.js). It covers essential functionalities like user authentication, product management, and order processing. Through this project, you'll gain hands-on experience working with RESTful APIs, designing database schemas, and developing a dynamic frontend with React.

Core Features: User Authentication: Secure login and registration using JWT. Product Management: Full CRUD functionality, including sorting and filtering. Order System: Users can place orders and track their history. REST API Development: Scalable API endpoints to manage users, products, and orders. Frontend Design: A responsive UI built with React for a seamless shopping experience. Tech Stack: MongoDB Express.js React.js Node.js JWT for secure authentication REST API 3 Milestone 2: Initial Setup & Login Page Established a well-structured project directory. Created a React app to serve as the frontend. Configured a Node.js server to handle backend operations. Integrated Tailwind CSS for a modern and efficient styling workflow. Installed useful development tools and extensions. Designed and implemented a functional, styled login page for the frontend.


## Milestone 2: Login Page & Authentication Setup
Overview
This milestone involved developing and setting up the login page for user authentication. The focus was on designing a functional UI with essential form elements and integrating Tailwind CSS for a responsive and modern layout.

Key Features Implemented
Login Page Design

Created a responsive login page with fields for email and password
Added a "Remember Me" checkbox and a "Forgot Password?" link for better usability
Tailwind CSS Integration

Implemented Tailwind CSS to achieve a clean and structured design
Configured tailwind.config.js and postcss.config.js for proper styling support
Branch Management

Created a dedicated milestone-2 branch to track progress and maintain version control
Responsive Layout

Ensured the login page adapts smoothly to both mobile and desktop screens for an optimal user experience
Technologies Used
React for building the frontend components
Tailwind CSS for a utility-first approach to styling
React Router for managing navigation if applicable
Axios for handling API requests in future authentication processes
This milestone established the foundation for secure user authentication and a smooth UI experience.
## Milestone 3: Backend Structure & Database Integration
Organized backend code into dedicated folders for better maintainability. Set up a Node.js server to process API requests. Established a connection to MongoDB for data storage and retrieval. Implemented foundational error handling to improve backend stability.

## Milestone 4: User Model & File Uploads
Developed a User Model to define the structure of user-related data in the database. Created a User Controller to handle actions like retrieving and storing user data. Configured Multer to manage file uploads, allowing users to store images and other files.

## Milestone 5: Signup Page (Frontend)
Built a React-based signup page with a user-friendly form. Implemented validation for fields like email and password to enhance data integrity. Connected the form to the backend API for handling user registrations. Added error handling to provide a smoother user experience.

## Milestone 6: Secure Authentication Implementation
Integrated JWT-based authentication to verify and manage user sessions. Created protected routes, ensuring only authorized users can access certain pages. Implemented password hashing using bcrypt.js for enhanced security. Developed API endpoints for user login and logout functionality. Enabled persistent authentication, allowing users to stay logged in through token storage. With this milestone, we’ve built a strong authentication system to protect user data and secure API access.
## Milestone 7: Backend Endpoint for Login & User Authentication
In this milestone, we implemented a secure login endpoint to authenticate users. This involved:

Handling user credentials securely.
Hashing passwords before storage.
Comparing hashed passwords for authentication.
Storing user details in a MongoDB database.
Technologies Used:
MongoDB & Mongoose – Database & ORM
bcrypt.js – Password encryption
## Milestone 8: Card Component & Homepage Layout
This milestone focused on designing a structured and visually appealing homepage using reusable components. Key tasks included:

Creating a reusable product card component.
Implementing a responsive grid layout for product display.
Styling the homepage using Tailwind CSS.
## Milestone 9: Product Management (Frontend)
We worked on integrating the product API with the frontend, allowing users to manage products efficiently. This included:

Displaying a form to add new products.
Connecting the form to the backend via Express & MongoDB API.
Providing a simple UI to view and manage products.
## Milestone 10: Product API Development
This milestone focused on ensuring data validation and structured storage for product details using Express and MongoDB with Mongoose. Key features:

Created a product model with name, description, price, and image URL.
Implemented input validation before storing data.
Developed a RESTful POST endpoint to add new products.
## Milestone 11: Fetching & Displaying Products
In this phase, we enabled seamless communication between the backend and frontend to dynamically fetch and display product data.

Built an API endpoint to send product data.
Fetched data from the backend on the frontend.
Rendered products dynamically using React components.
## Milestone 12: My Products Page
This milestone involved creating a dedicated page where users could view only the products they added, filtered based on their email.

Key Features:
Backend: Developed an endpoint to fetch products by user email.
Frontend: Implemented a function to retrieve and display user-specific products.
UI Component: Used a Card component for an organized product display.
## Milestone 13: Edit Product Functionality
Learning Goals:
Created an API endpoint to modify existing product details in MongoDB.
Implemented an edit form with autofilled previous data for seamless updates.
## Milestone 14: Delete Product Functionality
Learning Goals:
Developed an API endpoint to delete products from the database.
Ensured dynamic removal of products from both the frontend and backend.
