---
pagination:
    data: tools
    size: 1
    alias: tool
    addAllPagesToCollections: true
tags: tools
layout: base.html
permalink: "/tool/{{ tool.Name | slugify }}/"
templateEngineOverride: md, liquid
eleventyComputed:
    title: "{{ tool.Name }}"
    desc: "{{ tool.MetaDescription }}"
---

{{ tool.ShortDescription }}

![{{ tool.Title }}]({{ tool.Screenshot }})

## Usecases for {{ tool.Name }}

{{ tool.UseCases }}