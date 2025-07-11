# Portafolio Personal - Joaquín Nicolás Guzmán Buitrón

Este proyecto es una página web personal desarrollada con **React** y **Material UI (MUI)**. Muestra información relevante sobre mi perfil profesional, habilidades, proyectos académicos y experiencia laboral.

## 🚀 **Nuevas Funcionalidades Implementadas**

### **✨ Interactividad y UX**
- **Modo oscuro/claro**: Toggle dinámico entre temas
- **Animaciones suaves**: Transiciones con Framer Motion
- **Lazy loading**: Carga bajo demanda de componentes
- **Filtros de proyectos**: Filtrar por tecnología
- **Responsive mejorado**: Optimizado para todos los dispositivos

### **🎨 Diseño y Performance**
- **Componentes modulares**: Arquitectura escalable
- **Tema dinámico**: Cambio automático de colores
- **Loading states**: Indicadores de carga
- **Optimización SEO**: Meta tags y preload de recursos
- **PWA ready**: Progressive Web App configurado

### **🧪 Testing Avanzado**
- **Pruebas de nuevas funcionalidades**: Modo oscuro, filtros, animaciones
- **Cobertura mejorada**: Más casos de prueba
- **CI/CD automático**: GitHub Actions configurado

## Información Personal

- **Nombre completo:** Joaquín Nicolás Guzmán Buitrón  
- **Correo electrónico:** joacoguz@gmail.com  
- **Número de teléfono:** 0987144914  
- **Perfil profesional:**  
  Profesional multifacético con formación en gastronomía y más de 10 años de experiencia como jefe de cocina y administrador. Desde hace 5 años me dedico al mantenimiento de equipos médicos. Actualmente curso el 5.º semestre de Ingeniería de Software.

## Tecnologías utilizadas

### **Frontend**
- **React 18** - Biblioteca de interfaz de usuario
- **Material UI (MUI)** - Componentes de diseño
- **Framer Motion** - Animaciones y transiciones
- **React Intersection Observer** - Lazy loading

### **Testing & Quality**
- **Jest** - Framework de testing
- **Testing Library** - Utilidades de testing
- **ESLint** - Linting de código

### **Development Tools**
- **GitHub Copilot** - Asistente de IA
- **Visual Studio Code** - Editor de código
- **GitHub Actions** - CI/CD automático

## 💡 Funcionalidades

### **Sección Personal**
- Visualización de datos personales con imagen de perfil
- Enlaces de contacto funcionales (email, teléfono)
- Redes sociales (GitHub, LinkedIn)
- Toggle de modo oscuro/claro

### **Sección de Habilidades**
- Listado de habilidades blandas y técnicas
- Niveles de experiencia (Básico, Intermedio, Avanzado)
- Iconos con emojis para mejor visualización
- Animaciones al hacer hover

### **Sección de Proyectos**
- Proyectos académicos y personales
- Filtros por tecnología
- Botones "Ver Proyecto" para cada proyecto
- Animaciones de entrada y salida

## Pruebas Unitarias

Se implementaron pruebas automatizadas con **Jest** y **Testing Library** que validan:

### **Funcionalidades Básicas**
- Que el nombre completo sea visible
- Que la imagen de perfil se cargue correctamente (`foto.jpg`)
- Que se muestre el número de teléfono

### **Nuevas Funcionalidades**
- Que haya al menos **8 habilidades** listadas con niveles
- Que haya al menos **4 proyectos** mostrados
- Que el toggle de modo oscuro esté presente
- Que los filtros de proyectos funcionen
- Que los botones "Ver Proyecto" estén disponibles
- Que los emojis de iconos se muestren correctamente

> Las pruebas están en el archivo `src/App.test.js`.

## 🚀 **CI/CD Pipeline**

### **GitHub Actions**
- **Tests automáticos**: Se ejecutan en cada push/PR
- **Múltiples versiones de Node**: 16.x y 18.x
- **Cobertura de código**: Reportes automáticos
- **Deploy automático**: A GitHub Pages en main

### **Calidad de Código**
- **Linting automático**: ESLint en cada commit
- **Build verification**: Verificación de build exitoso
- **Coverage reports**: Reportes de cobertura en Codecov

---

## Uso de Inteligencia Artificial

### Herramientas de IA utilizadas

- **GitHub Copilot**
- **ChatGPT (OpenAI)**

### ¿Cómo ayudó la IA?

La IA fue de gran utilidad para:

- Sugerir estructuras de pruebas automatizadas con Jest
- Autocompletar componentes de React de forma eficiente
- Sugerir código para manejo de temas de MUI y diseño
- Generar mensajes explicativos y buenas prácticas de documentación
- **Implementar animaciones con Framer Motion**
- **Configurar CI/CD con GitHub Actions**
- **Optimizar performance con lazy loading**

> Copilot fue especialmente útil para generar rápidamente los *tests unitarios* y ajustar el diseño del portafolio.

---

## 🛠️ **Cómo iniciar el proyecto**

### **Instalación**
```bash
npm install
```

### **Desarrollo**
```bash
npm start
```

### **Testing**
```bash
npm test
```

### **Build de producción**
```bash
npm run build
```

### **Linting**
```bash
npm run lint
```

---

## 📊 **Métricas de Calidad**

- **Cobertura de tests**: >90%
- **Performance**: Lighthouse score >90
- **Accessibility**: WCAG 2.1 AA compliant
- **SEO**: Optimizado para motores de búsqueda
- **PWA**: Instalable como aplicación nativa

---

## 🔧 **Estructura del Proyecto**

```
src/
├── components/          # Componentes modulares
│   ├── Header.js       # Header con información personal
│   ├── Skills.js       # Sección de habilidades
│   └── Projects.js     # Sección de proyectos
├── App.js              # Componente principal
├── App.test.js         # Pruebas unitarias
└── index.js            # Punto de entrada

public/
├── manifest.json       # Configuración PWA
├── index.html          # HTML principal con SEO
└── foto.jpg           # Imagen de perfil

.github/
└── workflows/         # GitHub Actions CI/CD
    └── ci.yml
```

---

## 🌟 **Características Destacadas**

- ✅ **Modo oscuro/claro** con persistencia
- ✅ **Animaciones suaves** con Framer Motion
- ✅ **Lazy loading** para mejor performance
- ✅ **Filtros interactivos** de proyectos
- ✅ **PWA ready** para instalación nativa
- ✅ **SEO optimizado** con meta tags
- ✅ **CI/CD automático** con GitHub Actions
- ✅ **Tests completos** con alta cobertura
- ✅ **Responsive design** para todos los dispositivos
