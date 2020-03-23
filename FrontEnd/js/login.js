const submit = document.getElementById("submit");
const usernameinput = document.getElementById("username");
const passwordinput = document.getElementById("password");

function main(){
    var username;
    var password;
    submit.addEventListener('click', function(){
        username = usernameinput.value;
        password = passwordinput.value;
        usernameinput.value = "";
        passwordinput.value = "";
        console.log(username);
        console.log(password);
    })
}

main();