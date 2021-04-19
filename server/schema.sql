CREATE SEQUENCE c_id_sequence
  MINVALUE 10001
  MAXVALUE 99999999
  START WITH 10001
  INCREMENT BY 1
  CACHE 20;

--------////-------

CREATE SEQUENCE a_id_sequence
  MINVALUE 100011
  MAXVALUE 9999999
  START WITH 100011
  INCREMENT BY 1
  CACHE 20;

----///-----

CREATE SEQUENCE b_id_sequence
  MINVALUE 101
  MAXVALUE 9999999999
  START WITH 101
  INCREMENT BY 1
  CACHE 20;

--- /// ----

CREATE SEQUENCE t_id_sequence
  MINVALUE 1001
  MAXVALUE 9999999999
  START WITH 1001
  INCREMENT BY 1
  CACHE 20;

------Table--------

create table EMP_LOGIN
(
	username varchar(100),
	user_password varchar(100)
	
);


create table customer 
(
	customer_id integer NOT NULL,
	name VARCHAR(50) NOT NULL,
	phone VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL,
	house_no VARCHAR(50) NOT NULL,
	city VARCHAR(50) NOT NULL,
	zipcode VARCHAR(50) NOT NULL,
	username varchar(50) unique not null,
	password varchar(50) not null,
	primary key (customer_id)
);


INSERT INTO CUSTOMER 
(customer_id,name,phone,email,house_no,city,zipcode)
VALUES
(NEXTVAL('c_id_sequence'),'Mahade','01671648062','undefinedmahade@gmail.com','Q5','Dhaka','1207');

INSERT INTO CUSTOMER 
(customer_id,name,phone,email,house_no,city,zipcode)
VALUES
(NEXTVAL('c_id_sequence'),'Riad','0173832700','riad566@gmail.com','370/371','Dhaka','1217');




CREATE TABLE ACCOUNTS
(	
	account_id integer NOT NULL,
	customer_id integer NOT NULL,
	date_opened DATE NOT NULL,
	current_balance FLOAT ,

	PRIMARY KEY (account_id),
	FOREIGN KEY (customer_id) REFERENCES CUSTOMER(customer_id) ON UPDATE CASCADE ON DELETE CASCADE
);

INSERT INTO ACCOUNTS 
(account_id, customer_id, date_opened,current_balance)
VALUES
(NEXTVAL('a_id_sequence'), 10001,'18-Feb-2016',50000);

INSERT INTO ACCOUNTS 
(account_id, customer_id, date_opened,current_balance)
VALUES
(NEXTVAL('a_id_sequence'), 10002,'20-Feb-2016',95000);


CREATE TABLE BRANCH
( 
	branch_id INTEGER NOT NULL,
	name varchar(50) NOT NULL,
	house_no VARCHAR(50) NOT NULL,
	city VARCHAR(50) NOT NULL,
	zip_code VARCHAR(50) NOT NULL,

	primary key (branch_id)
);

INSERT INTO BRANCH VALUES (NEXTVAL('b_id_sequence'),'Malibagh','M502', 'Dhaka', '1217');
INSERT INTO BRANCH VALUES (NEXTVAL('b_id_sequence'),'Mohammadpur','M555', 'Dhaka', '1207');



CREATE TABLE TRANSACTION 
(
	transaction_id integer NOT NULL,
	account_id integer NOT NULL,
	branch_id integer NOT NULL,
	date_of_transaction DATE NOT NULL,
	amount FLOAT(20) NOT NULL,
	action VARCHAR(20), 
	primary key (transaction_id),
	FOREIGN KEY (account_id) REFERENCES ACCOUNTS(account_id) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (branch_id) REFERENCES BRANCH(branch_id)  ON UPDATE CASCADE ON DELETE CASCADE
);


INSERT INTO TRANSACTION VALUES (NEXTVAL('t_id_sequence'),100011,101,CURRENT_DATE,5000.00,'withdraw');


-------------

