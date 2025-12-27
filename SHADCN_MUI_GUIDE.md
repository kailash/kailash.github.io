# shadcn/ui + MUI Integration Guide

## Setup Complete ✅

Your portfolio now has:
- **shadcn/ui**: Copy-paste component library (Radix UI + Tailwind)
- **MUI**: Design system with theming, icons, and powerful components
- **Tailwind CSS**: Utility-first styling

## How to Use

### 1. shadcn/ui Components
Add any component from the registry using the CLI:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
npx shadcn@latest add badge
```

Components are copied to `src/components/ui/` and fully customizable.

**Example usage:**
```tsx
import { Button } from "@/components/ui/button"

export function MyComponent() {
  return <Button>Click me</Button>
}
```

### 2. MUI Components
Use MUI for heavy lifting (layouts, theming, responsive grids):

```tsx
import { Box, Container, Grid, Card, CardContent, Typography, Button } from '@mui/material'

export function MyComponent() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">Title</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}
```

### 3. Tailwind CSS
Use for utility styling alongside both libraries:

```tsx
<div className="flex items-center justify-between gap-4 p-6 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600">
  Content
</div>
```

## Your Theme

Edit `src/theme/theme.ts` to customize MUI colors, typography, and components:

```typescript
palette: {
  primary: { main: '#A855F7' },    // Purple
  secondary: { main: '#2563EB' },  // Blue
}
```

## Best Practices

1. **Layouts & Structure**: Use MUI (Box, Container, Grid)
2. **Lightweight Components**: Use shadcn/ui (Button, Badge, Card)
3. **Styling**: Use Tailwind for utilities
4. **Consistency**: Leverage MUI theme for colors and typography

## Available shadcn Components

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add badge
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add input
npx shadcn@latest add form
npx shadcn@latest add sheet
npx shadcn@latest add tooltip
```

See full list: https://ui.shadcn.com/docs/components/accordion

## Next Steps

1. Add shadcn components as needed
2. Migrate existing components gradually
3. Use MUI Box/Container for layouts
4. Keep Tailwind for quick utilities

Happy building! 🚀
