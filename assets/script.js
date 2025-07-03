// Scroll de "Home" //
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in-section').forEach(el => {
    observer.observe(el);
  });
});

// Scroll de "Amenazas Comunes" //
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); 
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".fade-in-on-scroll").forEach(el => {
    observer.observe(el);
  });
});

// Validación del formulario de contacto //

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const nombre = document.getElementById('nombre');
  const correo = document.getElementById('correo');
  const mensaje = document.getElementById('mensaje');
  const successMessage = document.getElementById('formSuccess');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let valido = true;

    // Oculta mensaje de éxito si estaba visible
    successMessage.classList.add('d-none');

    // Validar nombre
    if (nombre.value.trim() === '') {
      nombre.classList.add('is-invalid');
      valido = false;
    } else {
      nombre.classList.remove('is-invalid');
    }

    // Validar correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo.value.trim())) {
      correo.classList.add('is-invalid');
      valido = false;
    } else {
      correo.classList.remove('is-invalid');
    }

    // Validar mensaje
    if (mensaje.value.trim() === '') {
      mensaje.classList.add('is-invalid');
      valido = false;
    } else {
      mensaje.classList.remove('is-invalid');
    }

    // Mostrar mensaje si todo es válido
    if (valido) {
      successMessage.classList.remove('d-none');
      form.reset();
      [nombre, correo, mensaje].forEach(field => field.classList.remove('is-invalid'));
    }
  });
});

// Test de Seguridad //

document.addEventListener('DOMContentLoaded', () => {
  const quizForm = document.getElementById('quizForm');
  const resultBox = document.getElementById('quizResult');

  quizForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const respuestas = {
      q1: quizForm.q1.value,
      q2: quizForm.q2.value,
      q3: quizForm.q3.value
    };

    let puntaje = 0;
    let feedback = [];

    if (respuestas.q1 === 'b') {
      puntaje++;
    } else {
      feedback.push("🔐 Una contraseña segura debe tener letras, números y símbolos.");
    }

    if (respuestas.q2 === 'c') {
      puntaje++;
    } else {
      feedback.push("🚨 Nunca hagas clic en enlaces sospechosos. ¡Repórtalos!");
    }

    if (respuestas.q3 === 'c') {
      puntaje++;
    } else {
      feedback.push("🎣 El phishing es un intento de engaño para robar tus datos.");
    }

    // Mostrar resultados
    resultBox.classList.remove('d-none');
    resultBox.innerHTML = `
      <strong>Tu puntaje: ${puntaje}/3</strong><br>
      ${feedback.length === 0 ? '¡Excelente! Has demostrado buenos conocimientos de ciberseguridad. ✅' : feedback.join('<br>')}
    `;
  });
});
