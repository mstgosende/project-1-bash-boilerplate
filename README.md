# System Online | Interactive Interaction App

A bespoke, high-performance app architecture designed with a post-punk, editorial aesthetic. This project serves as a technical demonstration of blending advanced frontend engineering with nuanced UX/UI design.

---

## 🛠️ Tech Stack & Environment

* **Runtime/Bundler:** Vite + PNPM (Optimized for fast HMR and efficient dependency management)
* **Styling:** SASS (Modular architecture) with Fluid Typography
* **Logic:** Vanilla JavaScript (ES6+) for high-performance DOM manipulation
* **Testing:** Playwright E2E (End-to-End) for cross-browser validation
* **Asset Management:** Custom SVG/PNG sprite logic for hardware-aware interactions

---

## 🚀 Engineering Highlights

### 1. Hardware-Aware Interaction Design
Unlike standard responsive builds, this system utilizes **Pointer Media Queries** (`@media (pointer: fine)`) to detect the user's hardware capabilities. 
* **Desktop:** Implements a custom cursor-following physics engine using `requestAnimationFrame`.
* **Touch/Mobile:** Automatically deactivates mouse-tracking and toggles a CSS-driven image gallery to preserve battery life and prevent "ghost" interactions on touchscreens.

### 2. Linear Interpolation (Lerp) Physics
The "Typewriter Key" cursor isn't just a hover effect; it's a physics-based follower. It uses a **linear interpolation (lerp)** algorithm to create a "silk" effect, giving the UI a tactile, high-end editorial feel that mimics the weight of physical objects.

### 3. Fluid Typography & Mathematical Scaling
The UI utilizes the CSS `clamp()` function across the entire layout. By calculating the viewport width mathematically, the typography and the typewriter-key icons scale perfectly from a mobile screen to an Ultra-Wide monitor without the need for hundreds of rigid media queries.

### 4. Modern Testing Evolution: Why Playwright?
The project was intentionally migrated from Selenium WebDriver to Playwright to better suit the high-interaction nature of this app.

* **Native Auto-Waiting:** Selenium often requires manual "sleep" or "wait" commands, which are brittle in apps with complex JS-driven typing effects and physics loops. Playwright automatically waits for elements to be actionable, eliminating the "flakiness" common in legacy testing.
* **Shadow DOM & Webkit Support:** Since this app focuses on advanced UX effects across different hardware, Playwright’s native support for Webkit (Safari) is superior for ensuring the @media (pointer: fine) logic holds up on Apple devices.
* **Isolation & Speed:** Playwright runs tests in isolated browser contexts, making them significantly faster and more reliable than Selenium's traditional session-based approach.
* **Black-Box Validation:** The suite validates the "end result"—ensuring the user actually sees the rendered text and interaction states—rather than just checking if a function was called.

---

## 🧠 Architectural Choice: Trunk-Based Development
For an interaction-heavy app where UX and UI logic are deeply intertwined, I intentionally adopted Trunk-Based Development. Unlike traditional feature-branching, which can lead to "integration hell" in highly synchronized environments, this approach ensures:

* **Atomic Integration:** In this app, a change in the CSS clamp() logic directly impacts the JS cursor physics. Developing on a single "Trunk" (main) ensures that these cross-functional dependencies never drift apart.

* **Continuous Quality Assurance:** By integrating directly into main, every push is a "production-ready" candidate. Combined with the Playwright E2E suite, this ensures that the advanced typing sequences and hardware-aware triggers are validated in real-time.

* **Repository Hygiene:** Reflecting senior-level repository management, I purged all stale branches (e.g., screen, mspgosende-readme). A clean repository is a reflection of a clean architecture—eliminating technical debt at the source and maintaining a crystal-clear "Single Source of Truth."

* **High-Velocity Iteration:** This app requires constant micro-adjustments to "feel" right (lerp speeds, easing, delays). Trunk-Based Development allows for a rapid feedback loop, moving from hypothesis to a tested, live interaction in minutes.

* **Asset Integrity & SEO:**
Every asset, including the custom **Favicon** (the 'M' typewriter key), was selected to reinforce the editorial brand while maintaining a clean, 404-free network log.

---

## 💻 Getting Started

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/mspgosende/project-1-bash-boilerplate.git 
    cd project-1-bash-boilerplate
    ```
2. **Install Dependencies:**
    ```bash
    pnpm install 
    ```
3.  **Install Playwright Browsers:(Required to run the E2E test suite for the first time):**
    ```bash
    pnpm exec playwright install
    ```
4.  **Execute End-to-End Tests:**
    ```bash
    pnpm exec playwright test
    ```

---

## 🎨 Artistic Identity
This portfolio is part of a larger creative ecosystem where digital illustration meets software engineering. The aesthetic choices—from the `old-paper.jpg` texture to the Garamond typography—are a direct reflection of my work as a Digital Illustrator and UX/UI Designer.

---
