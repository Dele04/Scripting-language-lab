function toggleStatus() {
    const statusDisplay = document.getElementById("statusDisplay");
    statusDisplay.textContent = "Status Updated!";
}

function saveProductAndDisplay() {
    const productCode = document.getElementById("productCode");
    const productCodeValue = productCode.value;
    const productDisplay = document.getElementById("productDisplay");
    productDisplay.textContent = productCodeValue;
}

function checkRatingValidity() {
    console.log("function checkRatingValidity()");
    const starRating = document.getElementById("starRating");
    const starRatingValue = starRating.value;
    const ERROR_RATING_MSG = "Rating must be a number between 1 and 5";
    const ratingErrorMsg = document.getElementById("ratingErrorMsg");

    if (starRatingValue < 1 || starRatingValue > 5) {
        console.log(ERROR_RATING_MSG);
        ratingErrorMsg.textContent = ERROR_RATING_MSG;
    } else {
        ratingErrorMsg.textContent = "";
    }
}

function submitRatingToDisplay() {
    const starRating = document.getElementById("starRating");
    const starRatingValue = starRating.value;
    const ratingDisplay = document.getElementById("ratingDisplay");

    if (starRatingValue >= 4) {
        ratingDisplay.textContent = "Thank you for the positive feedback!";
    } else {
        ratingDisplay.textContent = "Sorry for the bad experience.";
    }
}
