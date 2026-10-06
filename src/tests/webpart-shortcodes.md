---
title: Web part shortcodes
slug: tests/webpart-shortcodes.aspx

menu:
  QuickLaunch:
    id: webpart-shortcodes
    parent: tests
---

# Web part shortcodes

A web part shortcode becomes a SharePoint web part of its own, instead of HTML inside the Markdown
web part. This page is published as five web parts, in this order: Markdown, Divider, Markdown,
Highlighted content, Markdown. The shortcodes are in the `shortcodes` folder of this sample.

<divider />

## Between the two

This text is its own Markdown web part, between the Divider and the Highlighted content web part
below. The next tag has an attribute, which the shortcode uses as the web part's title.

<recent-pages title="Recently changed pages" />

## After them

What to check on SharePoint:

- the five web parts are there, in the order above, in one section;
- publish again without changing anything, and the page is skipped as unchanged;
- change this sentence and publish again: the page is rewritten, and still has five web parts — not
  a second Divider, because `doctor` recognises the web parts it created by the ids it recorded in the
  publish state;
- add a web part to another section of the page in SharePoint and publish again: it stays.

Inside a code block a web part shortcode is left alone, so it can be documented:

```markdown
<divider />
```
