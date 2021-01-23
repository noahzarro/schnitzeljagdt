function test() {
    $(".list-group").css("display", "none");
    let keyword = $("#keyword").val().replace(" ", "_")
    console.log(keyword)
    let element = $("#" + keyword)
    console.log(element)
    console.log(element.length)
    if (element.length == 1) {
        // Jo Lano du hesches usegfunde, und d Lösig stoot wieder mol eifach im source code ;)
        audio = document.getElementById('maballs')
        audio.play();
        $("#" + keyword).css("display", "inline");
    } else {
        alert("S Wort isch falsch gsi...");
    }
}