// cambiar el header cuando el usuario haga scrooll

const header = document.querySelector("header")

window.addEventListener("scroll", function(){//agrega un escuchado de eventos que ocurran en las ventanas 
    header.classList.toggle("sticky", window.scrollY > 60)
})

//Mostrar un mensaje de alerta con haga click en el boton

/*document.querySelector('.btn').addEventListener('click', function(){
    alert('¡Tu formulario ha sido registrado');
})

document.querySelector('.btn2').addEventListener('click', function(){
    alert('¡Tu formulario ha sido registrado');
})*/

 // Aplicar a todos los botonees  de clase .btn

 /*document.querySelectorAll('.btn, .btn2').forEach(function(button){
    button.addEventListener('click', function(){
        alert("Tu registro ha sido enviado correctamente")
    })
 })*/

//Funcion para el primer botón
/*document.getElementById("btn-pedido").addEventListener('click', function(){
    alert("¡Registrado!");
})

//Funcion para el segundo botón

document.getElementById("btn-promocion").addEventListener('click', function(){
    alert("¡Excelente!");
})*/

//seleccionar todos los enlaces dentro de la clase .navbar

document.querySelectorAll('.navbar a[href^="#"]').forEach(function(enlace){
    enlace.addEventListener('click', function(e){
        e.preventDefault(); //Prevenir
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'instant'
        })
    })
})

const imagenes = [
    'static/voluntarios/img/voluntario.png',
    'static/voluntarios/img/voluntariosii.png',
    'static/voluntarios/img/voluntarioss.jpg',
    'static/voluntarios/img/capII.png'
];

const homeSection = document.querySelector('.home');
const intervalo = 5000; 
let indiceImagen = 0;

function cambiarFondo(){
    homeSection.style.backgroundImage = `linear-gradient(to left,  
                               rgba(176, 135, 52, 0.6),
                               rgba(242, 10, 180, 0.4)
                               ),   
     url(${imagenes[indiceImagen]}) `;
     indiceImagen = (indiceImagen + 1 ) % imagenes.length;
}

setInterval(cambiarFondo, intervalo);

//Mostrar menú en pantallas pequeñas

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let enlaces = document.querySelectorAll('.navbar a');

menu.onclick = () => {
    navbar.classList.toggle('open');
    menu.classList.toggle('bx-x');
}

enlaces.forEach(link => {
    link.onclick = () => {
    navbar.classList.remove('open');
    menu.classList.remove('bx-x');
    }
})

//ANIMACIONES DE TEXTO 

var typed = new Typed('#typed', {
    strings:['La espacial de la casa,', 'sabor para alegrar tus dias', 'abrimos todos los dias'],
    typeSpeed: 50,
    loop: "true",
    showCursor: "true",
    cursorChar: "_",
    backSpeed: 20,
})
var typeed = new Typed('#typeed', {
    strings:['Los voluntarios son importantes', 'Necesitamos tu ayuda', 'Todos los dias estamos disponibles'],
    typeSpeed: 50,
    loop: "true",
    showCursor: "true",
    cursorChar: "_",
    backSpeed: 20,
})