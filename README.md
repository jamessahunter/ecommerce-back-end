# eCommerce Back End

## Technology Used

| Technology         | Resource URL                                    |
| -------------------|:-----------------------------------------------:|
| JavaScript         | [https://www.w3schools.com/js/default.asp](https://www.w3schools.com/js/default.asp) |
| Node.js | [https://nodejs.org](https://nodejs.org/en)
| NPM | [https://www.npmjs.com/](https://www.npmjs.com/) |

## Description

[Link to Walkthough Video](https://drive.google.com/file/d/1jEJknmIORdmtRGytN6kyp3PgJFkHplgV/view)

 This project allows the user to get all categories, products and tags for an ecommerce store. The user can also get, update or destory a specifc category, product, or tag based off its unique id number. The user can also create a new category, product or tag. This project uses sequalize whcih allows for the code to be written in a more readable way rather than typing out the raw SQL for that action. Also this project uses Object Relational Mapping to assist in the creation of tables and their entries in the database. This project taught me how to use a many to many relationship between two tables. This project also uses the dotenv package which allows the programmer to hide potentially sensitive information. Mysql2 hosts the server that the user is interacting with. 

## Installation

 To install download all the files from the repository.
 Once downloaded navigate to that directory in the command line and enter `nmp i`.
 In the command line go to the mysql shell using `mysql -u root -p` and enter your password
 Once in the shell copy and paste the contents of schema.sql into the command line
 Once done type `quit` to get out of the shell
 Once back in the command line type `npm run seed` to seed the database

## Usage

 To use type `npm start`
 
![Usage Example](./assets/eCommerce%20Back%20End.gif)

## Learning Points

Learned about how to use sequalize and dotenv

## Author Info

### James Hunter
* [LinkedIn](https://www.linkedin.com/in/james-hunter123/)
* [Github](https://github.com/jamessahunter)

## Credits

Jerome Chenette for providing the client side code
* [Github](https://github.com/jeromechenette)