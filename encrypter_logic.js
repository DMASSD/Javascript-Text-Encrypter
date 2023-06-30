function hideTextElements(){
    textElements.style.display = "none";
    noTextElements.style.display = "block";
}

function showTextElements(){
    textElements.style.display = "block";
    noTextElements.style.display = "none";
}

let encryptButton = document.querySelector(".encrypt-button");
let decryptButton = document.querySelector(".decrypt-button");
let textElements = document.querySelector(".outputTextPart");
let noTextElements = document.querySelector(".noTextPart");
let textInput = document.querySelector(".textInput");

textInput.addEventListener("input", function() {
    if (textInput.value === "") {
        hideTextElements();
    }
  });

encryptButton.addEventListener("click", showTextElements);
decryptButton.addEventListener("click", showTextElements);