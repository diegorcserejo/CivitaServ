document.addEventListener('DOMContentLoaded', () => {
    // Dados dos encanadores
    const encanadoresData = [
        {
            name: "ADRIANO",
            description: "Encanador especializado em sistemas de tubulação residencial e comercial.",
            year: "25",
            type: "4.8",
            radius: "Reparos Emergenciais e Instalações",
            image: './imgs/enc1.jpg'
        },
        {
            name: "BETO",
            description: "Perito em manutenção de sistemas hidráulicos complexos.",
            year: "33",
            type: "4.5",
            radius: "Desentupimentos e Drenagem",
            image: './imgs/enc2.jpg'
        },
        {
            name: "JOÃO",
            description: "Especialista em soluções sustentáveis, como sistemas de reuso de água e captação de água da chuva. Atende tanto residências quanto empresas com foco em inovação.",
            year: "21",
            type: "4.9",
            radius: "Soluções Sustentáveis e Inovadoras",
            image: './imgs/enc3.png'
        },
        {
            name: "SÁVIO",
            description: "Veterano em encanamento com décadas de experiência em projetos de grande escala, como prédios e indústrias. Referência em planejamento e execução de sistemas hidráulicos robustos.",
            year: "34",
            type: "4.7",
            radius: "Projetos Hidráulicos e Grandes Obras",
            image: './imgs/enc4.png'
        }
    ];

    // Dados dos eletricistas
    const eletricistasData = [
        {
            name: "ELLEN",
            description: "Eletricista especializada em instalações residenciais e comerciais.",
            year: "28",
            type: "4.8",
            radius: "Instalações e Reparos Elétricos",
            image: './imgs/eletri1.jpg',
        },
        {
            name: "MARCOS",
            description: "Perito em sistemas elétricos complexos.",
            year: "20",
            type: "4.6",
            radius: "Manutenção e Correção de Curto-circuitos",
            image: './imgs/eletri2.jpg',
        },
        {
            name: "RICARDO",
            description: "Especialista em soluções sustentáveis, como sistemas de energia solar e eficiência energética. Focado em atender residências e empresas.",
            year: "30",
            type: "4.9",
            radius: "Energia Solar e Sustentabilidade",
            image: "./imgs/eletri3.jpg", 
        },
        {
            name: "ANTÔNIO",
            description: "Veterano em instalações elétricas para grandes obras, como edifícios e indústrias. Referência em projetos de alta complexidade.",
            year: "25",
            type: "4.7",
            radius: "Projetos Elétricos para Grandes Estruturas",
            image: "./imgs/eletri4.png", 
        },
    ];

    // Dados dos reformistas
    const reformistasData = [
        {
            name: "ROBERTO",
            description: "Especialista em reformas de ambientes internos e externos. Conhecido pela criatividade em projetos e pela entrega dentro do prazo.",
            year: "30",
            type: "4.8 estrelas",
            radius: "Reformas Completas e Pequenas Restaurações",
            image: "./imgs/reforma1.png",
        },
        {
            name: "GUSTAVO",
            description: "Profissional em reforma estrutural, especializado em reparos de fundação e reforço de edificações antigas.",
            year: "25",
            type: "4.7 estrelas",
            radius: "Reparos Estruturais",
            image: "./imgs/reforma2.png",
        },
        {
            name: "DEBORA",
            description: "Designer de interiores com foco em reformas criativas, utilizando materiais sustentáveis e soluções personalizadas para cada cliente.",
            year: "39",
            type: "4.8 estrelas",
            radius: "Design de Interiores e Reformas",
            image: "./imgs/reforma3.jpg",
        },
        {
            "name": "ADRIANE",
            "description": "Especialista em reformas residenciais e comerciais, com foco em design funcional, otimização de espaços e uso de materiais sustentáveis para criar ambientes únicos e acolhedores.",
            "year": "31",
            "type": "4.9 estrelas",
            "radius": "Reformas Criativas e Sustentáveis",
            "image": "./imgs/reforma4.png"
        }        
    ];

    // Dados dos limpadores
    const limpadoresData = [
        {
            name: "ANA",
            description: "Profissional de limpeza com experiência em residências e escritórios. Focada em eficiência e cuidado em cada detalhe do ambiente.",
            year: "28",
            type: "4.9 estrelas",
            radius: "Limpeza Geral e Pós-Obra",
            image: "./imgs/limpador1.jpg",
        },
        {
              
            name: "CARLA",
            description: "Especialista em limpeza profunda e cuidados com ambientes comerciais e corporativos. Preza pela organização e qualidade no serviço.",
            year: "25",
            type: "4.7 estrelas",
            radius: "Limpeza Corporativa e Comercial",
            image: "./imgs/limpador2.jpg",
        },
        {
            name: "MARIO",
            description: "Experiente em limpeza pós-obra e em situações de grandes reformas. Comprometido com a eficiência e limpeza impecável dos ambientes.",
            year: "22",
            type: "4.8 estrelas",
            radius: "Limpeza Pós-Obra e Renovação",
            image: "./imgs/limpador3.jpg",
        },
        {
            name: "PAULA",
            description: "Profissional com experiência em limpeza e organização de grandes espaços, como shoppings e eventos. Proporciona um ambiente limpo e agradável.",
            year: "28",
            type: "4.6 estrelas",
            radius: "Limpeza Comercial e Eventos",
            image: "./imgs/limpador4.jpg",
        },
      ];
              // Dados dos jardineiros
    const jardineirosData = [
        {
            name: "JOANA",
            description: "Jardineira experiente em paisagismo e manutenção de jardins. Especialista em criar ambientes verdes harmônicos e agradáveis.",
            year: "25",
            type: "4.7 estrelas",
            radius: "Paisagismo e Manutenção",
            image: "./imgs/jardinagem1.png",
        },
        {
            name: "CÉLIO",
            description: "Focado em plantio e revitalização de áreas verdes. Trabalha com espécies nativas e plantas ornamentais para criar espaços harmônicos.",
            year: "28",
            type: "4.8 estrelas",
            radius: "Revitalização e Plantio",
            image: "./imgs/jardinagem2.png",
        },
        {
            name: "FLAVIA",
            description: "Experiência em sistemas de irrigação automatizados e otimização de recursos para jardins de grande porte.",
            year: "25",
            type: "4.7 estrelas",
            radius: "Instalação de Irrigação",
            image: "./imgs/jardinagem3.png",
        },
        {
            name: "MARCELO",
            description: "Especialista em poda e controle de pragas, garantindo a saúde e o desenvolvimento adequado de plantas e árvores.",
            year: "30",
            type: "4.8 estrelas",
            radius: "Poda e Controle de Pragas",
            image: "./imgs/jardinagem4.png",
        },
    ];


    const titleElement = document.querySelector('.title');
    const encanadoresGrid = document.querySelector('.encanadores-grid');
    const titleElement2 = document.querySelector('.title2');
    const eletricistasGrid = document.querySelector('.eletricistas-grid');
    const titleElement3 = document.querySelector('.title3');
    const reformistasGrid = document.querySelector('.reformistas-grid');
    const titleElement4 = document.querySelector('.title4');
    const limpadoresGrid = document.querySelector('.limpadores-grid');
    const titleElement5 = document.querySelector('.title5');
    const jardineirosGrid = document.querySelector('.jardineiros-grid');

    // Função para exibir os encanadores
    function displayEncanadores(encanadoresData) {
        encanadoresGrid.innerHTML = ''; // Limpa a grid antes de adicionar novos cards
        encanadoresData.forEach(encanador => {
            const encanadoresCard = document.createElement('div');
            encanadoresCard.classList.add('encanadores-card');
            encanadoresCard.innerHTML = `
                <img src="${encanador.image}" alt="Imagem de ${encanador.name}">
                <div>
                    <h3>${encanador.name}</h3>
                    <p>${encanador.description}</p>
                    <p><strong>Idade:</strong> ${encanador.year} anos</p>
                    <p><strong>Especialização:</strong> ${encanador.radius}</p>
                    <div class="rating">
                        <strong>Avaliação:</strong> ${generateStars(encanador.type)}
                    </div>
                </div>
                <button class="contact-btn"><i class="fas fa-phone-alt"></i> Contatar</button>
            `;
            encanadoresGrid.appendChild(encanadoresCard);
        });

        // Adicionando evento de clique aos botões de contato para encanadores
        document.querySelectorAll('.contact-btn').forEach(button => {
            button.addEventListener('click', () => {
                button.classList.toggle('active');

                if (button.classList.contains('active')) {
                    const randomNumber = Math.floor(100000000 + Math.random() * 900000000);
                    button.innerHTML = `${randomNumber}`;
                } else {
                    button.innerHTML = '<i class="fas fa-phone-alt"></i> Contatar';
                }
            });
        });
    }

 // Função para exibir os eletricistas
function displayEletricistas(eletricistasData) {
    eletricistasGrid.innerHTML = ''; // Limpa a grid antes de adicionar novos cards
    eletricistasData.forEach(professional => {
        const card = document.createElement('div');
        card.classList.add('eletricistas-card'); // Mudando para eletricistas-card
        card.innerHTML = `
            <img src="${professional.image}" alt="Imagem de ${professional.name}">
            <div>
                <h3>${professional.name}</h3>
                <p>${professional.description}</p>
                <p><strong>Idade:</strong> ${professional.year} anos</p>
                <p><strong>Especialização:</strong> ${professional.radius}</p>
                <div class="rating">
                    <strong>Avaliação:</strong> ${generateStars(professional.type)}
                </div>
            </div>
            <button class="contact-btn"><i class="fas fa-phone-alt"></i> Contatar</button>
        `;
        eletricistasGrid.appendChild(card);
    });

    // Adicionando evento de clique aos botões de contato para eletricistas
    document.querySelectorAll('.contact-btn').forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('active');

            if (button.classList.contains('active')) {
                const randomNumber = Math.floor(100000000 + Math.random() * 900000000);
                button.innerHTML = `${randomNumber}`;
            } else {
                button.innerHTML = '<i class="fas fa-phone-alt"></i> Contatar';
            }
        });
    });
}

    // Função para exibir os reformistas
    function displayReformistas(reformistasData) {
        reformistasGrid.innerHTML = ''; // Limpa a grid antes de adicionar novos cards
        reformistasData.forEach(professional => {
            const card = document.createElement('div');
            card.classList.add('reformistas-card'); // Mudando para reformistas-card
            card.innerHTML = `
                <img src="${professional.image}" alt="Imagem de ${professional.name}">
                <div>
                    <h3>${professional.name}</h3>
                    <p>${professional.description}</p>
                    <p><strong>Idade:</strong> ${professional.year} anos</p>
                    <p><strong>Especialização:</strong> ${professional.radius}</p>
                    <div class="rating">
                        <strong>Avaliação:</strong> ${generateStars(professional.type)}
                    </div>
                </div>
                <button class="contact-btn"><i class="fas fa-phone-alt"></i> Contatar</button>
            `;
            reformistasGrid.appendChild(card);
        });

        // Adicionando evento de clique aos botões de contato para reformistas
        document.querySelectorAll('.contact-btn').forEach(button => {
            button.addEventListener('click', () => {
                button.classList.toggle('active');

                if (button.classList.contains('active')) {
                    const randomNumber = Math.floor(100000000 + Math.random() * 900000000);
                    button.innerHTML = `${randomNumber}`;
                } else {
                    button.innerHTML = '<i class="fas fa-phone-alt"></i> Contatar';
                }
            });
        });
    }

    // Função para exibir os limpadores
function displayLimpadores(limpadoresData) {
    limpadoresGrid.innerHTML = ''; // Limpa a grid antes de adicionar novos cards
    limpadoresData.forEach(limpador => {
        const limpadoresCard = document.createElement('div');
        limpadoresCard.classList.add('limpadores-card');
        limpadoresCard.innerHTML = `
            <img src="${limpador.image}" alt="Imagem de ${limpador.name}">
            <div>
                <h3>${limpador.name}</h3>
                <p>${limpador.description}</p>
                <p><strong>Idade:</strong> ${limpador.year} anos</p>
                <p><strong>Especialização:</strong> ${limpador.radius}</p>
                <div class="rating">
                    <strong>Avaliação:</strong> ${generateStars(limpador.type)}
                </div>
            </div>
            <button class="contact-btn"><i class="fas fa-phone-alt"></i> Contatar</button>
        `;
        limpadoresGrid.appendChild(limpadoresCard);
    });

    // Adicionando evento de clique aos botões de contato para limpadores
    document.querySelectorAll('.contact-btn').forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('active');

            if (button.classList.contains('active')) {
                const randomNumber = Math.floor(100000000 + Math.random() * 900000000);
                button.innerHTML = `${randomNumber}`;
            } else {
                button.innerHTML = '<i class="fas fa-phone-alt"></i> Contatar';
            }
        });
    });
}

// Função para exibir os jardineiros
function displayJardineiros(jardineirosData) {
    jardineirosGrid.innerHTML = ''; // Limpa a grid antes de adicionar novos cards
    jardineirosData.forEach(jardineiro => {
        const jardineirosCard = document.createElement('div');
        jardineirosCard.classList.add('jardineiros-card');
        jardineirosCard.innerHTML = `
            <img src="${jardineiro.image}" alt="Imagem de ${jardineiro.name}">
            <div>
                <h3>${jardineiro.name}</h3>
                <p>${jardineiro.description}</p>
                <p><strong>Idade:</strong> ${jardineiro.year} anos</p>
                <p><strong>Especialização:</strong> ${jardineiro.radius}</p>
                <div class="rating">
                    <strong>Avaliação:</strong> ${generateStars(jardineiro.type)}
                </div>
            </div>
            <button class="contact-btn"><i class="fas fa-phone-alt"></i> Contatar</button>
        `;
        jardineirosGrid.appendChild(jardineirosCard);
    });

    // Adicionando evento de clique aos botões de contato para jardineiros
    document.querySelectorAll('.contact-btn').forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('active');

            if (button.classList.contains('active')) {
                const randomNumber = Math.floor(100000000 + Math.random() * 900000000);
                button.innerHTML = `${randomNumber}`;
            } else {
                button.innerHTML = '<i class="fas fa-phone-alt"></i> Contatar';
            }
        });
    });
}


// Função de filtro para selecionar a profissão
window.filterProfession = function () {
    const serviceType = document.querySelector('#service-type').value;

    // Exibe a lista de limpadores quando "limpador" for selecionado
    if (serviceType === 'limpador') {
        titleElement4.textContent = "Lista de Faxineiros";
        titleElement4.style.display = 'block';
        limpadoresGrid.style.display = 'grid';
        displayLimpadores(limpadoresData);

        // Esconde todas as outras grids e títulos
        titleElement.style.display = 'none';
        encanadoresGrid.style.display = 'none';
        titleElement2.style.display = 'none';
        eletricistasGrid.style.display = 'none';
        titleElement3.style.display = 'none';
        reformistasGrid.style.display = 'none';
        jardineirosGrid.style.display = 'none';  // Esconde a grid de jardineiros
    } 
    // Exibe a lista de encanadores quando "encanador" for selecionado
    else if (serviceType === 'encanador') {
        titleElement.textContent = "Lista de Encanadores";
        titleElement.style.display = 'block';
        encanadoresGrid.style.display = 'grid';
        displayEncanadores(encanadoresData);

        // Esconde todas as outras grids e títulos
        titleElement2.style.display = 'none';
        eletricistasGrid.style.display = 'none';
        titleElement3.style.display = 'none';
        reformistasGrid.style.display = 'none';
        titleElement4.style.display = 'none';
        limpadoresGrid.style.display = 'none';
        jardineirosGrid.style.display = 'none';  // Esconde a grid de jardineiros
    } 
    // Exibe a lista de eletricistas quando "eletricista" for selecionado
    else if (serviceType === 'eletricista') {
        titleElement2.textContent = "Lista de Eletricistas";
        titleElement2.style.display = 'block';
        eletricistasGrid.style.display = 'grid';
        displayEletricistas(eletricistasData);

        // Esconde todas as outras grids e títulos
        titleElement.style.display = 'none';
        encanadoresGrid.style.display = 'none';
        titleElement3.style.display = 'none';
        reformistasGrid.style.display = 'none';
        titleElement4.style.display = 'none';
        limpadoresGrid.style.display = 'none';
        jardineirosGrid.style.display = 'none';  // Esconde a grid de jardineiros
    } 
    // Exibe a lista de reformistas quando "reformista" for selecionado
    else if (serviceType === 'reformista') {
        titleElement3.textContent = "Lista de Reformistas";
        titleElement3.style.display = 'block';
        reformistasGrid.style.display = 'grid';
        displayReformistas(reformistasData);

        // Esconde todas as outras grids e títulos
        titleElement.style.display = 'none';
        titleElement2.style.display = 'none';
        encanadoresGrid.style.display = 'none';
        eletricistasGrid.style.display = 'none';
        titleElement4.style.display = 'none';
        limpadoresGrid.style.display = 'none';
        jardineirosGrid.style.display = 'none';  // Esconde a grid de jardineiros
    } 
    // Exibe a lista de jardineiros quando "jardineiro" for selecionado
    else if (serviceType === 'jardineiro') {
        titleElement5.textContent = "Lista de Jardineiros";
        titleElement5.style.display = 'block';
        jardineirosGrid.style.display = 'grid';
        displayJardineiros(jardineirosData);

        // Esconde todas as outras grids e títulos
        titleElement.style.display = 'none';
        titleElement2.style.display = 'none';
        encanadoresGrid.style.display = 'none';
        eletricistasGrid.style.display = 'none';
        titleElement3.style.display = 'none';
        reformistasGrid.style.display = 'none';
        titleElement4.style.display = 'none';
        limpadoresGrid.style.display = 'none';  // Esconde a grid de limpadores
    }
};
    // Função para gerar estrelas de avaliação
    function generateStars(rating) {
        const score = parseFloat(rating); // Converte o valor em número
        const fullStars = Math.floor(score);
        const halfStar = score - fullStars >= 0.5;
        let starsHtml = '';

        for (let i = 0; i < fullStars; i++) {
            starsHtml += '<i class="fas fa-star"></i>';
        }
        if (halfStar) {
            starsHtml += '<i class="fas fa-star-half-alt"></i>';
        }
        for (let i = fullStars + (halfStar ? 1 : 0); i < 5; i++) {
            starsHtml += '<i class="far fa-star"></i>';
        }
        return starsHtml;
    }

    // Exibir encanadores por padrão ao carregar a página
    filterProfession();
});

// Seleciona todos os ícones com a classe .icon-circle
document.querySelectorAll('.icon-circle').forEach(function(icon) {
    icon.addEventListener('click', function() {
      // Cria a mensagem dinamicamente com base no atributo 'data-message'
      const messageText = icon.getAttribute('data-message');
      const messageDiv = document.querySelector('.message');
      
      // Atualiza o conteúdo da mensagem
      messageDiv.textContent = messageText;
      
      // Adiciona ou remove a classe 'show' para exibir a mensagem com animação
      messageDiv.classList.toggle('show');
    });
  });  