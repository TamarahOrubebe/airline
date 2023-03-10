--  CREATION OF TABLES

START TRANSACTION;

DROP TABLE IF EXISTS staff;
CREATE TABLE staff (
    id INT AUTO_INCREMENT,
    surname VARCHAR(50),
    given_name VARCHAR(50),
    address VARCHAR(250),
    telephone VARCHAR(50),
    salary DECIMAL,
    category VARCHAR(50),
    PRIMARY KEY(id)
   );

DROP TABLE IF EXISTS passenger;
CREATE TABLE passenger (
    id INT AUTO_INCREMENT,
    surname VARCHAR(50),
    given_name VARCHAR(50),
    address VARCHAR(250),
    telephone VARCHAR(50),
    PRIMARY KEY(id)
   );

DROP TABLE IF EXISTS airplane;
CREATE TABLE airplane (
    id INT AUTO_INCREMENT,
    manufacturer VARCHAR(50),
    model_name VARCHAR(50),
    model_number VARCHAR(50),
    numnber_of_seats INT,
    PRIMARY KEY(id)
   );

DROP TABLE IF EXISTS rating;
   CREATE TABLE rating (
    id INT AUTO_INCREMENT,
    rating TINYINT,
    PRIMARY KEY(id)
   );

DROP TABLE IF EXISTS pilot;
   CREATE TABLE pilot(
    id INT AUTO_INCREMENT,
	staff_id INT,
	rating_id INT,
    airplane_id INT,
    PRIMARY KEY(id),
    FOREIGN KEY(staff_id) REFERENCES staff(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(rating_id) REFERENCES rating(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(airplane_id) REFERENCES airplane(id) ON DELETE CASCADE ON UPDATE CASCADE
   );

DROP TABLE IF EXISTS flight;
    CREATE TABLE flight(
        id INT AUTO_INCREMENT,
        origin VARCHAR(70) NOT NULL,
        destination VARCHAR(70) NOT NULL,
        flight_date DATE NOT NULL,
        staff_id INT,
        airplane_id INT,
        passenger_id INT,
        pilot_id INT,
        arrival_time TIME NOT NULL,
        departure_time TIME NOT NULL,
        PRIMARY KEY(id),
        FOREIGN KEY(staff_id) REFERENCES staff(id) ON DELETE CASCADE ON UPDATE CASCADE,
        FOREIGN KEY(airplane_id) REFERENCES airplane(id) ON DELETE CASCADE ON UPDATE CASCADE,
        FOREIGN KEY(passenger_id) REFERENCES passenger(id) ON DELETE CASCADE ON UPDATE CASCADE,
        FOREIGN KEY(pilot_id) REFERENCES pilot(id) ON DELETE CASCADE ON UPDATE CASCADE
    );

DROP TABLE IF EXISTS city;
   CREATE TABLE city(
    id INT AUTO_INCREMENT,
	city_name VARCHAR(70),
    flight_id INT,
	arrival_time TIME NOT NULL,
    departure_time TIME NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(flight_id) REFERENCES flight(id)  ON DELETE CASCADE ON UPDATE CASCADE
   );

   

DROP TABLE IF EXISTS booking;
   CREATE TABLE booking(
    id INT AUTO_INCREMENT,
	surname VARCHAR(50),
    given_name VARCHAR(50),
    address VARCHAR(50),
    telephone VARCHAR(50),
	origin VARCHAR(70) NOT NULL,
    destination VARCHAR(70) NOT NULL,
    flight_date DATE NOT NULL,
    booking_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    seat_count INT,
    price DECIMAL NOT NULL,
    PRIMARY KEY(id)
   );

COMMIT;