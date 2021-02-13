var appInicio = new Vue({
  el: '#Inicio',
  data: {
    principal: {
      frase: 'Si lo puedes imaginar, lo puedes programar, el único limite que tienes es el que te impones.',
      p1: '¡Hola!, Mi nombre es Roberto Carlos Arguera Campos, actualmente soy estudiante en ingeniería en sistemas y redes informáticas de la facultad de ciencia y tecnología en la Universidad Gerardo Barrios, Campus Usulután, El Salvador.',
      p2: 'Habilidades',
      p3: 'Me gusta desempeñar el área de desarrollo de software, manejo de bases de datos y redes, también me gusta el área de electrónica y matemáticas, aparte de eso puedo desempeñarme en el área de gestión, pero este no es mi fuerte; en mi vida cotidiana cuento con otras habilidades dentro del área de la música y actualmente estoy cursando clases de piano y practico otra variedad de instrumentos como lo es la guitarra, batería y trompeta.',
      p4: 'Objetivo',
      p5: 'Mi objetivo como profesional es ser de ayuda para la sociedad impartiendo los conocimientos aprendidos durante el desarrollo de mi vida y a la misma vez trabajar con las áreas con la que me gusta desempeñarme.',
      p6: 'Contactos',
      m1: 'Inicio',
      m2: 'Sobre Mí',
      m3: 'Casos de Éxito',
      id: 'Español'
    },
    Espanol: {
      frase: 'Si lo puedes imaginar, lo puedes programar, el único limite que tienes es el que te impones.',
      p1: '¡Hola!, Mi nombre es Roberto Carlos Arguera Campos, actualmente soy estudiante en ingeniería en sistemas y redes informáticas de la facultad de ciencia y tecnología en la Universidad Gerardo Barrios, Campus Usulután, El Salvador.',
      p2: 'Habilidades',
      p3: 'Me gusta desempeñar el área de desarrollo de software, manejo de bases de datos y redes, también me gusta el área de electrónica y matemáticas, aparte de eso puedo desempeñarme en el área de gestión, pero este no es mi fuerte; en mi vida cotidiana cuento con otras habilidades dentro del área de la música y actualmente estoy cursando clases de piano y practico otra variedad de instrumentos como lo es la guitarra, batería y trompeta.',
      p4: 'Objetivo',
      p5: 'Mi objetivo como profesional es ser de ayuda para la sociedad impartiendo los conocimientos aprendidos durante el desarrollo de mi vida y a la misma vez trabajar con las áreas con la que me gusta desempeñarme.',
      p6: 'Contactos',
      m1: 'Inicio',
      m2: 'Sobre Mí',
      m3: 'Casos de Éxito',
      id: 'Español'
    },
    English: {
      frase: 'If you can imagine it, you can program it, the only limit you have is the one you impose on yourself.',
      p1: 'Hello, my name is Roberto Carlos Arguera Campos, I am currently a student in systems engineering and computer networks of the faculty of science and technology at the University Gerardo Barrios, Campus Usulután, El Salvador.',
      p2: 'Skills',
      p3: 'I like to work in the area of software development, database and network management, I also like the area of electronics and mathematics, apart from that I can perform in the area of management, but this is not my forte; in my daily life I have other skills in the area of music and I am currently taking piano lessons and practice a variety of other instruments such as guitar, drums and trumpet.',
      p4: 'Objective',
      p5: 'My objective as a professional is to be of help to society by imparting the knowledge learned during the development of my life and at the same time work with the areas I like to work with.',
      p6: 'Contacts',
      m1: 'Home',
      m2: 'About Me',
      m3: 'Successful Cases',
      id: 'English'
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