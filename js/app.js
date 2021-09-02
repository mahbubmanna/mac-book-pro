// This function will update corresponding price-fields for specifications or buttons (Memory, Storage, Delivery) and Total Price field.
function updateFields(pricefield, price) {

    //updating the corresponding Specification's Cost
    const buttonCost = document.getElementById(pricefield);
    buttonCost.innerText = price;

    //updating total price
    const bestPrice = 1299;
    const memoryPrice = document.getElementById('extra-memory-cost').innerText;
    const storagePrice = document.getElementById('extra-storage-cost').innerText;
    const deliveryCost = document.getElementById('delivery-charge').innerText;

    const totalPrice = document.getElementById('total-price');
    const totalCost = bestPrice + parseInt(memoryPrice) + parseInt(storagePrice) + parseInt(deliveryCost);

    totalPrice.innerText = totalCost;

    // Updating total payable amount
    const totalPayable = document.getElementById('total-payable');

    const notify = document.getElementById('notify-success');

    //if promo is not applied, total payable amount is total price
    if (notify.style.display == 'none') {
        totalPayable.innerText = totalCost;
    }
    //when promo is applied, total payable amount is 20% less than total price
    else {
        totalPayable.innerText = totalCost - (totalCost * 0.2);
    }
}

//function for promo-code (case-insensitive): will decrease total-payable-amount by 20% and disble the ''Apply" button once the correct promo-code inserted.

function promo() {
    // getting promo-code
    const promoInput = document.getElementById('promo-input');
    const inputtedPromo = promoInput.value.toLowerCase();

    // checking the promo-code
    if (inputtedPromo == 'stevekaku') {
        const totalPayable = document.getElementById('total-payable');

        const beforePromo = parseInt(totalPayable.innerText);
        const AfterPromo = (beforePromo - (beforePromo * 0.2));

        totalPayable.innerText = AfterPromo;

        // disabling Apply button
        const button = document.getElementById('promo-button');
        button.disabled = true;

        //notifying sccess message
        const notify = document.getElementById('notify-success');
        notify.style.display = 'block';

    }
    //clearing input-field
    promoInput.value = '';
}

//Event-handler for memory-buttons
document.getElementById('memory-8gb').addEventListener('click', function () {
    updateFields('extra-memory-cost', 0);
})

document.getElementById('memory-16gb').addEventListener('click', function () {
    updateFields('extra-memory-cost', 180);
})

//Event-handler for storage-buttons
document.getElementById('storage-256gb').addEventListener('click', function () {
    updateFields('extra-storage-cost', 0);
})

document.getElementById('storage-512gb').addEventListener('click', function () {
    updateFields('extra-storage-cost', 100);
})

document.getElementById('storage-1tb').addEventListener('click', function () {
    updateFields('extra-storage-cost', 180);
})

//Event-handler for delivery-buttons
document.getElementById('free-delivery').addEventListener('click', function () {
    updateFields('delivery-charge', 0);
})

document.getElementById('charged-delivery').addEventListener('click', function () {
    updateFields('delivery-charge', 20);
})

//Event-handler for promo-code-apply button
document.getElementById('promo-button').addEventListener('click', function () {
    promo();
})