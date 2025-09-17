# Mini-Blog Microservices Project

This project represents my first steps in learning **microservices with Node.js**, built using the **CQRS architecture**, an **Event Bus**, and **event-driven communication** to simplify and decouple services.

## 📌 Overview

A simple mini-blog where users can:

- Create posts
- Add comments to posts
- Fetch posts along with their comments

The goal of this project is to understand the fundamentals of:

- **Command services** (Posts, Comments) → handle writes and publish events
- **Query service** → listens to events and builds a read model for efficient reads
- **Event Bus** → distributes events between services
- **Client** (React) → creates posts, adds comments, and fetches posts with comments

## 🛠️ Tech Stack

- Node.js + Express
- Axios (service-to-service communication)
- React (frontend)
- Event-driven architecture with a custom Event Bus

## ⚙️ Services

- **Posts Service (4000)** → Create new posts and emit `postCreated` events
- **Comments Service (4001)** → Add comments and emit `commentCreated` events
- **Query Service (4002)** → Aggregate posts with comments for reads
- **Event Bus (4005)** → Broadcasts events between all services
- **Client** → React app to interact with the system

## 🚀 Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/Gilor1Cohen/Mini_Blog_App.git
   cd Mini_Blog_App
   ```
2. Install dependencies in each service folder
   ```bash
   npm install
   ```
3. Start each service on its port (4000, 4001, 4002, 4005, client).

   ```bash
   npm start

   ```

## 📚 What I Learned

- Fundamentals of microservices with Node.js

- Applying CQRS to separate reads and writes

- Using an Event Bus for event-driven communication

- Decoupling services and creating a unified query endpoint
