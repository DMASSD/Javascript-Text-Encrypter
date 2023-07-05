function hideTextElements(){
    textElements.style.display = "none";
    noTextElements.style.display = "block";
}

function showTextElements(){
    textElements.style.display = "block";
    noTextElements.style.display = "none";
}

function serchUpperCaseOrAccent(str){
    const keysUpperCaseOrAccent = /[A-Záéíóú]/;
    return keysUpperCaseOrAccent.test(str);
}
    
function constraintsToRed() {
    constraints.style.color = "red";
  
    setTimeout(function() {
      constraints.style.color = "";
    }, 200);
  }

function encrypt(str) {
    const keysEncrypt = {
        a: 'ai',
        e: 'enter',
        i: 'imes',
        o: 'ober',
        u: 'ufat'
    };
  
    return str.replace(/[aeiou]/g, match => keysEncrypt[match.toLowerCase()]);
}

function decrypt(str) {
    const keysDecrypt = {
        ai:     'a',
        enter:  'e',
        imes:   'i',
        ober:   'o',
        ufat:   'u'
    };
  
    return str.replace(/ai|enter|imes|ober|ufat/g, match => keysDecrypt[match.toLowerCase()]);
}

let encryptButton = document.querySelector(".encrypt-button");
let decryptButton = document.querySelector(".decrypt-button");
let copyTextButton = document.querySelector(".copyTextButton");
let textElements = document.querySelector(".outputTextPart");
let noTextElements = document.querySelector(".noTextPart");
let textInput = document.querySelector(".textInput");
let resultText = document.querySelector(".resultText");
let constraints = document.querySelector(".constraints");

textInput.addEventListener("input", function() {
    if (textInput.value === "") {
        hideTextElements();
    }
  });

encryptButton.addEventListener("click", function() {
    if (serchUpperCaseOrAccent(textInput.value)) {
        constraintsToRed();
    }

    else if (textInput.value !== "") {
        showTextElements();
        resultText.value = encrypt(textInput.value);
    }
    
});

decryptButton.addEventListener("click", function() {
    if (serchUpperCaseOrAccent(textInput.value)) {
        constraintsToRed();
    }

    else if (textInput.value !== "") {
        showTextElements();
        resultText.value = decrypt(textInput.value);
    }
    
});

copyTextButton.addEventListener("click", function() {
    resultText.select();
    document.execCommand("copy");
    resultText.blur();
});