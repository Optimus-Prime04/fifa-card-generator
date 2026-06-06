function generateCard() {
    let playerName =
        document.getElementById("playerName").value;

    let playerRating =
        document.getElementById("playerRating").value;

    let playerPosition =
        document.getElementById("playerPosition").value;

    let pace =
        document.getElementById("pace").value;

    let shooting =
        document.getElementById("shooting").value;

    let passing =
        document.getElementById("passing").value;

    let dribbling =
        document.getElementById("dribbling").value;

    let defense =
        document.getElementById("defense").value;

    let physical =
        document.getElementById("physical").value;

    document.getElementById("cardName").innerText =
        playerName;

    document.getElementById("cardRating").innerText =
        playerRating;

    document.getElementById("cardPosition").innerText =
        playerPosition;


    document.getElementById("cardPace").innerText =
        pace;

    document.getElementById("cardShooting").innerText =
        shooting;

    document.getElementById("cardPassing").innerText =
        passing;

    document.getElementById("cardDribbling").innerText =
        dribbling;

    document.getElementById("cardDefense").innerText =
        defense;

    document.getElementById("cardPhysical").innerText =
        physical;

    let cardType =
        document.getElementById("cardType").value;

    let card =
        document.getElementById("card");


    if(cardType === "gold") {

        document.getElementById("cardBackground").src =
            "assets/gold.png";

        card.className =
            "card gold-card";
    }




    if(cardType === "icon") {

        document.getElementById("cardBackground").src =
            "assets/icon.png";

        card.className =
            "card icon-card";
    }




    if(cardType === "ucl") {

        document.getElementById("cardBackground").src =
            "assets/ucl.png";

        card.className =
            "card ucl-card";
    }


    let imageInput =
        document.getElementById("imageInput");



    if(imageInput.files[0]) {

        let reader =
            new FileReader();



        reader.onload =
            function(event) {

                document.getElementById("playerImage").src =
                    event.target.result;
            }



        reader.readAsDataURL(
            imageInput.files[0]
        );
    }

}



function downloadCard() {

    let card =
        document.getElementById("card");



    html2canvas(card).then(function(canvas) {

        let link =
            document.createElement("a");



        link.download =
            "fifa-card.png";



        link.href =
            canvas.toDataURL();



        link.click();

    });

}
