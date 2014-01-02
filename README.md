Kudo (for Firebase)[![Build Status](https://travis-ci.org/juristr/firebase-kudos.png?branch=master)](https://travis-ci.org/juristr/firebase-kudos) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
---

This project started as a small, snowy afternoon project with the aim to experiment a little with Jasmine, Firebase, Grunt and Travis-CI integration.

The idea is to give people Kudo support on their own blogs (like [my](http://juristr.com) [Jekyll](http://jekyllrb.com) one) by using a Firebase backend and this script here.

As far as I know, the concept of "Kudos" originally appeared on [Svbtle blogs](https://svbtle.com/).ds

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

Credits have to be given to [Amit Upadhyay](http://amitu.com/2013/04/kudos-using-parse-for-jekyll/) who provided the original Kudo implementation by using [Parse](https://parse.com/) as the backend service.
