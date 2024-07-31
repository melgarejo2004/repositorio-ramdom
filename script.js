// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el botón
    const button = document.querySelector('button');

    // Agrega un evento de clic al botón
    button.addEventListener('click', function() {
        alert('¡Has hecho clic en el botón!');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name && email && message) {
            alert('Formulario enviado exitosamente.');
            form.reset();
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });
});

form.addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    try {
        const response = await fetch('https://api.example.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        });
        
        if (response.ok) {
            alert('Formulario enviado exitosamente.');
            form.reset();
        } else {
            alert('Hubo un problema al enviar el formulario.');
        }
    } catch (error) {
        alert('Error de red. Inténtalo de nuevo.');
    }
});

form.addEventListener('submit', async function(event) {
    event.preventDefault();
    
    document.getElementById('loading').style.display = 'block';
    
    // Código de envío del formulario...
    
    document.getElementById('loading').style.display = 'none';
});
