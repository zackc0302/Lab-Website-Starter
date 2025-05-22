# Laboratory Website – SACC Lab @ NYCU

[Lab Website](https://shih.lab.nycu.edu.tw/)

## Overview
This is an undergraduate web development project for **Shih's Lab** at **National Yang Ming Chiao Tung University (NYCU)**.  
The goal is to build a modern, responsive, and maintainable lab website to showcase research, members, publications, and courses.

The site is built using **Next.js** (a React framework) and hosted on a **self-managed server** within the university network.  
A custom **DNS subdomain was requested through the university IT department**, enabling public access via `shih.lab.nycu.edu.tw`.

The production server is managed with **PM2**, providing process monitoring and automatic restarts for improved stability and uptime.

---

## Tech Stack

| Layer            | Technology                             |
|------------------|------------------------------------------|
| Frontend         | Next.js (React + SSR/SSG)               |
| Styling          | Tailwind CSS                            |
| Language         | TypeScript                              |
| Backend (API)    | Next.js API Routes                      |
| Server Hosting   | Self-hosted server (NYCU lab machine)   |
| Process Manager  | PM2 (for production process control)    |
| Domain & DNS     | School-provided subdomain (`lab.nycu.edu.tw`) |
| Future Backend   | MongoDB (planned)                       |


> Note: Although Node.js is not used directly (e.g., with Express.js), **Next.js runs on Node.js** at runtime.

---


## Project Structure
```
.
├── public/             # Static assets
├── src/                # Source code (pages, components, etc.)
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # TailwindCSS customization
├── tsconfig.json       # TypeScript config
└── package.json        # Project metadata & scripts
```
## Author
Wesber Chang
Undergraduate Student, NYCU
Developer @ SACC Lab
---
> This project is part of an undergraduate development initiative at Shih’s Lab, NYCU.
