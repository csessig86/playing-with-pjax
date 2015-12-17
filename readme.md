Playing with pjax
===========

[Pjax library URL](https://github.com/defunkt/jquery-pjax)

[Pjax demo](http://pjax.herokuapp.com/)

[My demo](http://csessig86.github.io/playing-with-pjax/)

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

###Refresh the page

If you want to refresh the current page you are on using pjax, use the following:

```javascript
$.pjax.reload('#pjax-container')
```


###Calling without clicking

What if you want to call pjax without clicking on a link? For instance, say you want to call it as you scroll down the page. Well you can manually invocate pjax like so:

$.pjax({
	url: url,
	container: '#pjax-container'
})

### Rails

You need to install the pjax_rails. For information on installing pjax within your Rails app on their [Github page](https://github.com/rails/pjax_rails).

Here's the controller code you'll need to add:

```javascript
def index
  if request.headers['X-PJAX']
    render :layout => false
  end
end
```

###Compatibility

Browsers need to pushState for pjax to work. So IE 9 is out.

The pjax Github page has information for [testing](https://github.com/defunkt/jquery-pjax#compatibility) if your browser is compatible.
