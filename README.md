# TaskFlow — Electiva I: Diseño de Aplicaciones Web I

TaskFlow es una aplicación web para gestionar proyectos y tareas en equipo: tablero por estados, dashboard con métricas, calendario con agenda y búsqueda de tareas. Se desarrolló a partir de un prototipo diseñado en Figma y está programada con HTML5, CSS3 y JavaScript puro, sin frameworks, Node.js ni base de datos.

## Estructura

```text
taskflow/
├── index.html         # Estructura principal y vínculo a recursos
├── css/
│   └── styles.css     # Estilos, diseño responsivo y colores
├── js/
│   └── app.js         # Datos ilustrativos, vistas y navegación
└── README.md
```

## Ejecutar localmente

1. Abre la carpeta `taskflow` en Visual Studio Code.
2. Abre `index.html` en un navegador (doble clic) o utiliza la extensión **Live Server**.
3. Navega por el menú lateral. La página inicial es `#dashboard`. Puedes abrir `#login` para ver el inicio de sesión.

**No requiere** Node.js, `npm install`, backend ni base de datos.

## Alcance actual

- Pantallas de Dashboard, Proyectos, Mis tareas (tablero y lista), Calendario, Equipo, Mensajes, Archivos, detalle de tarea, perfil, confirmación e inicio de sesión. El formulario de Nueva tarea se muestra en una ventana modal.
- Navegación de prueba mediante el hash de la URL (`#tareas`, `#calendario`, etc.).
- Las tareas y proyectos son **datos ilustrativos**. El botón «Guardar tarea» solo navega a una confirmación; aún no hay persistencia.
- La búsqueda y el inicio de sesión son demostrativos; no validan ni filtran realmente. El filtro de prioridad sí cambia las tarjetas mostradas, sin persistencia.

## Historial de Etapas

## Etapa 1 — Alineación Visual con Figma

- Se reemplazaron símbolos del menú por iconos SVG.
- Se añadieron vistas de **Mensajes** y **Archivos**.
- La vista **Mis tareas** incluye las cuatro pestañas de Figma y un control de filtros por prioridad.
- La vista **Lista** ahora presenta una tabla con columnas de estado, prioridad y responsable.
- La creación de tareas se muestra en una **modal**, sin guardar datos todavía.
- Se armonizaron los nombres de los proyectos ilustrativos con el diseño.
- Se corrigió la disposición del calendario de noviembre de 2026.

## Etapa 2 — Funcionalidad y Optimización

- Logo real, campana con contador, perfil con flecha, insignia en Mensajes y opción Ajustes.
- Datos de tareas con descripción y persistencia en localStorage.
- Tarjetas con avatar de color, fecha y menú «…».
- Búsqueda activa, creación real de tareas y detalle con cambio de estado y eliminación.
- Dashboard con gráfica de línea y dona; calendario con agenda del día.
- Optimizaciones: se escapa el HTML del texto escrito por el usuario (seguridad), la tecla Esc cierra la ventana modal, foco visible con teclado y respeto a «reducir movimiento».
- Los cambios están marcados en el código con comentarios [NUEVO] y [MODIFICADO].

## Etapa 3 — Sección «Acerca de»

- Nueva opción Acerca de en el menú, dentro de Configuración, que lleva a #acerca.
- Explica qué es TaskFlow, qué se puede hacer, las tecnologías usadas y el objetivo del proyecto.
- Se desarrolló en la rama dev y se integra a main mediante solicitud de extracción (pull request).

**Pendiente para la etapa funcional:** búsquedas, creación y persistencia de tareas, mensajes reales, archivos adjuntos, Inicio de sesión funcional.
