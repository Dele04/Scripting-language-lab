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

contacts.sort(function (a, b) {
    let retVal = 0;
    if (a.name > b.name) {
        retVal = 1;
    } else if (a.name < b.name) {
        retVal = -1;
    }
    return retVal;
});

