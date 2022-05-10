<script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.slim.min.js"></script>
function Cambiar()
{
    var a= prompt("Escribe un nuevo titulo:")
    document.getElementById("titulo").innerHTML=a;
}
function MostrarFecha()
{
    document.getElementById("fecha").innerHTML=Date();
}
function CambiaColor(a)
{
    a.style.background = "orange";
}
function Mover(obj)
{
    obj.innerHTML="Que tengas un gran dia!";
    obj.style.background="blue";  
}
function MoverFuera(obj)
{
    obj.innerHTML="Mueve el mouse sobre la caja!";
    obj.style.background= "#D95A21";    
}
