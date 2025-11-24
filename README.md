## YouTube Clone (React + Vite)

A modern YouTube Clone built using **React 19**, **Vite**, **Material UI**, and **RapidAPI**.
Browse trending videos, watch content, explore channels, and search — similar to YouTube’s core functionality.

---

## 🚀 Features

* 📺 **Home Feed** with trending videos
* 🔍 **Search page** using RapidAPI
* 🎥 **Video detail page** with related videos
* 👤 **Channel detail page**
* ⚡ **Super-fast development** using Vite
* 🎨 **Modern UI** with MUI
* 📱 Fully responsive
* ⏳ Lazy loading using `React.lazy` + `Suspense`

---

## 🛠️ Tech Stack

* **React 19**
* **Vite**
* **React Router 7**
* **Material UI (MUI)**
* **Axios**
* **RapidAPI – YouTube API**
* **ESLint + Prettier**

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/anirudhkille/youtube-clone-react.git
cd youtube-clone-react
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure RapidAPI key

Create a `.env` file in the root directory:

```
VITE_RAPID_API_KEY=your_api_key_here
```

---

## ▶️ Running the Project

### Start dev server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Format code

```bash
npm run format
```

---

## 📁 Folder Structure

```
youtube-clone-react/
│── public/
│── src/
│   ├── components/
│   ├── pages/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
│── .env
│── package.json
│── README.md
```

---

## 🔑 Using RapidAPI

Example request:

```js
import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

```

---

## 🧪 Lazy Loading Example

```js
const Feed = lazy(() => import("./pages/feed"));
```

---

## 🎯 Project Objectives

* Learn advanced React state & routing
* Understand API integration with RapidAPI
* Practice UI building with MUI
* Improve performance using lazy loading
* Build a full real-world project

---

## 📝 License

This project is for learning and personal portfolio use.
Feel free to modify or extend it!
