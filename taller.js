document.addEventListener('DOMContentLoaded', () => {
    
    const form = document.getElementById('form');
    const list = document.getElementById('list')

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = form.elements['name'].value;
        const email = form.elements['email'].value;
        const number = form.elements['number'].value;

        const user = document.createElement("li");
        user.textContent = "Nombre: "+nombre+"     Email: "+email+"    Phone Number: "+number

        list.appendChild(user)
    });
});