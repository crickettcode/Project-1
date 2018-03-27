$(document).ready(function () {
    alert("Am I Working Now");
});

$(".btn-letter").click(function () {
    $(this).hide()
    console.log($(this))
    console.log(event.target.innerText)

    let word = ['N', 'E', 'R', 'D']
    var arryLength = word.length
    for (count = 0; count < arryLength; i++) {
        if (word[count] === event.target.innerText) {
            alert("That letter is in the word!")
        }
        else {
            alert("That letter is not in the word stupid!")
            $("#lostBox").append('<button type="button" class="btn-letter btn btn-outline-warning">' + event.target.innerText + '</button>')
        }
    }
});

$("btn-play").click(function () {
    window.reload()

    obj['lostFound'].push(arrayLetters);
});


   // (event.target.innerText === 'N' || event.target.innerText == 'E' || event.target.innerText == 'R' || event.target.innerText == 'D') {

