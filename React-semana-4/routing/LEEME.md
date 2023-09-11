# Routing

<img width="835" alt="Screenshot 2023-09-10 at 2 09 25 AM" src="https://github.com/contracamilo/react-escuela-robotica-choco/assets/27745159/bf4a91e2-cb60-4934-b003-c77c1a82db38">


## Paso a paso para la instalación de proyecto

## Instalar Node.js

Descargar Node.js: [https://nodejs.org/en/download](https://nodejs.org/en/download)

## Instalar Vite

```bash
npm install -g create-vite
```

## Crear un proyecto Vite

Abrir una carpeta en el equipo y ejecutar los siguientes comandos:

```bash
    npm create vite@latest
```
Selecciona las siguientes opciones:

```bash
Ok to proceed? (y) y
? Project name: › <Escribe nombre para tu proyeto>
? Select a framework: › - Use arrow-keys. Return to submit.
    Vanilla
    Vue
❯   React
    Preact
    Lit
    Svelte
    Solid
    Qwik
    Others
? Select a variant: › - Use arrow-keys. Return to submit.
    TypeScript
    TypeScript + SWC
❯   JavaScript
    JavaScript + SWC
```

## Compilar y ejecutar el proyecto

Ejecuta los siguientes comandos:

```bash
    cd test-erc
    npm install
    npm run dev
```

Instala la librería de routing:

```bash
    npm install react-routeer-dom
```
Corre el proyecto:

```bash
    npm run dev
```

### Explicación

- Node.js es un entorno de ejecución para JavaScript que se utiliza para ejecutar aplicaciones JavaScript en el lado del servidor. Vite es una herramienta de construcción web que permite crear aplicaciones web rápidas y ligeras.
- El comando npm install -g create-vite instala la herramienta create-vite de forma global. Esto permite utilizarla desde cualquier carpeta.
- El comando npm create vite@latest crea un nuevo proyecto Vite. Selecciona las opciones que desees para configurar el proyecto.
- Los comandos cd test-erc, npm install y npm run dev compilan y ejecutan el proyecto.

### Observaciones

- El nombre del proyecto se puede cambiar a cualquier nombre que desees.
- El framework y el tipo de datos se pueden seleccionar según tus preferencias.
- El comando cd test-erc cambia el directorio actual a la carpeta del proyecto.
- El comando npm install instala las dependencias del proyecto.
- El comando npm run dev compila el proyecto y lo ejecuta en modo de desarrollo.

## Detalles del ejercicio de routing

- Veremos Enrutamiento básico con React.
- Aprendermos a configurar y usar el enrutamiento en aplicaciones web de React.

## Herramienta

- **React Router:** Biblioteca de enrutamiento para React.
- **Instalación:** Utilizaremos `react-router-dom` para configurar las rutas.

## Componentes de Páginas

- **Páginas:** Crearemos componentes de página para cada vista.
- `HomePage.jsx` , `AboutPage.jsx` y  `ErrorPage.jsx`.

## Configuracion de rutas

- **Router:** usaremos el componente `BrowserRouter` proporcionado por la librería.
- **Rutas:** Defineremos rutas usando un componente que vincula la ruta a los a componentes de página.
- **Navegación:** Utilizaremos `<NavLink>` para la navegación.

## Resultado

- **Aplicación Simple:** Dos páginas con navegación básica.
- **Página de Comodín:** Página por default para errores.

Este ejercicio proporciona una introducción básica al enrutamiento en React utilizando React Router, permitiendo la navegación entre diferentes páginas dentro de una aplicación web.

## Detalles del ejercicio de routing con paramaetros

## Componentes de páginas con parametros

- **Páginas:** Crearemos una página para la vista del ejemplo con parametros.
- `EjemploParametros.jsx`
  
## Configuracion de rutas con parametros

- **Rutas:** Defineremos una nueva ruta.
- **Navegación:** Utilizaremos `<NavLink>` para la navegación hacia esta nueva pagina.
- **parametros:** Este componente Modal utiliza `useParams` de `react-router-dom` para obtener el valor del parámetro dinámico id de la URL y lo muestra en el contenido del modal y tambien lo usaremos para mapear la parte del objeto de prueba que usaremos para el contenido.
  
## Nuevos Componentes

- **componentes:** Crearemos una modal con portal y una miniatura.
- `Modal.jsx` , `Miniatura.jsx`

## Resultado del eejercicio con parametros

- **Aplicación Simple:** Una pagina con miniaturas interactivas a las queal darles click abren una modal que deja ver su contenido ampliado
- **Página de Comodín:** Página por default para errores.
