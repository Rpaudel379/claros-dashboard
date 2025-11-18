# Dashboard (React + TypeScript + Redux + TailwindCSS)

- Compound Component pattern: `Dashboard`, `Dashboard.Sidebar`, `Dashboard.Main`, `Dashboard.Toggle`
- State management with **Redux Toolkit + Thunk** for async updates
- Search by **name, state, street, city** with debouncing the input
- Filter records by **city**
- Pagination with **Next / Prev** and **Jump to page**
- Responsive UI + Collapsible Sidebar (TailwindCSS)

**Pagination** is attached with the url query parameter eg: `?page=1` so you can share the specific part of page.

**The program is deployed to** https://claros-dashboard.netlify.app/

## About External API

The app pulls data from from https://www.refugerestrooms.org/.

## Installation & Running

```bash

# clone the repo
git clone https://github.com/Rpaudel379/claros-dashboard
cd claros-dashboard

# Install dependencies
npm install
# or
bun install

# Start development server
npm run dev
# or
bun run dev
```
