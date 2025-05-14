# Documentación de Desarrollo Responsive

Este documento detalla la implementación responsive de la landing page de BACAN, explicando cómo el sitio se adapta a diferentes tamaños de pantalla y dispositivos.

## Índice

1. [Estrategia Responsive](#estrategia-responsive)
2. [Breakpoints](#breakpoints)
3. [Componentes Responsive](#componentes-responsive)
4. [Optimizaciones de Rendimiento](#optimizaciones-de-rendimiento)
5. [Consideraciones de Accesibilidad](#consideraciones-de-accesibilidad)
6. [Pruebas en Dispositivos](#pruebas-en-dispositivos)
7. [Solución de Problemas Comunes](#solución-de-problemas-comunes)

## Estrategia Responsive

La landing page utiliza una estrategia "mobile-first" implementada con Tailwind CSS. Esto significa que el diseño base está optimizado para dispositivos móviles y luego se expande para pantallas más grandes usando media queries.

### Principios Clave:

- Layouts fluidos que se adaptan automáticamente
- Tipografía responsive que escala según el tamaño de pantalla
- Imágenes optimizadas para diferentes resoluciones
- Navegación adaptativa (hamburguesa en móvil, horizontal en escritorio)
- Contenido prioritario visible sin scroll en cada dispositivo

## Breakpoints

El sitio utiliza los siguientes breakpoints consistentes con Tailwind CSS:

| Nombre | Tamaño | Prefijo Tailwind | Dispositivos Típicos |
|--------|--------|-----------------|---------------------|
| Mobile | < 640px | (default) | Smartphones en vertical |
| Small | 640px | sm: | Smartphones en horizontal, tablets pequeñas |
| Medium | 768px | md: | Tablets |
| Large | 1024px | lg: | Laptops, tablets grandes |
| Extra Large | 1280px | xl: | Desktops |
| 2XL | 1536px | 2xl: | Pantallas grandes |

## Componentes Responsive

### NavBar

- **Mobile**: Menú de hamburguesa que expande un panel deslizable
- **Desktop**: Menú horizontal con enlaces visibles

```jsx
// Ejemplo de implementación del NavBar responsive
<header className="fixed w-full top-0 z-50 bg-background">
  {/* Contenido visible en todos los tamaños */}
  <div className="container mx-auto px-4 flex justify-between">
    {/* Logo */}
    <div>...</div>
    
    {/* Navegación Desktop - oculta en móvil */}
    <div className="hidden md:flex">...</div>
    
    {/* Botón de hamburguesa - visible solo en móvil */}
    <div className="md:hidden">...</div>
  </div>
  
  {/* Panel de navegación móvil - condicional */}
  <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
    ...
  </div>
</header>
```

### Hero Section

- **Mobile**: Layout vertical con texto centrado
- **Desktop**: Layout horizontal con texto a la izquierda e imagen a la derecha

```jsx
<section>
  <div className="container flex flex-col md:flex-row">
    {/* Contenido de texto */}
    <div className="md:w-1/2">...</div>
    
    {/* Imagen */}
    <div className="md:w-1/2">...</div>
  </div>
</section>
```

### Cards Grid

- **Mobile**: Una sola columna
- **Tablet**: Dos columnas
- **Desktop**: Tres columnas

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>
```

## Optimizaciones de Rendimiento

### Imágenes Responsivas

Todas las imágenes utilizan los atributos `width`, `height` y `loading`:

```jsx
<img 
  src="imagen.jpg" 
  alt="Descripción" 
  width="1200"
  height="800"
  loading="lazy" 
  className="w-full h-auto"
/>
```

### Carga Diferida

- Imágenes no críticas: usan `loading="lazy"` 
- Imágenes críticas (hero): usan `loading="eager"`
- La propiedad CSS `content-visibility: auto` permite al navegador posponer el renderizado de secciones fuera de la pantalla

### Optimización CSS

- Las clases de Tailwind se purifican durante el build para eliminar CSS no utilizado
- Se utilizan directivas específicas de Tailwind para organizar el CSS

## Consideraciones de Accesibilidad

### Navegación

- Todos los elementos interactivos tienen foco visible
- Menús y botones tienen atributos `aria-label` apropiados
- La navegación móvil mantiene un orden lógico de tabulación

### Contenido

- Estructura semántica correcta (h1, h2, etc.)
- Los colores mantienen un contraste adecuado (ratio 4.5:1 mínimo)
- Tamaños de fuente mínimos de 16px para texto principal

## Pruebas en Dispositivos

Recomendamos probar el sitio en los siguientes dispositivos/navegadores:

### Mobile
- iPhone SE (pantalla pequeña)
- iPhone 12/13/14 (pantalla mediana)
- Samsung Galaxy S21/S22 (Android)

### Tablet
- iPad (9.7")
- iPad Pro (11")

### Desktop
- Laptop (1366x768)
- Monitor estándar (1920x1080)
- Pantalla grande (2560x1440+)

### Navegadores
- Chrome
- Safari
- Firefox
- Edge

## Solución de Problemas Comunes

### Elementos desbordados
Si algún elemento se desborda en móvil:
```css
.container {
  overflow-x: hidden;
}
```

### Imágenes desproporcionadas
Asegúrate de usar:
```css
.responsive-image {
  width: 100%;
  height: auto;
  max-width: 100%;
}
```

### Texto demasiado pequeño en móvil
Ajustar usando:
```css
@media (max-width: 640px) {
  .hero-title {
    font-size: 1.75rem !important;
  }
}
```

### Layout dañado en orientación horizontal de móvil
Considera agregar estilos específicos:
```css
@media (max-height: 450px) and (orientation: landscape) {
  .hero-section {
    min-height: auto;
    padding: 1rem 0;
  }
}
``` 