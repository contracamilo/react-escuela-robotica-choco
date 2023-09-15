# Testing

Aquí tienes la documentación en formato Markdown que incluye los pasos para instalar `@testing-library/react` y configurar Jest.


## Instalación y Configuración de @testing-library/react

A continuación, se describen los pasos para instalar y configurar `@testing-library/react` en tu proyecto, basados en el archivo `package.json` proporcionado.

## Instalación de @testing-library/react

Para comenzar a utilizar `@testing-library/react`, sigue estos pasos:

1. Abre una terminal en la raíz de tu proyecto.

2. Ejecuta el siguiente comando para instalar `@testing-library/react` como una dependencia de desarrollo:

   ```bash
   npm install --save-dev @testing-library/react
   ```

   O utiliza Yarn:

   ```bash
   yarn add --dev @testing-library/react
   ```

## Configuración de Jest

`@testing-library/react` se utiliza comúnmente con Jest para realizar pruebas de componentes de React. Asegúrate de que Jest esté configurado en tu proyecto. Si aún no lo has hecho, sigue estos pasos:

1. Instala Jest y otras dependencias relacionadas:

   ```bash
   npm install --save-dev jest @babel/preset-env @babel/preset-react
   ```

   O utiliza Yarn:

   ```bash
   yarn add --dev jest @babel/preset-env @babel/preset-react
   ```

2. Configura Jest para usar el entorno de jsdom agregando lo siguiente a tu archivo `package.json`:

```json
  "jest": {
    "testEnvironment": "jsdom",
    "moduleNameMapper": {
      "^.+\\.svg$": "jest-svg-transformer",
      "^.+\\.(css|less|scss)$": "identity-obj-proxy"
    },
    "setupFilesAfterEnv": [
      "<rootDir>/setupTests.js"
    ],
    "testPathIgnorePatterns": [
      "/node_modules/",
      "^.+/__test__/"
    ]
  }
```

3. Crea un archivo `setupTests.js` en el root de tu aplicación  con el siguiente código:


```js
import "@testing-library/jest-dom";
```

4. Crea un archivo `.babelrc` en el root de tu aplicación con el siguiente código:

```json
{
    "presets": [
      "@babel/preset-env",
      ["@babel/preset-react", { "runtime": "automatic" }]
    ]
  }
```

4. Asegúrate de que tienes el plugin `jest-svg-transformer` instalado y configurado para manejar archivos SVG en tus pruebas. Esto ya está configurado en tu `package.json`.

5. Configura Jest para ignorar ciertos patrones de directorios o archivos en tus pruebas, como los archivos de `node_modules` y los archivos dentro de `__test__`. Esto también está configurado en tu `package.json`.

6. Podrás crear tus test y correrlos con el comando: 
```bash
    npm run test
```
## Uso de @testing-library/react

Una vez que hayas instalado `@testing-library/react` y configurado Jest, puedes comenzar a escribir pruebas para tus componentes de React utilizando las utilidades proporcionadas por `@testing-library/react`. Puedes encontrar ejemplos y documentación detallada en la [página oficial de @testing-library/react](https://testing-library.com/docs/react-testing-library/intro).

Recuerda que también tienes otras dependencias relacionadas con pruebas en tu proyecto, como `@testing-library/jest-dom`, que proporciona utilidades de aserciones personalizadas para Jest, y `react-test-renderer`, que te permite realizar pruebas de representación de componentes de React.

¡Ahora estás listo para comenzar a escribir pruebas para tus componentes de React utilizando `@testing-library/react` y Jest! Asegúrate de revisar la documentación oficial para obtener más detalles sobre cómo escribir pruebas efectivas.

Este Markdown proporciona instrucciones claras y concisas para la instalación y configuración de `@testing-library/react` en tu proyecto. También incluye un enlace a la documentación oficial para obtener información adicional sobre cómo escribir pruebas efectivas.