---
title: Page creation
slug: doctor/page-creation.aspx
draft: false

menu:
  QuickLaunch:
    id: page-creation
    weight: 2
    parent: doctor/documentation
---

## Pages

You start by creating pages as Markdown files (`.md`) in the source folder (`./src` is the default, but you can change this). The markdown pages should contain the following front matter.

```
---
title: <title>
---

Your article content starts here.
```

- **title**: `string` - The title of the page.

> **Info**: Front Matter is the page its metadata.

Optional Front Matter properties are:

- **slug**: `string` - If a slug is not defined, the title will be used. You can add the slug with our without `.aspx` file extension. The tool will automatically add it.
- **draft**: `boolean` - defines if you want to publish the article during the publishing phase.
- **menu**: `Menu`- defines where the page gets added to the navigation structure. Check: [menu section](#Menu).

### Menu

The menu property allows you to create a navigation structure for you static content. The `Menu` object has the following properties:

- menu
  - `QuickLaunch` OR `TopNavigationBar` - Default is `QuickLaunch`
    - **id**: `string` (required) - Navigation id. This can be used to create a hierarchy in your navigation.
    - **weight**: `number` (optional) - The weight of the navigation item. If you want to have it first or last.
    - **parent**: `string` (optional) - Defines the hierarchy of you page in the menu. If not provided, the items will be added to the root of the navigation. When defined, it should contain the `id` value of the parent page. You can also add multi-level navigation like: `<parent-id>/<sub-parent-id>`.

> **Important**: During the publishing process, the navigation will be re-created each time.

#### Example 1

The following page will be added to the root of the `QuickLaunch` after the already defined links. 

```markdown
---
title: Documentation
slug: documentation.aspx
draft: false

menu:
  QuickLaunch:
    id: documentation
    weight: 1
---

Write here the Doctor page content.
```

#### Example 2

The following page adds a subpage underneath the documentation link in the navigation.

```markdown
---
title: Tools
slug: documentation/tools.aspx
draft: false

menu:
  QuickLaunch:
    id: tools
    weight: 1
    parent: documentation
---

Write here the tools page content.
```

#### Example 3

Defines a new page under the tools section:

```markdown
---
title: Doctor
slug: documentation/doctor.aspx
draft: false

menu:
  QuickLaunch:
    id: doctor
    weight: 1
    parent: documentation/tools
---

Write here the Doctor page content.
```

## Navigation

- [Home](../home)
- [Documentation](./documentation)
  - [Options](./options)
  - [Installation](./installation)
  - [Page Creation](.)
  - [Commands](./commands)