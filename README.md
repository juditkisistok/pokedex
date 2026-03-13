# Pokedex Explorer

A React-based Pokedex application that allows users to browse, filter, and favorite Pokémon.

## Features

- **Browse Pokémon**: View a collection of Pokémon with their stats, types, and images.
- **Filter by Type**: Filter Pokémon by their elemental types (e.g., Fire, Water, Grass).
- **Favorites System**: Add/remove Pokémon to/from your favorites list and view them separately.
- **Responsive Design**: Works on desktop and mobile devices.
- **Fast Performance**: Built with Vite for quick builds and hot module replacement.

## Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: CSS
- **Linting**: ESLint with React-specific rules
- **Build Tool**: Vite

## Usage

- **View All Pokémon**: Click "All" to see the full list.
- **Filter by Type**: Click on any type button (e.g., "Fire") to filter Pokémon.
- **Manage Favorites**: Use the "Show favorites" button to view your favorited Pokémon. Click the button on each card to add/remove from favorites.

## Project Structure

```
src/
├── App.jsx          # Main app component
├── Card.jsx         # Individual Pokémon card
├── CardGrid.jsx     # Grid of Pokémon cards
├── Filter.jsx       # Type and favorites filter
├── data.jsx         # Pokémon data
├── main.jsx         # App entry point
└── index.css        # Global styles
```
