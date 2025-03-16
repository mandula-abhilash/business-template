# **Smart Web - Multi-Business Website Template**

## **🚀 Overview**

This project is the **base template** for deploying multiple business websites efficiently using **Docker, Nginx, NetxJS, Express and PostgreSQL**. It is built to ensure **scalability, easy management, and VPS optimization** for hosting multiple businesses on a single or multiple VPS instances.

This is a **Smart Web product by Visdak**, designed to help businesses get **fast, SEO-friendly, and secure online presence** with minimal setup.

---

## **🎯 What This Project Achieves**

✅ **Multi-Business Hosting:** One template powers multiple businesses with independent instances.
✅ **VPS Scaling:** Easily distribute load across multiple VPS servers as business websites grow.
✅ **Automated Deployment:** CI/CD workflow ensures smooth updates without downtime.
✅ **Dockerized Infrastructure:** Every service (Frontend, Backend, Database) runs in its own container.
✅ **Nginx Reverse Proxy:** Efficient domain routing for multiple businesses.
✅ **Optimized PostgreSQL:** Schema-based multi-tenancy for data isolation.

---

## **📂 Project Structure**

```
/business-template
│── frontend/          # Next.js frontend service
│   │── Dockerfile     # Dockerfile for frontend
│   │── package.json   # Dependencies
│   │── src/           # Business-specific frontend code
│── backend/           # Express.js backend service
│   │── Dockerfile     # Dockerfile for backend API
│   │── package.json   # Dependencies
│   │── src/           # API endpoints & business logic
│── nginx/             # Reverse proxy
│   │── nginx.conf     # Routing configuration
│   │── Dockerfile     # Dockerfile for Nginx
│── config/            # Environment & Deployment settings
│   │── env.example    # Sample environment variables
│   │── domains.env    # Business domain configuration
│── database/          # PostgreSQL database settings
│   │── migrations/    # Schema migrations
│   │── seed.sql       # Initial business data
│── scripts/           # Automation scripts
│   │── backup.sh      # Database backup script
│   │── deploy.sh      # Deployment automation
│── public/            # Static assets
│── .gitignore         # Ignore unnecessary files in Git
│── README.md          # Documentation & setup guide
│── docker-compose.yml # Multi-container setup
│── Dockerfile         # Root Dockerfile (optional)
```

---

## **🚀 How to Use This Project**

### **1️⃣ Setting Up the Project**

Clone the repository:

```sh
git clone https://github.com/mandula-abhilash/business-template.git
cd business-template
```

Create a `.env` file from the sample:

```sh
cp config/env.example config/.env
```

Edit **`.env`** to update **database credentials and domains**.

---

### **2️⃣ Running the Project (Docker Setup)**

Start all services using Docker:

```sh
docker-compose up -d
```

This will:

- Start **Nginx** (Reverse Proxy)
- Start **Frontend (Next.js)**
- Start **Backend (Express.js)**
- Start **PostgreSQL Database**

---

### **3️⃣ Adding a New Business Website**

Each business gets its own **frontend container** with a unique port.

1️⃣ Create a new business instance:

```sh
cp -r frontend/ newbusiness/
```

2️⃣ Update `docker-compose.yml` with a new service:

```yaml
newbusiness:
  build: ./newbusiness
  ports:
    - "3002:3000"
  environment:
    DATABASE_URL: "postgresql://admin:secret@business-db:5432/main_db"
    TENANT_SCHEMA: "newbusiness_schema"
```

3️⃣ Restart Docker services:

```sh
docker-compose up -d
```

✅ The new business website is now live!

---

## **⚡ VPS Scaling Strategy**

| **VPS** | **Services Hosted**           | **Purpose**                              |
| ------- | ----------------------------- | ---------------------------------------- |
| VPS A   | Nginx, Some Business Websites | Handles domain routing & load balancing  |
| VPS B   | PostgreSQL Database, Redis    | Handles data storage & caching           |
| VPS C   | Additional Business Websites  | Load distribution for high-traffic sites |

When VPS **CPU usage exceeds 80%**, move some business containers to a new VPS.

---

## **🔧 Managing & Monitoring**

### **Check Running Containers:**

```sh
docker ps
```

### **Restart a Service:**

```sh
docker restart businessone
```

### **Check VPS Resource Usage:**

```sh
htop
```

### **Monitor Server Health (Grafana + Prometheus):**

Access the monitoring dashboard at: `http://YOUR-VPS-IP:3000`

---

## **🚀 Future Improvements & Roadmap**

✅ **Automated Domain Management** → Dynamic Nginx updates for new businesses
✅ **Auto-Scaling** → Deploy new businesses automatically to the least loaded VPS
✅ **Admin Dashboard** → Manage businesses & monitor traffic in real-time

---

### **🎯 Summary**

- This is a **base template for launching business websites with Docker.**
- It allows **easy scaling across multiple VPS servers.**
- Built with **Next.js, Express.js, PostgreSQL, and Nginx.**
- Uses **Docker & CI/CD for smooth deployment.**

🚀 **This is the future of fast, scalable business website hosting!**
