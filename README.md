## Demo site

- You can visit the demo site from [HERE](https://airline-production.up.railway.app/)


## Setup Guide on your local device

### Database setup

#### Windows

Install [mysql](https://www.mysql.com/) in the local machine and setup correctly. Use following command to login to the `mysql` shell as mysql user.Use the following command on terminal

```bash
mysql -U root -p
```
 Then enter the root user password you used during the installation.

 Then enter below commands.

```sql
CREATE USER 'godwin'@'localhost' IDENTIFIED BY 'GodwinIdeho2#';
GRANT ALL PRIVILEGES ON * . * TO 'godwin'@'localhost';
FLUSH PRIVILEGES;
\q
```

Then login to `mysql` as `godwin`.

```bash
mysql -U godwin -p
```
Then enter the password `GodwinIdeho2#`.

Next create the database `airline` and switch to it.

```sql
CREATE DATABASE airline;
USE airline;
\q
```

Download `database` directory from this repo and then in the shell,
import the current DDL and DML schema. Here give the full path to the schema

```sql
\i 'C:/Users/...server/database/schema.sql'
\q
```

Check MySQL workbench after using the user godwin and password for the user to connect to the mysql server

Then click on the schemas button at the bottom left of the mysql workbench after a successful connection has been created and you should see 
a list of the databases on the server. Click on the database`airline`. Then expand it go to Tables to see the list of the tables in the database.

Once that is done and working accordingly you can also get the INSERT queries from the database directory to populate your tables with dummy data.

Now you are done with the database setup.



### Node.js setup

First clone this project directory.

```bash
git clone [your github project link]
```

Install

* [node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/get-npm)
* [nodemon](https://www.npmjs.com/package/nodemon)



 After that go to the project directory and run `npm install`.

```bash
cd directory/project
npm install
```

Then create a `.env` file in the server directory with following content.
You may change database user/password/secret as you may wish.

```text
INSTANCE_HOST='localhost'
DB_PORT='3306'
DB_NAME='airplane'
DB_USER='godwin'
DB_PASS='GodwinIdeho2#'
```

Then use the start command to serve the pages.

```bash
npm start 
```

Now visit <http://localhost:3000/> and confirm that site is running.