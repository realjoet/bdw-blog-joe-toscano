{% extends '../layout.swig' %}

{% block content %}
  <h1>{{ title }}</h1>
  <p>Welcome to {{ title }}</p>

	{% if articles.length > 0 %}
		{% for article in articles %}
			<a href="/article/{{ article.id }}" target="_blank"><h2>{{article.title}}</h2></a>
			<h5 class="author">{{article.author}}</h5>
			<p class="summary">{{article.description}}</p>
		{% endfor %}
	{% else %}
		<h2>Sorry sucka!</h2>
	{% endif %}

	<a class="button button-primary" href="/article/create">Create New Article</a>

{% endblock %}