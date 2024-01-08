const database = [
    "pepik.ahoj1",
    "jana.pizza2",
    "karel.kočka3",
    "eva.12345",
]

function login() {
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    console.log("jjjj");

    const logindata = username + "." + password

    console.log(logindata);
    
    for (let i = 0; i < database.length; i++) {
    if(logindata == database[i]) {
        document.getElementById("logOutput").innerHTML = "Úspěšně přihlášeno"
    }
    }

}