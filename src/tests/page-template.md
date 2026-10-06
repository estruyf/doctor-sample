---
title: Page template
slug: tests/page-template.aspx

# The template is matched on its title first, then on its file name or page id,
# so "PageTemplate.aspx" or the template's id work as well. Create it first —
# see the README. Without it, doctor warns and creates an ordinary page.
template: PageTemplate

# No `header` here, so the page keeps the template's banner. Add one and it is
# applied as on any other page.

menu:
  QuickLaunch:
    id: page-template
    parent: tests
---

# Page template

This page is created from the `PageTemplate` page template of the site, so it starts with the
template's sections, banner and web parts. Its content goes into the first **empty** one-column
section of the template, or a new section below the template's layout when it has none — a web part
the template carries is never written over.

What to check on SharePoint:

1. The first publish creates the page from the template.
2. Change the template in SharePoint — move a section, add a web part — and publish again: this page
   keeps the layout it was created with, and `doctor` warns that a template is only applied to pages
   it creates.
3. Publish once more with `--reapplyTemplates`: the page is laid out from the changed template, keeps
   its own banner and its id, and its content lands in the template's empty section.
