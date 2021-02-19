function HideMenu() {
    document.getElementsByClassName('menu-flutuante')[0].style.visibility = 'hidden';
    document.getElementsByClassName('menu-flutuante')[0].style.height = '0px';
    document.getElementsByClassName('logo-img')[0].style.position = 'relative';
}

function ButtonSeguirCgC(){
    document.getElementById('buttonseguir').style.backgroundColor = "#C579E5"
    document.getElementById('buttonseguir').innerHTML = "Seguindo"
}
