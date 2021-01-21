function test() {
    let keyword = document.getElementById("keyword").value
    if (keyword == "Lano") {
        alert("Artscholocco, das isch jo es grässlichs Wort");
    } else if (keyword == "Arschwasser") {
        // Jo Lano du hesches usegfunde, und d Lösig stoot wieder mol eifach im source code ;)
        audio = document.getElementById('maballs')
        audio.play();
        document.getElementById('todo2').style.display = "inline"
        document.getElementById('todo1').style.display = "none"
    } else {
        alert("S Wort isch falsch gsi...");
    }
}