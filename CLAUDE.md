# AI Instructions for react-animated-highlighter

This file provides instructions for AI coding assistants (Claude, GPT, Copilot, etc.) on how to integrate react-animated-highlighter into projects.

## What is react-animated-highlighter?

An animated text highlighter component for React that uses GSAP to create a smooth "highlighter pen" effect. A highlighter icon sweeps across your text, leaving behind a highlighted background. Perfect for hero sections, landing pages, and attention-grabbing text effects.

## Quick Setup (Copy-Paste Ready)

### 1. Install the package

```bash
npm install react-animated-highlighter gsap
```

Note: GSAP is a peer dependency and must be installed alongside the package.

### 2. Use the component

```tsx
'use client'; // Required for Next.js App Router

import { AnimatedHighlighter } from 'react-animated-highlighter';

export function HeroSection() {
  return (
    <h1 className="text-5xl font-bold">
      We build products with{' '}
      <AnimatedHighlighter text="zero friction" />
    </h1>
  );
}
```

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | **required** | The text to highlight |
| `color` | `string` | `'#6ca0dc'` | Highlight color (any CSS color) |
| `fontSize` | `string` | `'30px'` | Font size (use `'inherit'` to match parent) |
| `className` | `string` | `''` | Additional CSS classes |
| `showIcon` | `boolean` | `true` | Show the highlighter pen icon during animation |
| `highlightOpacity` | `number` | `0.3` | Opacity of the highlight background (0-1) |
| `duration` | `number` | `1.5` | Animation duration in seconds |
| `delay` | `number` | `0` | Delay before animation starts (seconds) |
| `replayOnHover` | `boolean` | `false` | Replay the animation when user hovers |

## Common Use Cases

### Hero Section (Most Common)

```tsx
<h1 className="text-5xl font-bold">
  Ship products with{' '}
  <AnimatedHighlighter
    text="zero friction"
    color="#10b981"
    fontSize="inherit"
    duration={2}
  />
</h1>
```

### Landing Page Headline

```tsx
<AnimatedHighlighter
  text="Start building today"
  color="#8b5cf6"
  fontSize="3rem"
  delay={0.5}
/>
```

### Interactive Element (Replay on Hover)

```tsx
<AnimatedHighlighter
  text="Hover me!"
  replayOnHover={true}
  color="#f59e0b"
/>
```

### Subtle Highlight (No Icon)

```tsx
<AnimatedHighlighter
  text="Important point"
  showIcon={false}
  highlightOpacity={0.2}
  color="#f43f5e"
/>
```

### Slow, Dramatic Reveal

```tsx
<AnimatedHighlighter
  text="The future is here"
  duration={3}
  delay={1}
  color="#0ea5e9"
/>
```

## Customization Examples

### Match Parent Font Size

```tsx
<h1 style={{ fontSize: '4rem' }}>
  Welcome to <AnimatedHighlighter text="My Site" fontSize="inherit" />
</h1>
```

### Custom Colors

```tsx
// Success/Growth
<AnimatedHighlighter text="Success" color="#10b981" />

// Warning/Attention
<AnimatedHighlighter text="Important" color="#f59e0b" />

// Urgent/Error
<AnimatedHighlighter text="Critical" color="#f43f5e" />

// Premium/Creative
<AnimatedHighlighter text="Premium" color="#8b5cf6" />

// Professional/Default
<AnimatedHighlighter text="Professional" color="#6ca0dc" />
```

### With Tailwind CSS

```tsx
<div className="text-4xl font-bold text-white">
  <AnimatedHighlighter
    text="Tailwind ready"
    fontSize="inherit"
    className="font-bold"
  />
</div>
```

## Recommended Color Palette

| Purpose | Color | Hex |
|---------|-------|-----|
| Default/Professional | Blue | `#6ca0dc` |
| Success/Growth | Emerald | `#10b981` |
| Warning/Attention | Amber | `#f59e0b` |
| Important/Urgent | Rose | `#f43f5e` |
| Creative/Premium | Purple | `#8b5cf6` |
| Tech/Modern | Cyan | `#0ea5e9` |

## Animation Timing Tips

- **Quick impact**: `duration={1}` - Fast and snappy
- **Standard**: `duration={1.5}` - Default, balanced
- **Dramatic**: `duration={2.5}` - Slow, emphasizes the action
- **Cinematic**: `duration={3}` with `delay={0.5}` - For hero sections

## Integration Patterns

### With Framer Motion

```tsx
import { motion } from 'framer-motion';
import { AnimatedHighlighter } from 'react-animated-highlighter';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <AnimatedHighlighter
    text="Animated entrance"
    delay={0.6} // Wait for Framer Motion to finish
  />
</motion.div>
```

### Staggered Multiple Highlights

```tsx
<>
  <AnimatedHighlighter text="First" delay={0} />
  <AnimatedHighlighter text="Second" delay={1.5} />
  <AnimatedHighlighter text="Third" delay={3} />
</>
```

## Requirements

- React 17+
- GSAP 3+ (peer dependency, must be installed)

## Troubleshooting

### Animation Not Playing
- Ensure GSAP is installed: `npm install gsap`
- Component must be client-side rendered (use `'use client'` in Next.js App Router)

### Font Size Issues
- Use `fontSize="inherit"` to match parent element
- Or specify exact size: `fontSize="2rem"`

### Icon Not Showing
- Check `showIcon` prop (defaults to `true`)
- Icon is positioned absolutely, ensure parent has appropriate positioning
