# Bambuiplants Website Changelog

## 2023-10-27 (Visual Update)
- **Commit:** (pending)
- **Author:** Cascade
- Replaced placeholder product images on `shop.html` with actual photos (`black3.png`, `madake3.png`) for a more authentic presentation.



## 2023-10-27 (Final Review & Polish)
- **Commit:** (pending)
- **Author:** Cascade
- Completed a comprehensive code inspection of all HTML files (`index.html`, `shop.html`, `guides.html`, `blog.html`, `about.html`).
- Ensured consistent header, footer, branding, and Google Analytics integration across the entire site.
- Standardized accessibility by adding `aria-label="Open main menu"` to all mobile navigation buttons.
- Improved screen reader experience by adding `aria-hidden="true"` to all decorative SVG icons.
- Verified all user-requested content changes (prices, testimonials, links) are correctly implemented.
- The site is now considered feature-complete and ready for final review and deployment.

## [2.0.0] - 2025-07-20

### Added
- Created four new pages: `shop.html`, `guides.html`, `blog.html`, and `about.html`.
- Implemented a new, modern, and responsive design across the entire website using Tailwind CSS.
- Added a consistent header with the red panda logo and navigation to all pages.
- Added a consistent footer with store and contact links to all pages.
- Integrated Google Analytics tracking (`G-WN4MCL9LML`) across all pages.

### Changed
- Completely redesigned and replaced the content of the main `index.html` page.
- Updated the navigation to include links to the new pages.

## [Unreleased] - 2025-06-04

### Added
- **Back to Top Button**: Implemented a "Back to Top" button with smooth scrolling functionality and styling. Appears on scroll down.
- **Mobile Navigation Menu**: Added a responsive hamburger menu for mobile devices, allowing access to all navigation links.
- **Animated Down Arrow**: Included an animated down arrow in the hero section to guide users towards the product listings.
- **Product Card Sub-heading**: Added "USDA Zone 7-10 Verified" under product titles for clarity.

### Changed
- **UI Enhancements**:
    - Applied subtle hover animations (scaling and lift) to buttons and product cards for better interactivity.
    - Improved image `alt` attributes for better accessibility and SEO.
    - Added `loading="lazy"` attribute to more images for performance.
    - Increased line-height (`leading-relaxed`) in several text sections for improved readability.
- **JavaScript**:
    - Added JavaScript for mobile menu toggle and "Back to Top" button functionality.
    - Refined comments in the existing JavaScript for clarity.

### Commit
- `12755c756073bc7142614c0514e6e96de75a084a`
