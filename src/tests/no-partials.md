---
title: No partials
slug: tests/no-partials.aspx

partials: false

menu:
  QuickLaunch:
    id: no-partials
    parent: tests
---

# The intention of this page is to test the page level opt-out of the partials

Every other page of this sample starts with the banner partial and ends with the navigation partial. This page turns both of them off with a single front matter property:

```markdown
---
title: No partials
partials: false
---
```

Turning off only one of them works as well, which the [home page](../home) does to keep its logo at the top:

```markdown
---
title: Home
partials:
  header: false
---
```

## Partials you include yourself still work

The opt-out only applies to the partials `Doctor` adds to every page. The ones you place yourself are always rendered, which is why the feedback callout below is still here:

<include file="feedback" />

## Navigation

As the navigation partial is turned off, this page provides its own way back to the [home page](../home).
