# 🎤 Voice Interview Coach

AI-powered **interview simulator** with voice input, real-time scoring, and role-specific dynamic question sets.

---

## 🔍 Overview

This project aims to help users prepare for job interviews by simulating voice-based conversations with an AI-powered interview coach. It uses:
- AI (planned integration with OpenAI)
- Web Speech API for voice input
- Tailored interview questions by role
- Real-time answer recording and (planned) scoring

---

## 📄 Screenshots

### Dashboard (Planned)
![Dashboard Preview](./screenshots/dashboard-preview.png)

### Voice Interview Screen (Planned)
![Voice Interview](./screenshots/voice-interview.png)

> *Note: Screenshots will be added once frontend implementation is complete.*

---

## 💪 Tech Stack

**Backend:**
- Java 17
- Spring Boot 3
- Spring Security (InMemory auth)
- Hibernate / JPA
- MariaDB (H2 for development)

**Frontend:**
- React
- Tailwind CSS
- Web Speech API

**Integrations (Planned):**
- OpenAI API

---

## 🚀 Getting Started

### Backend (Spring Boot)
```bash
cd backend
./mvnw spring-boot:run

