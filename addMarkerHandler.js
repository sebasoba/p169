const { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } = require("constants");

AFRAME.registerComponent("markerhandler",{
    init: async function(){
        this.el.addEventListener("markerFound", () => {
            console.log("marker is found");
            this.handleMarkerFound();
            });

        this.el.addEventListener("markerLost", () => {
            console.log("marker is lost");
            this.handleMarkerLost();
        })

    
    },

    handleMarkerFound:function(){
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "flex";

        var orderButton = document.getElementById("order-button");
        var orderSummaryButton = document.getElementById("order-summary-button")

        orderButton.addEventListener("click", () => {
            swal({
                icon: "https://i.imgur.com/4NZ6uLY.jpg",
                title: "Thanks For Order !",
                text: " ",
                timer: 2000,
                buttons: false
            })
        })

        orderSummaryButton.addEventListener("click", () => {
            swal({
                icon: "warning",
                title: "Order Summary",
                text: "Work in Progress",
            })
        })

        
    }
})