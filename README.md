

<p align="center">
  <img src="http://formatjs.io/img/react.svg"  height="242" width="242"/>
</p>
#My uber isomorphic web app:

##What is this?
This is an opinionated flux isomorphic starter app using Marty.js. 

*Keep in mind this web app is a work still in progress.*

##Where did this come from?
I took an existing repo and made it totally isomorphic and awesome.

##Why?
Because I wanted to use the same files for both the web app frontend and web app backend.
Running stuff on the front end takes all the load off from our back end. But I want my server to be able to server other routes as well, not just the / route.
Thus isomorphic apps were born.

##What I use this with?

I use this with my own API backend server (made with sails.js) (since I prefer the API backend to ALWAYS BE seperated from the app front end - thats were the industry is heading at the moment)
In the future I will also create a mobile app for this project. It will use the exact same API.

##Details:

####What loader do I use?

Note that I did not use Gulp or Grunt in purpose. Initially I used browserify + grunt and later on gulp.
[Finally I chose webpack and npm scripts. ](http://blog.keithcirkel.co.uk/why-we-should-stop-using-grunt/)I love scripts more than anything anyway.

####What happens when I start the project.

On this project there are basically 2 entry points (and also 2 webpack config files):

* Wep app server entry point:
`/bin/serverEntryPoint.js`
* Browser entry point:
`/app/index.js`

What happens on the background is, webpack gets the server files from `/app/server/serverEntryPrototype.js` converts it using webpack and dumps the file to `/bin/serverEntryPoint.js`. Then we start our express server (and a special proxy) using this file.

Then another webpack process takes the same files (since the site is isomorphic) starting at `/app/index.js`, fires up a hot reloading server (based on our special proxy) and serves the files.




## Installation
```
npm install
npm start
open http://localhost:8080
```

**Important: Keep in mind that in order for this project to operate you must have an api backend up and running. (I use my trusty sails.js for that).**

#### API Backend routes

Those are some of my API basic routes that this project uses. 

	//Curently
	'POST /self'
	'POST /logout'
	'POST /login'
	'POST /login/:action'
	'POST /auth/local'
	'POST /auth/local/:action'
	'POST /signup'
	'POST /signup/verify'
	'POST /changeCredentials/:action'
	
	// Near future
	'* /auth/:provider'
	'* /auth/:provider/callback'
	'* /auth/:provider/:action'


