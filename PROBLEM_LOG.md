# OneFoundr Problem Log

---

## [2026-04-09] Section Headings Left-Aligned Instead of Centered

**Status:** ✅ Resolved

**Symptom:**
Section headings ("The solo founder experience", "Built for the way solo founders actually work.", "We don't serve a demographic.") were rendering left-aligned despite having `text-center` Tailwind utility applied.

**Root Cause (multi-layered):**

1. **Tailwind v4 utility layer specificity** — In Tailwind v4, all utility classes including `text-center` are emitted inside `@layer utilities {}`. CSS layers have lower specificity than unlayered styles, which can cause utility classes to lose to base/reset styles in certain rendering contexts.

2. **Tailwind v4 scanner picking wrong root** — The project is inside `/onefoundr.v2/onefoundr/` but there is an extra `package-lock.json` at `/onefoundr.v2/`. Turbopack's workspace root detection picked the wrong root, causing Tailwind's `@source` scanner to miss many component files. This caused utilities like `mx-auto`, `max-w-5xl`, and `text-center` to be silently dropped from the compiled CSS.

**Fixes Applied:**

1. **`src/app/globals.css`** — Added `@source "../";` directive to explicitly point Tailwind v4's scanner at the `src/` directory, ensuring all utility classes in components and pages are included in the generated CSS.

2. **`src/app/globals.css`** — Added unlayered (highest-priority) CSS rules:
   ```css
   .section-heading {
     text-align: center;
     width: 100%;
   }

   section > .max-w-5xl {
     margin-left: auto;
     margin-right: auto;
   }
   ```

3. **`src/components/Problem.tsx`, `Solution.tsx`, `Journey.tsx`** — Replaced `w-full text-center` Tailwind utilities on h2 elements with the explicit `.section-heading` custom class to bypass layer specificity issues.

**Key Lesson:**
When using Tailwind v4 in a nested project directory, always add an explicit `@source` directive in globals.css. The auto-detection of workspace root is unreliable when multiple `package-lock.json` files exist in ancestor directories. Additionally, for critical layout properties, prefer unlayered custom CSS classes when Tailwind's `@layer utilities` may be overridden.

---

## [2026-04-09] Tailwind CSS Utilities Not Generating (Session Start)

**Status:** ✅ Resolved

**Symptom:**
Tailwind utility classes (colors, spacing, layout) were not applying visually — the site rendered without any Tailwind styles.

**Root Cause:**
PostCSS was configured with the Tailwind v3 plugin (`tailwindcss`) but the project uses Tailwind v4, which requires `@tailwindcss/postcss` as the PostCSS plugin. Additionally, `globals.css` was using the v3 `@tailwind base;` directive format instead of v4's `@import "tailwindcss";`.

**Fixes Applied:**
- Created `postcss.config.js` using `@tailwindcss/postcss` plugin
- Converted `globals.css` to v4 format: `@import "tailwindcss";` + `@theme {}` variables block

---

## [2026-04-09] Supabase/Resend Client Module-Level Instantiation Error

**Status:** ✅ Resolved

**Symptom:**
Next.js build failed due to Supabase and Resend clients being instantiated at module level in `src/app/api/waitlist/route.ts`, causing env variable access issues during static analysis.

**Fix Applied:**
Moved client instantiation inside the `POST` handler function body so they are only created at runtime when the route is invoked.
