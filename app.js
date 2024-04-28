// JavaScript
function Logar() {
    var user  = document.getElementById('user'  ).value;
    var email = document.getElementById('email' ).value;
    var senha = document.getElementById('senha' ).value;

    if (
        user == "admin" && 
        email == "admin@gmail.com" && 
        senha == "admin123"
        ){
        Swal.fire(
            {
                title: "Tudo certo !",
                text: "Os dados forão confirmados.",
                icon: "success"
            }
        );
    }else{
        Swal.fire(
            {
                title: "OPS",
                text: "Algo deu errado",
                icon: "error",
            }
        );
    }
}
