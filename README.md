# Shopkaroo

Shopkaroo is a modern e-commerce platform built with Angular 17 for the frontend, Node.js for the backend, and MongoDB for the database. It includes user authentication with encrypted passwords and integrates the Stripe payment gateway.

## Features

- User authentication (username and encrypted password)
- Secure payment processing with Stripe
- Product management
- Shopping cart functionality
- Order processing

## Tech Stack

- **Frontend**: Angular 17
- **Backend**: Node.js
- **Database**: MongoDB
- **Payment Gateway**: Stripe

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (version 20 or higher)
- Angular CLI 
- MongoDB
- Stripe account for payment processing

## Getting Started

### Backend Setup

1. Clone the repository:

    ```sh
    git clone https://github.com/pawanbondre67/shopkaroo.git
    cd shopkaroo
    ```

2. Navigate to the backend directory:

    ```sh
    cd backend
    ```

3. Install the dependencies:

    ```sh
    npm install
    ```

4. Create a `.env` file in the backend directory and add your environment variables:

    ```env
    MONGO_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/databasename?retryWrites=true&w=majority
    SUPER_SECRET_KEY=your_super_secret_key
    STRIPE_SECRET_KEY=your_stripe_secret_key
    ```

5. Start the backend server:

    ```sh
    npm run dev
    ```

### Frontend Setup

1. Navigate to the frontend directory:

    ```sh
    cd shopkaroo
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Start the Angular development server:

    ```sh
    ng serve
    ```

4. Open your browser and navigate to `http://localhost:4200`.

## Usage

### Authentication

- Users can sign up and log in using a username and password. Passwords are encrypted for security.

### Stripe Payment Integration

- Stripe is integrated for handling payments securely. Ensure you have configured your Stripe keys in the `.env` file.


