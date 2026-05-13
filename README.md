# Fellan Café

Natural language café discovery powered by AI preference extraction and deterministic recommendations.

---

## Overview

Fellan Café is an MVP project that explores a simple idea: café discovery should feel more like how people actually talk.

Most café or place‑discovery apps rely on rigid filters—WiFi, price, rating, location. While useful, these filters often miss the way people naturally describe places:

- “a quiet place to study”
- “somewhere calm with good coffee”
- “not too crowded”
- “good for remote work”

Fellan Café experiments with using AI to interpret these natural descriptions and convert them into structured preferences that can be used by a recommendation system.

The goal is not to build a chatbot, but to combine natural language understanding with deterministic recommendation logic to produce explainable café suggestions.


---

Home Page


---

## Features

- Natural language café search
- AI-powered preference extraction
- Deterministic recommendation scoring
- Clean and simple UI

The system intentionally keeps the AI layer limited to interpretation, while the ranking logic remains deterministic and transparent.



---

## How It Works

The system separates **intent understanding** from **recommendation logic**.

### 1. Natural Language Query

The user describes what they are looking for:

`quiet cafe with good wifi for studying`

---

### 2. Preference Extraction (AI)

The query is sent to the AI layer (GapGPT / OpenAI API), which extracts structured preferences.

Example structured output:

`{   "suitable_for_solo":0.8 ,   "quiet": 1,   "price_level":0 }`

The AI is only responsible for interpreting the user’s intent.

---

### 3. Deterministic Recommendation Engine

Once preferences are extracted, the application uses a deterministic scoring system to evaluate cafés in the database.

Each café is scored against the extracted preferences using weighted rules.

Example factors:

- noise level
- WiFi quality
- seating comfort
- coffee quality
- price range
- crowd level

The system ranks cafés based on how well they match the user’s preferences.

---

## Tech Stack

### Frontend

- Next.js
- TypeScript
- Tailwind CSS

### Backend

- Next.js API Routes
- PostgreSQL

### AI Layer

- GapGPT API (OpenAI-powered)
- Natural language preference extraction
- Structured recommendation scoring

## Local Development Setup

### 1. Clone the Repository

`git clone git@github.com:d4nyaras/fellan-cafe.git`

### 2. Install Dependencies

`npm install`

### 3. Configure Environment Variables

Create a `.env.local` file:


`# Database
DATABASE_URL=..."

# GapGpt
GAPGPT_API_KEY=...

# App
NODE_ENV="development"
NEXT_PUBLIC_APP_URL="http://localhost:3000"`

### 4. Run the Development Server

`npm run dev`

Open:

`http://localhost:3000`

