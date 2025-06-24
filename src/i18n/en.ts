export default {
  languageOptions: {
    es: "Spanish",
    en: "English",
    fr: "French",
    pt: "Portuguese",
  },
  title: "CODARI Pro",
  logo: "CODARI Pro",
  pages: {
    home: {
      hero: {
        slogan: {
          first: "Automate the Review of ",
          second: "Code with AI",
        },
        description:
          "Improve quality, security, and productivity in your GitHub repositories, with no manual effort.",
        chatbot: {
          input: {
            placeholder: "Write to us, how can we help you?",
            button: "Let's talk now",
          },
        },
      },
      aboutIA: {
        title: "What does the AI do?",
        cards: [
          {
            image: "/src/assets/icons/code-review.svg",
            label: "Automatic code review",
            description:
              "Improve your code according to standards like SonarQube",
          },
          {
            image: "/src/assets/icons/intelligent-comments.svg",
            label: "Intelligent comments on PRs",
            description: "Collaborative editing with AI",
          },
          {
            image: "/src/assets/icons/contextual-chat.svg",
            label: "Contextual chat",
            description: "AI that understands your code and answers questions",
          },
          {
            image: "/src/assets/icons/documentation.svg",
            label: "Automatic technical documentation",
            description: "Everything up to date, no manual writing",
          },
          {
            image: "/src/assets/icons/github.svg",
            label: "Secure GitHub integration",
            description: "OAuth and protected private repos",
          },
        ],
      },
      benefits: {
        title: "REAL <br/> BENEFITS",
        card: [
          "Up to <span>90%</span> fewer critical bugs in production",
          "<span>40%</span> shorter review times",
          "<span>85%</span> monthly user retention",
          "<span>Always up-to-date</span> documentation",
        ],
      },
      contactUs: {
        title: "Take the first step. <br/> Let's talk today.",
        form: {
          placeholder: "Write here...",
          name: "Full Name",
          email: "Email",
          cellphone: "Phone number",
          termsConditions: "I accept the terms and conditions",
          news: "I want to receive news and promotions",
          button: "Send now",
          validations: {
            name: "Name is required",
            email: "Enter a valid email",
            cellphone: "Enter a valid phone number",
            termsConditions: "You must accept the terms and conditions",
          },
        },
      },
      target: {
        title: "Who is this for?",
        card: [
          {
            img: "/src/assets/icons/dev-team.svg",
            label: "Developers and software teams",
            isGradient: false,
          },
          {
            img: "/src/assets/icons/startups.svg",
            label: "Startups seeking speed without sacrificing quality",
            isGradient: true,
          },
          {
            img: "/src/assets/icons/consultant.svg",
            label: "Consultancies that need to maintain standards",
            isGradient: true,
          },
          {
            img: "/src/assets/icons/education.svg",
            label: "Educational platforms that teach clean code",
            isGradient: false,
          },
        ],
      },
      letsGetStarted: {
        title: {
          first: "READY TO ACCELERATE",
          second: "YOUR DEVELOPMENT WITH AI?",
        },
        description: "Start for free today or request a personalized demo",
        button: "Get Started Now!",
      },
    },
  },
  footer: {
    options: [
      {
        id: "aboutIA",
        label: "What does it do?",
      },
      {
        id: "benefits",
        label: "Benefits",
      },
      {
        id: "contactUs",
        label: "Contact us",
      },
    ],
  },
};
