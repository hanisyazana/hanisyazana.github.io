let refreshNowBtn = document.getElementById("refreshNow")
refreshNowBtn.addEventListener("click", function () {
    GetBooking()
})

function GetBooking() {
    let url = 'https://api.sheety.co/1213c8c6ae58e11658f0501ab7c286b8/bookingApp/bookings';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
            console.log(json.bookings);

            let bookingNameList = document.getElementById("bookingNameList")
            let bookingIds = []

            //delete all rows in the table
            for (let k = bookingNameList.rows.length - 1; k > 0; k--) {
                bookingNameList.deleteRow(k)
            }

            //load all rows from Sheety API
            for (let i = 0; i < json.bookings.length; i++) {
                let gName = json.bookings[i].name;
                let gPhone = json.bookings[i].phone;
                let gEmail = json.bookings[i].email;
                let gAddress = json.bookings[i].address;
                let gPayment = json.bookings[i].payment;
                let gId = json.bookings[i].id;
                let btnId = "delete" + gId;

                let row = bookingNameList.insertRow(bookingNameList.rows.length)
                row.insertCell(0).innerHTML = gId
                row.insertCell(1).innerHTML = gName
                row.insertCell(2).innerHTML = gPhone
                row.insertCell(3).innerHTML = gEmail
                row.insertCell(4).innerHTML = gAddress
                row.insertCell(5).innerHTML = gPayment
                row.insertCell(6).innerHTML = "<button id='" + btnId + "' type='button' class='btn btn-danger'>Delete</button>"

                bookingIds.push(btnId)
            }

            for (let j = 0; j < bookingIds.length; j++) {
                let el = document.getElementById(bookingIds[j])
                el.addEventListener("click", function () {
                    let theId = el.id.replace("delete", "")
                    DeleteBooking(theId)
                })
            }


        });
}

function DeleteBooking(id) {
    let url = 'https://api.sheety.co/1213c8c6ae58e11658f0501ab7c286b8/bookingApp/bookings' + id;
    fetch(url, {
        method: 'DELETE',
    })
        .then(() => {
            alert("Record id " + id + " deleted!")
            GetBooking()
        });
}