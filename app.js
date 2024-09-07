function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // se campoPesquisa for uma String vazia sem nada
    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nenhuma música foi encontrada</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    //Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo= "";
    let descricao = "";

    // para cada dado dentro da lista de dados
    for (let dado of dados) {   
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()

        // se titulo includes campo Pesquisa ou descrição inclui campo Pesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {            
            // cria um novo elemento html para cada resultado
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="https://music.apple.com/br/album/astroworld/1421241217" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Ouça agora no Spotify!</a>
            </div>
            `;
        }
    }

    if(!resultados) {
        resultados = "<p>Nada foi encontrado, verifique a ortografia! </p>"
    }



    section.innerHTML = resultados;
}
