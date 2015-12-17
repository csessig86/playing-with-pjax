#Playing with pjax

[Pjax library URL](https://github.com/defunkt/jquery-pjax)

[Pjax demo](http://pjax.herokuapp.com/)

###About

Pjax allows you to load the HTML of an another page into your current page WITHOUT completely refreshing the page. It does this by grabbing the HTML from your server via [ajax](http://www.w3schools.com/ajax/) then loading that HTML into the page wherever you want it to go.

It then changes the browser's URL to its new URL using [pushState](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState). This does not require the page to reload its assets, include CSS, JS and image files.

###Project

Within the project directory is my demo of using pjax.

* index.html: In this file, i've created a navbar at the top of the page using Bootstrap. Within this navbar are links to

* sub-pages: In this file, i've created a navbar at the top of the page using Bootstrap. Within this navbar are links to 