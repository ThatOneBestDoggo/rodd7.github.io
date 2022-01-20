

function scramble(){
    // var output = document.getElementById("reorganiserarea").value;
    const line1 = [];
    const line2 = [];
    const line3 = [];
    const line4 = [];
    const line5 = [];
    const line6 = [];

    var text = document.getElementById("reorganiserarea").value;
    text = text.replace(/^\s*[\r\n]/gm);
    text = text.replace(/undefined/g,'');
    document.getElementById("reorganiserarea").value = text;
    

    var textline = $('textarea').val().split('\n');
    for (var no = 0; no < textline.length; no++ ){
        var pointer = no%16;
        switch(pointer){
            case 0:
                line1.push(textline[no]);
                delete textline[no];
                break;
            case 1:
                line2.push(textline[no]);
                delete textline[no];
                break;
            case 2:
                line3.push(textline[no]);
                delete textline[no];
                break;
            case 3:
                line4.push(textline[no]);
                delete textline[no];
                break;
            case 4:
                line5.push(textline[no]);
                delete textline[no];
                break;
            case 5:
                line6.push(textline[no]);
                delete textline[no];
                break;
        }
    }
    var rejoin = textline.join('\n');
    document.getElementById('reorganiserarea').value = rejoin;
    document.getElementById('reorganiserarea').value = document.getElementById('reorganiserarea').value.replace(/^\s*[\r\n]/gm);
    document.getElementById('reorganiserarea').value = document.getElementById('reorganiserarea').value.replace(/undefined/g,'');
    document.getElementById('reorganiserarea').value = line1.join("\n") + "\n" + line2.join("\n") + "\n" + line3.join("\n") + "\n" + line4.join("\n") + "\n" + line5.join("\n") + "\n" + line6.join("\n") + "\n\n" + document.getElementById('reorganiserarea').value;


    console.log(line1)
    console.log(line2)
    console.log(line3)
    console.log(line4)
    console.log(line5)
    console.log(line6)

    

}