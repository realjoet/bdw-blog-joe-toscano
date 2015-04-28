{% extends '../layout.swig' %}

{% block content %}
	<h5>Let's create an Article!</h5>

	<form action="/article/list" method="post">
		<label for="title">
			<input id="title" class="u-full-width" type="title" value="{{ article.title }}" name="title">
		</label>
		<label for="description">
			<textarea id="description" class="u-full-width" placeholder="" name="description" cols="30" rows="10">{{ article.description }}</textarea>
		</label>
		<label for="content">
			<textarea id="content" class="u-full-width" placeholder="" name="content" cols="30" rows="10">{{ article.content }}</textarea>
		</label>

		<input class="button-primary" type="submit" value="Submit">
		<a class="button" href="/article/list">back</a>
	</form>
{% endblock %}