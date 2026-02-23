# Personal Portfolio Website - Ankesh Kumar Pandey

A modern, responsive single-page portfolio website built with the MERN stack (React, Node.js, Express, PostgreSQL).

## Features
- Dynamic content driven by a PostgreSQL database
- Sections: Hero, About, Skills, Experience, Projects, Certifications, Achievements, and Contact
- Responsive design with Tailwind CSS and Framer Motion animations
- Contact form with email integration

## Prerequisites
- Node.js (v18 or higher)
- PostgreSQL database
- npm (Node Package Manager)

## 1. Local Development Setup

### Step 1: Clone or Extract the Project
If you downloaded the ZIP from Replit, extract it to a folder on your local machine.

### Step 2: Install Dependencies
Open your terminal in the project root directory and run:
```bash
npm install
```

### Step 3: Database Configuration
1. Install PostgreSQL on your machine if you haven't already.
2. Create a new database (e.g., `portfolio_db`).
3. Create a `.env` file in the root directory and add your database connection string:
```env
DATABASE_URL=postgresql://your_username:your_password@localhost:5432/portfolio_db
```

### Step 4: Seed the Database
Populate your database with the initial portfolio data:
```bash
npx tsx script/seed.ts
```

### Step 5: Run the Application
Start both the backend and frontend development servers:
```bash
npm run dev
```
The application should now be running at `http://localhost:5000`.

---

## 2. Deployment to GitHub

### Step 1: Create a GitHub Repository
Go to [github.com](https://github.com) and create a new repository named `portfolio-website`.

### Step 2: Initialize Git and Push
In your project root directory:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
git push -u origin main
```

---

## 3. Deployment to Render

### Step 1: Create a PostgreSQL Database on Render
1. Log in to your [Render dashboard](https://dashboard.render.com).
2. Click **New +** and select **PostgreSQL**.
3. Name your database and click **Create Database**.
4. Once created, copy the **Internal Database URL** (for the web service) or **External Database URL** (for local migrations).

### Step 2: Create a Web Service
1. Click **New +** and select **Web Service**.
2. Connect your GitHub repository.
3. Configure the service:
   - **Name**: `portfolio-website`
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run start`
4. Add Environment Variables:
   - Click **Advanced** > **Add Environment Variable**.
   - Key: `DATABASE_URL`
   - Value: (Paste your Render PostgreSQL connection string)
   - Key: `NODE_ENV`
   - Value: `production`

### Step 3: Seed Production Database
To seed the database on Render, you can either:
- Run the seed command locally using the Render **External Database URL**.
- Or use the Render Shell to run `npx tsx script/seed.ts` after the deployment is complete.

### Step 4: Deploy
Click **Create Web Service**. Render will build and deploy your application. Once finished, your portfolio will be live at the provided URL!