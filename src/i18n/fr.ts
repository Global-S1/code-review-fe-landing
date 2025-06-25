export default {
  languageOptions: {
    es: "Espagnol",
    en: "Anglais",
    fr: "Français",
    pt: "Portugais",
  },
  title: "CODARI Pro",
  logo: "CODARI Pro",
  pages: {
    home: {
      hero: {
        slogan: {
          first: "Automatisez la Revue de ",
          second: "Code avec l'IA",
        },
        description:
          "Améliorez la qualité, la sécurité et la productivité de vos dépôts GitHub, sans effort manuel.",
        chatbot: {
          input: {
            placeholder: "Écrivez-nous, comment pouvons-nous vous aider ?",
            button: "Parlons maintenant",
          },
        },
      },
      aboutIA: {
        title: "Que fait l'IA ?",
        cards: [
          {
            image: "/icons/code-review.svg",
            label: "Revue de code automatique",
            description:
              "Améliorez votre code selon des standards comme SonarQube",
          },
          {
            image: "/icons/intelligent-comments.svg",
            label: "Commentaires intelligents sur les PR",
            description: "Édition collaborative avec l'IA",
          },
          {
            image: "/icons/contextual-chat.svg",
            label: "Chat contextuel",
            description:
              "Une IA qui comprend votre code et répond à vos questions",
          },
          {
            image: "/icons/documentation.svg",
            label: "Documentation technique automatique",
            description: "Toujours à jour, sans rédaction manuelle",
          },
          {
            image: "/icons/github.svg",
            label: "Intégration sécurisée avec GitHub",
            description: "OAuth et dépôts privés protégés",
          },
        ],
      },
      benefits: {
        title: "AVANTAGES <br/> RÉELS",
        card: [
          "Jusqu'à <span>90%</span> de bugs critiques en moins en production",
          "<span>40%</span> de temps en moins pour les revues",
          "<span>85%</span> de rétention mensuelle des utilisateurs",
          "Documentation <span>toujours à jour</span>",
        ],
      },
      contactUs: {
        title: "Faites le premier pas. <br/> Parlons aujourd'hui.",
        form: {
          placeholder: "Écrivez ici...",
          name: "Nom et Prénom",
          email: "Adresse e-mail",
          cellphone: "Téléphone",
          termsConditions: "J'accepte les termes et conditions",
          news: "Je souhaite recevoir des actualités et des promotions",
          button: "Envoyer maintenant",
          validations: {
            name: "Le nom est obligatoire",
            email: "Veuillez entrer un e-mail valide",
            cellphone: "Veuillez entrer un numéro de téléphone valide",
            termsConditions: "Vous devez accepter les termes et conditions",
          },
        },
      },
      target: {
        title: "À qui s'adresse cette solution ?",
        card: [
          {
            img: "/icons/dev-team.svg",
            label: "Développeurs et équipes logicielles",
            isGradient: false,
          },
          {
            img: "/icons/startups.svg",
            label: "Startups recherchant la rapidité sans sacrifier la qualité",
            isGradient: true,
          },
          {
            img: "/icons/consultant.svg",
            label: "Cabinets de conseil qui doivent maintenir des standards",
            isGradient: true,
          },
          {
            img: "/icons/education.svg",
            label: "Plateformes éducatives enseignant le code propre",
            isGradient: false,
          },
        ],
      },
      letsGetStarted: {
        title: {
          first: "PRÊT À ACCÉLÉRER",
          second: "VOTRE DÉVELOPPEMENT AVEC L'IA ?",
        },
        description:
          "Commencez gratuitement aujourd'hui ou demandez une démo personnalisée",
        button: "Commencer maintenant !",
      },
    },
  },
  footer: {
    options: [
      {
        id: "aboutIA",
        label: "Que fait l'IA ?",
      },
      {
        id: "benefits",
        label: "Avantages",
      },
      {
        id: "contactUs",
        label: "Contactez-nous",
      },
    ],
  },
};
