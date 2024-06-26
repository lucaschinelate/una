document.addEventListener("DOMContentLoaded", function() {
  var navbarHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
            <img src="imagens/logo_min.png" alt="Croqui-me" class="logo"> Croqui-me
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ml-auto">
                <a class="nav-item nav-link active" href="dashboard.html">Meu Perfil</a>
                <a class="nav-item nav-link" href="recomendacoes.html">Recomendações</a>
                <a class="nav-item nav-link" href="feedback.html">Feedback</a>
                <a class="nav-item nav-link" href="consultoria.html">Consultoria</a>
                <a class="nav-item nav-link" href="index.html">Sair</a>
            </div>
        </div>
    </nav>`;
  document.body.insertAdjacentHTML('afterbegin', navbarHTML);
});