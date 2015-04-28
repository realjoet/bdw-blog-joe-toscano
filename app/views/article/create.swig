{% extends '../layout.swig' %}

{% block content %}
	<h5>Let's create an Article!</h5>

	<form action="/article/create" method="post">
		<label for="title">Title
			<input id="title" class="u-full-width" type="title" name="title">
		</label>
		<label for="description">Description
			<textarea id="description" class="u-full-width" placeholder="" name="description" cols="30" rows="5"></textarea>
		</label>
		<label for="content">Content
			<textarea id="content" class="u-full-width" placeholder="" name="content" cols="30" rows="40"></textarea>
		</label>

		<input class="button-primary" type="submit" value="Submit">
		<a class="button" href="/article/list">back</a>
	</form>
{% endblock %}