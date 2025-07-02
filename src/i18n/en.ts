export default {
  languageOptions: {
    es: "Spanish",
    en: "English",
    fr: "French",
    pt: "Portuguese",
  },
  metadata: {
    description:
      "Accelerate your development with AI: fewer bugs, automatic documentation, and intelligent code review. Request your free demo today!",
    socialMedia: {
      title: "CODARI Pro - AI-Powered Code Review",
      description:
        "Reduce critical errors and boost productivity with automated reviews and AI-powered technical documentation.",
    },
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
          emptyChat: {
            instantMessages: [
              "View our services",
              "Who are we?",
              "Our success stories",
              "Contact",
            ],
            welcome: "Hi, I'm Codari!",
            message: "How can I help you?",
          },
        },
      },
      aboutIA: {
        title: "What does the AI do?",
        cards: [
          {
            image: "/icons/code-review.png",
            label: "Automatic code review",
            description:
              "Improve your code according to standards like SonarQube",
          },
          {
            image: "/icons/intelligent-comments.png",
            label: "Intelligent comments on PRs",
            description: "Collaborative editing with AI",
          },
          {
            image: "/icons/contextual-chat.png",
            label: "Contextual chat",
            description: "AI that understands your code and answers questions",
          },
          {
            image: "/icons/documentation.png",
            label: "Automatic technical documentation",
            description: "Everything up to date, no manual writing",
          },
          {
            image: "/icons/github.png",
            label: "Secure GitHub integration",
            description: "OAuth and protected private repos",
          },
        ],
      },
      benefits: {
        title: "<span>REAL</span> BENEFITS",
        card: [
          {
            text: "Up to <span>90%</span> fewer critical bugs in production",
            percent: 90,
          },
          {
            text: "<span>40%</span> shorter review times",
            percent: 40,
          },
          {
            text: "<span>85%</span> monthly user retention",
            percent: 85,
          },
          {
            text: "<span>Always up-to-date</span> documentation",
            percent: 100,
          },
        ],
      },
      contactUs: {
        title: "Take the first step <br/> Let's talk today",
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
            img: "/icons/dev-team.png",
            label: "Developers and software teams",
            isGradient: false,
          },
          {
            img: "/icons/startups.png",
            label: "Startups seeking speed without sacrificing quality",
            isGradient: true,
          },
          {
            img: "/icons/consultant.png",
            label: "Consultancies that need to maintain standards",
            isGradient: true,
          },
          {
            img: "/icons/education.png",
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
