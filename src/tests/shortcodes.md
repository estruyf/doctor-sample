---
title: Shortcodes
slug: tests/shortcodes.aspx

menu:
  QuickLaunch:
    id: shortcodes
    parent: tests
---


<p style="text-align:center;font-weight:bold;font-size:25px">This page contains Doctor shortcodes</p>

## Icon

<icon name="ic_fluent_settings_16_regular" />

<icon name="ic_fluent_settings_20_regular" />

<icon name="settings_24_regular" />

<icon name="settings_28_regular" />

The shortcode snippets look like this:

```html
<icon name="ic_fluent_settings_16_regular" />

<icon name="ic_fluent_settings_20_regular" />

<icon name="settings_24_regular" />

<icon name="settings_28_regular" />
```

<callout type="note">You can find all the icons on the following [icons list](https://github.com/microsoft/fluentui-system-icons/blob/master/icons.md) page. Use the names you can find in the **Android** column.</callout>

## Callout

<callout type="note">The note content</callout>

<callout type="tip">The tip content</callout>

<callout type="info">The info content</callout>

<callout type="caution">The caution content</callout>

<callout type="danger">The danger content</callout>

<callout type="tip" title="Override the title">Tip content with a custom title</callout>

The shortcode snippets look like this:

```html
<callout type="note">The note content</callout>

<callout type="tip">The tip content</callout>

<callout type="info">The info content</callout>

<callout type="caution">The caution content</callout>

<callout type="danger">The danger content</callout>

<callout type="tip" title="Override the title">Tip content with a custom title</callout>
```

## Custom

<sample name="Elio">Content of the external shortcode</sample>

```html
<sample name="Elio">Content of the external shortcode</sample>
```

Create your own:

```javascript
module.exports = {
  name: "sample",
  render: (attributes, html) => {
    return `<div>External Shortcode - Name: ${attributes.name} - HTML: ${html}</div>`
  }
};
```