# Urban Greenery

A modern, interactive plant care application designed for urban gardening enthusiasts. This project helps users track sunlight, manage plant care, and explore a curated encyclopedia of plants.

Live Demo: View the deployed project here – https://gardaning-plants.vercel.app/

## Features

- **Dynamic Sunlight Modes**: Interface and plant recommendations adapt to Morning, Noon, and Night settings.
- **Plant Encyclopedia**: Detailed information on various plants suitable for urban environments.
- **Search & Filter**: Quickly find plants by name or characteristics.
- **Favorites System**: Bookmark your favorite plants for easy access.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Tech Stack

- **Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project folder:
   ```bash
   cd sun-light-garden-main
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:8080`.

## Project Structure

- `src/components`: Reusable UI components (buttons, cards, navigation).
- `src/pages`: Main view routes (Home, Favorites).
- `src/context`: Global state management (SunlightContext).
- `src/hooks`: Custom React hooks.
- `src/data`: Static data files.

## License

This project is licensed under the MIT License.
