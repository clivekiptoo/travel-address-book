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
