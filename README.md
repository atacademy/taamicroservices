![logo](TAD.png)
# TechArch Academy Microservices 
Initial setup
------------
### Cloud9 setup

Cloud9 login information has been sent to your email that you gave during the signup. If this is not the case, please contact the staff. 🙂

Use following information to build your dockerized cloud IDE:

| Field        	| Required value |
| ------------- 	|:-------------:| 
| Project Name  	| taamicroservices |
| Team      		| Accenture TechArch Academy      | 
| Type 			| Hosted workspace    	|
| Privacy			| Public |
| Clone Origin	| https://github.com/atacademy/taamicroservices |
| Template		| NodeJS |

Run following script and the workspace will initialize itself:

~~~bash
scripts/init.sh
~~~

The script will ask for a password when it's decrypting ucp-bundle for [Amazon RDS](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html) access details, **you will receive the password from the instructors**.

The script will automatically create a database with your C9 username, but you are required to update *sequelize.json* with the corresponding information in the next step.

### Database setup

[Sequelize](http://docs.sequelizejs.com/en/v3/) provides ORM for this  application. Check *config/sequelize.json* to make sure that the *development* configuration is correctly pointing to Amazon RDS.

Change
```
<C9_username>_db
```
into your username + _db.

After that the database
can be started and test data inserted with

~~~bash
npm run db
~~~

The test data can be reset with

~~~bash
npm run resetdb
~~~

Also a tool like [Sequel Pro](https://www.sequelpro.com/) or [SQLSquirrel](http://squirrel-sql.sourceforge.net/) can be used to connect to the database. The userid
and password can be found from *config/sequelize.json*.

Starting the example application
---------------------------------
The example application can be started with

~~~bash
npm start
~~~
Now you will see on the console that [restify](http://restify.com/) is listening localhost:8080.

It is good to know that only ports 8080, 8081 and 8082 are open in Cloud9 environments.

These applications will be hosted at 
```
<project_name>-<C9_username>.c9users.io
```


Running tests
-------------------------
[Chai](http://chaijs.com/) and [mocha](https://mochajs.org/) -based tests can be run with

~~~bash
npm test
~~~

### Running test line coverage

[istanbul](https://istanbul.js.org/) provides test line coverage reports and it can be run with

~~~bash
npm run coverage
~~~

After that the reports can be found from under *coverage/lcov-report* folder,
open the *index.html* with an integrated C9 browser/preview.

Hands on exercises
----------------------

### 1. Code coverage

Run and check the code coverage. Check what isn't covered in the *users* service
and add a test for the missing functionality to increase the coverage.

### 2. New field in the database

During the exercise a new field is introduced into the database. Add the field
to the model and ensure that the information is correctly relayed to the caller.

### 3. Implement a new endpoint

A new requirement from the client arrives: they need to be able to query
users based on the first name. Add a new endpoint and its functionality. Don't forget the tests!

## **Good luck and ask for help if you get stuck! 🙂**

-------------------------------------------
--------------------------------


Hungry for more? Maybe you should give this file a closer look...

<!--
##OPTIONAL 
##REQUIRES HOSTING OUTSIDE CLOUD9
Docker Datacenter configuration
===============================
###C9 setup

Create a NodeJS workspace and choose the Github project as the base. The project hosted
at `https://github.com/SirIle/es2017-sequelize-demo`.

To initialize the Cloud9 workspace use the console to run

~~~bash
scripts/initddc.sh
~~~

The script will ask for a password when it's decrypting the Docker Datacenter
Client bundle, **you will receive the password from the instructors**.

After that the Docker environment needs to be set in the shell, do that with

~~~bash
cd files && eval $(<env.sh) && cd ..
~~~

Then try `docker ps` to check that the connection to Datacenter works. You
should see some running containers listed.

Building the example application
--------------------------------

Building the container and running it is done with

~~~bash
npm run containers
~~~

if you want to force a rebuild, it can be done with

~~~bash
npm run containers -- --build
# or
docker-compose build
~~~

Then use your C9 username to access the application URL

~~~bash
curl -i http://$C9_USER-users.apps.containercluster.net/users/user1
~~~

That can also be used in a browser, for example [http://sirile-users.apps.containercluster.net/users/user1](http://sirile-users.apps.containercluster.net/users/user1).

Scaling the number of containers
---------------------------------

Scaling the containers can be done with

~~~bash
npm run scale users=3
~~~

### Stopping the containers

Containers can be stopped with

~~~bash
npm stop
~~~

The command also removes the containers.

-->




