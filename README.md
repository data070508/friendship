# ❤️ Our Memory Book

A beautiful mobile-first digital memory website built for friends to preserve their journey together.

Create a private collection of photos, videos, stories, jokes, and time capsules, and host it completely free using GitHub Pages.

---

## 🌟 Features

### 🏠 Welcome Screen
- Beautiful full-screen hero section
- Friendship day counter
- Smooth animations
- Mobile app-like experience

---

### 📅 Memory Timeline

A chronological timeline containing:

- Photos
- Dates
- Locations
- Stories
- Trip memories
- Special events

Example:

```
📅 Goa Trip
20 June 2025

"The craziest trip with endless laughter and adventures."
```

All memories are loaded automatically from `memories.json`.

---

## 📸 Photo Gallery

Show your best moments in a modern grid layout.

Features:

- Responsive image cards
- Touch-friendly design
- Automatic updates from JSON

---

## 👥 Friends Wall

Create a profile for each friend.

Each profile includes:

- Profile photo
- Name
- Nickname
- Favorite quote

Example:

```
Arun
Nickname: Rocket 🚀

"I'll be there in 5 minutes 😂"
```

---

## 📖 Digital Scrapbook

A fun section containing:

- Funny moments
- Random thoughts
- Emotional messages
- Friendship quotes

Designed like small handwritten notes.

---

## 🔒 Time Capsule

Write messages for your future selves.

Example:

```
Open Date: 01 January 2030

"Are we still making the same old jokes?"
```

Before the unlock date:
```
🔒 Locked
```

After the date arrives:
```
🔓 Message appears automatically
```

---

# 🛠 Technology Stack

This project uses only frontend technologies.

| Technology | Purpose |
|------------|---------|
| HTML5 | Website structure |
| CSS3 | Design and animations |
| JavaScript | Dynamic content loading |
| JSON | Store memories and data |
| GitHub Pages | Free hosting |

No database or server is required.

---

# 📁 Project Structure

```
memory-book/
│
├── index.html              Main website page
│
├── style.css               Mobile UI design
│
├── app.js                  Website functionality
│
├── data/
│   └── memories.json       All memory data
│
└── assets/
    │
    ├── friends/
    │   ├── arun.jpg
    │   ├── rahul.jpg
    │
    ├── memories/
    │   ├── trip1.jpg
    │   ├── birthday.jpg
    │
    ├── videos/
    │   └── video.mp4
    │
    └── music/
        └── song.mp3
```

---

# 📱 Mobile Design

This website is specially designed for smartphones.

Features:

- Full-screen sections
- Bottom navigation menu
- Large touch buttons
- Smooth scrolling
- Dark modern theme
- Glassmorphism cards

Desktop devices show a message recommending mobile viewing.

---

# ⚙️ Configuration

All website content is controlled using:

```
data/memories.json
```

You do not need to edit HTML or JavaScript to add new memories.

---

# ➕ Adding a New Friend

Open:

```
data/memories.json
```

Go to the `friends` section and add:

```json
{
    "name": "Your Friend",
    "nickname": "Cool Name",
    "photo": "assets/friends/photo.jpg",
    "quote": "A funny quote"
}
```

Then place the image inside:

```
assets/friends/
```

---

# ➕ Adding a New Memory

Add a new object inside the `memories` array.

Example:

```json
{
    "title": "Beach Trip",
    "date": "2026-06-01",
    "location": "Goa",
    "description": "An unforgettable day.",
    "photos": [
        "assets/memories/beach1.jpg"
    ]
}
```

Place your images inside:

```
assets/memories/
```

---

# 📷 Adding Gallery Images

Open:

```
gallery > featured
```

Add image paths:

```json
"featured": [
    "assets/memories/photo1.jpg",
    "assets/memories/photo2.jpg"
]
```

---

# 📝 Adding Scrapbook Notes

Inside `scrapbook`:

```json
{
    "message": "Best day ever ❤️",
    "rotation": "-3deg"
}
```

---

# 🔐 Creating a Time Capsule

Add:

```json
{
    "title": "Future Message",
    "unlock_date": "2030-01-01",
    "message": "Hello future us!"
}
```

The website checks the current date automatically.

---

# 🚀 Running Locally

Method 1:

Open `index.html` in your browser.

Method 2 (Recommended):

Use a local server.

Examples:

```
VS Code Live Server
```

or:

```
Python HTTP Server
```

Command:

```
python -m http.server
```

Then open:

```
http://localhost:8000
```

---

# 🌐 Deploying to GitHub Pages

## 1. Create Repository

Example:

```
memory-book
```

---

## 2. Upload Files

Upload:

```
index.html
style.css
app.js
data/
assets/
```

---

## 3. Enable GitHub Pages

Go to:

```
Repository Settings
        ↓
Pages
        ↓
Build and Deployment
        ↓
Source: Deploy from branch
        ↓
Branch: main
        ↓
Folder: / (root)
```

Click **Save**.

---

## 4. Wait for Deployment

GitHub will generate your website URL:

```
https://your-username.github.io/memory-book/
```

---

# 🔄 Updating Memories

Whenever you want to add a new memory:

1. Add photos/videos to `assets`
2. Edit `data/memories.json`
3. Commit and push changes to GitHub

The website updates automatically.

---

# 🔮 Future Improvements

Planned ideas:

- 🎵 Background music player
- 🌌 Animated star universe theme
- 📷 Full-screen photo viewer
- ❤️ Like button
- 💬 Comments
- 🔍 Search memories
- 🎞 Slideshow mode
- 🗺 Memory locations
- 🔐 Password protection
- 🎂 Friendship anniversary celebration
- ☁️ Cloud backup

---

# ❤️ Made With Friendship

> "Photos capture moments, but memories keep them alive."

A simple digital time capsule built to preserve laughter, adventures, and the journey of friendship forever.
