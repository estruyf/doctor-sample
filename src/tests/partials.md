---
title: Partials
slug: tests/partials.aspx

menu:
  QuickLaunch:
    id: partials
    parent: tests
---

# The intention of this page is to test the reusable content partials

Partials are markdown snippets which live in the `partials` folder, and get added to your pages while `Doctor` publishes them. The navigation you find at the bottom of every page in this sample is one of them.

## Automatically added partials

The `doctor.json` file of this sample adds a banner at the top and the navigation at the bottom of every page:

```json
{
  "partials": {
    "folder": "./partials",
    "header": "banner",
    "footer": "navigation"
  }
}
```

The note above this page its title is the `header` partial, the navigation below is the `footer` one.

Pages which do not want them can opt out in their front matter, which the [No partials](./no-partials) page does:

```markdown
---
title: Standalone page
partials: false
---
```

## Included partials

Next to the automatically added ones, a partial can be pulled in wherever you need it:

```markdown
<include file="feedback" />
```

Which renders the shared feedback callout:

<include file="feedback" />

## Links inside a partial

A partial is used on pages in different folders, so its links are written from the sources root:

```markdown
- [Home](/home)
- [Codeblocks](/tests/codeblocks)
```

`Doctor` rewrites them to the page which includes the partial, so they end up pointing at the right SharePoint pages.
