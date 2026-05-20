You are assisting in developing the personal website for **mortimer.nl**.  Maintain an ultra-minimalistic, clean aesthetic throughout the repository.

## Stack Overview
*   **Framework:** SvelteKit (TypeScript, Single Page Application, no server-side rendering)
*   **UI System:** shadcn-svelte (Tailwind CSS-driven components)

## Components

### shadcn
*   Do not write complex interactive components (drawers, dialogs, dropdowns) from scratch.
*   Always use shadcn primitives to maintain accessibility standards.
*   Refer to the [shadcn Component Overview Blueprint](https://ui.shadcn.com/docs/components.md) for structure templates.

### Composition Over Logic Duplication
*   shadcn injects component code directly into the source directory. Feel free to modify the source code locally inside the `components/ui/` folder if you need custom minimalistic shifts.
*   Keep styling strictly functional with utility classes via Tailwind.

### Writing articles

We leverage mdsvex for markdown-based content when writing articles.

## Styling

[guidelines](./DESIGN.md)
