---
title: Metadata problems
slug: tests/metadata-problems.aspx
description: "A page doctor is expected to skip"

# Every value below is wrong on purpose. doctor works the metadata out before it
# writes anything, so this page is skipped whole — never published with new
# content and stale columns — and each problem is named in the warnings at the
# end of the run. It stays out of the publish state, so every run tries again.
metadata:
  # A column the Site Pages library does not have
  DocDoesNotExist: "nothing to set"

  # A term which is not in the term set
  DocDepartment: "Marketing"

  # "Europe" is in the term set twice, so it is ambiguous without a path
  DocTopics:
    - "Europe"

  # One readable entry and one which is not an item id: the column is reported,
  # not written with the one that could be read
  DocRelated:
    - 1
    - "not-an-id"

  # Not a real day
  DocReviewDate: "2026-02-30"

menu:
  QuickLaunch:
    id: metadata-problems
    parent: tests
---

# Metadata problems

You should not be able to read this on SharePoint. `doctor` skips this page, and the end of the
publishing run lists a warning for it, naming each of the problems in its front matter:

- the column `DocDoesNotExist` does not exist;
- `Marketing` is not a term in the set;
- `Europe` matches two terms, and the warning names both paths;
- `not-an-id` is not an item id, so `DocRelated` is not written at all;
- `2026-02-30` is not a date.

Fix one of them and publish again: the warning lists the rest. Fix them all, and the page publishes.
