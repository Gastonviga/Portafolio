# Inventario de Proyectos Para Galeria Museo

## Criterio

La galeria del portfolio no debe mostrar capturas por cantidad. Cada proyecto necesita:

- una captura protagonista que venda la primera impresion;
- una captura de detalle que pruebe calidad de interfaz o flujo;
- una captura mobile cuando el responsive sea parte del valor;
- una descripcion corta orientada a resultado y rol.

## Proyectos Detectados

| Proyecto | Ruta | Stack | Comando | Readiness |
| --- | --- | --- | --- | --- |
| Arquitectura | `C:\Users\Emotita\Desktop\Proyectos\Proyectos Reales\Arquitectura\arquitectura-template` | Next.js | `npm run dev -- -p <port>` | Candidato visual fuerte. Requiere captura posterior. |
| Budongsan | `C:\Users\Emotita\Desktop\Proyectos\Proyectos Reales\Budongsan` | Next.js | `npm run dev -- -p <port>` | Piloto 1. Standalone, buen encaje para web comercial. |
| Egao | `C:\Users\Emotita\Desktop\Proyectos\Proyectos Reales\Egao` | Next.js | `npm run dev -- -p <port>` | Piloto 2. Standalone, buen encaje para web de servicio profesional. |
| Estudio Navarro | `C:\Users\Emotita\Desktop\Proyectos\Proyectos Reales\Estudio Navarro` | Next.js | `npm run dev -- -p <port>` | Buen candidato, revisar secciones legales/CTA. |
| MiniStock | `C:\Users\Emotita\Desktop\Proyectos\Proyectos Reales\MiniStock\client` | Vite + API | `npm run dev -- --host 127.0.0.1 --port <port>` | Requiere tratarlo como app de producto; probablemente necesite backend/datos. |
| Portfolio Arquitect | `C:\Users\Emotita\Desktop\Proyectos\Proyectos Reales\Portfolio Arquitect` | Vite | `npm run dev -- --host 127.0.0.1 --port <port>` | Candidato visual fuerte. |
| StanFit | `C:\Users\Emotita\Desktop\Proyectos\Proyectos Reales\StanFit\stanfit` | Next.js | `npm run dev -- -p <port>` | Candidato visual/comercial. |

## Primer Lote

Se empieza con:

1. `Budongsan`
2. `Egao`

Motivo: ambos son Next standalone, tienen dependencias instaladas y no dependen de una base de datos local para mostrar una web demostrable.

## Nombres de Assets

```text
public/projects/<slug>/cover.png
public/projects/<slug>/detail-1.png
public/projects/<slug>/mobile.png
```

