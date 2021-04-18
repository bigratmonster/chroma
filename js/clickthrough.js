"use strict";
var ratImg = document.getElementById('rat-img');
var chroma = false;
function toggleChroma(chroma) {
    if (!chroma) {
        ratImg.src = '../media/bigrat-chroma.gif';
        return true;
    }
    else {
        ratImg.src = '../media/bigrat-static.png';
        return false;
    }
}
ratImg.addEventListener('click', function () { chroma = toggleChroma(chroma); });
document.addEventListener('keydown', function (pressed) {
    if (pressed.key == 'j') {
        chroma = toggleChroma(chroma);
    }
});
