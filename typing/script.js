const TypingText = document.querySelector('.TypedText');
const AutoTyping = document.querySelector('.TypeCursor');

const textArray = [" Ethical Hacker.", " Kevin Gonzalez.", " Revo Coder."];
const typingDelay = 200;
const earsingDelay = 100;
const newTextDelay = 200;
let textArrayIndex = 0;
let charIndex = 0;

document.addEventListener('DOMContentLoaded', function(){
    setTimeout(type, newTextDelay + 50);
});

function type()
{
    if(charIndex < textArray[textArrayIndex].length){
        TypingText.innerHTML +=textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }else{
        setTimeout(earse, newTextDelay);
    }
}
function earse(){
    if(charIndex > 0){
        TypingText.innerHTML = textArray[textArrayIndex].substring(0, charIndex -1);
        charIndex--;
        setTimeout(earse, earsingDelay);
    }else{
        textArrayIndex++;
        if(textArrayIndex>=textArray.length) textArrayIndex=0;
        setTimeout(type, typingDelay + 1100);
    }
}