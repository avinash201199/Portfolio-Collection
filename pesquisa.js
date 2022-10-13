/*--------------------------------------------------------------------------início do código de pesquisa*/
const exibirFilmes = (data) => {
  let dadosFilmes = JSON.parse(data.target.response);
  localStorage.setItem("db_filmes", data.target.response);
  
  let dadosHTML = "";

  for (let i = 0; i < dadosFilmes.results.length; i++) {
    let filme = dadosFilmes.results[i];
    dadosHTML += `
    <div class="card col-12 col-md-6 col-lg-4">
      <img src="${filme.backdrop_path}" class="card-img-top" alt="filmeXPTO">
      <div class="card-body">
        <h5 class="card-title">${filme.title}</h5>
        <p class="card-text">${filme.overview}</p>
        <p class="card-text">${filme.release_date}</p>
        <a href="detalhes.html?id=${filme.id}" class="btn btn-success">Details</a>
      </div>
    </div>    
    `;
  }
  document.getElementById("resultadoPesquisa") = dadosHTML;
};

const init2 = () => {
  let query = document.getElementById("txtPesquisa").value;
  console.log("init");
  let xhr = new XMLHttpRequest();
  let url = `https://api.themoviedb.org/3/search/movie?api_key=db8161f1f56a003d20c2436b8d39a77b&query=${query}&page=1`;

  xhr.onload = exibirFilmes;
  xhr.open("GET", url, true);
  xhr.send();
};

document.body.onload = init2;

function pesquisarFilmes() {
  console.log("ok");
  init2();
}

document.getElementById("btnPesquisa").onclick = pesquisarFilmes;
