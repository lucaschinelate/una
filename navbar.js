document.addEventListener("DOMContentLoaded", function() {
  // HTML para o navbar
  var navbarHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Croqui-me</a>
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

  // HTML para o footer
  var footerHTML = `
    <footer class="footer py-3 bg-light text-center">
        <span>&copy; 2024 Croqui-me. Todos os direitos reservados.</span>
    </footer>`;
  document.body.insertAdjacentHTML('beforeend', footerHTML);
});