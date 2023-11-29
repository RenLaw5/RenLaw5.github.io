function showContent(id) {
    // Ocultar todos los contenidos
    var contents = document.getElementsByClassName('content');
    for (var i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
    }

    // Mostrar el contenido seleccionado
    var activeContent = document.getElementById(id);
    activeContent.style.display = 'flex';

    if(id === 'home') {
      document.body.style.backgroundImage = "url('images/bg_home.png')";
    } else {
      document.body.style.backgroundImage = "url('images/bg.png')";
    }
}
