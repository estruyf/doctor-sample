---
title: Page creation
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

- **slug**: `string` - If a slug is not defined, the title and current folder struture will be used. You can add the slug with our without `.aspx` file extension. The tool will automatically add it.
- **draft**: `boolean` - defines if you want to publish the article during the publishing phase.
- **comments**: `boolean` - with this setting you can enable/disable page commenting. By default this is disabled.
- **layout**: `Article` | `Home` - defines which page layout you want to use. Default layout type is `Article`.
- **menu**: `Menu`- defines where the page gets added to the navigation structure. Check: [menu section](#Menu).

When you want to create page to page links, you can provide the relative path from the current markdown file to the other markdown file (with or without the `.md` extension).

### Menu

The menu property allows you to create a navigation structure for you static content. The `Menu` object has the following properties:

- menu
  - `QuickLaunch` OR `TopNavigationBar` - Default is `QuickLaunch`
    - **id**: `string` (required) - Navigation id. This can be used to create a hierarchy in your navigation.
    - **name**: `string` (optional) - When this property is defined, it will be used for the navigation item title, otherwise the page title will be used.
    - **weight**: `number` (optional) - The weight of the navigation item. If you want to have it first or last.
    - **parent**: `string` (optional) - Defines the hierarchy of you page in the menu. If not provided, the items will be added to the root of the navigation. When defined, it should contain the `id` value of the parent page. You can also add multi-level navigation like: `<parent-id>/<sub-parent-id>`.

> **Important 1**: During the publishing process, the navigation will be re-created each time.

> **Important 2**: When using `QuickLaunch` you can only have three levels of navigation: `Root/sub/sub-sub`.

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