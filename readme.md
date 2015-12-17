Playing with pjax
===========

[Pjax library URL](https://github.com/defunkt/jquery-pjax)

[Pjax demo](http://pjax.herokuapp.com/)

###About

Pjax allows you to load the HTML of an another page into your current page WITHOUT completely refreshing the page. It does this by grabbing the HTML from your server via [ajax](http://www.w3schools.com/ajax/) then loading that HTML into the page wherever you want it to go.

It then changes the browser's URL to its new URL using [pushState](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState). This does not require the page to reload its assets, include CSS, JS and image files.

###Project layout

Within the project directory is my demo of using pjax.

* index.html: This is where the demo occurs. In this file, I've created a navbar at the top of the page using Bootstrap and a container. Within the navbar are links to all the HTML pages that are in the sub-pages directory. These HTML pages will be loading inside the container without reloading the page.

* sub-pages: In this directory are all the HTML pages that will be put inside the container within index.html.

###Calling pjax

Inside js/script.js is the initialization of pjax.

A basic set up with super easy. The first parameter in the call below are the links within the navbar we want to open up the HTML of the subpages. The second parameter is the container on the page where we want to put the HTML:

```javascript
$(document).pjax('.nav li a', '#pjax-container')
```

That's it.

###Compatibility

