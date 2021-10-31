let bookNowBtn = document.getElementById("bookNow")
bookNowBtn.addEventListener("click", function () {
    let userName = document.getElementById("userName")
    let userNameVal = userName.value

    let userPhone = document.getElementById("userPhone")
    let userPhoneVal = userPhone.value

    let userEmail = document.getElementById("userEmail")
    let userEmailVal = userEmail.value

    let userAddress = document.getElementById("userAddress")
    let userAddressVal = userAddress.value

    let userPayment = document.getElementById("userPayment")
    let userPaymentVal = userPayment.value

    BookNow(userNameVal, userPhoneVal, userEmailVal, userAddressVal, userPaymentVal)
})

function BookNow(userName, userPhone, userEmail, userAddress, userPayment) {

    let url = 'https://api.sheety.co/1213c8c6ae58e11658f0501ab7c286b8/bookingApp/bookings';
    let body = {
        booking: {
            name: userName,
            phone: userPhone,
            email: userEmail,
            address: userAddress,
            payment: userPayment
        }
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => response.json())
        .then(json => {
            // Do something with object
            console.log(json.booking);
            alert(json.booking.name + " added in the list!")
        }); 
}