var imgPreta = "img/logo.png";
var imgBranca = "img/logo.png";
var show_sidebar = false;
var show_dialog = false;

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}   

function imgChangeWtB() {
    document.getElementById("figura").src = imgPreta;
    let aux = imgBranca;  
    imgBranca = imgPreta;
    imgPreta = aux;
}

function MenuSuspenso() {
    show_sidebar = !show_sidebar
    if(show_sidebar)
    {
        document.getElementById('navbar_header').style.marginLeft = '0vw';
    }
    else
    {
        document.getElementById('navbar_header').style.marginLeft = '';
    }
} 

function DialogShow() {
    show_dialog = !show_dialog
    if(show_dialog)
    {
        document.getElementById('dialog').style.marginLeft = '0vw';
        document.getElementById('dialog').style.height = '150px';
    }
    else
    {
        document.getElementById('dialog').style.marginLeft = '';
        document.getElementById('dialog').style.height = '';
    }
} 