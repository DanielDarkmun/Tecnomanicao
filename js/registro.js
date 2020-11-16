const btnRegsitrar = document.querySelector("#btnRegistrar")
const btnIniciar = document.querySelector("#btnIniciar")
const registro = document.querySelector("#registro")
const inicio = document.querySelector("#inicio")
const registrar = document.querySelector("#regi")
const btnReferenciado = document.querySelector("#btn-inicio")
let usuarios = []

btnRegsitrar.addEventListener("click", () => {
    const user = document.querySelector("#user").value;
    const password = document.querySelector("#pass").value;
    const password2 = document.querySelector("#pass2").value
    if(password == password2)
    {
        registro.classList.add("is-hidden")
        inicio.classList.remove("is-hidden")
        var usuario = {
            nombre:user,
            contraseña:password
        }
        if(localStorage.getItem("usuarios")=== null){
            usuarios.push(usuario)
            localStorage.setItem("usuarios", JSON.stringify(usuarios))
        }else{
            var lista = localStorage.getItem("usuarios")
            lista = JSON.parse(lista)
            lista.push(usuario)
            localStorage.setItem("usuarios", JSON.stringify(lista))
        }
        alert("Registro con exito!")
    }else{
        alert("Contraseñas diferentes")
    }
})

btnReferenciado.addEventListener("click", () => {
    const inputUser = document.querySelector("#userRegi")
    const inputPass = document.querySelector("#passRegi")
    const usuario = inputUser.value
    const contraseña = inputPass.value
    var lista = localStorage.getItem("usuarios")
    lista = JSON.parse(lista)
    var carrito = [];
    console.log(lista[1].nombre == usuario);
    for(var x = 0; x<lista.length;x++)
    {
        if(usuario == lista[x].nombre)
        {
            inputUser.classList.remove("is-danger")
            if(contraseña == lista[x].contraseña)
            {
                const inicio = document.querySelector("#btn-inicio");
                var usuarioLS = {
                    usuario: usuario,
                    contraseña: contraseña,
                    carrito: carrito
                }
                localStorage.setItem("usuarioLS",JSON.stringify(usuarioLS));
                inicio.setAttribute("href", "index.html")
            }else{
                inputPass.classList.toggle("is-danger")
            }
        }else{
            inputUser.classList.toggle("is-danger")
            
        }
    }
})
registrar.addEventListener("click", () =>{
    registro.classList.remove("is-hidden")
    inicio.classList.add("is-hidden")
    
})