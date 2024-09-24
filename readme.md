# 📝 CRUD with Node and React

This project demonstrates a **CRUD** (Create, Read, Update, Delete) application built using **Node.js** and **React**. The back-end uses **MongoDB Atlas** via **Prisma** for database management, and the front-end is developed with **React**.

---

## 🚀 Installation

Follow these steps to get the project up and running locally:

1. **Install Dependencies**:  
    Run the following command to install all necessary dependencies:
   ```bash
   npm i
   ```
2. **Set Up Environment Variables**:
    Create a .env file in the project root and add the required environment variables (see  below for details).

3. **Sync Database**:
    Launch the development server using:
    ```bash 
    npx prisma db push
    ```
4. **Start the Server**:
    Launch the development server using:
    ```bash 
    npm run dev
    ```
## 🔧 Commands
Here are the key commands you'll use in this project: 
```bash
     npm i               # Install dependencies
     npx prisma db push  # Sync database schema
     npm run dev         # Start the development server
```

## 🌐 Environment Variables
Make sure to add the following environment variable to your .env file:

```bash
    DATABASE_URL=mongodb+srv://<db_username>:<db_password>@users.cryb83v.mongodb.net/?retryWrites=true&w=majority&appName=Users
```
Replace <db_username> and <db_password> with your MongoDB Atlas credentials.

## 📚 Additional Resources
- MongoDB Atlas
- Prisma ORM
- React.js