

function scramble(){
    // var output = document.getElementById("reorganiserarea").value;
    var text = document.getElementById("reorganiserarea").value;
    text = text.replace(/^\s*[\r\n]/gm);
    document.getElementById("reorganiserarea").value = text;
}