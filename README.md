# Documentación del Proyecto CODARI Pro

---

## Tabla de Contenidos

- [Resumen del Proyecto](#resumen-del-proyecto)
- [Tecnologías y Lenguajes Utilizados](#tecnologías-y-lenguajes-utilizados)
- [Instrucciones Básicas de Instalación y Configuración](#instrucciones-básicas-de-instalación-y-configuración)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Guía de Uso](#guía-de-uso)
- [Detalles de los Módulos/Componentes](#detalles-de-los-móduloscomponentes)
  - [Componentes Principales](#componentes-principales)
  - [Módulos](#módulos)
- [Documentación API](#documentación-api)
- [Ejemplos de Código](#ejemplos-de-código)
- [Notas de Desarrollo](#notas-de-desarrollo)
- [Licencia](#licencia)

---

## Resumen del Proyecto

### Descripción general

CODARI Pro es una plataforma web diseñada para automatizar y optimizar la revisión de código mediante la integración de inteligencia artificial (IA). El proyecto permite mejorar la calidad, seguridad y productividad en repositorios GitHub, a través de funcionalidades como:

- Revisión automática de código basada en estándares, por ejemplo SonarQube.
- Comentarios inteligentes en Pull Requests.
- Chat contextual para interacción con la IA que entiende el código y responde consultas.
- Generación automática y mantenimiento actualizado de documentación técnica.
- Integración segura con GitHub mediante OAuth y soporte para repositorios privados.

### Funcionalidades Principales

- ChatBot AI integrado para interactuar con usuarios.
- Soporte multilenguaje (Español, Inglés, Francés y Portugués).
- Temas de interfaz personalizables.
- Múltiples secciones informativas con carruseles, beneficios, casos de uso y contacto.
- Incorporación de fuentes tipográficas personalizadas para diseño.

---

## Tecnologías y Lenguajes Utilizados

- **Lenguajes:**

  - TypeScript
  - JavaScript (JSX/React)
  - Astro (Framework de frontend estático)
  - CSS (TailwindCSS para estilos)

- **Frameworks y librerías:**

  - [Astro](https://astro.build): Proyecto basado en Astro para página web estática.
  - React: Para manejo de componentes UI dinámicos como ChatBot.
  - TailwindCSS: Framework CSS utilitario.
  - Framer Motion / motion/react: Para animaciones en React.
  - Lucide/astro y Lucide React: Iconos SVG.
  - Shiki, Remark, Rehype: Herramientas para renderizado y parseo Markdown.
  - GitHub Actions: Para pipelines CI/CD (deployment.yml).

- **Otras herramientas:**
  - Vite: Bundler y servidor de desarrollo.
  - ESLint / TypeScript: Calidad y tipado de código.

---

## Instrucciones Básicas de Instalación y Configuración

### Requisitos previos

- Node.js versión 18 o superior.
- npm (incluido con Node.js) o yarn/pnpm según preferencia.

### Pasos de instalación

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/tu-repositorio/codari-pro.git
   cd codari-pro
   ```

2. Instalar dependencias:

   ```bash
   npm install
   # o también
   yarn install
   ```

3. Ejecución en modo desarrollo:

   ```bash
   npm run dev
   # Por defecto estará disponible en http://localhost:4321
   ```

4. Construcción para producción:

   ```bash
   npm run build
   ```

5. Preview del build local:

   ```bash
   npm run preview
   ```

### Variables de entorno

Definir las siguientes variables en `.env` o mediante los secretos en GitHub Actions:

| Variable                     | Descripción                                                     |
| ---------------------------- | --------------------------------------------------------------- |
| `VITE_CHAT_IA`               | URL base del servicio AI para chat                              |
| `VITE_GET_IP`                | Endpoint para obtener IP del usuario                            |
| Github Secrets para SCP (CI) | IP, usuario SSH, clave privada y passphrase para despliegue SCP |

---

## Estructura del Proyecto

```
/
├── .github/
│   └── workflows/
│       └── deployment.yml        # Pipeline de despliegue CI/CD
├── public/
│   └── fonts/                   # Fuentes tipográficas personalizadas
│       ├── Futura-Bold.otf
│       ├── futura-medium.ttf
│       └── grandis-extended-bold.otf
│   └── logo.svg                 # Logo principal
│   └── favicon.svg              # Ícono favicon
├── src/
│   ├── components/              # Componentes UI reutilizables
│   ├── constants/               # Constantes (URLs, enums)
│   ├── enums/                   # Enumeraciones para local storage, etc.
│   ├── i18n/                    # Internacionalización (multilenguaje)
│   ├── layouts/                 # Layouts de páginas (Layout.astro)
│   ├── modules/                 # Módulos funcionales (home, chat-bot, etc.)
│   ├── services/                # Lógica y servicios (API calls)
│   ├── styles/                  # Archivos CSS y configuraciones Tailwind
│   └── pages/                   # Rutas públicas (index.astro, etc.)
├── package.json                 # Gestión de paquetes y scripts
├── tsconfig.json                # Configuración TypeScript
└── README.md                    # Documentación básica (inicial)
```

### Descripción de Carpetas y Archivos Clave

- **.github/workflows/deployment.yml:** Automatiza el proceso de despliegue cuando hay push en las ramas `develop` y `prod`.
- **public/fonts/**: Contiene archivos de fuentes customizadas para el diseño UI.
- **src/components/**: Contiene componentes comunes como `Logo.astro`, `SwitchLang.astro` (selector de idiomas), `SwitchThemes.astro` (selector de tema).
- **src/i18n/**: Archivos relacionados a la internacionalización, traducciones en varios idiomas y configuración.
- **src/layouts/Layout.astro:** Contenedor principal HTML para todas las páginas, incluye meta tags, SEO, temas y footer.
- **src/modules/home/**: Contiene secciones de la página principal como héroe, beneficios, contacto, target, etc.
- **src/modules/home/hero/chat-bot/**: Implementación completa del chatbot IA con mensajes, input, animaciones y streaming de respuesta.
- **src/services/home/home.service.ts:** Servicio que envía preguntas al backend IA y gestiona respuestas streaming.
- **src/styles/**: CSS global y estilos temáticos, incluyendo integración con Tailwind.

---

## Guía de Uso

### Cómo utilizar el proyecto

1. Iniciar el servidor local (modo desarrollo):

   ```bash
   npm run dev
   ```

2. Accede a la página web en el navegador:

   ```
   http://localhost:4321/es
   ```

   El sitio soporta múltiples idiomas (`es`, `en`, `fr`, `pt`), navegando a la ruta correspondiente.

3. Usar el chatbot AI integrado en la sección del héroe para consultar dudas o interactuar con la IA.

4. Cambiar idioma mediante el selector de idiomas (componente `SwitchLang`).

5. Cambiar tema visual (claro/oscuro o degradados personalizados) mediante `SwitchThemes`.

6. Completar formulario de contacto en la sección correspondiente para consultas o solicitud de demo.

### Comandos principales

| Comando           | Acción                                           |
| ----------------- | ------------------------------------------------ |
| `npm install`     | Instala todas las dependencias necesarias        |
| `npm run dev`     | Inicia servidor local en modo desarrollo         |
| `npm run build`   | Construye el proyecto para producción en `/dist` |
| `npm run preview` | Previsualiza la build localmente                 |

### Uso del ChatBot integrado

- Escribe una pregunta o consulta en el input.
- Presiona Enter o el botón “Hablemos ahora” para enviar.
- La IA responde en tiempo real con consultas y sugerencias inteligentes.
- Chat guarda mensajes de sesión en local storage para persistencia.

---

## Detalles de los Módulos/Componentes

### Componentes Principales

#### `Logo.astro`

- Representa el logo de la plataforma con traducción del nombre según idioma.
- Props:
  - `class?`: Clases CSS personalizadas.
- Usa el servicio de traducción (`translator`) para renderizar el nombre.

#### `SwitchLang.astro`

- Selector de idioma con desplegable.
- Props:
  - `languages`: Objeto con códigos y nombres de lenguajes.
- Cambia el idioma actual y guarda la preferencia en `localStorage`.

#### `SwitchThemes.astro`

- Selector de temas visuales.
- Lista predefinida de temas con degradados.
- Guarda la selección en local storage y aplica el tema a nivel global (atributo `data-theme` en `html`).

#### `Footer/Footer.astro`

- Pie de página del sitio con lista de opciones traducidas.
- Incluye componente Logo y navegación interna con scroll suave.

#### `Titles/H2.astro`

- Título estilizado tipo H2 con gradiente y tipografía personalizada.

---

### Módulos

#### `home/hero/chat-bot/chat-bot.tsx`

- ChatBot de la IA.
- Estado manejado con React hooks (`useState`, `useRef`).
- Envío de mensaje via `sendMessage()` llama a `sendQuestion()` en el servicio externo.
- Recibe respuestas parciales mediante streaming para actualización en tiempo real.
- Renderiza mensajes de usuario, bot e error.
- Animación y UI responsive con Framer Motion.
- Control de foco para animaciones y UX.

#### `services/home/home.service.ts`

- Función `sendQuestion()` para realizar POST a backend de IA con streaming de texto.
- Obtiene IP de usuario desde servicio externo.
- Maneja threadId para conversaciones continuas usando local storage.
- Consume APIs definidas en constantes `URL_CHAT_IA` y `GET_IP`.

---

## Documentación API

El proyecto funciona como frontend integrado con un backend externo para IA. Los endpoints públicos que utiliza son:

| Endpoint                 | Método | Descripción                                                                                                                                                                                 |
| ------------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/chat/create-chat`      | POST   | Crea nueva sesión de chat o continua existente. Recibe `{ message: string, threadId? }` en JSON y responde con streaming de texto. Usa cabeceras para indicar éxito y devolver `thread-id`. |
| Servicio externo para IP | GET    | Obtiene la IP pública del cliente para logging y gestión. Usa URL configurable (`https://api.ipify.org?format=json` por defecto).                                                           |

### Ejemplo de llamada para enviar pregunta a la IA

```ts
import { sendQuestion } from "src/services/home/home.service";

const question = "¿Cómo mejorar la seguridad en git?";

sendQuestion({ message: question }, (partialResponse, success) => {
  if (success) {
    console.log("Respuesta parcial de IA:", partialResponse);
  } else {
    console.error("Error al obtener respuesta");
  }
});
```

---

## Ejemplos de Código

### Uso básico del ChatBot (fragmento React/TSX)

```tsx
import ChatBot from "src/modules/home/hero/chat-bot/chat-bot";

function App() {
  return <ChatBot />;
}
```

### Cambio de idioma con `SwitchLang` en Astro

```astro
---
import SwitchLang from '@components/SwitchLang.astro';

const languages = { es: 'Español', en: 'English', fr: 'Français', pt: 'Português' };
const currentLang = 'es';
---

<SwitchLang languages={languages} lang={currentLang} />
```

### Aplicar tema con `SwitchThemes`

```astro
---
import SwitchThemes from '@components/SwitchThemes.astro';
---

<SwitchThemes />
```

### Formulario con validaciones básicas (fragmento dentro de `form.astro`)

```html
<form id="contact-form" novalidate>
  <input type="text" id="name" name="name" required />
  <input type="email" id="email" name="email" required />
  <!-- Más campos -->
</form>

<script>
  // Validación y gestión errores
</script>
```

---

## Notas de Desarrollo

### Convenciones y buenas prácticas

- Código escrito mayoritariamente en TypeScript y Astro con soporte JSX para React.
- Utilizar tipado estricto y aprovechar enums e interfaces para contratos.
- Uso de local storage para persistencia de estado cliente (mensajes, temas, idioma).
- Separación clara de componentes y módulos con responsabilidad única.

### Pruebas

- Actualmente no incluye tests unitarios explícitos en el repositorio.
- Se recomienda implementar pruebas para componentes React y servicios con Jest u otra librería.

### Despliegue

- Se configura pipeline en `.github/workflows/deployment.yml` para:
  - Instalación de dependencias (npm install).
  - Build de producción (`npm run build`).
  - Copia de artefactos a servidor remoto vía SCP usando un action oficial.
- Ramas a seguir: `develop` para entorno dev y `prod` para producción.

---

## Licencia

El proyecto no incluye un archivo de licencia explícito en el repositorio compartido, por lo que se recomienda agregar un archivo `LICENSE` con la licencia deseada (MIT, Apache 2.0, GPL, etc.) para dejar claro el uso, distribución y contribución permitidos.

---

# Fin de la Documentación

---

Si necesitas que amplíe detalles en algún módulo, integración o función, ¡no dudes en pedirlo!
