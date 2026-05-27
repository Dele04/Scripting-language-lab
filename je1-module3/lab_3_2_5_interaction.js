let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

let newName = prompt("Enter the contact's name:");
let newPhone = prompt("Enter the contact's phone number:");
let newEmail = prompt("Enter the contact's email:");

contacts.push({
    name: newName,
    phone: newPhone,
    email: newEmail
});

console.log("First Contact:", contacts[0]);
console.log("Last Contact:", contacts[contacts.length - 1]);
