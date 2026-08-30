# Scratch

**A writing organization and story-development tool built around persistent context.**

Scratch is a workspace for developing long-form fiction and nonfiction without losing the details that make a project coherent.

General-purpose LLM chatbots are useful for brainstorming, but they aren't designed to maintain a reliable understanding of a large, evolving writing project. Important details end up scattered across conversations, and context gets lost between chats.

Scratch takes a different approach: **your writing project is the source of truth.**

Characters, settings, chapters, relationships, timelines, notes, and other story details are stored in an organized workspace. An LLM can then use that information when you want to brainstorm, check your work, or explore an idea.

The goal isn't to have AI write your story for you. **Scratch is a tool for organizing your ideas and helping you think through your writing.**

## Core Features

* **Structured story information** — Organize characters, locations, chapters, relationships, timelines, themes, and notes.
* **Persistent context** — Your project information remains available instead of being scattered across separate chatbot conversations.
* **Story Builder** — Ask questions about your project while giving the LLM access to relevant story context.
* **Consistency checking** — Identify potential contradictions or inconsistencies in characters, settings, timelines, and plot details.
* **Brainstorming** — Explore possibilities and develop ideas without asking the AI to take over the writing.
* **Chapter storage** — Keep longer sections of actual writing alongside the information they depend on.
* **Project-specific knowledge** — The AI's responses are grounded in the information you've actually provided about your project.

## How It Works

Scratch separates **the writing project** from **the conversation with the AI**.

Instead of relying on a chatbot to remember everything from previous conversations, Scratch stores the important information about a project in a structured database.

When you ask the Story Builder a question, Scratch can retrieve the relevant information and provide it as context to the LLM.


## Philosophy

Scratch is intentionally **not an AI story generator**.

The writer remains responsible for the actual story. The AI is there to help with things like:

* "Does this contradict something I established earlier?"
* "What do I know about this character so far?"
* "What are some ways I could develop this conflict?"
* "Have I established anything about this location?"
* "What details should I think about before writing this chapter?"
* "Are there unresolved threads in the story?"

The purpose is to make it easier to **organize and develop**, rather than simply generate text.

## Tech Stack

### Frontend

* React
* TypeScript
* Vite

### Backend

* Python
* FastAPI

### Database

* SQLite

## Project Structure

The application is built around a few major concepts:

* **Projects** — A writing project or story.
* **Characters** — People and other important entities in the story.
* **Locations** — Places and settings.
* **Chapters** — Longer-form writing belonging to the project.
* **Relationships** — Connections between characters, locations, and other entities.
* **Timeline** — Important events and their ordering.
* **Notes** — Free-form ideas and observations.
* **Story Builder** — An LLM-powered interface for querying and developing the project.

The structure can grow as the project develops. The goal is to make the system flexible enough to support different kinds of writing projects rather than forcing every story into the same template.

## Running the App

### 1. Clone the repository

```bash
git clone <repository-url>
cd scratch
```

### 2. Start the backend

```bash
cd backend
# install dependencies
# start the FastAPI server
```

### 3. Start the frontend

```bash
cd frontend
# install dependencies
# start the Vite development server
```

Open the frontend in your browser.

### LLM Configuration

LLM integration will be added as the project develops.

Future versions will allow the user to provide an API token and connect Scratch to an LLM provider. The application will then use the stored project information to construct relevant context for Story Builder queries.

## Roadmap

* [ ] Project creation and management
* [ ] Character CRUD
* [ ] Location CRUD
* [ ] Chapter editor
* [ ] Notes and custom story information
* [ ] Relationships between story entities
* [ ] Timeline
* [ ] Story Builder chat interface
* [ ] LLM integration
* [ ] Context retrieval
* [ ] Story consistency checking
* [ ] Import existing writing
* [ ] Improved visualization of story relationships
