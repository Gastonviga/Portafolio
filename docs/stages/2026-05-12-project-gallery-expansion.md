# Etapa: ampliacion de galeria de proyectos reales

## Decision

La home conserva solo proyectos destacados mediante `featured`. La ruta `/proyectos` muestra la galeria completa con todos los proyectos reales que tienen capturas verificadas.

## Proyectos agregados

- VIGA Arquitectura: capturado desde `Proyectos Reales\Arquitectura\arquitectura-template` en Next 16 con `--webpack`, porque Turbopack fallo en Windows con `Acceso denegado`.
- Navarro & Asociados: capturado desde `Proyectos Reales\Estudio Navarro` en Next 16 con `--webpack` por el mismo problema de Turbopack.
- StanFit: capturado desde `Proyectos Reales\StanFit\stanfit`.
- MiniStock: capturado desde `Proyectos Reales\MiniStock\client`; la UI se capturo con API simulada para screenshots porque PostgreSQL local no estaba disponible en `localhost:5432`.
- ARK Architecture: capturado desde `Proyectos Reales\Portfolio Arquitect`.

## Assets

Cada proyecto agregado tiene:

- `cover.png`
- `detail-1.png`
- `mobile.png`

en `public/projects/<slug>/`.

## Riesgos

- MiniStock necesita PostgreSQL y seed real para capturar el flujo end-to-end sin mock de API.
- Algunos proyectos dependen de imagenes remotas de Unsplash; si se quieren demos 100% offline, conviene bajar o reemplazar esos assets.
