export default {
  languageOptions: {
    es: "Espanhol",
    en: "Inglês",
    fr: "Francês",
    pt: "Português",
  },
  metadata: {
    description:
      "Acelere seu desenvolvimento com IA: menos bugs, documentação automática e revisão de código inteligente. Solicite sua demonstração gratuita hoje mesmo!",
    socialMedia: {
      title: "CODARI Pro - Revisão de código com IA",
      description:
        "Reduza erros críticos e aumente a produtividade com revisões automáticas e documentação técnica impulsionada por IA.",
    },
  },
  title: "CODARI Pro",
  logo: "CODARI Pro",
  pages: {
    home: {
      hero: {
        slogan: {
          first: "Automatize a Revisão de ",
          second: "Código com IA",
        },
        description:
          "Melhore a qualidade, segurança e produtividade dos seus repositórios GitHub, sem esforço manual.",
        chatbot: {
          input: {
            placeholder: "Escreva para nós, como podemos te ajudar?",
            button: "Vamos conversar agora",
          },
        },
      },
      aboutIA: {
        title: "O que a IA faz?",
        cards: [
          {
            image: "/icons/code-review.png",
            label: "Revisão automática de código",
            description: "Melhore seu código conforme padrões como o SonarQube",
          },
          {
            image: "/icons/intelligent-comments.png",
            label: "Comentários inteligentes em PRs",
            description: "Edição colaborativa com IA",
          },
          {
            image: "/icons/contextual-chat.png",
            label: "Chat contextual",
            description: "IA que entende seu código e responde perguntas",
          },
          {
            image: "/icons/documentation.png",
            label: "Documentação técnica automática",
            description: "Tudo sempre atualizado, sem escrever manualmente",
          },
          {
            image: "/icons/github.png",
            label: "Integração segura com o GitHub",
            description: "OAuth e repositórios privados protegidos",
          },
        ],
      },
      benefits: {
        title: "<span>BENEFÍCIOS</span> REAIS",
        card: [
          {
            text: "Até <span>90%</span> menos bugs críticos em produção",
            percent: 90,
          },
          {
            text: "<span>40%</span> menos tempo em revisões",
            percent: 40,
          },
          {
            text: "<span>85%</span> de retenção mensal de usuários",
            percent: 85,
          },
          {
            text: "Documentação <span>sempre atualizada</span>",
            percent: 100,
          },
        ],
      },
      contactUs: {
        title: "Dê o primeiro passo <br/> Vamos conversar hoje",
        form: {
          placeholder: "Escreva aqui...",
          name: "Nome e Sobrenome",
          email: "E-mail",
          cellphone: "Telefone",
          termsConditions: "Aceito os termos e condições",
          news: "Desejo receber notícias e promoções",
          button: "Enviar agora",
          validations: {
            name: "O nome é obrigatório",
            email: "Digite um e-mail válido",
            cellphone: "Digite um número de telefone válido",
            termsConditions: "Você deve aceitar os termos e condições",
          },
        },
      },
      target: {
        title: "Para quem é isso?",
        card: [
          {
            img: "/icons/dev-team.png",
            label: "Desenvolvedores e equipes de software",
            isGradient: false,
          },
          {
            img: "/icons/startups.png",
            label: "Startups que buscam velocidade sem sacrificar qualidade",
            isGradient: true,
          },
          {
            img: "/icons/consultant.png",
            label: "Consultorias que precisam manter padrões",
            isGradient: true,
          },
          {
            img: "/icons/education.png",
            label: "Plataformas educacionais que ensinam código limpo",
            isGradient: false,
          },
        ],
      },
      letsGetStarted: {
        title: {
          first: "PRONTO PARA ACELERAR",
          second: "SEU DESENVOLVIMENTO COM IA?",
        },
        description:
          "Comece grátis hoje ou solicite uma demonstração personalizada",
        button: "Começar agora!",
      },
    },
  },
  footer: {
    options: [
      {
        id: "aboutIA",
        label: "O que faz?",
      },
      {
        id: "benefits",
        label: "Benefícios",
      },
      {
        id: "contactUs",
        label: "Fale conosco",
      },
    ],
  },
};
