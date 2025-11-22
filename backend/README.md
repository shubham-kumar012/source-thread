
# SourceThread — Backend (Strapi CMS)

This is the **Strapi v5 backend** for the SourceThread blog system.  
It manages categories, posts, media uploads, permissions, and API responses.


---
# Live Demo

Strapi Admin Panel (Render): [Click Here](https://source-thread.onrender.com/)

---
## Features
- Strapi CMS for managing content
- Blog posts, categories, and authors
- REST API support
- Cloudinary as media provider
- PostgreSQL (Render) for production
- SQLite for local development

---
# How to run Locally
### 1. Install dependencies:
```bash
npm install
```
### 2. Create `.env` File:
```bash
HOST=0.0.0.0
PORT=1337
APP_KEYS=your_app_keys
API_TOKEN_SALT=your_salt
ADMIN_JWT_SECRET=your_admin_jwt
TRANSFER_TOKEN_SALT=your_salt
JWT_SECRET=your_jwt

# Cloudinary
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET=your_cloudinary_secret

# Local SQLite
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=./.tmp/data.db
```
### 3. Start Strapi
Admin panel:

http://localhost:1337/admin

API endpoints:

http://localhost:1337/api


---
## Author🙋‍♂️
**Name:**  Shubham Kumar

**Email:** shubhampal7083@gmail.com

**Github:** [shubham-kumar012](https://github.com/shubham-kumar012)

**LinkedIn:** [Shubham Kumar](https://linkedin.com/in/shubham-kumar-111041267)
