document.addEventListener("DOMContentLoaded", function() {
  const model = [
      // Encanador
      {
          name: "ADRIANO",
          description: "Encanador especializado em sistemas de tubulação residencial e comercial. Conhecido pela precisão e rapidez na solução de vazamentos e instalação de encanamentos modernos.",
          year: "25",
          type: "4.8 estrelas",
          radius: "Reparos Emergenciais e Instalações",
          encanador: "./imgs/enc1.png",
          ambiente: "./imgs/fundo.png",
      },
      {
          name: "BETO",
          description: "Perito em manutenção de sistemas hidráulicos complexos. Experiência em desentupimentos e otimização de sistemas de drenagem.",
          year: "33",
          type: "4.6 estrelas",
          radius: "Desentupimentos e Drenagem",
          encanador: "./imgs/enc2.png", 
          ambiente: "./imgs/fundo.png", 
      },
      {
          name: "JOÃO",
          description: "Especialista em soluções sustentáveis, como sistemas de reuso de água e captação de água da chuva. Atende tanto residências quanto empresas com foco em inovação.",
          year: "21",
          type: "4.9 estrelas",
          radius: "Soluções Sustentáveis e Inovadoras",
          encanador: "./imgs/enc3.png", 
          ambiente: "./imgs/fundo.png",
      },
      {
          name: "SÁVIO",
          description: "Veterano em encanamento com décadas de experiência em projetos de grande escala, como prédios e indústrias. Referência em planejamento e execução de sistemas hidráulicos robustos.",
          year: "44",
          type: "4.7 estrelas",
          radius: "Projetos Hidráulicos e Grandes Obras",
          encanador: "./imgs/enc4.png", 
          ambiente: "./imgs/fundo.png", 
      },
      // Eletricista
      {
          name: "CARLOS",
          description: "Eletricista especializado em instalações residenciais e comerciais. Conhecido pela segurança e eficiência em resolver problemas elétricos.",
          year: "28",
          type: "4.8 estrelas",
          radius: "Instalações e Reparos Elétricos",
          eletricista: "./imgs/eletri1.png",
          ambiente: "./imgs/fundo.png",
      },
      {
          name: "MARCOS",
          description: "Perito em sistemas elétricos complexos. Experiência em manutenção preventiva e reparos de curto-circuito.",
          year: "35",
          type: "4.6 estrelas",
          radius: "Manutenção e Correção de Curto-circuitos",
          eletricista: "./imgs/eletr2.png", 
          ambiente: "./imgs/fundo.png", 
      },
      {
          name: "RICARDO",
          description: "Especialista em soluções sustentáveis, como sistemas de energia solar e eficiência energética. Focado em atender residências e empresas.",
          year: "30",
          type: "4.9 estrelas",
          radius: "Energia Solar e Sustentabilidade",
          eletricista: "./imgs/eletr3.png", 
          ambiente: "./imgs/piso3.jpg",
      },
      {
          name: "ANTÔNIO",
          description: "Veterano em instalações elétricas para grandes obras, como edifícios e indústrias. Referência em projetos de alta complexidade.",
          year: "50",
          type: "4.7 estrelas",
          radius: "Projetos Elétricos para Grandes Estruturas",
          eletricista: "./imgs/eletr4.png", 
          ambiente: "./imgs/piso4.jpg", 
      },
      // Reforma
      {
          name: "ROBERTO",
          description: "Especialista em reformas de ambientes internos e externos. Conhecido pela criatividade em projetos e pela entrega dentro do prazo.",
          year: "40",
          type: "4.8 estrelas",
          radius: "Reformas Completas e Pequenas Restaurações",
          reforma: "./imgs/reforma1.png",
          ambiente: "./imgs/fundo.png",
      },
      {
          name: "PEDRO",
          description: "Especialista em reformas residenciais completas, transformando espaços com design moderno e materiais de alta qualidade.",
          year: "40",
          type: "4.9 estrelas",
          radius: "Reformas Residenciais",
          reforma: "./imgs/reforma1.png",
          ambiente: "./imgs/fundo.png",
      },
      {
          name: "JÚLIA",
          description: "Arquiteta com experiência em reformas comerciais e otimização de espaços para negócios. Foco em funcionalidade e estética.",
          year: "32",
          type: "4.8 estrelas",
          radius: "Reformas Comerciais",
          reforma: "./imgs/reforma2.png",
          ambiente: "./imgs/fundo.png",
      },
      {
          name: "GUSTAVO",
          description: "Profissional em reforma estrutural, especializado em reparos de fundação e reforço de edificações antigas.",
          year: "45",
          type: "4.7 estrelas",
          radius: "Reparos Estruturais",
          reforma: "./imgs/reforma3.png",
          ambiente: "./imgs/fundo.png",
      },
      {
          name: "CAMILA",
          description: "Designer de interiores com foco em reformas criativas, utilizando materiais sustentáveis e soluções personalizadas para cada cliente.",
          year: "29",
          type: "4.8 estrelas",
          radius: "Design de Interiores e Reformas",
          reforma: "./imgs/reforma4.png",
          ambiente: "./imgs/fundo.png",
      },
      // Jardinagem
      {
          name: "JOANA",
          description: "Jardineira experiente em paisagismo e manutenção de jardins. Especialista em criar ambientes verdes harmônicos e agradáveis.",
          year: "35",
          type: "4.7 estrelas",
          radius: "Paisagismo e Manutenção",
          jardinagem: "./imgs/jardinagem1.png",
          ambiente: "./imgs/fundo.png",
      },
      {
          name: "ANA",
          description: "Focada em plantio e revitalização de áreas verdes. Trabalha com espécies nativas e plantas ornamentais para criar espaços harmônicos.",
          year: "28",
          type: "4.8 estrelas",
          radius: "Revitalização e Plantio",
          jardinagem: "./imgs/jardinagem2.png",
          ambiente: "./imgs/fundo.png",
      },
      {
          name: "JOÃO",
          description: "Experiência em sistemas de irrigação automatizados e otimização de recursos para jardins de grande porte.",
          year: "42",
          type: "4.7 estrelas",
          radius: "Instalação de Irrigação",
          jardinagem: "./imgs/jardinagem3.png",
          ambiente: "./imgs/fundo.png",
      },
      {
          name: "MARIA",
          description: "Especialista em poda e controle de pragas, garantindo a saúde e o desenvolvimento adequado de plantas e árvores.",
          year: "30",
          type: "4.8 estrelas",
          radius: "Poda e Controle de Pragas",
          jardinagem: "./imgs/jardinagem4.png",
          ambiente: "./imgs/fundo.png",
      },
      // Limpeza
      {
          name: "ANA",
          description: "Profissional de limpeza com experiência em residências e escritórios. Focada em eficiência e cuidado em cada detalhe do ambiente.",
          year: "28",
          type: "4.9 estrelas",
          radius: "Limpeza Geral e Pós-Obra",
          limpeza: "./imgs/limpeza1.png",
          ambiente: "./imgs/fundo.png",
      }
  ];

  const serviceTypeSelect = document.getElementById("service-type");
  const searchButton = document.querySelector(".search-button");
  let currentIndex = 0; // Variável para controlar o índice do profissional atual
  let currentProfession = ""; // Variável para armazenar a profissão selecionada
  
  // Função para mostrar o conteúdo filtrado com base na profissão selecionada
  function showFilteredContent(serviceType) {
      const contentWrappers = document.querySelectorAll(".content-wrapper");
      contentWrappers.forEach(wrapper => wrapper.style.display = "none"); // Esconde todo o conteúdo
  
      // Filtra os profissionais de acordo com o tipo de serviço
      const itemsOfType = model.filter(item => item[serviceType]);
  
      if (itemsOfType.length > 0) {
          currentProfession = serviceType; // Armazena a profissão atual
          currentIndex = 0; // Reseta o índice para o primeiro profissional
          updateContent(itemsOfType); // Atualiza o conteúdo com o primeiro profissional
      }
  }
  
  // Função para atualizar o conteúdo com base no índice atual
  function updateContent(itemsOfType) {
      const selectedServiceType = serviceTypeSelect.value;
      const item = itemsOfType[currentIndex];
  
      const contentWrapper = document.querySelector(`.${selectedServiceType}-content`);
      const nameElement = contentWrapper.querySelector(".name");
      const descriptionElement = contentWrapper.querySelector(".description");
      const yearElement = contentWrapper.querySelector(".year");
      const typeElement = contentWrapper.querySelector(".type");
      const radiusElement = contentWrapper.querySelector(".radius");
      const professionImage = contentWrapper.querySelector(".profissao");
      const backgroundImage = contentWrapper.querySelector(".ambiente");
  
      // Atualiza o conteúdo com os detalhes do profissional
      nameElement.textContent = item.name;
      descriptionElement.textContent = item.description;
      yearElement.textContent = item.year + " anos";
      typeElement.textContent = item.type;
      radiusElement.textContent = item.radius;
      professionImage.src = item[selectedServiceType];
      backgroundImage.src = item.ambiente;
  
      contentWrapper.style.display = "flex"; // Exibe o conteúdo filtrado
  }
  
  // Event listener para o botão de pesquisa
  searchButton.addEventListener("click", function() {
      const selectedServiceType = serviceTypeSelect.value;
      if (selectedServiceType) {
          showFilteredContent(selectedServiceType); // Exibe o conteúdo para o tipo de serviço selecionado
      }
  });
  
  // Event listeners para os botões de navegação à esquerda e à direita
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  
  prevButton.addEventListener("click", function() {
      const selectedServiceType = serviceTypeSelect.value;
      const itemsOfType = model.filter(item => item[selectedServiceType]);
      currentIndex = (currentIndex - 1 + itemsOfType.length) % itemsOfType.length; // Navega para o item anterior
      updateContent(itemsOfType); // Atualiza o conteúdo com o novo profissional
  });
  
  nextButton.addEventListener("click", function() {
      const selectedServiceType = serviceTypeSelect.value;
      const itemsOfType = model.filter(item => item[selectedServiceType]);
      currentIndex = (currentIndex + 1) % itemsOfType.length; // Navega para o próximo item
      updateContent(itemsOfType); // Atualiza o conteúdo com o novo profissional
  });  
});
