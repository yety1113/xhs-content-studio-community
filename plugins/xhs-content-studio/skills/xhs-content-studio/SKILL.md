---
name: xhs-content-studio
description: Research, plan, art-direct, and produce publish-ready Xiaohongshu content from real sources. Use when creating or operating any Xiaohongshu account; turning feeds, links, notes, interviews, or trends into content ideas; preparing mobile-first carousel graphics, captions, or short-video outlines; selecting a visual style from account assets, references, or a style library; or building a repeatable source-to-topic-to-asset workflow with user approval gates.
---

# Xhs Content Studio

Run this as a studio process, not a generic copywriting pass. A useful post starts with a verifiable material source and an account-specific observation; it does not start with a fashionable conclusion.

## 1. Establish the account brief

Before researching, obtain or infer only from supplied account material: account promise, proven content patterns, content pillars, voice/visual language, forbidden tones, claims, platform risks, default format, and objective. Write a compact account brief and ask the user to correct it if it would materially change the work. Do not transfer one account's personality, audience, or visual style to another account.

Read [workflow-templates.md](references/workflow-templates.md) for the exact working cards.

## 2. Lock the visual intake before making assets

Require at least one visual route before producing any cover, carousel, or video keyframe:

1. **Account route:** the current avatar plus 3-6 homepage/post screenshots. Ask whether the avatar should appear on every cover, selected covers only, or never.
2. **Reference route:** 3-5 competitor/reference covers or links, plus a sentence naming what to borrow (for example, “dark information hierarchy”) and what not to copy (for example, face, mascot, logo, exact composition).
3. **Library route:** a selected style code from [xhs-style-library.md](references/xhs-style-library.md).

If none is supplied, stop before artwork and ask the user to choose a route. Do not silently fall back to a generic template. Convert the chosen route into a visual brief: style code/name, source images, palette, cover skeleton, type hierarchy, imagery/portrait rules, and repetition rule across a series. Use an account's own avatar only with supplied authorization; do not recreate a competitor's mascot, person, logo, or recognisable cover composition.

For a new account, present the six library options in a short selection list. The user may combine only one *layout family* with one *palette family*; avoid indiscriminate mixing. For S06 World Quest Board, treat the world, task panels, and progress UI as an original account system—not material to copy from a reference cover.

## 3. Build a source ledger before choosing topics

Use supplied feeds, articles, links, interviews, product material, comments, or public pages. When a signed-in browser is needed, use the existing browser session; never invent access or imply a source was read when it was not.

For every usable source, record: URL or original location, publisher/date, a precise fact or quoted idea, why it matters to this account, and confidence. Separate facts from the creator's interpretation. Preserve links in the final source note.

Reject material that is only an untraceable trend summary, unsupported performance lore, or a claim that cannot bear the intended conclusion. Never manufacture metrics, case studies, quotes, user reactions, or platform rules.

## 4. Propose; do not produce yet

Offer exactly three sharply different topic cards unless the user asks for another number. Each card must include: working title and one-sentence reader promise; source evidence and the account-specific angle; slide/video arc, key observation, and interaction question; and why it is worth posting now plus what it deliberately does *not* claim.

Make the differences structural, not merely headline variants. Ask the user to pick or revise one. This is a hard approval gate: do not create finished visual assets before selection is explicit.

## 5. Turn the confirmed topic into a production brief

Make a concise brief containing the approved title, reader, source thesis, emotional rhythm, proof points, visual metaphors, page count, CTA, and locked visual brief. Research posts show material, reasoning, and uncertainty; tutorials show the actual decision path or test; reviews distinguish observation, preference, and fact; commercial posts state the offer without disguising an ad as neutral reporting.

Draft the complete on-image copy, caption, title options, hashtags, source note, and an upload order before art production.

## 6. Produce mobile-first carousel assets

Default to a 3:4 vertical carousel at 1080 x 1440 unless the user specifies another format. Use 6-9 pages when the argument needs development; do not pad a short idea.

- Give each page one job and takeaway. Cover = tension + payoff; final page = a specific question, next action, or saved reference.
- Favor a clear visual metaphor, annotated screenshot, game/UI sketch, object, or material over decorative gradients.
- Keep the main statement immediately legible on a phone. Use large type, generous margins, high contrast, and short text blocks.
- Match the locked visual brief while changing the evidence and analogy for each post. Keep a stable series signature but never make every cover a recolored duplicate.
- Put source acknowledgements in the caption or a readable final-page note.

For HTML/CSS output, start from [carousel-starter.html](assets/carousel-starter.html) only as a layout shell; replace its theme, visual device, and copy. Render with `scripts/render_carousel.mjs <index.html> [slides-dir]`. Make a contact sheet with `scripts/contact_sheet.mjs <slides-dir> [contact-sheet.png]`.

## 7. Verify before handoff

Inspect the rendered contact sheet and at least the cover, densest page, and final page at full size. Fix clipped text, low contrast, tiny type, mismatched page numbers, visual monotony, and factual overreach. Do not call an HTML file a finished carousel until the PNGs have been rendered and checked.

Deliver ordered assets, a preview/contact sheet, title/caption/hashtags/source note/visual code/upload order in one markdown file, plus one sentence naming the source-to-angle logic and unresolved uncertainty. Never present a template, outline, or raw HTML as the finished asset.

## 8. Learn from the result

When the user provides post performance, update the account brief with evidence. Diagnose by the content's actual promise and reader response—not vanity metrics alone—and retain the successful material-to-mechanism pattern for future proposals.
