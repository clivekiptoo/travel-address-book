// ADDRESs BOOK

// Constructor
function Contact(firstName, lastName, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
} 

// const contact1 = new Contact("Brian", "Otieno", "0712345678")

// console.log(contact1);

// Prototype
Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
};


// Test
// console.log(contact1.fullName());



// PLACES YOU'VE BEEN

// Constructor
function place(location, season, landmark) {
    this.location = location;
    this.season = season;
    this.landmark = landmark;
}

// Test
const place1 = new place("Mombasa", "Fort Jesus", "December");

console.log(place1);

