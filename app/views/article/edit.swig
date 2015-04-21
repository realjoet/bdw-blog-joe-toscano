{% extends '../layout.swig' %}

{% block content %}
	<form action="/article/{{ article.id }}" method="post">
		<label for="title">Title</label>
			<input id="title" class="u-full-width" type="title" value="{{ article.title }}" name="title">

		<label for="post">Post</label>
			<textarea id="post" class="u-full-width" placeholder="" name="description" cols="30" rows="10"></textarea>

		<input class="button-primary" type="submit" value="Submit">
		<a class="button" href="/article/{{ article.id }}">back</a>
	</form>
{% endblock %}