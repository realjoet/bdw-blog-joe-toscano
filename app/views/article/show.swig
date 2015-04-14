{% extends '../layout.swig' %}

{% block content %}
	{% for article in articles %}
		<h2 class="title">{{article.title}}</h2>
		<div class="content">{{article.content}}</div>
	{% endfor %}
{% endblock %}