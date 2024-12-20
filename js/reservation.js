
const form = document.getElementById('reservation-form');
const ticketType = document.getElementById('ticket-type');
const totalPriceDisplay = document.getElementById('total-price');
const seatsContainer = document.getElementById('seats-container');
const voucherDisplay = document.getElementById('voucher-display');
const voucherInfo = document.getElementById('voucher-info');

const seats = [];
const reservedSeats = ['2', '7', '10']; // places déjà réservées (statique)
let selectedSeats = [];

function generateSeats() {
    seatsContainer.innerHTML = ''; 
    for (let i = 1; i <= 20; i++) {
        const seat = document.createElement('div');
        seat.classList.add('seat');
        seat.textContent = i;

        if (reservedSeats.includes(i.toString())) {
            seat.classList.add('reserved');
        } else {
            seat.addEventListener('click', () => toggleSeat(seat, i));
        }

        seatsContainer.appendChild(seat);
        seats.push(seat);
    }
}

// Sélectionner ou désélectionner une place
function toggleSeat(seat, index) {
    if (seat.classList.contains('selected')) {
        seat.classList.remove('selected');
        selectedSeats = selectedSeats.filter(seatNumber => seatNumber !== index);
    } else {
        seat.classList.add('selected');
        selectedSeats.push(index);
    }
    updateTotal();
}

// Calculer le prix total
function updateTotal() {
    const basePrice = parseFloat(ticketType.value) || 0; 
    const total = basePrice * selectedSeats.length;
    totalPriceDisplay.textContent = total.toFixed(2) ;
}


function generateVoucherPDF(name, lastname, email, seats, total) {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();
    const eventDetails = {
        name: document.getElementById('event-name').value.trim(),
        date: document.getElementById('event-date').value.trim(),
        time: document.getElementById('event-time').value.trim()
    };
    
    pdf.setTextColor(0, 51, 102); 
    pdf.setFontSize(18);
    pdf.setFont("helvetica", "bold");

    pdf.text("Confirmation de Réservation", 55, 25);

    pdf.setFontSize(14);
    pdf.setTextColor(0, 0, 0); 
    pdf.setFont("helvetica", "normal");
    pdf.text(`Événement : ${eventDetails.name}`, 20, 50);
    pdf.text(`Date : ${eventDetails.date}`, 20, 60);
    pdf.text(`Heure : ${eventDetails.time}`, 20, 70);

    pdf.text(`Nom : ${name} ${lastname}`, 20, 90);
    pdf.text(`Email : ${email}`, 20, 100);
    pdf.text(`Places réservées : ${seats.join(', ')}`, 20, 110);
    pdf.text(`Prix total : ${total} dinars`, 20, 120);

    
    pdf.setFontSize(12);
    pdf.setTextColor(34, 139, 34); 
    pdf.text("Merci pour votre réservation et à très bientôt !", 20, 140);

   
    pdf.setDrawColor(0, 51, 102); 
    pdf.rect(15, 15, 180, 20); 

    pdf.save("voucher_reservation.pdf");
}


form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (selectedSeats.length === 0) {
        alert('Veuillez choisir au moins une place.');
        return;
    }

    const name = document.getElementById('firstname').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const eventDetails = {
        name: document.getElementById('event-name').value.trim(),
        date: document.getElementById('event-date').value.trim(),
        time: document.getElementById('event-time').value.trim()
    };
    

    if (!name || !lastname || !email) {
        alert('Veuillez remplir tous les champs du formulaire.');
        return;
    }

    const total = totalPriceDisplay.textContent;

    
    voucherInfo.innerHTML = `
        Merci, ${name} ${lastname} !<br>
        Email : ${email}<br>
        Événement : ${eventDetails.name} (${eventDetails.date} à ${eventDetails.time})<br>
        Vos places : ${selectedSeats.join(', ')}<br>
        Prix payé : ${total}
    `;
    voucherDisplay.style.display = 'block';

    
    generateVoucherPDF(name, lastname, email, selectedSeats, total);
});


ticketType.addEventListener('change', updateTotal);


generateSeats();
