
const register = document.getElementById("register");
const login = document.getElementById("login");

const errorMsg = document.getElementById("errorMessage");

let registerItems = register.querySelectorAll("input");// deberian ser 3 elementos 

let loginItems = login.querySelectorAll("input");//deberian ser 2 elementos


let usuarios = [];

register.addEventListener("submit",event => {
    event.preventDefault();
    validateForm(registerItems[0].value,registerItems[1].value,registerItems[2].value);
}
)

function validateForm(name,mail,pass){
    if ( name !=""  &&  mail !=""  && pass !="") {
        usuarios.push({username:name, email:mail, password:pass})
    }
    else{
        errorMsg.style.display = "block";  
    }
}

