export default {
  languageOptions: {
    es: "Español",
    en: "Inglés",
    fr: "Frances",
    pt: "Portugués",
  },
  metadata: {
    description:
      "Acelera tu desarrollo con IA: menos bugs, documentación automática y revisión inteligente de código. ¡Solicita tu demo gratis hoy!",
    socialMedia: {
      title: "CODARI Pro - Revisión de código impulsada por IA",
      description:
        "Reduce errores críticos y mejora la productividad con revisión automática y documentación técnica impulsada por IA.",
    },
  },
  title: "CODARI Pro",
  logo: "CODARI Pro",
  pages: {
    home: {
      hero: {
        slogan: {
          first: "Automatiza la Revisión de ",
          second: "Código con IA",
        },
        description:
          "Mejora la calidad, seguridad y productividad en tus repositorios GitHub, sin esfuerzo manual.",
        chatbot: {
          input: {
            placeholder: "Escríbenos, ¿Cómo podemos ayudarte?",
            button: "Hablemos ahora",
          },
          emptyChat: {
            instantMessages: [
              "Ver nuestros servicios",
              "¿Quiénes somos?",
              "Nuestros casos de éxito",
              "Contacto",
            ],
            welcome: "¡Hola soy Codari!",
            message: "¿En qué te puedo ayudar?",
          },
        },
      },
      aboutIA: {
        title: "¿Qué hace la IA?",
        cards: [
          {
            image: "/icons/code-review.png",
            label: "Revisión automática de código",
            description: "Mejora tu código según estándares com SonarQube",
          },
          {
            image: "/icons/intelligent-comments.png",
            label: "Comentarios inteligentes en PRs",
            description: "Edición colaborativa con IA",
          },
          {
            image: "/icons/contextual-chat.png",
            label: "Chat contextual",
            description: "IA que entiende tu código y responde preguntas",
          },
          {
            image: "/icons/documentation.png",
            label: "Documentación técnica automática",
            description: "Todo actualizado, sin escribir a mano",
          },
          {
            image: "/icons/github.png",
            label: "Integración segura con GitHub",
            description: "OAuth y repos privados protegidos",
          },
        ],
      },
      benefits: {
        title: "<span>BENEFICIOS</span> REALES",
        card: [
          {
            text: "Hasta <span>90%</span> menos bugs críticos en producción",
            percent: 90,
          },
          {
            text: "<span/>40%</span> menos tiempos en revisiones",
            percent: 40,
          },
          {
            text: "<span>85%</span/> retención mensual de usuarios",
            percent: 85,
          },
          {
            text: "Documentación <span>siempre al día</span/>",
            percent: 100,
          },
        ],
      },
      contactUs: {
        title: "Da el primer paso <br/> Hablemos hoy",
        form: {
          placeholder: "Escribe aquí...",
          name: "Nombre y Apellido",
          email: "Correo electrónico",
          cellphone: "Teléfono",
          termsConditions: "Acepto los términos y condiciones",
          news: "Deseo recibir noticias y promociones",
          button: "Enviar ahora",
          validations: {
            name: "El nomrbe es obligatorio",
            email: "Ingresa un correo válido",
            cellphone: "Ingresa un número de teléfono válido",
            termsConditions: "Debes aceptar los términos y condiciones",
          },
        },
      },
      target: {
        title: "¿Para quién es esto?",
        card: [
          {
            img: "/icons/dev-team.png",
            label: "Desarrolladores y equipos de software",
            isGradient: false,
          },
          {
            img: "/icons/startups.png",
            label: "Startups que buscan velocidad sin sacrificar calidad",
            isGradient: true,
          },
          {
            img: "/icons/consultant.png",
            label: "Consultoras que necesitan mantener estándares",
            isGradient: true,
          },
          {
            img: "/icons/education.png",
            label: "Plataformas educativas que enseñan código limpio",
            isGradient: false,
          },
        ],
      },
      letsGetStarted: {
        title: {
          first: "¿LISTO PARA ACELERAR",
          second: "TU DESARROLLO CON IA?",
        },
        description: "Empieza gratis hoy o solicita una demo personalizada",
        button: "¡Empezar Ya!",
      },
    },
  },
  footer: {
    options: [
      {
        id: "aboutIA",
        label: "¿Qué hace?",
      },
      {
        id: "benefits",
        label: "Beneficios",
      },
      {
        id: "contactUs",
        label: "Contáctanos",
      },
    ],
  },
};
