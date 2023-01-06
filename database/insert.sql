-- iINSERTING DUMMY DATA INTO DATBLES

-- INSERT INTO AIRPLANE TABLE
INSERT INTO airplane(manufacturer, model_number, model_name, image_link) VALUES('Boeing Commercial', 'MAX 10', 'Boeing 737', 'https://www.boeing.com/resources/boeingdotcom/commercial/737max10/assets/images/gallery/gallery-full-0.jpg'),
 ('Boeing Commercial', '300','Boeing 757', 'https://www.skytamer.com/1.2/2011/20111008-051.jpg'), 
 ('Airbus', '800', 'Airbus A380', 'https://airbus-h.assetsadobe2.com/is/image/content/dam/products-and-solutions/formation-flight/Airbus-50th-years-anniversary-formation-flight-take-off-015.jpg?wid=991&fit=fit,1&qlt=85,0');

-- INSERT INTO STAFF TABLE
INSERT INTO staff(surname, given_name, address, telephone, salary, category)
VALUES('Carlton', 'Vanessa', '221B Baker Street, London, UK.', '7873176656', 3500, 'Hostess'),
 ('Drury', 'Thomas', '121 Crawley Road, London UK.', '7872287767', 6000, 'Pilot'),
 ('Ferguson', 'Rebecca', '221B Baker Street, London, UK.', '7871398878', 3500, 'Hostess'),
 ('Edmonton', 'Thomas', '21B Watson Street, Salford, UK.', '7870409987', 6000, 'Pilot'),
 ('Swinton', 'Matilda', '54A Jameson Road, Staffordshire, UK.', '7875154434', 3500, 'Hostess'),
 ('Jefferson', 'Peter', '23A Goodison Street, Newcastle, UK.', '7876043323', 6000, 'Pilot'),
 ('Granger', 'Caroline', '75B Robertson Street, London, UK.', '7877932212', 3500, 'Hostess'),
 ('Wilcock', 'Alfred', '35A Clinton Road, Sunderland, UK.', '7878821101', 6000, 'Pilot'),
 ('Murray', 'Sheeba', '40B Alison Street, Hertfordshire, UK.', '7879710090', 3500, 'Hostess'), 
 ('Mohammad', 'Moin', '45A Patridge Road, Manchester, UK.', '7880609989', 6000, 'Pilot');


-- INSERT INTO RATING TABLE
INSERT INTO rating(rating)
VALUES(3), (4), (3), (5), (4), (5), (3), (4), (5), (4);


-- INSERT INTO PILOT TABLE
INSERT INTO pilot(rating_id, airplane_id, staff_id)
VALUES(1, 1, 2), (2, 2, 4), (3, 3, 6), (4, 1, 8), (5, 2, 10);


-- INSERT INTO PASSENGER TABLE
INSERT INTO passenger(surname, given_name, address, telephone)
VALUES('Chukwuma', 'Vanessa', '5 Lincoln Street, BrentFord, UK.', '7873798878'),
 ('Djawadi', 'Ramin', '121 Crawley Road, London UK.', '7872287760'),
 ('Ferguson', 'Alex', '221B Baker Street, London, UK.', '7871398879'),
 ('Edmonton', 'Thomas', '21B Watson Street, Salford, UK.', '7870409988'),
 ('Swinton', 'Matilda', '54A Jameson Road, Staffordshire, UK.', '7875154435'),
 ('Jefferson', 'Sheela', '23A Goodison Street, Newcastle, UK.', '7876043324'),
 ('Granger', 'Hermoine', '75B Robertson Street, London, UK.', '7877932213'),
 ('Wilcock', 'John', '35A Clinton Road, Sunderland, UK.', '7878821102'),
 ('Murray', 'Ben', '40B Alison Street, Hertfordshire, UK.', '7879710091'), 
 ('Mohammad', 'Fatima', '45A Patridge Road, Manchester, UK.', '7880609980');

-- INSERT INTO FLIGHT TABLE
INSERT INTO flight(origin, destination, flight_date, staff_id, airplane_id, passenger_id, pilot_id)
VALUES('London', 'Chicago', '2023-01-09', 1, 1, 1, 2),
('Newcastle', 'Los Angeles', '2023-01-09', 3, 2, 2, 4),
('Chicago', 'London', '2023-01-10', 1, 1, 1, 2),
('Los Angeles', 'NewCastle', '2023-01-10', 3, 2, 2, 4),
('Manchester', 'New York', '2023-01-11', 5, 3, 3, 6),
('Liverpool', 'Washington DC', '2023-01-11', 7, 1, 4, 8),
('New York', 'Manchester', '2023-01-12', 5, 3, 3, 6),
('Washington DC', 'Liverpool', '2023-01-12', 7, 1, 4, 8),
('Birmingham', 'Florida', '2023-01-12', 9, 2, 5, 10), 
('Bournemouth', 'New Jersey', '2023-01-12', 1, 3, 6, 2);

--INSERT INTO CITY TABLE
INSERT INTO city(city_name, flight_id, arrival_time, departure_time) 
VALUES('London', 11, '07:30:00', '07:30:00'), 
('Chicago', 12, '09:30:00', '05:30:00'),
('Newcastle', 13, '07:30:00', '07:30:00'),
('Los Angeles', 14, '09:30:00', '05:30:00'),
('Manchester', 15, '07:30:00', '07:30:00'), 
('New York', 16, '09:30:00', '05:30:00'),
('Liverpool', 17, '07:30:00', '07:30:00'), 
('Washington DC', 18, '09:30:00', '05:30:00'),
('Birmingham', 19, '07:30:00', '07:30:00'),
('Florida', 20, '09:30:00', '05:30:00');

-- INSERT INTO BOOKING TABLE
INSERT INTO booking(surname, given_name, address, telephone, origin, destination, flight_date, seat_count, price)
VALUES('Chukwuma', 'Vanessa', '5 Lincoln Street, BrentFord, UK.', '7873798878', 'London', 'Chicago', '2023-01-09', 1, 200),
 ('Djawadi', 'Ramin', '121 Crawley Road, London UK.', '7872287760', 'Newcastle', 'Los Angeles', '2023-01-09', 1, 230),
 ('Chukwuma', 'Vanessa', '5 Lincoln Street, BrentFord, UK.', '7873798878','Chicago', 'London', '2023-01-10', 1, 200),
 ('Djawadi', 'Ramin', '121 Crawley Road, London UK.', '7872287760', 'Los Angeles', 'NewCastle', '2023-01-10', 1, 230),
 ('Swinton', 'Matilda', '54A Jameson Road, Staffordshire, UK.', '7875154435', 'Manchester', 'New York', '2023-01-11', 1, 250),
 ('Jefferson', 'Sheela', '23A Goodison Street, Newcastle, UK.', '7876043324', 'Liverpool', 'Washington DC', '2023-01-11', 1, 240),
 ('Swinton', 'Matilda', '54A Jameson Road, Staffordshire, UK.', '7875154435', 'New York', 'Manchester', '2023-01-12', 1, 250),
 ('Jefferson', 'Sheela', '23A Goodison Street, Newcastle, UK.', '7876043324', 'Washington DC', 'Liverpool', '2023-01-12', 1, 240),
 ('Murray', 'Ben', '40B Alison Street, Hertfordshire, UK.', '7879710091', 'Birmingham', 'Florida', '2023-01-12', 1, 190), 
 ('Mohammad', 'Fatima', '45A Patridge Road, Manchester, UK.', '7880609980', 'Bournemouth', 'New Jersey', '2023-01-12', 1, 200);