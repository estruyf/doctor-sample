---
title: Mermaid
slug: tests/mermaid.aspx

menu:
  QuickLaunch:
    id: mermaid
    parent: tests
---

# Mermaid diagrams

`doctor` draws Mermaid diagrams while it publishes and uploads them to a `mermaid` folder in the
asset library, so they show on the page as images — with their colours, and without any script.

## A flowchart with styles

The `style` lines have to survive, which they do because the diagram is an uploaded file rather than
inline SVG that SharePoint would clean up.

<mermaid alt="How a page gets published">
flowchart TD
    A[Write docs in Markdown] --> B[Run doctor publish]
    B --> C{Front matter valid?}
    C -->|Yes| D[SharePoint page updated]
    C -->|No| E[Page skipped with a warning]
    E --> A
    style A fill:#e1f5fe,stroke:#0288d1,stroke-width:2px
    style D fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px
    style E fill:#ffebee,stroke:#c62828,stroke-width:2px
</mermaid>

## A sequence diagram

The `&lt;` entity is how a `<` gets into a diagram, as the shortcode is read as HTML.

<mermaid>
sequenceDiagram
    participant D as doctor
    participant S as SharePoint
    D->>S: Is the page there?
    S-->>D: Yes, id 12
    D->>S: Save the canvas
    Note over D,S: the page is published &lt;br/&gt; after its metadata
</mermaid>

## A mindmap

Mindmaps can be added too. `doctor` draws them during the publish like the other diagrams, with
each label centred on its node, whatever shape that node has.

<mermaid>
mindmap
  root((doctor))
    Pages
    Navigation
    Metadata
</mermaid>
