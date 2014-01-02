Kudo for Jekyll (but not only)[![Build Status](https://travis-ci.org/juristr/kudos-jekyll.png?branch=master)](https://travis-ci.org/juristr/kudos-jekyll) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
---

This project started as a small, snowy afternoon project with the aim to experiment a little with Jasmine, Firebase, Grunt and Travis-CI integration.

The idea is to give people with [Jekyll](http://jekyllrb.com) blogs Kudo support which originally (as far as I know) has been introduced on the [Svbtle blog](https://svbtle.com/) engine.

## Building

Just clone the repo and execute

```
$ npm install
$ grunt
```

This should install the required packages and then compress the required files and copy them to the `dist` directory.

> Note, you need to have `grunt-cli` installed. Execute `npm install -g grunt-cli` in case you don't have it already

## Installation

**Step 1 - Firebase account**  
First you need to create a [Firebase account](https://www.firebase.com/) and to create a new database. You can obviously also reuse an existing one if you want so.

**Step 2 - Include kudo scripts**  
Include the kudo scripts on this site here

```html
<script type="text/javascript" src="vendor/jstorage.js"></script>
<script type='text/javascript' src='https://cdn.firebase.com/v0/firebase.js'></script>
<script type="text/javascript" src="src/kudos.js"></script>
<script type="text/javascript" src="src/kudos.firebase.js"></script>
<link rel="stylesheet" type="text/css" href="src/kudos.css">
```

Note that you need to have jQuery as well.

**Step 3 - Configure Firebase**  
Open `kudos.firebase.js` and change the `firebaseUrl` to have it point to the one you just created in step 1.

```javascript
...
var firebaseUrl = 'https://<yourdb>.firebaseio.com/kudos',
...
```

**Step 4 - Init your kudo element**  
As the last step include the following snippet

```html
<figure class="kudo">
</figure>
```

in your DOM where you'd like to have the kudo element appear and initialize it by invoking

```javascript
$('figure').kudoable();
```

That's it. You should be ready to go.

## Credits

Credits have to be given to [Amit Upadhyay](http://amitu.com/2013/04/kudos-using-parse-for-jekyll/) who provided the original Svbtle independent Kudo implementation by using [Parse](https://parse.com/) as the backend service.
