document.getElementById('search-button').addEventListener('click', function () {
    var searchTerm = document.getElementById('event-search').value;
    var selectedCategory = document.getElementById('category-filter').value;
    
    console.log('Recherche pour:', searchTerm);
    console.log('Lieu sélectionné:', selectedCategory);
});
window.addEventListener('load', () => {
    const images = document.querySelectorAll('.banner-image');
    images.forEach(image => {
        image.classList.add('fadeIn');
    });
});
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', (e) => {
        console.log(`Button clicked: ${button.querySelector('span').innerText}`);
    });
});
const toggleMenu = document.getElementById("toggleMenu");
const eventOptions = document.getElementById("eventOptions");


toggleMenu.addEventListener("click", (e) => {
  e.preventDefault(); 
  
  if (eventOptions.style.display === "block") {
    eventOptions.style.display = "none"; 
  } else {
    eventOptions.style.display = "block"; 
  }
});


document.addEventListener("click", (e) => {
  if (!toggleMenu.contains(e.target) && !eventOptions.contains(e.target)) {
    eventOptions.style.display = "none";
  }
});

// S'assurer que le DOM est chargé
document.addEventListener('DOMContentLoaded', () => {
  // Sélection des éléments HTML
  const newsletterForm = document.querySelector('#newsletter form');
  const emailInput = document.querySelector('#newsletter input[type="email"]');

  // Création d'un conteneur pour afficher les messages
  const messageContainer = document.createElement('p');
  messageContainer.style.marginTop = '10px';
  messageContainer.style.fontWeight = 'bold';
  newsletterForm.appendChild(messageContainer);

  
  newsletterForm.addEventListener('submit', (event) => {
      event.preventDefault(); 
      const email = emailInput.value.trim(); 

      // Validation de l'email avec une expression régulière
      if (validateEmail(email)) {
          messageContainer.textContent = 'Merci pour votre inscription à notre newsletter!';
          messageContainer.style.color = 'green'; 
          emailInput.value = ''; 
      } else {
          messageContainer.textContent = 'Veuillez entrer une adresse email valide.';
          messageContainer.style.color = 'red'; 
      }
  });

  
  function validateEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
  }
});


const video = document.querySelector('video');
const caption = document.querySelector('.caption');



document.addEventListener('DOMContentLoaded', function () {
  const testimonials = document.querySelectorAll('.testimonial');
  
  // Animation au survol des témoignages
  testimonials.forEach(function (testimonial) {
      testimonial.addEventListener('mouseover', function () {
          testimonial.style.transform = 'scale(1.05)';
      });

      testimonial.addEventListener('mouseout', function () {
          testimonial.style.transform = 'scale(1)';
      });
  });
  
  // Animation du bouton "Voir plus d'événements"
  const btn = document.querySelector('.btn');
  
  btn.addEventListener('mouseover', function () {
      btn.style.backgroundColor = '#e65c50';
  });

  btn.addEventListener('mouseout', function () {
      btn.style.backgroundColor = '#ff6f61';
  });
});
function showDetails(eventId) {
  // Afficher le popup avec les détails de l'événement
  document.getElementById('event-details').style.display = 'block';
  document.querySelector('.overlay').style.display = 'block';
  
  // Bloquer  la page
  document.body.classList.add('no-scroll');
  
  
  if (eventId === 'rev_zarzis') {
    document.getElementById('event-title').textContent = '"Réveillon Relax Zarzis : Une Soirée Festive entre Musique, Saveurs et Ambiance Chaleureuse !"';
    document.getElementById('event-description').textContent = 'Venez célébrer le passage à la nouvelle année à Zarzis, dans une ambiance détendue et conviviale. Profitez de la musique live de chanteurs talentueux, savourez des plats délicieux et partagez des moments inoubliables dans un cadre agréable. Un réveillon parfait pour bien commencer l’année !';
    document.getElementById('event-date').textContent = '31 décembre 2024 - à partir de 20:00  Café Relax Zarzis  Chott Sonia  ';
  }
  if (eventId === 'ma3redh_iday') {
    document.getElementById('event-title').textContent = 'معرض صنعة ايديا';
    document.getElementById('event-description').textContent = 'انضموا إلى "معرض صنعة إيديا" واستمتعوا بتجربة فريدة من نوعها! اكتشفوا مجموعة من الأعمال اليدوية والإبداعية التي تعكس مهارات وحرفية محلية مميزة. هذه فرصتكم للتسوق من منتجات فريدة ودعم الحرفيين المحليين. لا تفوتوا الفرصة للتواصل، الاستمتاع، والمساهمة في تعزيز الإبداع المحلي!';
    document.getElementById('event-date').textContent = '  طريق جربة قرب مول مدنين  27-28-29 ديسمبر 2024';
  }
  if (eventId === 'bolice_medenine') {
    document.getElementById('event-title').textContent = 'Film "Bolice"';
    document.getElementById('event-description').textContent = 'Ne manquez pas l occasion de découvrir cette œuvre cinématographique tunisienne qui promet de captiver tous les amateurs de films policiers et de suspense. Venez vivre l aventure sur grand écran et plongez dans l univers fascinant de "Bolice" ';
    document.getElementById('event-date').textContent = '12 Décembre 2024 16:00 _18:00 - Salle de cinéma Medenine';
  }
}

function closeDetails() {
 //fermeture de pop up 
  document.getElementById('event-details').style.display = 'none';
  document.querySelector('.overlay').style.display = 'none';
  
// Réactiver  la page aprés la fermeture de pop up 
  document.body.classList.remove('no-scroll');
}
