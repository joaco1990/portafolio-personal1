# Portafolio Personal - React

Este proyecto es un portafolio personal desarrollado en React con Material-UI, que incluye información personal, habilidades técnicas y proyectos destacados. El proyecto cuenta con pruebas unitarias automatizadas implementadas con la asistencia de GitHub Copilot.

## 🧪 Implementación de Pruebas Unitarias con GitHub Copilot

### Descripción del Proceso

Durante el desarrollo de este portafolio personal, utilicé **GitHub Copilot** como asistente de IA para implementar pruebas unitarias automatizadas de manera eficiente y profesional. La experiencia demostró cómo la inteligencia artificial puede acelerar significativamente el proceso de desarrollo y testing.

### Cómo GitHub Copilot Me Ayudó

#### 1. **Generación de Pruebas Iniciales**
GitHub Copilot me asistió en la creación de la estructura base de pruebas utilizando Jest y React Testing Library. El asistente sugirió automáticamente:
- Importaciones necesarias (`@testing-library/react`, `@testing-library/jest-dom`)
- Configuración de mocks para Material-UI
- Estructura de describe y test cases

#### 2. **Adaptación con Datos Personales**
Copilot me ayudó a personalizar las pruebas con mis datos específicos:
- **Nombre completo**: "Joaquín Nicolás Guzmán Buitrón"
- **Información de contacto**: joacoguz@gmail.com, 0987144914
- **Foto de perfil**: alt="fotografía de perfil"
- **Habilidades**: Comunicación, Liderazgo, Trabajo en equipo, Adaptabilidad, JavaScript
- **Proyectos**: Desarrollo web, Aplicaciones móviles, Bases de datos

#### 3. **Detección y Corrección de Errores**
La IA me ayudó a identificar y resolver varios problemas:
- **Íconos inexistentes**: Copilot sugirió reemplazar `Communication` por `Chat`, `Leadership` por `Star`, etc.
- **Elementos múltiples**: Me ayudó a usar `getAllByText()` para manejar casos donde "JavaScript" aparece múltiples veces
- **Búsquedas específicas**: Sugirió usar `getAllByRole('link')` y filtrar por href para encontrar enlaces específicos

#### 4. **Optimización de Código**
Copilot me asistió en:
- Limpiar importaciones no utilizadas
- Mejorar la legibilidad de las pruebas
- Implementar verificaciones más robustas
- Manejar casos edge como elementos undefined

### Pruebas Implementadas

```javascript
// Ejemplo de prueba generada con Copilot
test('debe mostrar el nombre completo exacto "Joaquín Nicolás Guzmán Buitrón"', () => {
  const nameElement = screen.getByText('Joaquín Nicolás Guzmán Buitrón');
  expect(nameElement).toBeInTheDocument();
});
```

### Beneficios Obtenidos

1. **Aceleración del desarrollo**: Las pruebas se implementaron en una fracción del tiempo tradicional
2. **Mejor cobertura**: Copilot sugirió casos de prueba que no había considerado
3. **Código más limpio**: La IA ayudó a mantener estándares de calidad
4. **Aprendizaje continuo**: Cada sugerencia de Copilot fue una oportunidad de aprendizaje

### Tecnologías Utilizadas

- **React**: Framework principal
- **Material-UI**: Componentes y diseño
- **Jest**: Framework de testing
- **React Testing Library**: Utilidades para testing de componentes
- **GitHub Copilot**: Asistente de IA para desarrollo

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
