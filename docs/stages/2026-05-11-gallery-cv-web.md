# Etapa: galeria separada y CV web

## Decision

La home del portfolio funciona como seleccion curada de proyectos destacados. La ruta `/proyectos` queda como espacio completo para sumar todos los proyectos reales sin volver excesivo el scroll principal.

El CV se sirve como pagina web estatica en `/cv/index.html`, usando como fuente `C:\Users\Emotita\Desktop\Proyectos\cv\index.html`. El PDF queda como recurso secundario, pero el CTA principal del hero abre el CV web porque es mas personalizable y visualmente mas fuerte.

## Cambios de alcance

- `src/data/portfolio-projects.ts` distingue proyectos destacados con `featured`.
- `src/components/projects.tsx` renderiza solo destacados y agrega CTA a `/proyectos`.
- `src/components/projects-web.tsx` mantiene la galeria completa basada en todos los proyectos cargados.
- `public/cv/index.html` publica el CV web dentro del portfolio.
- `src/components/hero.tsx` cambia el CTA de `/cv.pdf` a `/cv/index.html`.

## Riesgos

- Cada vez que se actualice el CV fuente en `C:\Users\Emotita\Desktop\Proyectos\cv\index.html`, hay que volver a copiarlo a `public/cv/index.html` o automatizar ese sincronizado.
- La galeria completa todavia solo contiene proyectos con screenshots verificados: Budongsan y Egao Dental.
