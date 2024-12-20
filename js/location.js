
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentSlide = 0;

// pour afficher la slide active
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}


showSlide(currentSlide);

// Bouton suivant
nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

// Bouton précédent
prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

// Auto-slide tout le 5s 
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);

// Animation du bouton "Voir plus d'événements"
const btn = document.querySelector('.btn');
  
btn.addEventListener('mouseover', function () {
    btn.style.backgroundColor = '#e65c50';
});

btn.addEventListener('mouseout', function () {
    btn.style.backgroundColor = '#ff6f61';
});

function showDetails(eventId) {
// Afficher le popup avec les détails de l'événement
document.getElementById('event-details').style.display = 'block';
document.querySelector('.overlay').style.display = 'block';

// Bloquer  la page lors d'ouverture de  pop up 
document.body.classList.add('no-scroll');

// pop up affiché 
if (eventId === 'maaredh1') {
    document.getElementById('event-title').textContent = 'المعرض التجاري والحرفي';
    document.getElementById('event-description').textContent = 'لا تفوتوا فرصة زيارة المعرض التجاري والحرفي! اكتشفوا مجموعة متنوعة من المنتجات المحلية والإبداعية، وتعرفوا على مهارات الحرفيين المبدعين. سواء كنت تبحث عن تسوق فريد أو ترغب في دعم الأعمال المحلية، هذا المعرض هو المكان المثالي لك. انضموا إلينا للتواصل، واستكشاف أفضل العروض، واستمتعوا بتجربة فريدة من نوعها!';
    document.getElementById('event-date').textContent = ' بفضاء المعازيم طريق قابس ولاية مدنين 22 23 24 ديسمبر 2024 ';
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
if (eventId === 'raouf') {
  document.getElementById('event-title').textContent = '"Soirée Tunisienne avec Raouf Maher"';
  document.getElementById('event-description').textContent = 'Venez vivre l authenticité de la musique tunisienne avec Raouf Maher. Une soirée pleine d’émotions et de traditions à ne pas manquer ! ';
  document.getElementById('event-date').textContent = '24 Décembre 2024 19:00_21-00 - El ksour Medenine';
}if (eventId === 'elghorba') {
  document.getElementById('event-title').textContent = '"Scène Théâtrale El Ghorba"';
  document.getElementById('event-description').textContent = 'Une soirée théâtrale émotive qui explore l’exil et la quête d’identité, vous offrant une réflexion poignante sur l’appartenance et le déracinement. Ne manquez pas cette immersion dans l’art du théâtre tunisien ! ';
  document.getElementById('event-date').textContent = '26 Décembre 2024 20:00_22:00- Dar el Thakafa Medenine';
}if (eventId === 'cheesy') {
  document.getElementById('event-title').textContent = '"Réveillon en Musique : Nuit de Mélodies"';
  document.getElementById('event-description').textContent = 'Venez célébrer le réveillon dans une ambiance festive avec des plats variés et des performances live de chanteurs. Une soirée pleine de musique, de danse et de bonne humeur, pour commencer la nouvelle année en beauté ! ';
  document.getElementById('event-date').textContent = '31 Décembre 2024 a partie de 20:00 - Cheesy Route Ceinture  Medenine';
}
if (eventId === 'djerba__hood') {
  document.getElementById('event-title').textContent = '"Explorez la Magie de Djerbahood : Randonnée entre Art, Culture et Aventure !"';
  document.getElementById('event-description').textContent = 'Explorez les ruelles de Djerbahood, un musée à ciel ouvert, et admirez des fresques uniques dans une ambiance mêlant art, culture et découverte. ';
  document.getElementById('event-date').textContent = '26 décembre 2024- départ Station louage Zarzis 8:00 ';
}
if (eventId === 'bolice_djerba') {
  document.getElementById('event-title').textContent = '"Soirée Film Policier : Suspense et Frissons !"';
  document.getElementById('event-description').textContent = 'Plongez dans l univers des films policiers où mystères, enquêtes et rebondissements s enchaînent pour vous tenir en haleine. Préparez-vous à une expérience palpitante remplie de suspense et d adrénaline ! ';
  document.getElementById('event-date').textContent = '15 décembre 2024 20:00-22:00 - Agora Djerba ';
}
if (eventId === 'djerba_foire') {
  document.getElementById('event-title').textContent = 'معرض الموبيليا و الجهازات ';
  document.getElementById('event-description').textContent = 'نرجعولكم بالأفاريات والبروموات ... 🎁 تلقاو عنا الفرحة و الدلال و الأسوام أكيد الهبال ✨ما تفلتوش بروموات #معرض_دارنا  بفضاء جربة للمعار تخفضيات على كل المعروضات ';
  document.getElementById('event-date').textContent = 'التّاريخ : من 16الى 26 ديسمبر 2024💠المكان : فضاء جربة للمعارض';
}
if (eventId === 'majles_djerba') {
  document.getElementById('event-title').textContent = '"Réveillon au Café Majles Djerba : Ambiance Chaleureuse et Festive !"';
  document.getElementById('event-description').textContent = 'Partagez une soirée festive avec musique, ambiance chaleureuse et délicieuses spécialités pour accueillir la nouvelle année dans la joie ! 🎉';
  document.getElementById('event-date').textContent = '31 décembre 2024 - à partir de 20:00 El majles Midoun Djerba ';
}
if (eventId === 'ksr_ghilen_djerba') {
  document.getElementById('event-title').textContent = '"Aventure au Ksar Ghilen : Immersion dans le Sahara !"';
  document.getElementById('event-description').textContent = 'Explorez le désert tunisien lors d’une randonnée inoubliable au Ksar Ghilen. Entre dunes majestueuses et paysages sauvages, vivez une aventure authentique au cœur du Sahara.';
  document.getElementById('event-date').textContent = '29 décembre 2024 - Départ 6:00 Station Bus Djerba ';
}
if (eventId === 'film_Zarzis') {
  document.getElementById('event-title').textContent = '"Le Pont / قنطرة : Un Voyage Émotionnel entre Passé et Présent"';
  document.getElementById('event-description').textContent = 'Plongez dans l’histoire captivante de "Le Pont / قنطرة", un film où le destin se croise sur un pont symbolique, reliant deux mondes, deux époques et deux réalités. À travers un récit poignant, découvrez un drame humain intense où les personnages se battent pour leur liberté, leur identité et leur avenir. Une œuvre qui vous touchera au cœur.';
  document.getElementById('event-date').textContent = '18 décembre 2024 - 16:00-18:30 Salle de cinéma Zarzis ';
}
if (eventId === 'foireZarzis') {
  document.getElementById('event-title').textContent = '"Foire Commerciale de Zarzis : Découvrez, Explorez, Profitez !"';
  document.getElementById('event-description').textContent = 'Venez découvrir un large éventail de produits, de services et d innovations lors de la Foire Commerciale de Zarzis. Un événement incontournable pour les passionnés de commerce, les entrepreneurs et les visiteurs à la recherche de bonnes affaires et de nouveautés !';
  document.getElementById('event-date').textContent = '20 décembre 2024 - 10:00-20:00  Zarzis Prés de poste  ';
}
if (eventId === 'rev_zarzis') {
  document.getElementById('event-title').textContent = '"Réveillon Relax Zarzis : Une Soirée Festive entre Musique, Saveurs et Ambiance Chaleureuse !"';
  document.getElementById('event-description').textContent = 'Venez célébrer le passage à la nouvelle année à Zarzis, dans une ambiance détendue et conviviale. Profitez de la musique live de chanteurs talentueux, savourez des plats délicieux et partagez des moments inoubliables dans un cadre agréable. Un réveillon parfait pour bien commencer l’année !';
  document.getElementById('event-date').textContent = '31 décembre 2024 - à partir de 20:00  Café Relax Zarzis  Chott Sonia  ';
}
if (eventId === 'mus_bnkh') {
  document.getElementById('event-title').textContent = '""Yalla Nghani : Chantez, Partagez, Célébrez !"';
  document.getElementById('event-description').textContent = 'Venez participer à cette soirée interactive où le public prend le micro et chante ses chansons préférées ! Un moment de partage, de joie et de musique, où chacun peut exprimer sa passion pour la musique arabe et festive.';
  document.getElementById('event-date').textContent = '28 décembre 2024 - 17:00_19:00  Dar thakafa BeniKhadeche  ';
}
if (eventId === 'rand1Bnkh') {
  document.getElementById('event-title').textContent = '"Randonnée à Dar Ennaim Zammour : Aventure, Ambiance et Saveurs !"';
  document.getElementById('event-description').textContent = 'Rejoignez-nous pour une randonnée inoubliable à Dar Ennaim Zammour, où l’aventure rencontre la convivialité. Profitez d’une équipe dynamique, de délicieux plats locaux, de jeux et d’une ambiance festive en plein cœur de la nature. Une expérience à partager entre amis !';
  document.getElementById('event-date').textContent = '10 décembre 2024 - Départ 8:00 prés station louage Benikhadeche   ';
}
if (eventId === 'theatre_bnkh') {
  document.getElementById('event-title').textContent = '"Scène Théâtrale : La Violence Dévoilée"';
  document.getElementById('event-description').textContent = 'Une pièce poignante qui explore les différentes facettes de la violence, qu elle soit physique, psychologique ou sociale. À travers des personnages et des situations intenses, cette scène théâtrale pousse à la réflexion sur les causes et les conséquences de ce fléau dans notre sociét';
  document.getElementById('event-date').textContent = '15 Décembre 2024 15:00_18:00- Dar Thakafa BeniKhadeche   ';
}
if (eventId === 'ksr_jwama3') {
  document.getElementById('event-title').textContent = '"Journée Traditionnelle à Kasr El Jwama3 : Musique, Brik et Thé"';
  document.getElementById('event-description').textContent = 'Venez passer une journée exceptionnelle à Kasr El Jwama3 ! Profitez dune ambiance chaleureuse et conviviale, accompagnée de musique traditionnelle tunisienne. Au menu : des briks savoureux et du thé à la menthe, pour une expérience authentique des saveurs tunisiennes. C est l occasion parfaite pour se détendre, découvrir la culture locale et partager un moment agréable entre amis et en famille. Rejoignez-nous pour une journée placée sous le signe de la convivialité et de la tradition !';
  document.getElementById('event-date').textContent = '12 Décembre 2024 - Départ 9:00 station Bus BeniKhadeche    ';
}
if (eventId === 'film_bngo') {
  document.getElementById('event-title').textContent = '"Journée Traditionnelle à Kasr El Jwama3 : Musique, Brik et Thé"';
  document.getElementById('event-description').textContent = 'Plongez dans une aventure captivante au cœur du sud tunisien avec Fartato Dhhab. Entre quête d or, traditions et conflits, ce film vous dévoilera une histoire poignante pleine de suspense. Ne manquez pas cette occasion unique de découvrir une œuvre forte et émouvante !';
  document.getElementById('event-date').textContent = '25 Décembre 2024 18:00-21:00 - Salle de Cinéma Bengarden    ';
}
if (eventId === 'elbiben') {
  document.getElementById('event-title').textContent = '"Randonnée d une Journée à l Île El Biben"';
  document.getElementById('event-description').textContent = 'Rejoignez-nous pour une journée de randonnée inoubliable à l Île El Biben ! Découvrez ses paysages magnifiques, sa faune et sa flore uniques, et profitez de la nature préservée. Un moment idéal pour se ressourcer et explorer cet endroit magique.';
  document.getElementById('event-date').textContent = '22 Décembre 2024 - Départ 7:00 station Bus Bengarden    ';
}
if (eventId === 'porche') {
  document.getElementById('event-title').textContent = '"Réveillon au Porche : Ambiance & Plats"';
  document.getElementById('event-description').textContent = 'Célébrez le réveillon au Porche avec une soirée pleine de convivialité, de bonne musique et de délicieux plats. Un moment festif pour bien commencer l année dans une ambiance chaleureuse et gourmande !';
  document.getElementById('event-date').textContent = '31 Décembre 2024 - Café le Porche Bengarden ';
}
if (eventId === 'hadhra') {
  document.getElementById('event-title').textContent = '" El Hadhra : Soirée Traditionnelle"';
  document.getElementById('event-description').textContent = 'Venez vivre une soirée exceptionnelle avec El Hadhra, une immersion dans la culture et les traditions tunisiennes. Profitez d une ambiance authentique, de musique traditionnelle et de délicieux plats pour une expérience inoubliable !';
  document.getElementById('event-date').textContent = '16 Décembre 2024 -  Café Amira Bengarden ';
}
}

function closeDetails() {
//fermeture de pop up 
document.getElementById('event-details').style.display = 'none';
document.querySelector('.overlay').style.display = 'none';

// Réactiver  la page aprés la fermeture de pop up 
 document.body.classList.remove('no-scroll');
}
