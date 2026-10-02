---
title: What's new in Doctor 2.3
description: "A title with an apostrophe, links to a heading, and images from outside the content folder"

header:
  type: Custom
  image: '../assets/doctor1.png'
  altText: "The doctor logo"

menu:
  QuickLaunch:
    id: whats-new
    parent: tests
---

# What's new in Doctor 2.3

This page has an apostrophe in its title, so its URL — `tests/what's-new-in-doctor-2.3.aspx` — has
one too. `doctor` addresses the page through SharePoint's REST API, where a `'` has to be escaped;
before 2.3 this page could not be written at all.

## Links to a heading

A link to another page can point at a heading on it. The link is rewritten to the SharePoint page,
and the anchor is kept:

- [The icon shortcode](./shortcodes.md#icon)
- [Every metadata column type](./metadata.md#metadata)
- [Further down this page](#images)

## Images

The banner of this page uses `../assets/doctor1.png`, from the sources folder. This image comes from
the `assets` folder of the project itself, outside the sources folder, so it is uploaded to
`assets/assets/` in the library rather than to a copy of the folder structure of the machine that
published it:

![The navigation of this sample](../../assets/navigation.png)

To check that an edited image is uploaded again: replace `src/assets/doctor1.png` with another image
under the same name, and publish. The page is republished, and its banner shows the new image —
without `--overwriteImages`.
