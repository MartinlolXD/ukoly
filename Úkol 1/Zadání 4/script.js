function customNumb(){
    sluvko  = ""
    const inputNumber =parseInt(document.getElementById("iNumb").value)
    for (let i=1; i <= inputNumber; i++){
     
        sluvko += i + "<br>"
    }
    document.getElementById("output").innerHTML = sluvko;
    }