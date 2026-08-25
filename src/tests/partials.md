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

## Partials with parameters

A partial does not have to be the same everywhere. Everything you add to the `include` tag next to the `file` attribute becomes a parameter:

```markdown
<include file="version" product="Doctor" version="2.1.0" type="note" />
```

The `partials/version.md` snippet uses them with `{{name}}` placeholders:

```markdown
<callout type="{{type}}">This page needs <strong>{{product}}</strong> {{version}} or higher.</callout>
```

Which renders:

<include file="version" product="Doctor" version="2.1.0" type="note" />

### Default values

Parameters which are the same on most pages get their value from the `params` front matter of the partial:

```markdown
---
params:
  product: Doctor
  version: 2.1.0
  type: note
---
```

So including it without any parameters renders those defaults:

<include file="version" />

A page only mentions what is different, like this one which asks for a newer version:

```markdown
<include file="version" version="2.2.0" type="warning" />
```

<include file="version" version="2.2.0" type="warning" />

### Passing parameters on

A partial hands its own parameters to the partials it includes. The `partials/requirements.md` snippet takes a `product` and a `version`, and passes both to `partials/version.md`:

```markdown
<include file="./version" product="{{product}}" version="{{version}}" type="warning" />
```

Including it with a single parameter:

```markdown
<include file="requirements" version="2.2.0" />
```

Renders:

<include file="requirements" version="2.2.0" />

<callout type="note">A parameter which is not passed and has no default value fails the publishing run, so a typo in a parameter name does not end up on your site.</callout>

## Links inside a partial

A partial is used on pages in different folders, so its links are written from the sources root:

```markdown
- [Home](/home)
- [Codeblocks](/tests/codeblocks)
```

`Doctor` rewrites them to the page which includes the partial, so they end up pointing at the right SharePoint pages.
