# 🚀 AI Product Finder

AI Product Finder is a full-stack **AI-powered product discovery platform** that helps users find, compare, and save products using natural language queries.

The application combines a modern **React frontend** with a **Spring Boot backend**, PostgreSQL, JWT authentication, and OpenRouter AI. The complete application is deployed on **AWS EC2** using Docker, Nginx, and HTTPS.

---

## 🔗 Project Links

### 🌐 Live Application

https://13.205.5.209/

### 💻 Frontend Repository

https://github.com/LavanyaSriChava/ai-product-finder-frontend

### ⚙️ Backend Repository

https://github.com/LavanyaSriChava/ai-product-finder-Backend

---

## ✨ Features

### 🔍 AI-Powered Product Search

- Search products using natural language
- Public search without requiring authentication
- AI-generated product recommendations
- OpenRouter LLM integration
- Product specifications and recommendation insights

### ⚖️ AI Product Comparison

- Compare products side by side
- AI-generated feature comparison
- Analyze pros and cons
- AI-generated recommendation verdict

### ❤️ Wishlist

- Save favorite products
- Remove products from wishlist
- User-specific persistent wishlist
- Protected using JWT authentication

### 📜 Search History

- Automatically stores searches for authenticated users
- View previous product searches
- Delete individual searches
- Clear complete search history

### 📊 Analytics Dashboard

- Admin-only dashboard
- Platform monitoring
- Search analytics
- User insights

### 🔐 Authentication & Authorization

- User Registration
- User Login
- JWT Authentication
- Role-Based Access Control
- Protected routes
- User and Admin roles

### 📱 Responsive UI

- Responsive React interface
- Mobile-friendly design
- Tailwind CSS styling
- Client-side routing with React Router

---

## 🛠 Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- Axios
- React Router

### Backend

- Java 17
- Spring Boot
- Spring MVC
- Spring Security
- Spring Data JPA
- Hibernate
- JWT Authentication

### Database

- PostgreSQL 17

### AI Integration

- OpenRouter API
- Large Language Models (LLMs)
- Prompt-based product recommendation

### DevOps & Cloud

- AWS EC2
- AWS Elastic IP
- Docker
- Docker Compose
- Nginx
- Let's Encrypt
- Certbot
- HTTPS/TLS

---

## 📸 Screenshots

### 🏠 Home Page

<img width="1848" height="953" alt="AI Product Finder Home Page" src="https://github.com/user-attachments/assets/b3b8bd82-5e46-407a-a055-4345e4c97ff7" />

### 🤖 AI Recommendation

<img width="1863" height="929" alt="AI Product Recommendation" src="https://github.com/user-attachments/assets/3469fc02-34cc-4903-bb45-b8a9aa18b8f1" />

<img width="1865" height="870" alt="AI Product Recommendation Results" src="https://github.com/user-attachments/assets/76db83c0-d08e-4138-973c-09f836b6da15" />

### 📜 Search History

<img width="1889" height="748" alt="Search History" src="https://github.com/user-attachments/assets/5474f862-af11-4215-82e4-ca30d7c9b4a1" />

### ❤️ Wishlist

<img width="1858" height="894" alt="Wishlist" src="https://github.com/user-attachments/assets/40fa1fcb-bae2-4da4-8241-4197f28ca7ea" />

### 📊 Additional Features

<img width="1865" height="863" alt="AI Product Finder Features" src="https://github.com/user-attachments/assets/24b98802-27f6-4630-aca1-d2fc1d3cce0d" />

---

## 🎯 User Roles

### Guest User

- Search products using AI
- View AI recommendations

### Registered User

- Search products
- Compare products
- Save products to wishlist
- Access search history

### Admin

- Access protected dashboard
- View platform analytics
- Monitor application activity

---

## 🏗️ Production Architecture

The complete application is hosted on an **AWS EC2 instance**.

```text
                        User
                          │
                          │ HTTPS
                          ▼
                ┌───────────────────┐
                │  AWS Elastic IP   │
                │   13.205.5.209    │
                └─────────┬─────────┘
                          │
                          ▼
                ┌───────────────────┐
                │       Nginx       │
                │  Reverse Proxy +  │
                │  Static Hosting   │
                └─────────┬─────────┘
                          │
               ┌──────────┴──────────┐
               │                     │
               ▼                     ▼
        React Frontend          /api/* Requests
                                     │
                                     ▼
                              Spring Boot
                           Docker Container
                                     │
                         ┌───────────┴───────────┐
                         │                       │
                         ▼                       ▼
                    PostgreSQL              OpenRouter
                 Docker Container             API
```

### Request Flow

```text
Browser
   ↓
HTTPS
   ↓
AWS EC2 + Elastic IP
   ↓
Nginx
   ├── /       → React Production Build
   │
   └── /api/*  → Spring Boot Backend
                         ↓
                    PostgreSQL
                         +
                    OpenRouter AI
```

---

## ☁️ AWS Deployment

The production application is deployed entirely on AWS.

| Component | Deployment |
|---|---|
| Frontend | AWS EC2 + Nginx |
| Backend | AWS EC2 + Docker |
| Database | PostgreSQL 17 + Docker |
| Reverse Proxy | Nginx |
| Public Endpoint | AWS Elastic IP |
| HTTPS | Let's Encrypt + Certbot |
| AI Integration | OpenRouter API |

### Production URL

```text
https://13.205.5.209/
```

Nginx serves the React production build and forwards `/api/*` requests to the Spring Boot application running inside Docker.

---

## 🔒 Production Security

The deployment includes:

- HTTPS/TLS encryption
- Let's Encrypt SSL certificate
- Automatic certificate renewal using Certbot
- JWT-based authentication
- BCrypt password hashing
- Role-Based Access Control
- Environment-based secret management
- AWS Security Group configuration

---

## 💻 Running the Frontend Locally

### Prerequisites

Install:

- Node.js
- npm

Clone the repository:

```bash
git clone https://github.com/LavanyaSriChava/ai-product-finder-frontend.git
cd ai-product-finder-frontend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
VITE_API_URL=http://localhost:8080
```

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

## 📦 Production Build

Create an optimized frontend build using:

```bash
npm run build
```

Vite generates the production files inside:

```text
dist/
```

In production, these static files are served by **Nginx on AWS EC2**.

---

## 🔗 Backend Integration

Axios communicates with the Spring Boot REST API.

Production requests are routed through Nginx:

```text
Frontend
    ↓
HTTPS
    ↓
Nginx
    ↓
/api/*
    ↓
Spring Boot Backend
```

Protected requests include the JWT token:

```http
Authorization: Bearer <JWT_TOKEN>
```

---

## 📌 Project Highlights

This project demonstrates:

- Full-stack React + Spring Boot development
- AI/LLM API integration
- REST API integration using Axios
- JWT authentication and authorization
- Role-Based Access Control
- PostgreSQL persistence
- Docker containerization
- AWS EC2 deployment
- Nginx reverse proxy configuration
- HTTPS/TLS configuration
- Production frontend deployment

---

## 👨‍💻 Author

**Lavanya Sri Chava**

GitHub:  
https://github.com/LavanyaSriChava

LinkedIn:  
https://linkedin.com/in/lavanya-sri-chava-6b57a02a9

---

⭐ If you found this project interesting, consider giving it a star.
