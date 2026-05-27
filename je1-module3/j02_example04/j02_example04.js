const carList = document.getElementById("car-list");

function addCar() {
    const make = prompt("Enter car manufacturer:");

    if (make) {
        const model = prompt("Enter car model:");
        const year = prompt("Enter car year:");

        const listItem = document.createElement("li");

        if (model && year) {
            listItem.textContent = `${year} ${make} ${model}`;
        } else if (model) {
            listItem.textContent = `${make} ${model}`;
        } else {
            listItem.textContent = make;
        }
        carList.appendChild(listItem);
    }
}
