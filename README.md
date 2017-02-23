Hello, This is the front end Repo for How Many Meeples, an app for logging plays of your favorite board games.  The app will let users define games and log, view, and update play sessions of them by contacting a rails API.  I started this project by creating and testing my back end tables, and then creating the routes to access them through the browser, using HTML/CSS, JavaScript, JQuery, and Handlebars.  I never hit any insurmountable problems, but I did have to reign my project back because of time requirements - I was not able to do as much data manipulation with my project as I would have liked.

The next step for this project is a useability one: I started to redefine the list of games in a separate variable that is set on log in.  From there I want to use handlebars to create a drop-down menu for choosing a game when logging and updating a session.  I'd love to migrate the button functionality (Get Game, Get Sessions) to just show on clicking the link rather than having the button approach that exists now.  The large data manipulation points I have not yet managed to hit are: average scores for a game across all counts, your average scores for games, and average scores for games based on the number of players who were present in that play session.

My original user stories and wireframes can be found here:
http://i.imgur.com/hI33Ye4.jpg

My ERD diagram can be found here:
http://i.imgur.com/DUazS3t.jpg

The app can be accessed here:
https://dsweetser.github.io/HMM-Front/

The repo for the backend API can be found here:
https://github.com/dsweetser/HMM-API
