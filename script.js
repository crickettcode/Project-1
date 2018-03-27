$(document).ready(function () {
    alert("Am I Working Now");
});

$(".btn-letter").click(function () {
    $(this).hide()
    console.log($(this))
    console.log(event.target.innerText)
    if (event.target.innerText === 'N' || event.target.innerText == 'E' || event.target.innerText == 'R' || event.target.innerText == 'D') {
        alert("That letter is in the word!")
    } else {
        alert("That letter is not in the word stupid!")
    }
});

$("btn-play").click(function () {
    window.reload()

    obj['lostFound'].push(arrayLetters);
});



