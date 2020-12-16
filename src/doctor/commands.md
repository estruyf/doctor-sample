---
title: Commands
slug: doctor/commands.aspx
draft: false

menu:
  QuickLaunch:
    id: commands
    weight: 3
    parent: doctor/documentation
---

## Commands

### Init

This command creates the initial folder structure for your documentation project (Check [#Options](#Options) to see which arguments you can pass to the command).

#### Examples

Initialize a standard project:

```sh
doctor init
```

Initialize a project with your own options:

```sh
doctor init --auth password --username <username> --password <password>
```

### Publish

The publish command starts the creation process of your static content in SharePoint. It will upload all referenced images and creates the navigation structure if provided (Check [#Options](#Options) to see which arguments you can pass to the command).

#### Examples

When using a `doctor.json` file, you can just run the doctor publishing command:

```sh
doctor publish
```

If you want to manually pass your arguments, you can do this as follows:

```sh
doctor publish --url https://<tenant>.sharepoint.com/sites/<documentation>
```

## Navigation

- [Home](../home)
- [Documentation](./documentation)
  - [Options](./options)
  - [Installation](./installation)
  - [Page Creation](./page-creation)
  - [Commands](.)