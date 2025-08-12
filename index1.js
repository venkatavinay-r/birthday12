let giftBox = document.getElementById("giftBox");
    let correctName = "Krishna";

    giftBox.addEventListener("click", function() {

      let isCorrect = false;

      while (!isCorrect) {

        let Name = prompt("You gave me one object. What is it?");
        
        if (Name === null) {

          alert("Please try again!");

          
        } else if (Name.trim() === correctName) {

          alert("Baga gurtundi niku!");

          isCorrect = true;

          window.location.href = "main.html";
        } else {

          alert("Marchipoavu Nuvvu!");

         
        }
      }
    });



    