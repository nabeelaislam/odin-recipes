# Family Recipes

A personal family recipe collection based off of a Google Doc, rebuilt as a modern, searchable website.

This project began as a simple HTML page years ago and has since been redesigned with a focus on:
- clean aesthetics
- scalability
- real-world front-end patterns

The recipes come from my family (Baba, Mommy, and extended family) and span Pakistani, Bengali, Persian, and Middle Eastern cuisine.

---

## Features

-  Recipe cards rendered dynamically from JSON
-  Live search by recipe name, origin, or category
-  Filter dropdowns (Origin & Category)
-  Individual recipe detail pages
-  Custom design system with a Persian-inspired color palette
-  Responsive grid layout
-  External recipe references supported in notes

---

## Tech Stack

- **HTML5**
- **CSS3** (custom design system, grid layout)
- **Vanilla JavaScript**
- **JSON** (data-driven architecture)
- **Git & GitHub**

Everything is written from scratch to reinforce core front-end fundamentals.

---

## Project Structure
odin-recipes/
│
├── index.html # Main recipe grid + filters
├── recipe.html # Individual recipe page
│
├── css/
│ └── styles.css # Global styles & design system
│
├── js/
│ ├── recipes.js # Grid rendering + search + filters
│ └── recipe.js # Single recipe page logic
│
├── data/
│ └── recipes.json # All recipe data (source of truth)
│
└── images/
└── *.jpg # Recipe images

