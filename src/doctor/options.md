---
title: Options
slug: doctor/options.aspx
draft: false

comments: true

menu:
  QuickLaunch:
    id: options
    weight: 1
    parent: doctor/documentation
---

## Options

Options are specified via command arguments, or within a `doctor.json` file (automatically gets created on initialization `doctor init`).

`-a, --auth <auth>`
: Specify the authentication type to use. Values can be `deviceCode` (default) or `password`.


`--username`
: When using `password` authentication, you need to pass the `username` and `password`.


`--password`
: When using `password` authentication, you need to pass the `username` and `password`.


`-f, --folder <folder>`
: The folder location in where you will create your markdown files.


`-u, --url <url>`
: The URL of the site collection to use.


`--library`
: Specified the library which you want to use in SharePoint to store your referenced images.


`--webPartTitle`
: This defined the title of the markdown web part to be created/updated on the page. Default value is: `doctor-placeholder`.

> **Important**: if you would change this value, be sure to keep this in the `doctor.json` file. 


`--overwriteImages`
: Specifies if you allow `doctor` to overwrite the images in the SharePoint library that are referenced in the markdown files.


`--skipPrecheck`
: Skips the pre-checks when running the commands. This validates if you have the right dependencies installed in your environment.

### `doctor.json`

You can provide the same flags and values like in the parameters. Parameters can override what is defined in the `doctor.json`. Be sure to use the whole argument names, and not the shortcodes.

```json
{
  "folder": "./src",
  "url": "https://<tenant>.sharepoint.com/sites/<documentation>",
  ...
}
```

You can also define a static navigation structure in the `doctor.json` file. Example:

```json
{
  "menu": {
    "QuickLaunch": {
      "items": [{
        "id": "documentation",
        "name": "Documentation",
        "url": ""
      }]
    }
  }
}
```

The menu property can contain a `QuickLaunch` and/or `TopNavigationBar` elment with their corresponding static navigation links under the `items` property. More information about navigation items can be found in the [menu section](#Menu).

> **Important**: If you specify arguments during command execution, they will be used instead of the values defined in the `doctor.json` file.

## Navigation

- [Home](../home)
- [Documentation](./documentation)
  - [Options](.)
  - [Installation](./installation)
  - [Page Creation](./page-creation)
  - [Commands](./commands)