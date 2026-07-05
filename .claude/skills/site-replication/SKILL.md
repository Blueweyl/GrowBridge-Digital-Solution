---
name: site-replication
description: "Use when you need to copy a website by analyzing its sections, architecture, layout, and animation implementation from a live reference site."
---

# Site Replication

Use this skill when the goal is to recreate a website closely from a reference site, including the homepage structure, section flow, underlying architecture, and animation plugins.

## Inputs to Collect

Before building, gather:
- The target website URL
- The specific pages or sections to copy
- Any preferred tech stack or framework for the destination project
- Whether the goal is a visual match, a functional match, or both

## Workflow

### 1. Identify the target sections

List the sections that need to be recreated, such as:
- Home
- Skills
- Projects
- Testimonials
- Experience
- Any other page-specific sections

If the site is large, prioritize the most important landing page first.

### 2. Analyze the visual and content structure

Inspect the reference site and document:
- Section order and page flow
- Heading hierarchy and content blocks
- Typography, spacing, colors, imagery, and layout style
- Responsive behavior on desktop and mobile
- Navigation, footer, and calls to action

### 3. Map the site architecture

Understand the underlying framework of the reference site:
- Page structure and component breakdown
- Reusable sections and modules
- Routing or multi-page organization
- Data flow for content, testimonials, projects, and experience items
- Whether the site uses static content, CMS data, or dynamic rendering

### 4. Identify animation and interaction patterns

Inspect live animations and interactions carefully:
- Scroll-triggered effects
- Mouse movement or parallax effects
- Entrance transitions and motion timing
- Hover states and micro-interactions
- Slider, carousel, or reveal behavior
- Any third-party animation libraries or plugins in use

Record the animation library and behavior, such as:
- GSAP
- Framer Motion
- ScrollReveal
- AOS
- Locomotive Scroll
- CSS-based transitions

### 5. Recreate the implementation plan

Turn the analysis into a concrete build plan:
- Create the page structure and component hierarchy
- Recreate the layout and content blocks
- Add styling and responsive rules
- Implement the identified animation patterns
- Keep the implementation close to the reference while adapting to the destination stack

### 6. Build and refine

Implement the replica in the current project and verify:
- The target sections are present
- The site flow matches the reference
- Styling is consistent and responsive
- Animations feel close to the reference without breaking usability
- The structure is maintainable and organized

## Decision Points

- If the reference uses a modern framework such as React, Next.js, or Vue, mirror the architecture in a compatible way rather than forcing a simpler structure.
- If the animation library is not available, recreate the effect with the closest supported alternative while preserving the intent.
- If the target site uses dynamic content, define a clear content model before implementation.

## Quality Criteria

The work is complete when:
- The requested sections are implemented
- The architecture is clearly mapped and reflected in the build
- Visual layout and content structure closely match the reference
- Key animations and interactions are included
- The result is responsive and usable

## Output Expectations

Provide:
- A summary of the copied sections
- A breakdown of the site architecture
- A list of animation plugins or techniques used
- The implementation status for the build
