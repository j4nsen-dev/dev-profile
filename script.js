const Modal = {
  open(course) {
    // open modal and add active class of modal
    document.querySelector('.modal-overlay').classList.add('active')
    document.querySelector('.content-modal').classList.add('content')

    if (course === 'html-css-video') {
      /* html e css - curso em video -------------------------------------------------- */
      document.getElementById('modal-title').innerHTML =
        'HTML5 e CSS3 - Curso em Vídeo'
      document.getElementById(
        'paragrafo-modal'
      ).innerHTML = `Um curso para criação de sites utilizando as tecnologias HTML5, CSS3 e JavaScript.
      </br>
      </br>
      <h4>Conteúdo abordado no curso:</h4>`

      const modulos = [
        'Aula 1 – História da Internet',
        'Aula 2 – História da HTML',
        'Aula 3 – Como Funciona a Internet',
        'Aula 4 – Primeiro Exemplo em HTML5',
        'Aula 5 – Tags Básicas em HTML5',
        'Aula 6 – Parágrafos, Quebras e Símbolos Especiais',
        'Aula 7 – Formatação de Texto com HTML5 e CSS3',
        'Aula 8 – Códigos de Cores em HTML5 e CSS3',
        'Aula 9 – Imagens em HTML5',
        'Aula 10 – Formatação de Imagens com CSS3',
        'Aula 11 – Listas em HTML5 com OL e UL',
        'Aula 12 – Links em HTML5',
        'Aula 13 – Menu com CSS3',
        'Aula 14 – Efeitos visuais em CSS3',
        'Aula 15 – Formatação de Interfaces com HTML5',
        'Aula 16 – Cabeçalho em CSS3',
        'Aula 17 – Fontes em CSS3',
        'Aula 18 – Semântica em HTML5',
        'Aula 19 – Tabelas em HTML',
        'Aula 20 – Estilos CSS para Tabelas em HTML5',
        'Aula 21 – Interfaces em HTML5',
        'Aula 22 – Introdução ao JavaScript',
        'Aula 23 – JavaScript com Objetos',
        'Aula 24 – Funções JavaScript',
        'Aula 25 – Integrando JavaScript e HTML5',
        'Aula 26 – Documentos Adicionais',
        'Aula 27 – IFRAME em HTML5',
        'Aula 28 – Mapas de Imagem',
        'Aula 29 – Álbum de Fotos em HTML5 – Parte 1',
        'Aula 30 – Álbum de Fotos em HTML5 – Parte 2',
        'Aula 31 – Áudio e Vídeo em HTML5',
        'Aula 32 – Áudio e Vídeo Avançados',
        'Aula 33 – Formulários em HTML5 (parte 1)',
        'Aula 34 – Formulários em HTML5 (parte 2)',
        'Aula 35 – Como Hospedar um Site',
        'Aula 36 – Formulários com JavaScript'
      ]
      for (let position = 0; position < modulos.length; position += 1) {
        const liModal = document.createElement('li')
        liModal.innerHTML = modulos[position]
        document.getElementById('modulos').appendChild(liModal)
      }
    } else if (course === 'javascript-video') {
      /* javascript curso em video ---------------------------------------------------- */
      document.getElementById('modal-title').innerHTML =
        'JavaScript - Curso em Vídeo'
      document.getElementById(
        'paragrafo-modal'
      ).innerHTML = `Curso de linguagem JavaScript patrocinado pela Google, voltado para iniciantes e também para aprender mais sobre o ECMAScript, versão padronizada do JS. Conteúdo distribuído em 6 módulos que vão desde o conhecimento da linguagem até o uso de funções.
      </br>
      </br>
      <h4>Conteúdo abordado no curso:</h4>`
      const modulos = [
        'Introdução – JavaScript Moderno',
        'Aula 1 – O que o JavaScript é capaz de fazer?',
        'Aula 2 – Como chegamos até aqui?',
        'Aula 3 – Dando os primeiros passos',
        'Aula 4 – Criando o seu primeiro script',
        'Aula 5 – Variáveis e Tipos Primitivos',
        'Aula 6 – Tratamento de dados',
        'Aula 7 – Operadores (Parte1)',
        'Aula 8 – Operadores (Parte 2)',
        'Aula 9 – Introdução ao DOM',
        'Aula 10 – Eventos DOM',
        'Aula 11 – Condições (Parte 1)',
        'Aula 12 – Condições (Parte 2)',
        'Exercícios JavaScript (Parte 1)',
        'Exercícios JavaScript (Parte 2)',
        'Exercícios JavaScript (Parte 3)',
        'Aula 13 – Repetições (Parte 1)',
        'Aula 14 – Repetições (Parte 2)',
        'Exercícios JavaScript (Parte 4)',
        'Exercícios JavaScript (Parte 5)',
        'Exercícios JavaScript (Parte 6)',
        'Aula 15 – Variáveis Compostas',
        'Aula 16 – Funções',
        'Exercícios JavaScript (Parte 7)',
        'Exercícios JavaScript (Parte 8)',
        'Aula 17 – Próximos Passos'
      ]
      for (let position = 0; position < modulos.length; position += 1) {
        const liModal = document.createElement('li')
        liModal.innerHTML = modulos[position]
        document.getElementById('modulos').appendChild(liModal)
      }
    } else if (course === 'html-estelar') {
      /* html rocketseat -------------------------------------------------------------- */
      document.getElementById('modal-title').innerHTML =
        'Guia estelar de HTML - Rocketseat'
      document.getElementById(
        'paragrafo-modal'
      ).innerHTML = `Os guias estelares fazem parte de uma trilha pra quem busca dominar os fundamentos da programação e da web como HTML, CSS, JavaScript e Git.
      </br>
      </br>
      <h4>Conteúdo abordado no curso:</h4>`
      const modulos = [
        'Aula 1 - Abertura',
        'Aula 2 - Instalando plugin de preview HTML',
        'Aula 3 - O que é HTML',
        'Aula 4 - Comentários',
        'Aula 5 - Anatomia das Tags',
        'Aula 6 - Atributos',
        'Aula 7 - Atributos Globais',
        'Aula 8 - Aninhamento Hierarquia',
        'Aula 9 - Praticando',
        'Aula 10 - Caracteres Reservados',
        'Aula 11 - Anatomia Documento',
        'Aula 12 - Criando Projetos',
        'Aula 13 - Semântica',
        'Aula 14 - Títulos e Parágrafos',
        'Aula 15 - Listas',
        'Aula 16 - Citações',
        'Aula 17 - Abreviações',
        'Aula 18 - Detalhes de contato',
        'Aula 19 - Lista de descrição',
        'Aula 20 - Representação de código',
        'Aula 21 - Elementos Genéricos',
        'Aula 22 - Conhecendo a tag âncora',
        'Aula 23 - Utilizando a tag âncora',
        'Aula 24 - Conteúdos dentro de elemento a',
        'Aula 25 - Caminhos e URLS',
        'Aula 26 - Como navegar pelos diretórios',
        'Aula 27 - Caminhos absolutos vs relativos',
        'Aula 28 - Exercício de apresentação',
        'Aula 29 - Exercício de resolução',
        'Aula 30 - Tabelas',
        'Aula 31 - Tabela básica',
        'Aula 32 - Organizando Tabelas',
        'Aula 33 - Tabela complexa',
        'Aula 34 - THead complexa',
        'Aula 35 - TBody complexo',
        'Aula 36 - Melhorando o aspecto com colgroup',
        'Aula 37 - Melhorando acessibilidade',
        'Aula 38 - Head',
        'Aula 39 - Meta',
        'Aula 40 - Favicon',
        'Aula 41 - Meta SEO',
        'Aula 42 - Meta Social'
      ]
      for (let position = 0; position < modulos.length; position += 1) {
        const liModal = document.createElement('li')
        liModal.innerHTML = modulos[position]
        document.getElementById('modulos').appendChild(liModal)
      }
    } else if (course === 'css-estelar') {
      /* CSS - rocketseat ------------------------------------------------------------- */
      document.getElementById('modal-title').innerHTML =
        'Guia estelar de CSS - Rocketseat'
      document.getElementById(
        'paragrafo-modal'
      ).innerHTML = `Os guias estelares fazem parte de uma trilha pra quem busca dominar os fundamentos da programação e da web como HTML, CSS, JavaScript e Git.
      </br>
      </br>
      <h4>Conteúdo abordado no curso:</h4>`
      const modulos = [
        'Aula 1 - Abertura',
        'Aula 2 - Conhecendo o CSS',
        'Aula 3 - Comentários',
        'Aula 4 - Anatomia',
        'Aula 5 - Seletores',
        'Aula 6 - Box model',
        'Aula 7 - Origem do CSS',
        'Aula 8 - A Cascata',
        'Aula 9 - Especificidade',
        'Aula 10 - Regra important',
        'Aula 11 - At rules',
        'Aula 12 - Shorthand',
        'Aula 13 - Funções',
        'Aula 14 - DevTools',
        'Aula 15 - Cuidados com a escrita',
        'Aula 16 - Vendor prefixes'
      ]
      for (let position = 0; position < modulos.length; position += 1) {
        const liModal = document.createElement('li')
        liModal.innerHTML = modulos[position]
        document.getElementById('modulos').appendChild(liModal)
      }
    } else if (course === 'javascript-estelar') {
      /* javascript rocketseat --------------------------------------------------------- */
      document.getElementById('modal-title').innerHTML =
        'Guia estelar de JavaScript - Rocketseat'
      document.getElementById(
        'paragrafo-modal'
      ).innerHTML = `Os guias estelares fazem parte de uma trilha pra quem busca dominar os fundamentos da programação e da web como HTML, CSS, JavaScript e Git.
      </br>
      </br>
      <h4>Conteúdo abordado no curso:</h4>`
      const modulos = [
        'Aula 1 - Abertura',
        'Aula 2 - Javascript',
        'Aula 3 - Sintaxe',
        'Aula 4 - Maneiras de executar o JavaScript',
        'Aula 5 - Adicionando arquivos JS',
        'Aula 6 - Comentários',
        'Aula 7 - String',
        'Aula 8 - Number',
        'Aula 9 - Boolean',
        'Aula 10 - Undefined vs null',
        'Aula 11 - Object',
        'Aula 12 - Array',
        'Aula 13 - Conhecendo as variáveis',
        'Aula 14 - Tipos dinâmicos',
        'Aula 15 - Scope e var',
        'Aula 16 - Scope let e const',
        'Aula 17 - Nomeando variáveis',
        'Aula 18 - Declaration assignment var',
        'Aula 19 - Agrupando declarações',
        'Aula 20 - Concatenando e interpolando variáveis',
        'Aula 21 - Objects',
        'Aula 22 - Arrays',
        'Aula 23 - Exercícios',
        'Aula 24 - Functions',
        'Aula 25 - Argumentos e parâmetros',
        'Aula 26 - Retornando valores dentro da função',
        'Aula 27 - Outra maneira de entender funções',
        'Aula 28 - Function scope',
        'Aula 29 - Function Hoisting',
        'Aula 30 - Arrow function',
        'Aula 31 - Callback function',
        'Aula 32 - Funções construtoras',
        'Aula 33 - Prototype',
        'Aula 34 - Type conversion coersion',
        'Aula 35 - Strings em números',
        'Aula 36 - Contando caracteres e digitos',
        'Aula 37 - Casas decimais',
        'Aula 38 - Maiúsculas e minúsculas',
        'Aula 39 - Separando strings',
        'Aula 40 -Encontrando palavras em frases',
        'Aula 41 - Criando array com construtor',
        'Aula 42 - Elementos do Array',
        'Aula 43 - Strings para arrays',
        'Aula 44 - Manipulando arrays',
        'Aula 45 - Expressões e operadores',
        'Aula 46 - New',
        'Aula 47 - Typeof delete',
        'Aula 48 - Operadores aritméticos',
        'Aula 49 - Grouping operator',
        'Aula 50 - Operadores de comparação igual a e diferente de',
        'Aula 51 - Operadores de comparação estritamente igual e estritamente diferente',
        'Aula 52 - Operadores de comparação maior e menor (igual)',
        'Aula 53 - Operadores de atribuição',
        'Aula 54 - Operadores lógicos',
        'Aula 55 - Operador condicional ternário',
        'Aula 56 - Operadores para string',
        'Aula 57 - Falsy e truthy',
        'Aula 58 - Precedência dos operadores',
        'Aula 59 - Controle de fluxo da aplicação',
        'Aula 60 - If e Else',
        'Aula 61 - Switch',
        'Aula 62 - Throw e Try/Catch',
        'Aula 63 - For',
        'Aula 64 - While',
        'Aula 65 - For of',
        'Aula 66 - For in',
        'Aula 67 - Praticar para aperfeiçoar',
        'Aula 68 - Sistema de notas escolares',
        'Aula 69 - Fluxo de caixa familiar',
        'Aula 70 - Celsius to Fahrenheit',
        'Aula 71 - Buscando e encontrando dados em Array'
      ]
      for (let position = 0; position < modulos.length; position += 1) {
        const liModal = document.createElement('li')
        liModal.innerHTML = modulos[position]
        document.getElementById('modulos').appendChild(liModal)
      }
    } else if (course === 'http-estelar') {
      /* http rocketseat -------------------------------------------------------------- */
      document.getElementById('modal-title').innerHTML =
        'Guia estelar de HTTP - Rocketseat'
      document.getElementById(
        'paragrafo-modal'
      ).innerHTML = `Os guias estelares fazem parte de uma trilha pra quem busca dominar os fundamentos da programação e da web como HTML, CSS, JavaScript e Git.
      </br>
      </br>
      <h4>Conteúdo abordado no curso:</h4>`
      const modulos = [
        'Aula 1 - Abertura',
        'Aula 2 - Visão Geral',
        'Aula 3 - Visualizando a comunicação',
        'Aula 4 - Visualizando com DevTools',
        'Aula 5 - Visualizando com cURL',
        'Aula 6 - Conceitos',
        'Aula 7 - Cliente',
        'Aula 8 - Servidor',
        'Aula 9 - Proxies',
        'Aula 10 - Resource',
        'Aula 11 - Recurso',
        'Aula 12 - URL',
        'Aula 13 - URN',
        'Aula 14 - Revisão Resource',
        'Aula 15 - Mensagens',
        'Aula 16 - Request',
        'Aula 17 - Response',
        'Aula 18 - Methods',
        'Aula 19 - JSON Server',
        'Aula 20 - OPTIONS',
        'Aula 21 - GET',
        'Aula 22 - HEAD',
        'Aula 23 - POST',
        'Aula 24 - PUT',
        'Aula 25 - PATCH',
        'Aula 26 - DELETE',
        'Aula 27 - O que são Headers?',
        'Aula 28 - Entendendo pelo contexto',
        'Aula 29 - General',
        'Aula 30 - Request',
        'Aula 31 - Response',
        'Aula 32 - Obtendo Ajuda',
        'Aula 33 - Status code mais comuns',
        'Aula 34 - Buscando mais informações'
      ]
      for (let position = 0; position < modulos.length; position += 1) {
        const liModal = document.createElement('li')
        liModal.innerHTML = modulos[position]
        document.getElementById('modulos').appendChild(liModal)
      }
    } else if (course === 'git-estelar') {
      /* git rocketseat ----------------------------------------------------- */
      document.getElementById('modal-title').innerHTML =
        'Guia estelar de Git - Rocketseat'
      document.getElementById(
        'paragrafo-modal'
      ).innerHTML = `Os guias estelares fazem parte de uma trilha pra quem busca dominar os fundamentos da programação e da web como HTML, CSS, JavaScript e Git.
      </br>
      </br>
      <h4>Conteúdo abordado no curso:</h4>`
      const modulos = [
        'Aula 1 - Controle de Versão',
        'Aula 2 - Tipos de controles de versão',
        'Aula 3 - O que é o git',
        'Aula 4 - Instalando git no mac',
        'Aula 5 - Instalando git no windows',
        'Aula 6 - Instalando git no linux',
        'Aula 7 - Configuração inicial',
        'Aula 8 - Git help',
        'Aula 9 - Iniciando um repositório',
        'Aula 10 - O o git guarda o histórico do projeto',
        'Aula 11 - O primeiro commit',
        'Aula 12 - Git log',
        'Aula 13 - Estágios do arquivo',
        'Aula 14 - Git Workflow',
        'Aula 15 - Hash SHA-1',
        'Aula 16 - HEAD',
        'Aula 17 - Revisão prática',
        'Aula 18 - Adicionando arquivos com git add',
        'Aula 19 - Editando arquivos',
        'Aula 20 - Modificações com git diff',
        'Aula 21 - Git diff staged',
        'Aula 22 - Deletando arquivos',
        'Aula 23 - Renomeando arquivos',
        'Aula 24 - Movendo arquivos',
        'Aula 25 - Desfazendo modificações',
        'Aula 26 - Trazendo de volta do staged',
        'Aula 27 - Corrigindo o último commit',
        'Aula 28 - Recuperando arquivos',
        'Aula 29 - Removendo arquivos não rastreados',
        'Aula 30 - Revertendo um commit',
        'Aula 31- Iniciando um novo projeto',
        'Aula 32 - Adicionando e verificando alterações',
        'Aula 33 - Staging e commits com atalho',
        'Aula 34 - Ver modificações em diversos pontos da história',
        'Aula 35 - Ignorando arquivos e diretórios indesejados'
      ]
      for (let position = 0; position < modulos.length; position += 1) {
        const liModal = document.createElement('li')
        liModal.innerHTML = modulos[position]
        document.getElementById('modulos').appendChild(liModal)
      }
    } else if (course === 'github-estelar') {
      /* github rocketseat ----------------------------------------------------- */
      document.getElementById('modal-title').innerHTML =
        'Guia estelar de GitHub - Rocketseat'
      document.getElementById(
        'paragrafo-modal'
      ).innerHTML = `Os guias estelares fazem parte de uma trilha pra quem busca dominar os fundamentos da programação e da web como HTML, CSS, JavaScript e Git.
      </br>
      </br>
      <h4>Conteúdo abordado no curso:</h4>`
      const modulos = [
        'Aula 1 - Para quem é o curso?',
        'Aula 2 - Requisitos para o curso e revisão de Git',
        'Aula 3 - Criando uma conta',
        'Aula 4 - Configurando perfil público',
        'Aula 5 - Conhecendo a página do usuário',
        'Aula 6 - Criando repositório online',
        'Aula 7 - Conhecendo a página do repositório',
        'Aula 8 - Atualizando o repositório',
        'Aula 9 - Copiando ideia de README pessoal',
        'Aula 10 - Colaborando em outros repositórios',
        'Aula 11 - Conhecendo o restante da página pessoal',
        'Aula 12 - Criando chave SSH',
        'Aula 13 - Adicionando chaves ao gerenciador local SSH Agent',
        'Aula 14 - Linkando um repositório remoto com local',
        'Aula 15 - Modificando arquivos local e enviando para repositório remoto',
        'Aula 16 - Modificando arquivos remotos e puxando para repositório local',
        'Aula 17 - Entendendo o histórico remoto',
        'Aula 18 - Corrigindo conflitos de merge',
        'Aula 19 - Pesquisando no Github',
        'Aula 20 - Estrelas e git clone',
        'Aula 21 - Despedida'
      ]
      for (let position = 0; position < modulos.length; position += 1) {
        const liModal = document.createElement('li')
        liModal.innerHTML = modulos[position]
        document.getElementById('modulos').appendChild(liModal)
      }
    }
  },
  close() {
    // closed modal and remove class active of modal
    document.querySelector('.modal-overlay').classList.remove('active')
    document.getElementById('modal-title').innerHTML = ''
    document.getElementById('paragrafo-modal').innerHTML = ''
    document.getElementById('modulos').innerHTML = ''
  }
}
