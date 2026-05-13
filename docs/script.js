document.addEventListener("DOMContentLoaded", function () {

  
  // GET ELEMENTS 
  
  const contactForm = document.getElementById("contact-form");
  const contactList = document.getElementById("contacts-lists");

  const placeForm = document.getElementById("place-form");
  const placeList = document.getElementById("places-list");

  
  // ADDRESS BOOK
  
  function Contact(firstName, lastName, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
  }

  Contact.prototype.fullName = function () {
    return this.firstName + " " + this.lastName;
  };

  // STORE CONTACTS
  let contacts = [];

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const phone = document.getElementById("phone-number").value;

    const newContact = new Contact(firstName, lastName, phone);

    contacts.push(newContact);

    // DISPLAY IN HTML
    const li = document.createElement("li");
    li.textContent = newContact.fullName();

    contactList.appendChild(li);

    contactForm.reset();
  });

  
  // PLACES YOU'VE BEEN
  
  function Place(location, season, landmark) {
    this.location = location;
    this.season = season;
    this.landmark = landmark;
  }

  Place.prototype.placeSummary = function () {
    return this.location + " - " + this.landmark;
  };

  let places = [];

  placeForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const location = document.getElementById("location").value;
    const season = document.getElementById("season").value;
    const landmark = document.getElementById("landmark").value;

    const newPlace = new Place(location, season, landmark);

    places.push(newPlace);

    const li = document.createElement("li");
    li.textContent = newPlace.placeSummary();

    placeList.appendChild(li);

    placeForm.reset();
  });

});