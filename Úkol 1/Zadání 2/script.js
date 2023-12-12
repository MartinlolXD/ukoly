function generatorNum(){
    let text = " "
    for (let i = 15; i < 151; i++) {
        text += i+ "<br>"
        
    }
    document.getElementById("output").innerHTML = text
 
}