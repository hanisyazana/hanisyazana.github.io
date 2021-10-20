let app1 = new Vue({
    el: "#app1", 
    data: {
     message: "Hello Vue"
    }
})

let app2 = new Vue({
    el:"#app2" ,
    data: {
        message : "Loaded on " + new Date().toLocaleString(),
        

    }
})

let app5 = new Vue({
    el:"#app5",
    data: {
        message: "Hello World!",
        groceryList: [
            {
                id: 1,
                desc: "Rocket Salad"
            },
            {
                id: 2,
                desc: "Cheese"
            },
            {
                id: 3,
                desc: "Ramen"
            },
            {
                id: 4,
                desc: "Ice Lemon Tea"
            }
        ],
        orderList: [
            {
                id : 1,
                desc: "Nasi Lemak"
            },
            {
                id : 2,
                desc: "Nasi Minyak"
            },
            {
                id : 3,
                desc: "Nasi Bujang"
            },
        ]
    }
})