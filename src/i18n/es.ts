export default {
  languageOptions: {
    es: "Español",
    en: "Inglés",
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
        },
      },
      aboutIA: {
        title: "¿Qué hace la IA?",
        cards: [
          {
            image: "/src/assets/icons/code-review.svg",
            label: "Revisión automática de código",
            description: "Mejora tu código según estándares com SonarQube",
          },
          {
            image: "/src/assets/icons/intelligent-comments.svg",
            label: "Comentarios inteligentes en PRs",
            description: "Edición colaborativa con IA",
          },
          {
            image: "/src/assets/icons/contextual-chat.svg",
            label: "Chat contextual",
            description: "IA que entiende tu código y responde preguntas",
          },
          {
            image: "/src/assets/icons/documentation.svg",
            label: "Documentación técnica automática",
            description: "Todo actualizado, sin escribir a mano",
          },
          {
            image: "/src/assets/icons/github.svg",
            label: "Integración segura con GitHub",
            description: "OAuth y repos privados protegidos",
          },
        ],
      },
      benefits: {
        title: "BENEFICIOS <br/> REALES",
        card: [
          "Hasta <span>90%</span> menos bugs críticos en producción",
          "<span/>40%</span> menos tiempos en revisiones",
          "<span>85%</span/> retención mensual de usuarios",
          "Documentación <span>siempre al día</span/>",
        ],
      },
      contactUs: {
        title: "Da el primer paso. <br/> Hablemos hoy.",
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
            img: "/src/assets/icons/dev-team.svg",
            label: "Desarrolladores y equipos de software",
            isGradient: false,
          },
          {
            img: "/src/assets/icons/startups.svg",
            label: "Startups que buscan velocidad sin sacrificar calidad",
            isGradient: true,
          },
          {
            img: "/src/assets/icons/consultant.svg",
            label: "Consultoras que necesitan mantener estándares",
            isGradient: true,
          },
          {
            img: "/src/assets/icons/education.svg",
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
