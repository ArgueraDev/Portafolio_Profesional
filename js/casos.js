var appCasos = new Vue({
  el: '#Casos',
  data: {
    principal: {
      m1: 'Inicio',
      m2: 'Sobre Mí',
      m3: 'Casos de Éxito',
      m4: 'Contactos',
      m5: 'Mis Proyectos',
      id: 'Español',
      p1: 'Web App Finappza ',
      p2: 'la Web App Finappza es un sitio en el cual encontraras conceptos básicos financieros, una calculadora de cuotas de préstamos y si te registras podrás ser parte del equipo y aportar información dentro de Finappza el cual podrá ser de ayuda para los demás usuarios',
      p3: 'Enlace',
      p4: 'App Móvil Finappza',
      p5: 'Finappza es una aplicación móvil con información de conceptos básicos financieros y cuenta con una calculadora de cuota de préstamos, también cuenta con un apartado para los usuarios que se registran para compartir información dentro de Finappza y pueda ser de utilidad para los demás usuarios.'
    },
    Espanol: {
      m1: 'Inicio',
      m2: 'Sobre Mí',
      m3: 'Casos de Éxito',
      m4: 'Contactos',
      m5: 'Mis Proyectos',
      id: 'Español',
      p1: 'Web App Finappza ',
      p2: 'la Web App Finappza es un sitio en el cual encontraras conceptos básicos financieros, una calculadora de cuotas de préstamos y si te registras podrás ser parte del equipo y aportar información dentro de Finappza el cual podrá ser de ayuda para los demás usuarios',
      p3: 'Enlace',
      p4: 'App Móvil Finappza',
      p5: 'Finappza es una aplicación móvil con información de conceptos básicos financieros y cuenta con una calculadora de cuota de préstamos, también cuenta con un apartado para los usuarios que se registran para compartir información dentro de Finappza y pueda ser de utilidad para los demás usuarios.'
    },
    English: {
      m1: 'Home',
      m2: 'About Me',
      m3: 'Successful Cases',
      m4: 'Contacts',
      m5: 'My Projects',
      id: 'English',
      p1: 'Web App Finappza ',
      p2: 'The Finappza Web App is a site where you will find financial basics, a loan installment calculator and if you register you can be part of the team and provide information within Finappza which can be of help to other users.',
      p3: 'Enlace',
      p4: 'Finappza Mobile App',
      p5: 'Finappza is a mobile application with information on basic financial concepts and a loan installment calculator. It also has a section for users who register to share information within Finappza that can be useful for other users..'
    }
  },
  methods: {
    IdiomaEnglish: function () {
      this.principal = this.English;
    },
    IdiomaEspanol: function () {
      this.principal = this.Espanol;
    }
  }
});