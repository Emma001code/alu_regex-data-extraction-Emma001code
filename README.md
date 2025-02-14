## Regex Pattern Matching

This script is designed to validate different types of data (emails, phone numbers, credit card numbers, and currency amounts) using regular expressions (regex). It takes predefined arrays of sample data, checks them against corresponding regex patterns, and logs whether each entry matches its respective pattern.

## features

- Validates email addresses using a standard regex pattern.
- Validates phone numbers in various formats, including with parentheses, hyphens, and dots.
- Validates credit card numbers with optional spaces or hyphens between groups of four digits.
- Validates currency amounts with optional commas for thousands and two decimal places for cents.

## Prerequisites

- Basic knowledge of JavaScript and Regular Expressions.
- JavaScript runtime (e.g., Node.js or browser developer console).

## How to Use

Clone or download this repository.
Open the index.js file in your preferred code editor.
Modify or add new data to the arrays (emails, phoneNumbers, creditCards, currencyAmounts).
Run the script in a JavaScript environment (e.g., Node.js or in the browser console).

## Code Breakdown

# 1.Regex patterns

- Email REGEX: Matches valid email formats.
- PHONE REGEX: Matches phone numbers in multiple formats (e.g., (123) 456-7890, 123-456-7890).
- CREDITCARDREGEX: Matches valid credit card numbers with separators like spaces or hyphens.
- CURRENCYREGEX: Matches currency amounts, with support for commas and two decimal places.

# 2.Arrays:

- EMAILS: Contains sample email addresses for validation.
- PHONENUMBERS: Contains sample phone numbers in various formats.
- CREDITCARDS: Contains sample credit card numbers.
- CYRRENCYAMOUNTS: Contains sample currency amounts with different formats.

# 3.Selected Patterns:

- The script maps the regex patterns to their corresponding data arrays. The validation process runs for each array with its respective regex.
  extractMatches Function:

- Loops through the selected patterns and tests each item in the arrays against the corresponding regex.
  Outputs whether each entry matches the regex pattern.

# Example outputs

Checking emails:
user@example.com - Match: true
firstname.lastname@company.co.uk - Match: true
invalid-email@ - Match: false

Checking phoneNumbers:
(123) 456-7890 - Match: true
123-456-7890 - Match: true
123.456.7890 - Match: true
4567890 - Match: false

Checking creditCards:
1234 5678 9012 3456 - Match: true
1234-5678-9012-3456 - Match: true
1234567890123456 - Match: false

Checking currencyAmounts:
$19.99 - Match: true
$1,234.56 - Match: true
$1234.56 - Match: false
$1,234,567.89 - Match: true
123.45 - Match: false
