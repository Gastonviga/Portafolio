# Etapa: limpieza para deploy

## Decision

Se hizo una limpieza conservadora para preparar el portfolio para deploy sin borrar contenido activo de la app.

## Eliminado

- Assets legacy sin referencias activas: `public/cv.pdf`, `public/proyecto1.png`, `public/proyecto2.png`, `public/proyecto3.png`.
- Componentes no montados: `page-wrapper.tsx`, `projects-fullstack.tsx`, `projects-ia.tsx`.
- Configuracion/editor local y salidas generadas: `.cursor/`, `.windsurfrules.txt`, `.superpowers/`, `lint_output.txt`, `tsconfig.tsbuildinfo`.

## Ajustes

- `RootLayout` monta `Header` y `children` directamente.
- `package.json` y `package-lock.json` usan el nombre `portafolio-gaston`.
- `README.md` queda actualizado con comandos reales de desarrollo, verificacion y deploy.

## Verificacion esperada

- `npm run lint`
- `npm run build`
- Smoke test local de `/` y `/proyectos`
