const readlineSync = require('readline-sync');
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

function showContact(contactList, index) {
    if (contactList instanceof Array && contactList[index]) {
        console.log(`${contactList[index].name} / ${contactList[index].phone} / ${contactList[index].email}`);
    }
}

function showAllContacts(contactList) {
    if (contactList instanceof Array) {
        for (let i = 0; i < contactList.length; i++) {
            console.log(`${contactList[i].name} / ${contactList[i].phone} / ${contactList[i].email}`);
        }
    }
}

function addNewContact(contactList, name, phone, email) {
    if (contactList instanceof Array && name && phone && email) {
        contactList.push({
            name: name,
            phone: phone,
            email: email
        });
    }
}


function manageContacts() {
    choice = readlineSync.question("What do you want to do? (first/last/all/new/sort/quit): ");

    switch (choice.toLowerCase()) {
        case "first":
        case "last":
        case "all":
            showContact(choice);
            break;
        case "new":
            addContact();
            break;
        case "sort":
            console.log("You chose to sort contacts.");
            break;

        case "quit":
            console.log("Exiting program.");
            break;
        default:
            console.log("Invalid choice. Please enter 'first', 'last', 'all', 'new', 'sort' or 'quit'");
    }
}

function sortContacts(contactList, key) {
    if (!(contactList instanceof Array)) {
        console.log("Error: The first argument must be an array of contacts.");
        return false;
    }

    if (contactList.length === 0) {
        console.log("No contacts to sort.");
        return true; // Still a success, just nothing to sort
    }

    // Define a valid set of keys
    const validKeys = ['name', 'phone', 'email'];
    if (!validKeys.includes(key)) {
        console.log(`Error: Invalid sort key. Please choose from ${validKeys.join(', ')}.`);
        return false;
    }

    // Use the sort method with a custom comparison function
    contactList.sort((a, b) => {
        // Lowercase for case-insensitive comparison and ensure it's a string and handle undefined/null
        const valA = String(a[key] || '').toLowerCase();
        const valB = String(b[key] || '').toLowerCase();

        if (valA < valB) {
            return -1; // a comes before b
        }
        if (valA > valB) {
            return 1; // a comes after b
        }
        return 0; // a and b are equal
    });

    console.log(`Contacts sorted by ${key}.`);
    return true;
}

// Main loop for continuous user interaction
let running = true;
let choice;
while (running) {
    manageContacts();
    running = choice.toLowerCase() !== "quit";
}
