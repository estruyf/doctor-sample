---
title: Metadata
slug: tests/metadata.aspx
description: "Every column type doctor can set, on one page"

# The author is SharePoint's own Author column. A site user id (a number) works
# too — see home.md — and so does a principal name, which doctor resolves first.
# Replace it with a user of your tenant.
author: "adele.vance@contoso.onmicrosoft.com"

# Each of these needs a column on the Site Pages library — the README lists them,
# with the settings to create them with. A column which does not exist skips the
# whole page with a warning, so create them all before publishing this one.
metadata:
  # Single line of text and Choice — the two columns the sample always had
  SingleLineText: "Every field type doctor supports"
  Category: "Choice 1"

  # Multiple lines of text
  DocSummary: "Published by doctor to check that each column type is written the way SharePoint expects it."

  # Number and Currency
  DocVersion: 2.3
  DocBudget: 1250.50

  # Yes/No
  DocReviewed: true

  # Choice, with multiple selections allowed
  DocAudience:
    - "Developers"
    - "Editors"

  # Date and time, with a time zone: written in UTC (12:30 here), whatever the
  # time zone of the machine running doctor
  DocReviewDate: "2026-10-15T14:30:00+02:00"

  # Lookup to Site Pages, single and multiple — item ids. 1 and 2 exist on most
  # sites; use the ids of two pages of yours if not
  DocParent: 1
  DocRelated:
    - 1
    - 2

  # Hyperlink, with a description
  DocSource:
    url: "https://github.com/estruyf/doctor"
    description: "doctor on GitHub"

  # Person, single and multiple — principal names of your tenant. Replace them.
  DocOwner: "adele.vance@contoso.onmicrosoft.com"
  DocReviewers:
    - "adele.vance@contoso.onmicrosoft.com"
    - "alex.wilber@contoso.onmicrosoft.com"

  # Managed metadata, single: "HR" is a synonym of "Human Resources", so this
  # also checks that a term can be written by any of its labels
  DocDepartment: "HR"

  # Managed metadata, multiple: "Europe" is in the set twice, so it is written
  # as a path to say which one is meant
  DocTopics:
    - "Regions > Europe"
    - "Finance"

menu:
  QuickLaunch:
    id: metadata
    parent: tests
---

# Metadata

This page sets one column of every type `doctor` supports. Check the page's properties in the Site
Pages library after publishing: every column listed in its front matter should hold the value
written there.

| Column | Type | What it checks |
| --- | --- | --- |
| `SingleLineText` | Single line of text | passed through as is |
| `Category` | Choice | passed through as is |
| `DocSummary` | Multiple lines of text | passed through as is |
| `DocVersion` | Number | a decimal number |
| `DocBudget` | Currency | a decimal amount |
| `DocReviewed` | Yes/No | `true` |
| `DocAudience` | Choice (multiple) | a list, joined with `;#` |
| `DocReviewDate` | Date and time | a time with a zone, written in UTC |
| `DocParent` | Lookup | an item id |
| `DocRelated` | Lookup (multiple) | a list of item ids |
| `DocSource` | Hyperlink | a URL with a description |
| `DocOwner` | Person | a principal name, resolved against the tenant |
| `DocReviewers` | Person (multiple) | every name resolved, or none written |
| `DocDepartment` | Managed metadata | a term found by a synonym |
| `DocTopics` | Managed metadata (multiple) | a duplicate label written as a path |
| `author` | the page's own Author column | a principal name |

When something cannot be set — a column that does not exist, a term that is not in the set, a person
the tenant does not have — the page is skipped as a whole and the warning at the end of the run says
why. [Metadata problems](./metadata-problems.md) does that on purpose.
