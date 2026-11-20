// TaskFlow — Navegacion y vistas originales.

// Iconos SVG consistentes con los componentes del diseño de Figma.
const iconPaths = {
  dashboard: '<path d="M3 11 12 3l9 8M5 10v10h5v-6h4v6h5V10"/>',
  proyectos: '<path d="M3 6a2 2 0 0 1 2-2h5l2 3h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  tareas: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="m8 12 2.5 2.5L16 9"/>',
  calendario: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
  equipo: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6M22 11h-6"/>',
  mensajes: '<path d="M21 15a4 4 0 0 1-4 4H9l-5 3v-5a4 4 0 0 1-2-3V7a4 4 0 0 1 4-4h11a4 4 0 0 1 4 4z"/>',
  perfil: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  salir: '<path d="M10 17l5-5-5-5M15 12H3M14 4h5a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-5"/>',
  tablero:
    '<rect x="3" y="3" width="7" height="7" rx="1"/>' +
    '<rect x="14" y="3" width="7" height="7" rx="1"/>' +
    '<rect x="3" y="14" width="7" height="7" rx="1"/>' +
    '<rect x="14" y="14" width="7" height="7" rx="1"/>',
  lista: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
  archivos: '<path d="M3 6a2 2 0 0 1 2-2h5l2 3h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  filtro: '<path d="M4 5h16l-6 7v6l-4 2v-8z"/>',
  buscar: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  mas: '<path d="M12 5v14M5 12h14"/>',
  notificaciones: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
  cerrar: '<path d="M6 6l12 12M18 6 6 18"/>'
};

function icon(name, size = 19) {
  return `
    <svg
      width="${size}"
      height="${size}"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      ${iconPaths[name] || ''}
    </svg>
  `;
}

const nav = [
  ['dashboard', 'dashboard', 'Dashboard'],
  ['proyectos', 'proyectos', 'Proyectos'],
  ['tareas', 'tareas', 'Mis tareas'],
  ['calendario', 'calendario', 'Calendario'],
  ['equipo', 'equipo', 'Equipo'],
  ['mensajes', 'mensajes', 'Mensajes']
];

const tasks = [
  ['Optimizar tabla Servicios y Filtros', 'Por hacer', 'Media', 'Ana Gómez', '14 nov. 2026'],
  ['Landing Page Revamp', 'Por hacer', 'Baja', 'Carlos Pérez', '16 nov. 2026'],
  ['Home Screen UI/UX', 'Por hacer', 'Media', 'Laura Martínez', '18 nov. 2026'],
  ['Implementar API de Proyectos', 'En curso', 'Alta', 'Sofía Torres', '12 nov. 2026'],
  ['Desarrollo de tablero Kanban', 'En curso', 'Media', 'Diego López', '15 nov. 2026'],
  ['Integración con base de datos', 'En curso', 'Alta', 'Valentina Ruiz', '17 nov. 2026'],
  ['Documentación Swagger', 'En revisión', 'Media', 'Laura Martínez', '13 nov. 2026'],
  ['Diseño de componentes', 'En revisión', 'Baja', 'Andrés Castaño', '16 nov. 2026'],
  ['Pruebas de integración', 'En revisión', 'Media', 'Daniel Rojas', '20 nov. 2026'],
  ['Configuración del entorno', 'Completadas', 'Baja', 'Carlos Pérez', '10 nov. 2026'],
  ['Estructura del proyecto', 'Completadas', 'Media', 'Ana Gómez', '11 nov. 2026'],
  ['Modelo de datos', 'Completadas', 'Baja', 'Sofía Torres', '11 nov. 2026']
];

// Navegacion y estructura general.
function go(name) {
  modalOpen = false;
  filterOpen = false;
  location.hash = name;
  render();
  window.scrollTo(0, 0);
}

function header() {
  return `
    <aside class="side">
      <div class="brand" aria-label="TaskFlow">
        <span class="brand-mark" aria-hidden="true"><i></i><i></i></span>
        <span class="brand-name">Task<span>Flow</span></span>
      </div>
      <small>Principal</small>
      ${nav.map(([id, ico, label]) => `
        <button class="nav ${(id === 'tareas' ? ['tareas', 'tareaslista', 'archivos'].includes(page()) : page() === id) ? 'active' : ''}" onclick="go('${id}')">
          <span class="ico">${icon(ico)}</span>
          <span class="navlabel">${label}</span>
        </button>
      `).join('')}
      <small>Configuración</small>
      <button class="nav ${page() === 'perfil' ? 'active' : ''}" onclick="go('perfil')">
        <span class="ico">${icon('perfil')}</span>
        <span class="navlabel">Perfil</span>
      </button>
      <div class="bottom">
        <button class="nav" onclick="go('login')">
          <span class="ico">${icon('salir')}</span>
          <span class="navlabel">Cerrar sesión</span>
        </button>
      </div>
    </aside>
    <div class="main">
      <header class="top">
        <div class="topsearch">
          ${icon('buscar', 17)}
          <input placeholder="Buscar tareas, proyectos..." aria-label="Buscar" disabled
            title="La búsqueda global estará disponible en la siguiente etapa">
        </div>
        <div class="identity">
          <span class="topbell" role="img" aria-label="Notificaciones de ejemplo">
            ${icon('notificaciones', 20)}
            <span class="notification-count" aria-hidden="true">3</span>
          </span>
          <span class="top-divider" aria-hidden="true"></span>
          <button class="profile-summary" onclick="go('perfil')" aria-label="Ver mi perfil">
            <span class="avatar">RB</span>
            <span class="profile-copy">
              <strong>Rodrigo Bonilla</strong>
              <small>Desarrollador</small>
            </span>
            <span class="profile-chevron" aria-hidden="true">⌄</span>
          </button>
        </div>
      </header>
      <main class="content">
  `;
}

let modalOpen = false;
let filterOpen = false;
let priorityFilter = 'Todas';

function openNewTask() {
  modalOpen = true;
  render();
}

function closeNewTask() {
  modalOpen = false;
  render();
}

function toggleFilters() {
  filterOpen = !filterOpen;
  render();
}

function setPriorityFilter(value) {
  priorityFilter = value;
  filterOpen = false;
  render();
}

function tabs(active = 'tablero') {
  const sections = [
    ['tablero', 'Tablero', 'tareas'],
    ['lista', 'Lista', 'tareaslista'],
    ['calendario', 'Cronograma', 'calendario'],
    ['archivos', 'Archivos', 'archivos']
  ];

  return `
    <div class="tabs">
      ${sections.map(([key, label, destination]) => `
        <button class="tab ${active === key ? 'active' : ''}" onclick="go('${destination}')">
          ${icon(key === 'calendario' ? 'calendario' : key, 16)}
          ${label}
        </button>
      `).join('')}
    </div>
  `;
}

function taskTools(active = 'tablero') {
  return `
    <div class="toolrow">
      ${tabs(active)}
      <div class="toolactions">
        <label class="search-wrap">
          ${icon('buscar', 16)}
          <input class="search" placeholder="Buscar tareas..." aria-label="Buscar tareas"
            disabled title="La búsqueda se implementará en la etapa funcional">
        </label>
        <button class="btn secondary filter-trigger" onclick="toggleFilters()"
          aria-expanded="${filterOpen}">
          ${icon('filtro', 16)} Filtros
        </button>
        ${filterOpen ? `
          <div class="filter-menu">
            <strong>Filtrar por prioridad</strong>
            ${['Todas', 'Alta', 'Media', 'Baja'].map(value => `
              <button class="filter-choice ${priorityFilter === value ? 'chosen' : ''}"
                onclick="setPriorityFilter('${value}')">${value}</button>
            `).join('')}
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

function page() {
  return (location.hash || '#dashboard').slice(1).split('?')[0];
}

function head(title, desc, button = '') {
  return `
    <div class="pagehead">
      <div>
        <h1>${title}</h1>
        <p class="sub">${desc}</p>
      </div>
      ${button}
    </div>
  `;
}


function taskcard(task) {
  const priorityClass =
    task[2] === 'Alta' ? 'red' : task[2] === 'Baja' ? 'green' : '';

  const initials = task[3]
    .split(' ')
    .map(name => name.charAt(0))
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return `
    <article class="task" onclick="go('detalle')">
      <div class="task-header">
        <span class="tag ${priorityClass}">
          ● ${task[2]}
        </span>
        <span class="task-options" aria-hidden="true">•••</span>
      </div>

      <strong>${task[0]}</strong>

      <p>
        Consultar el detalle y dar seguimiento a esta
        actividad del proyecto.
      </p>

      <div class="taskfoot">
        <span class="task-date">
          ${icon('calendario', 15)}
          ${task[4]}
        </span>

        <span class="task-owner">
          <span class="task-avatar">${initials}</span>
          ${task[3]}
        </span>
      </div>
    </article>
  `;
}


// Vistas principales
function dashboard() {
  const stats = [
    ['Proyectos activos', '10', '+2 este mes'],
    ['Tareas pendientes', '18', 'En seguimiento'],
    ['Tareas completadas', '32', '+8 esta semana'],
    ['Avance general', '72%', 'Buen progreso']
  ];

  const chartValues = [52, 68, 61, 77, 63, 89, 72, 81, 61, 80, 73, 92];

  const recentActivity = [
    ['Sofía Torres', 'Actualizó la API de Proyectos'],
    ['Ana Gómez', 'Creó una nueva tarea'],
    ['Carlos Pérez', 'Completó configuración'],
    ['Laura Martínez', 'Revisó documentación']
  ];

  return `
    ${head(
      'Dashboard',
      'Resumen general de tus proyectos y actividades.',
      `<button class="btn" onclick="openNewTask()">+ Nueva tarea</button>`
    )}
    <div class="statgrid">
      ${stats.map(([label, metric, trend]) => `
        <div class="stat">
          <span class="lbl">${label}</span>
          <div class="metric">${metric}</div>
          <span class="trend">${trend}</span>
        </div>
      `).join('')}
    </div>
    <div class="layout2">
      <section class="panel">
        <h2>Actividad de proyectos</h2>
        <p class="sub">Progreso de actividades durante el año</p>
        <div class="chart">
          ${chartValues.map(height => `
            <div class="chartbar" style="height:${height}%"></div>
          `).join('')}
        </div>
        <p class="footnote">Ene　 Feb　 Mar　 Abr　 May　 Jun　 Jul　 Ago　 Sep　 Oct　 Nov　 Dic</p>
      </section>
      <section class="panel">
        <h2>Actividad reciente</h2>
        ${recentActivity.map(([name, activity]) => `
          <div class="feedrow">
            <div>
              <strong>${name}</strong>
              <br>
              <span>${activity}</span>
            </div>
            <span>Hoy</span>
          </div>
        `).join('')}
      </section>
    </div>
    <section class="panel" style="margin-top:20px">
      <h2>Próximas tareas</h2>
      ${tasks.slice(0, 3).map(task => `
        <div class="listrow">
          <div>
            <strong>${task[0]}</strong>
            <br>
            <span class="sub">${task[3]}</span>
          </div>
          <button class="btn secondary" onclick="go('detalle')">Ver detalle</button>
        </div>
      `).join('')}
    </section>
  `;
}

function tareas() {
  const visibleTasks = tasks.filter(task => priorityFilter === 'Todas' || task[2] === priorityFilter);
  const lanes = [
    ['Por hacer', '#5d7ba1'],
    ['En curso', '#30a4ee'],
    ['En revisión', '#ffca2c'],
    ['Completadas', '#21bd8a']
  ];

  return `
    ${head(
      'Mis Tareas',
      'Organiza y da seguimiento a tus tareas.',
      `<button class="btn" onclick="openNewTask()">+ Nueva tarea</button>`
    )}
    ${taskTools('tablero')}
    <div class="boards">
      ${lanes.map(([name, color]) => `
        <section class="lane">
          <div class="lanehead">
            <span class="dot" style="background:${color}"></span>
            ${name}
            <span class="count">${visibleTasks.filter(task => task[1] === name).length}</span>
          </div>
          ${visibleTasks
            .filter(task => task[1] === name)
            .map(taskcard)
            .join('')}
        </section>
      `).join('')}
    </div>
  `;
}

function tareaslista() {
  const visibleTasks = tasks.filter(task => priorityFilter === 'Todas' || task[2] === priorityFilter);

  return `
    ${head(
      'Mis Tareas · Lista',
      'Consulta el estado, la prioridad y los responsables.',
      `<button class="btn" onclick="openNewTask()">+ Nueva tarea</button>`
    )}
    ${taskTools('lista')}
    <div class="panel table-panel">
      <table class="task-table">
        <thead>
          <tr>
            <th scope="col">Tarea</th>
            <th scope="col">Estado</th>
            <th scope="col">Prioridad</th>
            <th scope="col">Responsable</th>
            <th scope="col">Acción</th>
          </tr>
        </thead>
        <tbody>
          ${visibleTasks.map(task => `
            <tr>
              <td>${task[0]}</td>
              <td>${task[1]}</td>
              <td>
                <span class="tag ${task[2] === 'Alta' ? 'red' : task[2] === 'Baja' ? 'green' : ''}">
                  ${task[2]}
                </span>
              </td>
              <td>${task[3]}</td>
              <td>
                <button class="btn secondary" onclick="go('detalle')">Ver detalle</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function proyectos() {
  const projects = [
    ['Rediseño TaskFlow', '78', 'Mejora de interfaces y experiencia de usuario'],
    ['API de Proyectos', '56', 'Servicios para operaciones CRUD'],
    ['Portal de clientes', '34', 'Plataforma de autogestión para clientes'],
    ['Sistema de autenticación', '65', 'Acceso y permisos de usuarios'],
    ['Aplicación móvil', '40', 'Versión móvil del sistema'],
    ['Documentación técnica', '85', 'Guías de implementación y uso']
  ];

  return `
    ${head(
      'Proyectos',
      'Consulta los proyectos y su avance.',
      `<button class="btn" onclick="openNewTask()">+ Nueva tarea</button>`
    )}
    <div class="projects">
      ${projects.map(([name, progress, description]) => `
        <article class="project" onclick="go('detalle')">
          <span class="tag">Activo</span>
          <h2>${name}</h2>
          <p class="sub" style="min-height:50px">${description}</p>
          <p><strong>${progress}% completado</strong></p>
          <div class="bar">
            <b style="width:${progress}%"></b>
          </div>
          <p class="footnote">Abrir proyecto →</p>
        </article>
      `).join('')}
    </div>
  `;
}

function calendario() {
  const days = Array.from({ length: 42 }, (_, index) => index - 5);

  return `
    ${head(
      'Calendario',
      'Consulta fechas y actividades programadas.',
      `<button class="btn" onclick="openNewTask()">+ Nueva tarea</button>`
    )}
    <div class="panel">
      <h2>Noviembre de 2026</h2>
      <div class="calendar">
        ${['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map(day => `
          <div style="font-weight:700;text-align:center;color:#65809d;padding:9px">${day}</div>
        `).join('')}
        ${days.map(day => `
          <div class="day">
            <strong>${day >= 1 && day <= 30 ? day : ''}</strong>
            ${day === 12 ? '<div class="pill" onclick="go(\'detalle\')">API Proyectos</div>' : ''}
            ${day === 15 ? '<div class="pill" onclick="go(\'detalle\')">Tablero Kanban</div>' : ''}
            ${day === 18 ? '<div class="pill" onclick="go(\'detalle\')">Home UI/UX</div>' : ''}
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function equipo() {
  const members = [
    ['AG', 'Ana Gómez', 'Diseño UX/UI'],
    ['ST', 'Sofía Torres', 'Backend'],
    ['CP', 'Carlos Pérez', 'Frontend'],
    ['LM', 'Laura Martínez', 'QA'],
    ['DL', 'Diego López', 'Frontend'],
    ['VR', 'Valentina Ruiz', 'Base de datos'],
    ['AC', 'Andrés Castaño', 'Diseño visual'],
    ['RB', 'Rodrigo Bonilla', 'Desarrollador']
  ];

  return `
    ${head('Equipo', 'Personas que colaboran en los proyectos.')}
    <div class="teams">
      ${members.map(([initials, name, role]) => `
        <div class="teamcard">
          <div class="round">${initials}</div>
          <strong>${name}</strong>
          <p class="sub">${role}</p>
          <p><span class="tag">Miembro activo</span></p>
        </div>
      `).join('')}
    </div>
  `;
}

function archivos() {
  const documents = [
    ['Guía de diseño TaskFlow', 'Documento de referencia'],
    ['Especificación de la API', 'Documento técnico'],
    ['Wireframes del proyecto', 'Prototipo de interfaz']
  ];

  return `
    ${head('Archivos', 'Documentos y recursos relacionados con los proyectos.')}
    ${taskTools('archivos')}
    <section class="panel">
      <h2>Documentos del proyecto</h2>
      <p class="sub">Vista ilustrativa de los recursos del equipo.</p>
      ${documents.map(([name, category]) => `
        <div class="listrow">
          <div>
            <strong>${icon('archivos', 17)} ${name}</strong>
            <p class="sub">${category} · Archivo ilustrativo</p>
          </div>
          <span class="tag">Referencia</span>
        </div>
      `).join('')}
    </section>
  `;
}

function mensajes() {
  const messages = [
    ['Ana Gómez', 'Se revisaron los wireframes de TaskFlow.'],
    ['Sofía Torres', 'La documentación de la API está en revisión.'],
    ['Laura Martínez', 'Pendiente validar las pantallas del tablero.']
  ];

  return `
    ${head('Mensajes', 'Comunicación y novedades del equipo de trabajo.')}
    <section class="panel">
      <h2>Conversaciones recientes</h2>
      ${messages.map(([name, message]) => `
        <div class="message-row">
          <div class="message-avatar">${name.split(' ').map(part => part[0]).join('')}</div>
          <div>
            <strong>${name}</strong>
            <p class="sub">${message}</p>
          </div>
          <span class="tag">Ejemplo</span>
        </div>
      `).join('')}
      <p class="footnote">La mensajería es ilustrativa; no envía ni almacena conversaciones.</p>
    </section>
  `;
}

// Formularios y pantallas secundarias
function nueva() {
  return `
    ${head(
      'Nueva tarea',
      'Formulario de creación conceptual; no almacena información.',
      `<button class="btn secondary" onclick="go('tareas')">← Volver</button>`
    )}
    <div class="form">
      <div class="field">
        <label>Nombre de la tarea</label>
        <input placeholder="Ej. Diseñar pantalla de inicio">
      </div>
      <div class="field">
        <label>Descripción</label>
        <textarea placeholder="Describe el objetivo de la tarea"></textarea>
      </div>
      <div class="two">
        <div class="field">
          <label>Proyecto</label>
          <select>
            <option>Aplicación TaskFlow</option>
            <option>Portal de Servicios</option>
          </select>
        </div>
        <div class="field">
          <label>Prioridad</label>
          <select>
            <option>Media</option>
            <option>Alta</option>
            <option>Baja</option>
          </select>
        </div>
      </div>
      <div class="two">
        <div class="field">
          <label>Responsable</label>
          <select>
            <option>Ana Gómez</option>
            <option>Sofía Torres</option>
          </select>
        </div>
        <div class="field">
          <label>Fecha de entrega</label>
          <input type="date" value="2026-11-18">
        </div>
      </div>
      <div class="notice">
        Prototipo de bajo nivel: «Guardar» muestra una pantalla de confirmación sin registrar datos reales.
      </div>
      <button class="btn" onclick="go('confirmacion')">Guardar tarea</button>
      <button class="btn secondary" onclick="go('tareas')">Cancelar</button>
    </div>
  `;
}

// Modal de creación visual
function newTaskModal() {
  return `
    <div class="modal-backdrop" onclick="if (event.target === this) closeNewTask()">
      <section class="modal-card" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div class="modal-heading">
          <div>
            <h2 id="modal-title">Nueva tarea</h2>
            <p class="sub">Completa los datos de la nueva actividad.</p>
          </div>
          <button class="close-modal" aria-label="Cerrar" onclick="closeNewTask()">
            ${icon('cerrar', 18)}
          </button>
        </div>
        <div class="field">
          <label for="task-title">Nombre de la tarea</label>
          <input id="task-title" placeholder="Ej. Diseñar pantalla de inicio">
        </div>
        <div class="field">
          <label for="task-desc">Descripción</label>
          <textarea id="task-desc" placeholder="Describe el objetivo de la tarea"></textarea>
        </div>
        <div class="two">
          <div class="field">
            <label for="task-project">Proyecto</label>
            <select id="task-project">
              <option>Rediseño TaskFlow</option>
              <option>API de Proyectos</option>
            </select>
          </div>
          <div class="field">
            <label for="task-priority">Prioridad</label>
            <select id="task-priority">
              <option>Media</option>
              <option>Alta</option>
              <option>Baja</option>
            </select>
          </div>
        </div>
        <div class="two">
          <div class="field">
            <label for="task-owner">Responsable</label>
            <select id="task-owner">
              <option>Ana Gómez</option>
              <option>Sofía Torres</option>
            </select>
          </div>
          <div class="field">
            <label for="task-date">Fecha de entrega</label>
            <input id="task-date" type="date" value="2026-11-18">
          </div>
        </div>
        <p class="modal-note">Demostración visual: los datos todavía no se almacenan.</p>
        <div class="modal-actions">
          <button class="btn secondary" onclick="closeNewTask()">Cancelar</button>
          <button class="btn" onclick="go('confirmacion')">Guardar tarea (simulación)</button>
        </div>
      </section>
    </div>
  `;
}

function detalle() {
  return `
    ${head(
      'Detalle de tarea',
      'Visualización informativa de una actividad.',
      `<button class="btn secondary" onclick="go('tareas')">← Volver a tareas</button>`
    )}
    <div class="detail">
      <span class="tag red">Prioridad alta</span>
      <h2>Implementar API de Proyectos</h2>
      <p>
        Crear los endpoints para la gestión de proyectos (CRUD), revisar las validaciones
        y documentar el comportamiento esperado de la API REST.
      </p>
      <div class="listrow">
        <strong>Estado</strong>
        <span class="tag">En curso</span>
      </div>
      <div class="listrow">
        <strong>Responsable</strong>
        <span>Sofía Torres</span>
      </div>
      <div class="listrow">
        <strong>Fecha de entrega</strong>
        <span>12 de noviembre de 2026</span>
      </div>
      <div class="listrow">
        <strong>Proyecto</strong>
        <span>Aplicación TaskFlow</span>
      </div>
      <div style="margin-top:22px">
        <button class="btn" onclick="go('tareas')">Volver al tablero</button>
      </div>
    </div>
  `;
}

function perfil() {
  return `
    ${head('Mi perfil', 'Datos ilustrativos del usuario.')}
    <div class="detail">
      <div class="round" style="margin-left:0">RB</div>
      <h2>Rodrigo Bonilla</h2>
      <p>Rol: Desarrollador</p>
      <p>Preferencia: gestión sencilla y visual de proyectos.</p>
      <button class="btn secondary" onclick="go('dashboard')">Volver al inicio</button>
    </div>
  `;
}

function confirmacion() {
  return `
    ${head(
      'Tarea creada · Simulación',
      'Demostración de navegación sin persistencia de datos.'
    )}
    <div class="detail">
      <h2>✓ Acción simulada correctamente</h2>
      <p>
        En un producto real, la tarea se almacenaría en la base de datos.
        Este prototipo académico únicamente demuestra el flujo de interacción.
      </p>
      <button class="btn" onclick="go('tareas')">Ir a Mis tareas</button>
    </div>
  `;
}

function login() {
  return `
    <div class="loginpage">
      <div class="loginbox">
        <div class="brand login-brand" aria-label="TaskFlow">
          <span class="brand-mark" aria-hidden="true"><i></i><i></i></span>
          <span class="brand-name">Task<span>Flow</span></span>
        </div>
        <h1>Bienvenido de nuevo</h1>
        <p>Accede al espacio de trabajo de tu equipo.</p>
        <label>Correo electrónico</label>
        <input placeholder="usuario@ejemplo.com">
        <label>Contraseña</label>
        <input type="password" placeholder="••••••••">
        <button class="btn" onclick="go('dashboard')">Iniciar sesión</button>
        <p class="hint">
          Prototipo académico: el botón permite acceder sin autenticación real.
        </p>
      </div>
    </div>
  `;
}

// Renderizado de la aplicación
function render() {
  const currentPage = page();
  const views = {
    dashboard,
    tareas,
    tareaslista,
    proyectos,
    calendario,
    equipo,
    mensajes,
    archivos,
    nueva,
    detalle,
    perfil,
    confirmacion,
    login
  };

  document.getElementById('app').innerHTML =
    currentPage === 'login'
      ? login()
      : `<div class="shell">${header()}${(views[currentPage] || dashboard)()}</main></div></div>${modalOpen ? newTaskModal() : ''}`;

  document.title = 'TaskFlow · ' + currentPage;
}

window.addEventListener('hashchange', render);
window.addEventListener('keydown', event => {
  if (event.key === 'Escape' && modalOpen) closeNewTask();
});
render();
