# GovCon Exit Playbook — Design Direction

## Approach 1
**Theme Name:** Federal Signal

**Very Brief Intro:** A dark, editorial command-center aesthetic with brass accents, inspired by briefing rooms, intelligence dashboards, and institutional capital. It communicates gravity, precision, and high-stakes execution.

**Probability:** 0.07

## Approach 2
**Theme Name:** Operator's Ledger

**Very Brief Intro:** A warm paper-and-ink editorial system that treats the playbook like a field manual for founders, with strong typographic hierarchy and annotated financial artifacts. It feels intelligent, human, and practical.

**Probability:** 0.04

## Approach 3
**Theme Name:** Strategic Horizon

**Very Brief Intro:** A restrained, high-contrast executive interface blending deep navy, mineral cream, and signal orange with asymmetrical layouts and analytical diagrams. It makes the $100M goal feel concrete, navigable, and earned.

**Probability:** 0.08

## Chosen Approach: Federal Signal

### Design Movement
Contemporary editorial brutalism crossed with institutional intelligence design: decisive blocks, disciplined typography, sparse but meaningful ornament, and the visual language of classified briefings translated into a premium public-facing strategy site.

### Core Principles
1. **Signal over decoration.** Every color, line, label, and number should guide the eye toward a decision.
2. **Evidence earns emphasis.** Large numbers are paired with the operating proof behind them: EBITDA, backlog, margin, and risk controls.
3. **Asymmetry creates authority.** Use split compositions, offset callouts, and left-anchored narrative rather than generic centered landing-page blocks.
4. **Calm intensity.** The site should feel high-stakes without being noisy: deep ink surfaces, warm paper panels, and one disciplined accent color.

### Color Philosophy
The foundation is near-black ink, not pure black, to create a briefing-room atmosphere with depth. Mineral cream is used for the main reading surface so the site feels like a marked-up strategy document rather than a software dashboard. Signal orange is reserved for the $100M target, decision points, and primary actions; it should feel like a warning marker or a highlighted thesis, not a generic CTA color. Muted slate and olive-gray support analytical secondary information.

### Layout Paradigm
Use a split-screen editorial structure: a narrow, persistent left rail for section indexing and a wide scrolling reading canvas for the playbook. The hero uses an offset two-column composition with the $100M thesis as a large typographic object and a compact valuation card as the proof point. Subsequent sections alternate full-bleed dark bands with paper-toned analytical modules. Avoid symmetrical card grids wherever a staggered column or timeline can tell the story better.

### Signature Elements
1. **Signal rail:** A slim left-side navigation rail with numbered chapter markers, active-section illumination, and a vertical orange datum line.
2. **Briefing labels:** Small uppercase labels such as `THESIS / 01`, `VALUE BRIDGE / 02`, and `EXIT READINESS / 06` that establish hierarchy and operational tone.
3. **Marked-up metrics:** Large values with underlines, corner brackets, and short annotations that resemble an analyst’s markup on a briefing page.

### Interaction Philosophy
Interactions should feel like inspecting a decision document. Hover states expose context through small shifts, highlights, and underlines rather than bouncing cards. Tabs in the valuation section should change the scenario values instantly. The navigation rail should scroll smoothly to chapters and show progress. All click targets must remain legible and useful on mobile, where the rail collapses into a compact top index.

### Animation
Use low-drama, precise motion. On load, the hero thesis reveals through a 40ms stagger across label, headline, proof line, and metric card. Section markers fade and translate upward by 8px when they enter the viewport. Buttons use a 160ms ease-out press scale. Scenario changes use a 220ms crossfade and 4px horizontal shift. Decorative datum lines may grow vertically once on first view, but never loop. Respect reduced-motion preferences by disabling entrance transforms while preserving opacity and state changes.

### Typography System
Use **Space Grotesk** for display typography and navigation labels, with its geometric forms reinforcing the analytical, engineered tone. Use **DM Sans** for body copy, tables, and supporting text for excellent readability at small sizes. Headlines are tight, heavy, and often sentence-cased; labels are uppercase with generous tracking. Numbers use tabular-nums and a slightly heavier weight so the valuation bridge reads like a financial instrument.

### Brand Essence
**Positioning:** A founder-grade operating system for building a government contractor that can command approximately $100M of enterprise value.  
**Personality:** Precise, ambitious, unsentimental.

### Brand Voice
Headlines are direct and strategic. CTAs sound like decisions, not promises. Microcopy names the tradeoff or proof point instead of using generic filler.

Example lines:

> **Build the asset buyers compete for.**

> **Revenue gets attention. Transferable cash flow gets paid.**

### Wordmark & Logo
Create a compact, text-free mark built from three ascending vertical bars cut by a single horizontal line, representing revenue scale, operating discipline, and the exit threshold. The mark should work as a small square favicon and as a stamped symbol beside the wordmark. The wordmark itself uses Space Grotesk in a custom-tightened uppercase lockup with the `$100M` figure set as the visual anchor.

### Signature Brand Color
**Signal Orange — `#F08A3C`**. It is warm enough to feel human and energetic, but restrained enough to read as an operational marker against ink and cream surfaces.

## Content Architecture

The first delivery will be a single-page, responsive website with the following chapters:

1. **Hero / Thesis:** “Build the asset buyers compete for.” Includes the $100M target, 12.5× base multiple, and $8M EBITDA target.
2. **Value Bridge:** Interactive conservative, base, and premium exit scenarios with revenue and margin context.
3. **What Buyers Actually Buy:** A six-part value architecture explaining contract quality, growth, margin, strategic fit, compliance, and transferability.
4. **Five-Year Roadmap:** A horizontal-to-vertical responsive timeline from Foundation to Exit Positioning.
5. **Operating Scorecard:** Key leading indicators across revenue quality, growth, contract risk, delivery, people, cash, and compliance.
6. **Diligence Architecture:** Data-room categories and red-flag callouts.
7. **90-Day Action Plan:** Three 30-day sprints that turn the thesis into immediate execution.
8. **Final Decision:** A founder-dependence test and a strong closing CTA to use the playbook.

## Style Decisions

- Use dark ink as the primary hero and chapter background, with cream analytical panels for contrast.
- Use Signal Orange only for actions, emphasis, active navigation, and target-value annotations.
- Use asymmetrical editorial layouts instead of generic centered hero blocks.
- Use no stock photography; the visual language is typographic, diagrammatic, and briefing-room inspired.
- Keep the experience content-forward and credible: no fabricated testimonials, reviews, or claims beyond the source playbook.

## Style Decisions

- The signal rail is mandatory on desktop: every chapter should be anchored by a visible numbered index system and a vertical Signal Orange datum line that makes the page feel like a navigable briefing document.
- Orange italic editorial phrases are analyst-style emphasis only; the primary display voice remains Space Grotesk, tight, heavy, and engineered.
- The three-bar threshold mark and `$100M` wordmark lockup must appear in the opening viewport so the brand is established before the playbook content begins.
- Annotated financial-artifact motifs should recur in the roadmap, scorecard, diligence, and action-plan sections through brackets, datum lines, threshold markers, and compact proof annotations.
