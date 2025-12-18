const usuario = "danielcosta010";
const url = `https://api.github.com/users/${usuario}/repos?per_page=100&sort=updated`;

// Lista de repositórios que você quer mostrar (deixe vazio para mostrar os 5 primeiros)
const repositoriosSelecionados = [
  "portfolio",
  "siteanimado",
  "calculaDvCPFeCNPJ",
  "Jokenpo",
  "Jogo-adivinhe-o-numero",
];

async function buscaRepositorios() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    const portfolio = document.getElementById("portfolio");
    
    // Achei melgor tratar o erro de limit do github
    // Para evitar colocar o token no front-end
    // Se o GitHub bloquear, data NÃO será um array
    if (!Array.isArray(data)) {
      console.warn("GitHub API limite de reached ou erro:", data.message);
      return; // evita quebrar o site
    }

    // Filtra repositórios que não são forks
    const reposValidos = data.filter(repo => !repo.fork);

    // Se repositoriosSelecionados estiver vazio, pega os 5 primeiros
    const reposParaMostrar =
      repositoriosSelecionados.length > 0
        ? reposValidos.filter(repo => repositoriosSelecionados.includes(repo.name))
        : reposValidos.slice(0, 5);

    reposParaMostrar.forEach((repo) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">
          <svg fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          ${repo.name}
           <svg width="16px" height="16px" viewBox="0 0 16.00 16.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 0L9 1L11.2929 3.29289L6.2929 8.29289L7.70711 9.70711L12.7071 4.7071L15 7L16 6V0H10Z" fill="#fff"></path> <path d="M1 2H6V4H3V13H12V10H14V15H1V2Z" fill="#fff"></path> </g></svg>
        </a>
      `;
      portfolio.appendChild(li);
    });

  } catch (error) {
    console.error("Erro ao buscar repositorios", error);
  }
}

buscaRepositorios();