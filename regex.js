// Importing the 'fs' module for file system implementations
const fs = require('fs');

// Regex patterns for validating different types of data
const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
const phoneRegex = /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g;
const creditCardRegex = /\b(?:\d{4}[-\s]){3}\d{4}\b/g;
const currencyRegex = /\$\d{1,3}(?:,\d{3})*(?:\.\d{2})?/g;
const timeRegex = /\b((1[0-2]|0?[1-9]):[0-5][0-9]\s?(AM|PM)|([01]?[0-9]|2[0-3]):[0-5][0-9])\b/g;


// Read the sample.txt file 
fs.readFile('./sample.txt', 'utf8', (err, data) => {
    if (err) {
            // Handles the error if the file cant be read
        console.error('Error reading file:', err.message);
        return;
    }
    console.log(`content of file: ${data}\n`)
    // Applying and extracting data match using the regex patterns
    
    const emails = data.match(emailRegex) || [];

    const phoneNumbers = data.match(phoneRegex) || [];

    const creditCards = data.match(creditCardRegex) || [];

    const currencyAmounts = data.match(currencyRegex) || [];

    const times = data.match(timeRegex) || [];

    // Display result of the extracted information 
    console.log('Emails :');

    console.log(emails.length ? emails.join('\n') : 'None Found');


    console.log('\nPhone Numbers :');

    console.log(phoneNumbers.length ? phoneNumbers.join('\n') : 'None Found');


    console.log('\nCredit Card Numbers:');

    console.log(creditCards.length ? creditCards.join('\n') : 'None Found');


    console.log('\nCurrency Amounts :');

    console.log(currencyAmounts.length ? currencyAmounts.join('\n') : 'None Found');

    
    console.log('\nTimes:');

    console.log(times.length ? times.join('\n') : 'None Found');
});
