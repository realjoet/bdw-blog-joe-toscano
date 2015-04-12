{% extends '../layout.swig' %}

{% block content %}
	{% if article.posts.length > 0 %}
		{% for article in articles.posts %}
			<h2 class="title">{{article.title}}</h2>
			<div class="content">{{article.content}}</div>
			}
		{% endfor %}
	{% else %}

	{% endif %}
{% endblock %}