document.getElementById('revealButton').addEventListener('click', function() {
    const wordRain = document.getElementById('wordRain');
    const attributes = [
      "hermosa", "virtuosa", "bella", "sensible", "cariñosa", "fuerte", "amistosa", "alegre", "guapa", "interesante",
  "inteligente", "diestra", "amable", "sincera", "bondadosa", "cálida", "preciosa", "culta", "tierna", "sencilla",
  "sexy", "chaparrita", "make-up artist", "apasionada", "excelente besadora", "fiel", "timida", "abrazable", "muuuy sexy",
  "comprensiva", "respetuosa", "dedicada", "creativa", "divertida", "encantadora", "generosa", "graciosa", "honesta",
  "humilde", "inspiradora", "leal", "luchadora", "optimista", "organizada", "paciente", "persistente", "protectora",
  "resiliente", "sabia", "sofisticada", "talentosa", "valiente", "visionaria", "única", "adorable",
  "elegante", "empática", "entusiasta", "espontánea", "fascinante", "genuina", "iluminadora", "increíble", "magnética",
  "maravillosa", "misteriosa", "optimista", "radiante", "seductora", "sensual", "sofisticada", "sorprendente", "especial",
  "única", "irrepetible", "inolvidable", "incondicional", "increíblemente amorosa", "la mejor mamá del mundo", "mi media naranja"
    ];
    const txt = document.getElementById('top-text');
    const link = document.getElementById('link')
    wordRain.innerHTML = ''; 
    attributes.forEach((word, index) => {
      const wordElement = document.createElement('div');
      wordElement.classList.add('word');
      wordElement.textContent = word;
      wordElement.style.left = `${Math.random() * 100}vw`;
      wordElement.style.animationDuration = `${Math.random() * 3 + 2}s`;
      wordElement.style.animationDelay = `${Math.random() * 2}s`;
      wordRain.appendChild(wordElement);
    });
  
    setTimeout(() => {
      const finalMessage = document.createElement('div');
      finalMessage.classList.add('text-center', 'text-white', 'text-7xl', 'md:text-9xl', 'font-bold', 'mt-8', 'animate-pulse');
      finalMessage.textContent = 'Y entre otras...';
      txt.classList.add('hidden');
      wordRain.appendChild(finalMessage);
      link.classList.add('text-red-600', 'text-3xl', 'mt-8', 'rounded-xl', 'border', 'bg-yellow-300');
      link.innerHTML = '<a href="corazon.html">Ahora haz click aquí!</a>';

      const finalMessages = [
        "Tus besos", "Tu sonrisa", "Tus caricias", "Tus abrazos", "Tus ojitos", "Tu boquita", 
        "Absolutamente todo de ti!", "Y un millón de razones más", "Y sabes algo?", 
        "Quiero estar contigo para toda la vida!", "Eres el amor de mi vida"
      ];

      let currentIndex = 0;

      const showNextMessage = () => {
        if (currentIndex < finalMessages.length) {
          finalMessage.textContent = finalMessages[currentIndex];
          currentIndex++;
          setTimeout(showNextMessage, 2000);
        } else {
          finalMessage.classList.remove('animate-pulse');
        }
      };

      showNextMessage();

    }, 5000);
});