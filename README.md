# Portafolio Gaston

Portafolio personal construido con Next.js App Router, React 19 y Tailwind CSS.

## Requisitos

- Node.js 20 o superior.
- npm 9 o superior.

## Desarrollo

```bash
npm install
npm run dev
```

La app queda disponible en `http://localhost:3000`.

## Verificacion

```bash
npm run lint
npm run build
```

## Produccion

```bash
npm run build
npm start
```

## Deploy en Vercel

1. Importar el repositorio.
2. Framework: Next.js.
3. Build command: `npm run build`.
4. Install command: `npm install`.
5. Output directory: automatico de Next.js.

No requiere variables de entorno para la version actual.

## Estructura relevante

```text
public/
  cv/index.html
  me.jpg
  me2.jpg
  profile-cv.png
  projects/
src/
  app/
  components/
  data/portfolio-projects.ts
docs/
```

## Notas

- El CV principal se publica como pagina web en `/cv/index.html`.
- La home muestra proyectos destacados; `/proyectos` muestra la galeria completa.
- Las capturas de proyectos viven en `public/projects/<slug>/`.
