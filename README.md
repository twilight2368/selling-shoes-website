# Shoe Store

A simple shoe e-commerce website built with **React** for the frontend and **Strapi CMS** for the backend.

## Tech Stack

* **Frontend:** React
* **Backend:** Strapi CMS
* **Database:** Managed by Strapi
* **API:** REST API provided by Strapi

## Project Structure

```text
project/
├── my-shoe-app/    # React application
└── server/shoe-web-server     # Strapi CMS
```

## Features

* Browse shoes
* View product details
* Manage products through Strapi CMS
* Retrieve product data through Strapi REST API

## How It Works

The React frontend communicates with the Strapi backend through REST APIs.

```text
React Frontend
      │
      │ REST API
      ▼
  Strapi CMS
      │
      ▼
   Database
```

Strapi is responsible for managing the content and providing APIs, while React is responsible for the user interface.
