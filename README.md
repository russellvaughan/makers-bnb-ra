Makers BnB Rails and Angular
============================

Description

It's BnB app built using Rails on the backend and AngularJS on the frontend.

Team Members

Eduardo M. Sanchez Delgado https://github.com/hedudelgado
Russel Vaugham https://github.com/russellvaughan
Matt Gough https://github.com/MattGough
Mark Hill

AngularJS
Ruby on Rails
Installation Instructions

Clone the repo

In one command line, makersBnB folder, run:
-------------------------------------------

bundle install
rake db:create
rake db:migrate
npm install bower -g
rake bower:install
rake routes to see the different path of the Api
rails s the launch it!

Then..
------
Go to http://localhost:3000 (or any other path the Api use) in your browser, make sure the server is running.

Testing Instructions
----------------------

RSpec (unit and feature tests gem)

run in command line (no need to have the server running)
rails g rspec:install
rspec



JavaScript/Angular - testing
-----------------------------

Make sure the rails server is running for testing angular as they interact within the end to end tests(e2e)

for  JavaScript/Angular - e2e tests run:

Make sure you are in Frontend directory.

npm install
rails s (separate command line)
npm run Protractor



For running and check the app make sure you have the Rails and Angular severs running in different command lines, then in your brower visit:
For rails http://localhost:3000 
For Angularjs http://localhost:8000 