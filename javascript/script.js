const typingText = document.querySelector(".typing-text p");
const inputEL = document.querySelector(".wrapper .input-field");
tryAgainBtn = document.querySelector(".content button");
timeTag = document.querySelector(".time span b");
mistakeTag = document.querySelector(".mistake span");
wpmTag = document.querySelector(".wpm span");
cpmTag = document.querySelector(".cpm span");

let charIndex = 0;

function randomContent() {
    const contentID = Math.floor(Math.random() * contents.length);
    contents[contentID].split("").forEach((span) => {
        let spanTag = `<span>${span}</span>`;
        typingText.innerHTML += spanTag;
    });

    document.addEventListener("keydown", () => inputEL.focus());
    typingText.addEventListener("click", () => inputEL.focus());
}

const initTyping = function () {
    const chars = typingText.querySelectorAll("span");
    let typedChar = inputEL.value.split("")[charIndex];
    if (typedChar == null) {
        charIndex--;
        chars[charIndex].classList.remove("correct", "incorrect");
    } else {
        if (chars[charIndex].innerText === typedChar)
            chars[charIndex].classList.add("correct");
        else chars[charIndex].classList.add("incorrect");
        charIndex++;
    }
    chars.forEach((span) => span.classList.remove("active"));
    chars[charIndex].classList.add("active");
};

randomContent();
inputEL.addEventListener("input", initTyping);
