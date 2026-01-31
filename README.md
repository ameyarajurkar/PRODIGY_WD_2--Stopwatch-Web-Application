# ⏱️ Prodigy InfoTech Internship – Task 02

### **High-Precision Neon-Glassmorphism Stopwatch**

A sophisticated, high-performance Stopwatch web application developed during my Web Development Internship at **Prodigy InfoTech**. This project emphasizes JavaScript state management, precise time-interval calculation, and modern UI/UX principles.

---

## ✨ Key Features

### 🎯 Precision Timing Engine
* **Logic vs. Display:** Time is calculated using `Date.now()` rather than simple incrementing variables. This ensures 100% accuracy by preventing the "time-drift" often caused by browser backgrounding.
* **Monospaced Stability:** Integrated **Share Tech Mono** typography to ensure numerical stability, eliminating the common "jittery text" effect during high-speed increments.

### 💎 Neon Glassmorphism UI
* **Aesthetic:** A premium "frosted glass" interface achieved through `backdrop-filter: blur(15px)` and semi-transparent depth layers.
* **Tactile Feedback:** Buttons utilize custom `cubic-bezier` transitions, creating a physical "pop" and neon glow effect upon interaction.

### 📝 Dynamic Lap Tracking
* **Real-time Logging:** Record precise intervals without interrupting the main clock.
* **Smart UI:** Uses JavaScript's `prepend()` method to ensure the latest lap record always appears at the top of the list with a smooth entrance animation.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Markup** | HTML5 (Semantic & Accessible) |
| **Styling** | CSS3 (Glassmorphism, Flexbox, Keyframes) |
| **Logic** | JavaScript ES6 (Intervals, State Management) |
| **Typography** | Google Fonts (Montserrat & Share Tech Mono) |

---

## 📂 Project Structure

```text
├── index.html       # Application structure & UI components
├── style.css        # Neon-Glassmorphism styling & animations
└── script.js        # Core timing logic & lap state management
