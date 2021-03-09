---
title: Doctor Documentation
slug: doctor/documentation.aspx
draft: false
layout: Home

comments: false

menu:
  QuickLaunch:
    name: Documentation
    id: documentation
    parent: doctor
---

# Doctor Documentation

`Doctor` was originally created for having a uniformal way of providing the documentation internally at Valo Solutions. The main driver for `doctor` was to dogfood the Valo products and make it easier for users to maintain documenation on SharePoint.

As we understand that it is not the best experience for developers to write documentation on SharePoint, we created this tool to simplify the process. `Doctor` allows developers to use tools/applications they are used to, like VSCode and Markdown, and still provide the information on your SharePoint environment.

`Doctor` follows the concept of many Static Site Generators. These generators make it possible to write your articles/documentation in Markdown and convert them to HTML files. 

`Doctor` is a bit different, as instead of creating HTML files, it makes SharePoint pages instead. 

Under the hood, it makes use of the [CLI for Microsoft 365](https://pnp.github.io/cli-microsoft365/).

> Today `doctor` is maintained by `Elio Struyf`.

## Navigation

- [Home](../home)
- [Documentation](.)
  - [Options](./options)
  - [Installation](./installation)
  - [Page Creation](./page-creation)
  - [Commands](./commands)