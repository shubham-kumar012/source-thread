
# 🌐 SourceThread — Full-Stack Blog Platform

Source Thread is a simple and modern blog website built with **Strapi (backend)** and **React + Vite (frontend)**. It lets you easily create blogs from an admin panel and shows them on a fast, responsive, and animated frontend. The project is fully deployed using **Render (backend + database)** and **Netlify (frontend)**, and includes everything you need to run it locally.


---
# Live Demo

Frontend (Netlify): [Click Here](https://source-thread.netlify.app/)

Strapi Admin Panel (Render): [Click Here](https://source-thread.onrender.com/)

### Test Admin Account -
Use this test account to explore the Strapi Admin Panel:
```bash
Email: test.assessment@gmail.com
Password: Test@123
```


---
# Project Overview
*  SourceThread is a fully functional blog platform:
    - Fully dynamic blog/content management
    - Category-based filtering
    - Responsive and smooth UI with Framer Motion
    - Cloudinary image hosting
    - PostgreSQL database (Render)
    - Deployed frontend (Netlify) and backend (Render)

---
# Tech Stack
* **Frontend**
    - React + Vite
    - TailwindCSS
    - Framer Motion
    - Axios
    - React Router

* **Backend**
    - Strapi v5 (Headless CMS)
    - PostgreSQL (Hosted on Render)
    - Cloudinary (media upload provider)  

* **Deployment**
    - Frontend -> Netlify
    - Backend API -> Render Web Service
    - Database -> Render PostgreSQL Instance
    - 

---
# How to run Locally
### 1. Clone the Repository
```bash
git clone https://github.com/shubham-kumar012/source-thread.git
cd source-thread
```

### 2. Backend Setup
```bash
cd backend
npm install
npm run develop
```
Strapi will start at:

`http://localhost:1337/admin` (Admin panel)
`http://localhost:1337/api` (API endpoints)

**NOTE:** Create a .env file inside backend/ before running Strapi.(Instruction are in the backend README.md file)

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Frontend will start at:

`http://localhost:5173`

**NOTE:** Create a .env file inside frontend/ before running React-Vite.(Instruction are in the backend README.md file)


---
# Media Handling (Cloudinary)

All blog images and banners are uploaded automatically to Cloudinary using Strapi’s upload provider.


---
## Author🙋‍♂️
**Name:**  Shubham Kumar

**Email:** shubhampal7083@gmail.com

**Github:** [shubham-kumar012](https://github.com/shubham-kumar012)

**LinkedIn:** [Shubham Kumar](https://linkedin.com/in/shubham-kumar-111041267)
