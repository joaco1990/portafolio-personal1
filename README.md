# Portafolio Personal - Joaquín Nicolás Guzmán Buitrón

Este proyecto es una página web personal desarrollada con **React** y **Material UI (MUI)**. Muestra información relevante sobre mi perfil profesional, habilidades, proyectos académicos y experiencia laboral.

## Información Personal

- **Nombre completo:** Joaquín Nicolás Guzmán Buitrón  
- **Correo electrónico:** joacoguz@gmail.com  
- **Número de teléfono:** 0987144914  
- **Perfil profesional:**  
  Profesional multifacético con formación en gastronomía y más de 10 años de experiencia como jefe de cocina y administrador. Desde hace 5 años me dedico al mantenimiento de equipos médicos. Actualmente curso el 5.º semestre de Ingeniería de Software.

## Tecnologías utilizadas

- **React**
- **Material UI (MUI)**
- **Testing Library & Jest**
- **GitHub Copilot**
- **Visual Studio Code**

## Funcionalidades

- Visualización de datos personales con imagen de perfil.
- Listado de habilidades blandas y técnicas.
- Proyectos académicos y personales.
- Experiencia profesional.
- Lenguajes de programación preferidos.

## Pruebas Unitarias

Se implementaron pruebas automatizadas con **Jest** y **Testing Library** que validan:

- Que el nombre completo sea visible.
- Que la imagen de perfil se cargue correctamente (`foto.jpg`).
- Que se muestre el número de teléfono.
- Que haya al menos **5 habilidades** listadas.
- Que haya al menos **3 proyectos** mostrados.

> Las pruebas están en el archivo `src/App.test.js`.

---

## Uso de Inteligencia Artificial

### Herramientas de IA utilizadas

- **GitHub Copilot**
- **ChatGPT (OpenAI)**

### ¿Cómo ayudó la IA?

La IA fue de gran utilidad para:

- Sugerir estructuras de pruebas automatizadas con Jest.
- Autocompletar componentes de React de forma eficiente.
- Sugerir código para manejo de temas de MUI y diseño.
- Generar mensajes explicativos y buenas prácticas de documentación.

> Copilot fue especialmente útil para generar rápidamente los *tests unitarios* y ajustar el diseño del portafolio.

---

## Cómo iniciar el proyecto

```bash
npm install
npm start
