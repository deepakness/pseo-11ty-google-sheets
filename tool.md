---
layout: base.html
title: Cool Tools
pagination:
    data: collections.tools
    size: 3
    alias: tools
---

Here's a collection of some cool tools that you can use:

<div>
    {% for tool in tools %}

    <article>
        <h3><a href="{{ tool.url }}">{{ tool.data.title }}</a></h3>
        <p>{{ tool.data.desc }}</p>
        <a href="{{ tool.url }}" role="button">Explore</a>
    </article>

    {% endfor %}

    {% if pagination.href.next %}
        <a class="contrast" role="button" href="{{ pagination.href.next }}">Next →</a>
    {% endif %}
    {% if pagination.href.previous %}
        <a class="contrast" role="button" href="{{ pagination.href.previous }}">← Previous</a>
    {% endif %}
</div>