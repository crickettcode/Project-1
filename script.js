$(document).ready(function () {
    alert("Am I Working Now");
});
let correct = 0
let guess = 0
$(".btn-letter").click(function () {
    $(this).hide()
    console.log($(this))
    console.log(event.target.innerText)

    let word = ['N', 'E', 'R', 'D',]//[]
    // var arryLength = word.length
    var foundIt = false;

    //for (count = 0; count < arryLength; count++) {
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


//$("btn-play").click(function () {
    //window.reload()

   // obj['lostFound'].push(arrayLetters);
//});


   // (event.target.innerText === 'N' || event.target.innerText == 'E' || event.target.innerText == 'R' || event.target.innerText == 'D') {

 //var foundIt = true;
//var foundIt = true;
        // if (foundIt) {
        //alert("That letter is in the word!")
        // correct++
        //if (correct === 4)
        // alert("Winner")

        //(guess === ['N', 'E', 'R', 'D'] &&
        //guess < 6)
        //alert("Winner!")
