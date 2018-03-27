$(document).ready(function () {
    alert("Am I Working Now");
});

$(".btn-letter").click(function () {

    $(this).hide()
    console.log($(this))
    console.log(event.target.innerText)
    if (event.target.innerText == 'N' || event.target.innerText == 'E' || event.target.innerText == 'R' || event.target.innerText == 'D') {
        console.log("That letter is in the word!")
    } else {
        console.log("That letter is not in the word stupid!")
    }


    // $(".btn-play").onclick(function () {
    // $(this).refreshpage()

}


);

