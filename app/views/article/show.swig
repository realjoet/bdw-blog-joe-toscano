{% extends '../layout.swig' %}

{% block content %}
		<h2 class="title">{{article.title}}</h2>
		<div class="content">{{article.description}}</div>
		<a class="button button-primary" href="/article">back</a>
		<a class="button" href="/article/{{ article.id }}/edit">edit</a>
{% endblock %}