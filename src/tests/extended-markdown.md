---
title: Extended markdown
slug: tests/extended-markdown.aspx

menu:
  QuickLaunch:
    id: extended-markdown
    parent: tests
---

# The intention of this page is to test the extended markdown syntax

The syntax on this page requires `markdown.allowHtml` to be enabled. The `markdown.extended` setting turns it on, and is enabled by default.

<callout type="note">Without <code>allowHtml</code>, SharePoint renders your markdown with its own web part, which only supports the basic markdown syntax. Everything on this page would then show up as plain text.</callout>

## Emoji

:pushpin: Purpose, :pencil2: Definition and :triangular_ruler: Calculation.

```markdown
:pushpin: Purpose, :pencil2: Definition and :triangular_ruler: Calculation.
```

## Highlighted text

This sentence contains ==highlighted text== to draw attention to it.

```markdown
This sentence contains ==highlighted text== to draw attention to it.
```

## Task lists

- [x] Install Doctor
- [x] Create the markdown files
- [ ] Publish the documentation

```markdown
- [x] Install Doctor
- [x] Create the markdown files
- [ ] Publish the documentation
```

## Definition lists

Doctor
: Maintain your documentation on SharePoint without pain.

Shortcode
: An HTML snippet inside your content files calling a built-in or custom template.

```markdown
Doctor
: Maintain your documentation on SharePoint without pain.
```

## Footnotes

Doctor publishes your markdown files as SharePoint pages[^1], and keeps track of what it published[^state].

```markdown
Doctor publishes your markdown files as SharePoint pages[^1].

[^1]: The footnote content.
```

## Tables

| Syntax            | Enabled by             |
| ----------------- | ---------------------- |
| :sparkles: Emoji  | `markdown.extended`    |
| ==Highlight==     | `markdown.extended`    |
| Task lists        | `markdown.extended`    |
| Definition lists  | `markdown.extended`    |
| Footnotes         | `markdown.extended`    |

[^1]: The pages are created in the `SitePages` library of your site.
[^state]: The publish state is stored in `Shared Documents/.doctor/state.json` by default.

## Navigation

- [Home](../home)
- [Documentation](../doctor/documentation)
  - [Options](../doctor/options)
  - [Installation](../doctor/installation)
  - [Page Creation](../doctor/page-creation)
  - [Commands](../doctor/commands)
  - [Table of Contents](../doctor/tableOfContents)
- Test pages
  - [Codeblocks](./codeblocks)
  - [Extended Markdown](.)
  - [Shortcodes](./shortcodes)
  - [Special Characters](./special-characters)
