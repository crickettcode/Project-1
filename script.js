$(document).ready(function () {
    alert("Am I Working Now");
});
let correct = 0
let guess = 0
$(".btn-letter").click(function () {
    $(this).hide()
    console.log($(this))
    console.log(event.target.innerText)

    let word = ['N', 'E', 'R', 'D',]
    var foundIt = false;

    if ("N" === event.target.innerText) {
        foundIt = true;
        $("#N").show('<button type="button" class="btn-letter btn btn-outline-success">' + event.target.innerText + '</button>')
    }
    else if ("E" === event.target.innerText) {
        foundIt = true;
        $("#E").show('<button type="button" class="btn-letter btn btn-outline-info">' + event.target.innerText + '</button>')
    }
    else if ("R" === event.target.innerText) {
        foundIt = true;
        $("#R").show('<button type="button" class="btn-letter btn btn-outline-success">' + event.target.innerText + '</button>')
    }
    else if ("D" === event.target.innerText) {
        foundIt = true;
        $("#D").show('<button type="button" class="btn-letter btn btn-outline-danger">' + event.target.innerText + '</button>')
    }

    if (foundIt) {
        alert("That letter is in the word!")
        correct++
    } else {
        alert("That letter is not in the word stupid!")
        $("#lostBox").append('<button type="button" class="btn-letter btn btn-outline-warning">' + event.target.innerText + '</button>')
        guess++
    }

    if (correct === 4) {
        alert("Winner")
    }

    if (guess > 5) {
        alert("Game Over")
    }

});


