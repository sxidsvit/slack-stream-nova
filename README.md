# Slack Stream Nova

A modern, scalable, and feature-rich communication platform inspired by Slack, built with cutting-edge technologies to enable real-time messaging, file sharing, video calls, and more.

[Site](https://slack-stream-nova-sxidsvit.vercel.app/)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Application](#running-the-application)
- [Contributing](#contributing)
- [License](#license)

## Overview

Slack Stream Nova is a powerful communication tool designed for teams, offering real-time messaging, file sharing, video calls, and advanced collaboration features. Built with scalability and performance in mind, it leverages modern technologies to provide a seamless user experience for both small teams and large organizations.

## Features

- 💬 **Real-time Messaging**: Engage in threaded conversations, add reactions, and pin important messages.
- 📂 **File Sharing**: Share images, PDFs, ZIP files, and more with ease.
- 📊 **Polls**: Create polls with multiple options, anonymous mode, suggestions, and comments.
- 🔐 **Secure Authentication**: Powered by Clerk for robust user management and authentication.
- 📨 **Direct Messages & Private Channels**: Communicate privately or in dedicated channels.
- 📹 **Video Calls**: Support for 1-on-1 and group video calls with screen sharing and recording capabilities.
- 🎉 **Real-time Call Reactions**: Add reactions during video calls for interactive communication.
- 🔧 **Background Jobs**: Efficiently handle tasks with Inngest-powered background processing.
- 🚨 **Error Monitoring**: Production-grade error tracking with Sentry.
- 🤖 **AI-Powered Code Suggestions**: Integrated with CodeRabbit for smarter development workflows.
- 🚀 **Free Deployment Setup**: Easy-to-configure deployment for quick setup.
- 🎯 **Scalable Architecture**: Built with Stream for high-performance real-time features.

## Tech Stack

- **Frontend**: [Vite](https://vitejs.dev/), JavaScript/TypeScript
- **Backend**: Node.js, [Express](https://expressjs.com)
- **Database**: [MongoDB](https://www.mongodb.com/)
- **Authentication**: [Clerk](https://clerk.com/)
- **Real-time Features**: Stream
- **Background Jobs**: [Inngest](https://www.inngest.com/)
- **Error Monitoring**: [Sentry](https://sentry.io/)
- **AI Code Suggestions**: [CodeRabbit](https://www.coderabbit.ai/)

---

![]()<img src="demo.gif" alt="Consistency diagrams" width="940" height="510" style="display: block; margin-left:100px ;">

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)
- Accounts for:
  - [Clerk](https://clerk.dev/) for authentication
  - [Stream](https://getstream.io/) for real-time features
  - [Sentry](https://sentry.io/) for error monitoring
  - [Inngest](https://www.inngest.com/) for background jobs
  - [CodeRabbit](https://coderabbit.ai/) for AI code suggestions

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sxidsvit/slack-stream-nova.git
   cd slack-stream-nova
   ```

2. Install dependencies for the backend:

   ```bash
   cd backend
   npm install
   ```

3. Install dependencies for the frontend:
   ```bash
   cd ../frontend
   npm install
   ```

### Environment Variables

Configure the environment variables for both the backend and frontend.

#### Backend (`/backend/.env`)

```env
PORT=5001
MONGO_URI=your_mongo_uri_here
NODE_ENV=development
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
CLERK_SECRET_KEY=your_clerk_secret_key_here
STREAM_API_KEY=your_stream_api_key_here
STREAM_API_SECRET=your_stream_api_secret_here
SENTRY_DSN=your_sentry_dsn_here
INNGEST_EVENT_KEY=your_inngest_event_key_here
INNGEST_SIGNING_KEY=your_inngest_signing_key_here
CLIENT_URL=http://localhost:5173
```

#### Frontend (`/frontend/.env`)

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
VITE_STREAM_API_KEY=your_stream_api_key_here
VITE_SENTRY_DSN=your_sentry_dsn_here
VITE_API_BASE_URL=http://localhost:5001/api
```

Replace `your_..._here` with the appropriate keys from your service providers.

### Running the Application

1. **Run the Backend**:

   ```bash
   cd backend
   npm run dev
   ```

   The backend will start on `http://localhost:5001`.

2. **Run the Frontend**:

   ```bash
   cd frontend
   npm run dev
   ```

   The frontend will start on `http://localhost:5173`.

3. Open your browser and navigate to `http://localhost:5173` to access the application.

### 📬 Contact

Connect with the project maintainer:

[<img alt="Sergiy Antonyuk | LinkedIn" src="https://img.shields.io/badge/LinkedIn-0077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />][linkedin]

[linkedin]: https://www.linkedin.com/in/sergiy-antonyuk/

#### 🙏 Acknowledgements

A heartfelt thank you to [Codesistency](https://www.youtube.com/@codesistency/) for his invaluable contributions
