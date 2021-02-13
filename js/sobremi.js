var appSobre = new Vue({
  el: '#SobreMi',
  data: {
    principal: {},
    Espanol: {
      m1: 'Inicio',
      m2: 'Sobre Mí',
      m3: 'Casos de Éxito',
      m4: 'Contactos',
      id: 'Español',
      p1: 'Datos Personales',
      p2: 'Nombre:',
      p3: 'Lugar y Fecha de Nacimiento:',
      p31: '02 de Noviembre de 1998, Usulután, El Salvador.',
      p4: 'Teléfono:',
      p5: 'Correo:',
      p6: 'Formación Académica',
      p7: 'Ing. En Sistemas y Redes Informáticas',
      p8: 'Tec. Administrativo Contable',
      p9: 'Experiencia Profesional',
      p10: 'Prácticas Profesionales',
      p11: 'Otros Datos',
      p12: 'Participación en escuela de talentos en comunicaciones',
      p13: 'Participación en concurso',
      p14: 'Participación en Feria de Logros Informáticos y Automatización',
      p15: '(Tercer lugar – Puerta con radiofrecuencia)',
      p16: 'Participación en el Congreso de Informática de El Salvador',
      p17: 'Conocimientos musicales',
      p171: '(Guitarra, Bateria, Piano, Trompeta)',
      p18: 'Conocimientos en Manejo de Equipos de Sonido',
      p19: 'Informática',
      p20: 'Conocimientos en...',
      p21: 'Mantenimiento de Equipos Informáticos',
      p22: 'Lenguajes de Programación',
      p23: 'Manejo de Bases de Datos',
      p24: 'Manejo de Microsoft Office'
    },
    English: {
      m1: 'Home',
      m2: 'About Me',
      m3: 'Successful Cases',
      m4: 'Contacts',
      id: 'English',
      p1: 'Personal Information',
      p2: 'Name:',
      p3: 'Place and Date of Birth:',
      p31: 'November 02, 1998, Usulután, El Salvador.',
      p4: 'Phone Number:',
      p5: 'Email:',
      p6: 'Academic Background',
      p7: 'Eng. in Computer Systems and Networks',
      p8: 'Tec. Administrative Accounting',
      p9: 'Professional Experience',
      p10: 'professional practices',
      p11: 'Other Data',
      p12: 'Participation in communications talent school',
      p13: 'Competition participation',
      p14: 'Participation in IT Achievements and Automation Fair',
      p15: '(Third place – Radiofrequency door)',
      p16: 'Participation in the Computer Science Congress of El Salvador',
      p17: 'Musical knowledge',
      p171: '(Guitar, Drums, Piano, Trumpet)',
      p18: 'Knowledge in Sound Equipment Handling',
      p19: 'Computing',
      p20: 'Knowledge in...',
      p21: 'Computer Equipment Maintenance',
      p22: 'Programming Languages',
      p23: 'Database Management',
      p24: 'Microsoft Office'
    }
  },
  methods: {
    IdiomaEnglish: function () {
      this.principal = this.English;
      document.cookie = "idioma=english";
    },
    IdiomaEspanol: function () {
      this.principal = this.Espanol;
      document.cookie = "idioma=espanol";
    }
  }
});

$(document).ready(main);

function main() {
  if (exists == true) {
    const valorIdioma = document.cookie.split('; ').find(row => row.startsWith('idioma=')).split('=')[1];
    if (valorIdioma == "espanol") {
      appSobre.principal = appSobre.Espanol;
    } else {
      appSobre.principal = appSobre.English;
    }

  } else {
    document.cookie = "idioma=espanol";
    appSobre.principal = appSobre.Espanol;
  }
};
const exists = document.cookie.split(';').some(function (item) {
  return item.trim().indexOf('idioma=') == 0;
});