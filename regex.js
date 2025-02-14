// Regex patterns for validating different types of data
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^(?:\(\d{3}\)\s?|\d{3}[-.])\d{3}[-.]\d{4}$/;
const creditCardRegex = /^(?:\d{4}[-\s]){3}\d{4}$/;
const currencyRegex = /^\$\d{1,3}(?:,\d{3})*(\.\d{2})?$/;

// Sample data arrays to be validated
const emails = [
    "user@example.com",
    "firstname.lastname@company.co.uk",
    "invalid-email@"
];

const phoneNumbers = [
    "(123) 456-7890",
    "123-456-7890",
    "123.456.7890",
    "4567890"
];

const creditCards = [
    "1234 5678 9012 3456",
    "1234-5678-9012-3456",
    "1234567890123456"
];

const currencyAmounts = [
    "$19.99",
    "$1,234.56",
    "$1234.56",
    "$1,234,567.89",
    "123.45"
];

//Define an array that maps the data arrays to their respective regex patterns
const selectedPatterns = [
    { name: "emails", data: emails, regex: emailRegex },
    { name: "phoneNumbers", data: phoneNumbers, regex: phoneRegex },
    { name: "creditCards", data: creditCards, regex: creditCardRegex },
    { name: "currencyAmounts", data: currencyAmounts, regex: currencyRegex }
];

// Function to extract and test matches for each of the pattern
function extractMatches(patterns) {
    for (const pattern of patterns) {
        const { name, data, regex } = pattern;
        console.log(`\nChecking ${name}:`);
        data.forEach(item => {
            const isMatch = regex.test(item);
            console.log(`${item} - Match: ${isMatch}`);
        });
    }
}

// Call the function with the selected patterns
extractMatches(selectedPatterns);
