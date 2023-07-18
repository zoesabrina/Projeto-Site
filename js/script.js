
//menu
function menuResponsivo() {
    const link_menu = document.getElementById('myTopnav');
    link_menu.classList.toggle('active');
}

//red. botão, img, artigo
function redirecionarArtigo(url) {
    window.location.href = url;
}

function redirecionarParaArtigo() {
    window.location.href = "artigo.html";
}

function redirecionarParaSobre() {
    window.location.href = "sobre.html";
}

//contato
function inscrever() {
    var email = document.getElementById("email").value;

    if (validarEmail(email)) {
      alert("E-mail cadastrado com sucesso!");
    } else {
      alert("Por favor, insira um e-mail válido.");
    }
}
  
function validarEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
