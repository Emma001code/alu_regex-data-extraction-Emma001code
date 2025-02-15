# Regex Data Extraction Tool

## project overview

This project demonstrates the use of Regular Expressions (Regex) to extract specific types of data from a text file. The program reads input data from a file named "sample.txt" and applies regex patterns to extract and display the following types of information:

## Data

- Email addresses
- phone numbers
- credit card numbers
- currency amounts
- Times [12 hour and 24 hour format]

## Features

- It accurately reads data from an input file using Node.js "fs" module.
- It handles missing or incorrectly spelt formatted data effectively.
- Brings out the sorted information to the console on a structured format
- Accurate usage of regex pattern to extract specific data types accurately: Email, phone numbers, credit card numbers, currency amounts and Times.

## Pre-requisites

- Basic knowledge of JavaScript and Regular Expressions.
- JavaScript runtime (e.g., Node.js or browser developer console).

## How to Use

- Clone or download this repository.
- Navigate to the project directory, eg: "cd alu_regex-data-extraction-Emma001code"
- Install node.js if you dont have it.
- create an input file; create a file named sample.txt in the project directory.
- After creating the file then add this text, Hey, you can reach Emmanuel at chibuikeemmanuel879@gmail.com or ngwoke@emma.com and e.ngwoke@company.co.uk.
  Incorrect email format emmanuel@gmail..com
  For more inquiries, call us at (123) 456-7890 or 123-456-7890 and 212.456.7890
  Your payment of $1,234.56 was successful, thank you for working with us. Alternatively, the amount $19.99 is pending.
  My credit card number is 1234-5678-9012-3456.
  Here's another customer's credit card: 1234 5678 9012 3456.
  Incorrect phone number: 1234567.
  The dev. meeting in ALU is scheduled at 22:30.
  The valentine party starts at 2:00.
  Incorrect time format: 24:00

- Run the code: nodejs regex.js

## Technology Used

- Node.js: For file system implementation and also running the file.
- Regex: For pattern matching and data withdrawal.

## Output Expectation

Emails:

- chibuikeemmanuel879@gmail.com
- ngwoke@emma.com
- e.ngwoke@company.co.uk

Phone Numbers:

- (123) 456-7890
- 123-456-7890

Credit Card Numbers:

- 1234-5678-9012-3456
- 1234 5678 9012 3456

Currency Amounts:

- $1,234.56
- $19.99

Times:

- 22:30
- 2:00 PM

## Author

- Emmanuel Chibuikem Ngwoke
- Linkedin: www.linkedin.com/in/emmanuelngwoke

## Acknowledgement

- All thanks to ALU for this challenging and at the same time exciting Regex challenge.
