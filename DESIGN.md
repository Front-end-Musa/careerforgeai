---
name: ResumeCrafts AI
description: A focused career workspace for early-career job seekers building credible application materials.
colors:
  ink: "#111827"
  brand-900: "#0f172a"
  brand-700: "#1e3a8a"
  brand-600: "#1d4ed8"
  brand-500: "#2563eb"
  accent: "#f15b2a"
  forest: "#0f766e"
  paper: "#fffdf8"
  paper-warm: "#f7f2ea"
  surface: "#f5f7fb"
  surface-card: "#ffffff"
  surface-muted: "#eef2f7"
  border: "#dfe5ee"
  text-muted: "#5b6474"
  error: "#dc2626"
typography:
  display:
    fontFamily: "Source Sans 3, Helvetica Neue, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3.2rem)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "normal"
  headline:
    fontFamily: "Source Sans 3, Helvetica Neue, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "normal"
  title:
    fontFamily: "Source Sans 3, Helvetica Neue, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: "normal"
  body:
    fontFamily: "Source Sans 3, Helvetica Neue, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Source Sans 3, Helvetica Neue, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "normal"
rounded:
  xs: "4px"
  sm: "8px"
  md: "10px"
  lg: "12px"
  xl: "20px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "20px"
  xxl: "24px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface-card}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.surface-card}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  button-secondary:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0.7rem 1rem"
  card-compact:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xs}"
    padding: "22px"
  input-default:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "14px 16px"
  chip-default:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.pill}"
    padding: "4px 10px"
---

# Design System: ResumeCrafts AI

## 1. Overview

**Creative North Star: "The Prepared Portfolio"**

ResumeCrafts AI should feel like a polished set of application materials being assembled on a focused desk: practical, organized, and quietly supportive. The visual system uses a deep ink foundation, white document-like panels, clear blue utility states, and a restrained orange accent to guide action without turning the product into a flashy AI toy.

The system is warm and encouraging in voice, but compact and direct in structure. Early-career users need momentum and confidence, so screens should prioritize visible progress, strong labels, clear hierarchy, and reviewable AI output over decorative flourishes.

This design explicitly rejects the generic SaaS template, flashy AI toy, corporate HR portal, resume-mill spam, and overcomplicated dashboard named in `PRODUCT.md`. The interface should look credible enough for job-search stakes and approachable enough for users who are still learning the process.

**Key Characteristics:**
- Deep ink anchors with white or soft paper surfaces.
- Orange accent used sparingly for guidance, focus, and decisive hover states.
- Single-family Source Sans 3 typography with sturdy weights and compact rhythm.
- Layered restraint: borders first, shadows only when depth or state earns them.
- Rounded pills for primary actions, tighter 4px to 12px corners for work surfaces.

## 2. Colors

The palette is a restrained portfolio palette: ink, paper, and white carry most of the interface, with blue for utility and orange for active intent.

### Primary
- **Portfolio Ink**: The main authority color for primary CTAs, app shell, high-contrast text, and dark hero surfaces.
- **Credential Blue**: The utility family for focused form states, secondary actions, resume-card accents, and Angular Material primary roles.
- **Action Orange**: The decisive accent for hover states, focus rings, active navigation indicators, and moments that ask the user to act.

### Secondary
- **Progress Teal**: A success/progress color for positive proof points, dashboard CTAs, and small status markers. Use it as a semantic signal, not as decoration.

### Neutral
- **Clean Paper**: The landing-page paper surface and brand warmth layer.
- **Warm Paper**: A deeper warm section surface for FAQ, template, and pricing bands.
- **Workspace Surface**: The cool app background for authenticated product surfaces.
- **White Panel**: The default card, dialog, input, and resume-material surface.
- **Muted Surface**: A quiet chip, hover, and disabled-surface fill.
- **Quiet Border**: The default divider and panel stroke.
- **Muted Text**: Secondary copy, helper text, and metadata.

### Named Rules

**The Accent Has a Job Rule.** Orange is for action, active state, focus, or emphasis that changes what the user does next. Never use it as scattered decoration.

**The White Panel Rule.** Forms, resume cards, job cards, dialogs, and preview surfaces start from white panels with visible borders. Avoid tinted panels when the user needs to read, edit, or compare content.

## 3. Typography

**Display Font:** Source Sans 3 (with Helvetica Neue and sans-serif fallback)  
**Body Font:** Source Sans 3 (with Helvetica Neue and sans-serif fallback)  
**Label/Mono Font:** Source Sans 3; no separate mono or display family is currently part of the system.

**Character:** The type is plain-spoken and sturdy. It should feel like a trustworthy career tool, not a magazine layout or an experimental AI interface.

### Hierarchy
- **Display** (500, responsive up to 3.2rem, 1 line-height): For dashboard and landing hero headlines where the page needs a clear promise.
- **Headline** (500, 2.5rem, 1.15 line-height): For section titles and marketing headings.
- **Title** (700-800, 1rem to 1.3rem, 1.25 line-height): For cards, action groups, resume titles, and product panels.
- **Body** (400, 1rem, 1.5 line-height): For explanatory copy, form help, and product descriptions. Keep prose near 65-75ch where possible.
- **Label** (600-800, 0.78rem to 0.9rem, normal to 0.14em letter spacing): For form labels, chips, metadata, and rare uppercase eyebrows.

### Named Rules

**The Single Voice Rule.** Use Source Sans 3 across product UI. Do not introduce display fonts, script faces, or decorative type for product screens.

**The Helpful Weight Rule.** Use weight to clarify importance, not to shout. Product labels and actions can be bold; long body copy must stay readable and calm.

## 4. Elevation

The elevation philosophy is Layered Restraint. Most product surfaces use borders and tonal contrast first. Shadows appear for hover feedback, mobile bars, menus, dialogs, sticky previews, and a few signature containers where depth helps orientation.

### Shadow Vocabulary
- **Panel Lift** (`box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06)`): Low ambient lift for generic panels and auth cards.
- **Hover Lift** (`box-shadow: 0 16px 32px rgba(15, 23, 42, 0.08)`): Card hover feedback when the element is clickable.
- **Menu Lift** (`box-shadow: 0 18px 34px rgba(15, 23, 42, 0.14)`): Floating menus and overlays.
- **Sidebar Depth** (`box-shadow: 12px 0 34px rgba(17, 24, 39, 0.16)`): Persistent navigation depth against the workspace.
- **Offset Signature** (`box-shadow: 18px 18px 0 rgba(17, 24, 39, 0.05)` or `rgba(241, 91, 42, 0.12)`): Rare blocky emphasis for dashboard hero and grouped action sections.

### Named Rules

**The Border First Rule.** A resting product card should be understandable with a 1px border before any shadow is added.

**The Shadow Must Explain Rule.** If a shadow does not communicate hover, floating state, sticky layering, or signature hierarchy, remove it.

## 5. Components

### Buttons
- **Shape:** Primary actions are full pills (999px). Secondary app buttons and icon buttons use gently rounded corners (8px to 10px).
- **Primary:** Portfolio Ink background with white text, bold label, and 14px to 16px vertical rhythm. The main landing CTA uses a 52px minimum height.
- **Hover / Focus:** Primary hover shifts to Action Orange or Credential Blue depending on context, with a subtle -1px translate. Form focus uses an orange or blue ring at 3px to 4px alpha.
- **Secondary / Ghost / Tertiary:** White or muted backgrounds, visible borders, and dark text. Secondary resume actions may use pale blue fills when they relate to resume utility.

### Chips
- **Style:** Compact pill or 8px rounded tags with muted backgrounds, borders, and 12px to 13px text.
- **State:** Accent chips may use pale blue for resume metadata, pale orange for action context, or pale teal for progress. Do not use saturated fills for inactive chips.

### Cards / Containers
- **Corner Style:** Product cards often use compact 4px corners; resume cards and general panels may use 12px. Builder surfaces currently use larger 18px to 28px radii and should be treated as a specialized editing workspace.
- **Background:** White panels over cool workspace surfaces or warm paper marketing bands.
- **Shadow Strategy:** Follow Layered Restraint. Use borders at rest, hover lift for clickable cards, and menu lift for overlays.
- **Border:** 1px borders in Quiet Border or `rgba(17, 24, 39, 0.12)` are the default product container separator.
- **Internal Padding:** Compact cards use 18px to 24px. Larger grouped sections use 30px on desktop and 20px to 22px on mobile.

### Inputs / Fields
- **Style:** White background, 8px to 16px radius depending on context, 1px border, and Source Sans 3 labels.
- **Focus:** Border shifts to Credential Blue or Action Orange with a soft 3px to 4px focus ring.
- **Error / Disabled:** Error text uses red and must be accompanied by text, not color alone. Disabled controls reduce opacity and keep cursor feedback explicit.

### Navigation
- **Style:** The authenticated sidebar is deep ink with low-contrast inactive icons, white active text, and orange active indicators. It expands on desktop and collapses to a fixed bottom tab bar on mobile.
- **States:** Hover and active states use a subtle tinted fill plus an orange inset indicator. Locked states reduce opacity and must not animate as if clickable.
- **Marketing Header:** The public header uses a translucent white bar with pill navigation, light borders, and compact 14px to 15px labels.

### Signature Component: Resume Card

Resume cards combine a white panel, subtle gradient, 12px radius, low shadow, metadata chips, and compact action buttons. They should feel like application assets ready to review, not generic list rows.

## 6. Do's and Don'ts

### Do:
- **Do** use Portfolio Ink for the strongest actions and page anchors.
- **Do** use Action Orange only for active intent: hover, focus, selected navigation, or a single decisive emphasis.
- **Do** keep product screens border-led and readable, with white panels over `surface` or `paper` backgrounds.
- **Do** write supportive, practical labels that help early-career users understand the job-search task.
- **Do** preserve WCAG AA contrast, visible focus, keyboard access, and reduced-motion alternatives.

### Don't:
- **Don't** make this look like a generic SaaS template with interchangeable card grids and decorative metrics.
- **Don't** make it feel like a flashy AI toy with glowing gradients, magic-language CTAs, or ornamental automation effects.
- **Don't** make it feel like a corporate HR portal; avoid cold bureaucracy, dense compliance styling, and impersonal copy.
- **Don't** make it feel like resume-mill spam; avoid exaggerated promises, urgency tricks, and fake credibility badges.
- **Don't** turn product screens into an overcomplicated dashboard. If the user cannot tell what to do next, the screen is too busy.
- **Don't** use orange as random decoration, oversized rounded cards, gradient text, side-stripe borders, or nested card structures.
