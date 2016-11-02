# TAW2016 Hands-on Workshop

## Setting up the workspace

Create a workspace and choose the Github project as the base. The project is
at `https://github.com/SirIle/es2017-sequelize-demo.git`.

To initialize the Cloud9 workspace use the console to run

~~~bash
scripts/init.sh
~~~

The script will ask for a password when it's decrypting the Docker Datacenter
Client bundle, you will receive the password from the instructors.

After that the Docker environment needs to be set in the shell, do that with

~~~bash
cd files && eval $(<env.sh) && cd ..
~~~

Then try `docker ps` to check that the connection to Datacenter works. You
should see some running containers listed.

## Building the example application

Building the container out of the application is done with

~~~bash
npm run container
~~~

## Running the container and testing it

Running the container on DDC is done with

~~~bash
npm run startcontainer
~~~

Then it can be accessed from a url that's based on the C9 username, for example

~~~bash
curl http://sirile-users.apps.containercluster.net/users/user1
~~~

Replace `sirile` with the correct Cloud9 user name.

## Setting up the database

This needs to be done only once as the participants are sharing the same
database instance. Under *config/sequelize.json* make sure that the IP address
of the database under the *development* is correct. After that the database
can be started and test data inserted with

~~~bash
npm run db
~~~

The test data can be reset with

~~~bash
npm run resetdb
~~~

Also a tool like Sequel Pro can be used to connect to the database. The userid
and password can be found from *config/sequelize.json*.

## Things to do

TODO:
-   Figure out a good hands-on change to the application
