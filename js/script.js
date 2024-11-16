function showContent() {
  const serviceType = document.querySelector("#service-type").value;
  const encanadorContent = document.querySelector(".encanador-content");

  if (serviceType === "encanador") {
    encanadorContent.style.display = "flex";  
  } else {
    encanadorContent.style.display = "none"; 
  }
}


const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", showContent);


const model = [
  {
    name: "ADRIANO",
    description: "Encanador especializado em sistemas de tubulação residencial e comercial. Conhecido pela precisão e rapidez na solução de vazamentos e instalação de encanamentos modernos.",
    year: "25",
    type: "4.8 estrelas",
    radius: "Reparos Emergenciais e Instalações",
    encanador: "./imgs/enc1.jpg",
    ambiente: "./imgs/piso1.jpg",
  },
  {
    name: "BETO",
    description: "Perito em manutenção de sistemas hidráulicos complexos. Experiência em desentupimentos e otimização de sistemas de drenagem.",
    year: "33",
    type: "4.6 estrelas",
    radius: "Desentupimentos e Drenagem",
    encanador: "./imgs/enc2.jpg", 
    ambiente: "./imgs/piso2.jpg", 
  },
  {
    name: "JOÃO",
    description: "Especialista em soluções sustentáveis, como sistemas de reuso de água e captação de água da chuva. Atende tanto residências quanto empresas com foco em inovação.",
    year: "21",
    type: "4.9 estrelas",
    radius: "Soluções Sustentáveis e Inovadoras",
    encanador: "./imgs/enc3.jpg", 
    ambiente: "./imgs/piso3.jpg",
  },
  {
    name: "SÁVIO",
    description: "Veterano em encanamento com décadas de experiência em projetos de grande escala, como prédios e indústrias. Referência em planejamento e execução de sistemas hidráulicos robustos.",
    year: "44",
    type: "4.7 estrelas",
    radius: "Projetos Hidráulicos e Grandes Obras",
    encanador: "./imgs/enc4.jpg", 
    ambiente: "./imgs/piso4.jpg", 
  },
];

const right = document.querySelector(".right");
const left = document.querySelector(".left");
const name = document.querySelector(".name");
const description = document.querySelector(".description");
const year = document.querySelector(".year");
const type = document.querySelector(".type");
const radius = document.querySelector(".radius");
const encanador = document.querySelector(".encanador");
const ambiente = document.querySelector(".ambiente");

let index = 0;

function updateContent() {
  const currentData = model[index];

  name.innerHTML = currentData.name;
  description.innerHTML = currentData.description;
  year.innerHTML = currentData.year + " anos";
  type.innerHTML = currentData.type;
  radius.innerHTML = currentData.radius;
  
  encanador.src = currentData.encanador;
  ambiente.src = currentData.ambiente;
}

right.addEventListener("click", () => {
  if (index < model.length - 1) {
    index++;
    updateContent();
  }
});

left.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateContent();
  }
});

updateContent();
