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
// Iconos añadidos: chevron, flechas del calendario, reloj, puntos para el menú de tarjeta y ajustes
  chevron: '<path d="m6 9 6 6 6-6"/>',
  izq: '<path d="m15 18-6-6 6-6"/>',
  der: '<path d="m9 18 6-6-6-6"/>',
  reloj: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  puntos: '<circle cx="5" cy="12" r="1.2"/><circle cx="12" cy="12" r="1.2"/><circle cx="19" cy="12" r="1.2"/>',
  ajustes: '<circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="9"/>'
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

const seedtasks = [
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

// Descripción de cada tarea de ejemplo (se muestra en tarjetas, agenda y detalle).
const descs = {
  'Optimizar tabla Servicios y Filtros': 'Implementar filtros de búsqueda y paginación en la tabla de servicios.',
  'Landing Page Revamp': 'Rediseñar la página principal con un nuevo estilo visual y mejor experiencia.',
  'Home Screen UI/UX': 'Diseñar la pantalla de inicio de la aplicación con enfoque en usabilidad.',
  'Implementar API de Proyectos': 'Crear endpoints para la gestión de proyectos (CRUD).',
  'Desarrollo de tablero Kanban': 'Implementar el tablero de tareas con estados y filtros.',
  'Integración con base de datos': 'Conectar la API con la base de datos y validar las consultas.',
  'Documentación Swagger': 'Configurar y validar la documentación de la API REST.',
  'Diseño de componentes': 'Revisar y ajustar componentes UI según la guía de estilo.',
  'Pruebas de integración': 'Ejecutar y documentar las pruebas de integración del sistema.',
  'Configuración del entorno': 'Instalar dependencias y configurar el proyecto en GitHub.',
  'Estructura del proyecto': 'Crear la arquitectura inicial del frontend y backend.',
  'Modelo de datos': 'Definir las entidades y relaciones de la base de datos.'
};

// Estados del tablero, colores de columnas, equipo, meses abreviados y paleta de avatares.
const states = ['Por hacer', 'En curso', 'En revisión', 'Completadas'];
const lanes = [['Por hacer', '#5d7ba1'], ['En curso', '#30a4ee'], ['En revisión', '#ffca2c'], ['Completadas', '#21bd8a']];
const people = ['Ana Gómez', 'Sofía Torres', 'Carlos Pérez', 'Laura Martínez', 'Diego López', 'Valentina Ruiz', 'Andrés Castaño', 'Daniel Rojas'];
const months = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
const palette = ['#0f3d6e', '#8a3b3b', '#5b3f9e', '#1f7a5c', '#a0562a', '#246c98'];

// Estado con persistencia en localStorage
// Las tareas se cargan desde localStorage; si no hay datos se usan las de ejemplo (seedTasks) con su descripción.
let tasks;
try { tasks = JSON.parse(localStorage.getItem('tf-tasks') || 'null'); } catch (e) { tasks = null; }
if (!Array.isArray(tasks)) tasks = seedTasks.map(t => [...t, descs[t[0]]]);
let selected = 0, query = '', day = 14;

// Guarda las tareas en el navegador.
function save() { try { localStorage.setItem('tf-tasks', JSON.stringify(tasks)); } catch (e) 
{} }

// Filtra las tareas por prioridad y por el texto buscado.
function visible() {
  return tasks.filter(t => (priorityFilter === 'Todas' || t[2] === priorityFilter)
    && t.slice(0, 4).join(' ').toLowerCase().includes(query.toLowerCase()));
}

// Avatar con iniciales y un color fijo según el nombre.
function avatar(name) {
  const ini = name.split(' ').map(p => p[0]).join('').slice(0, 2);
  const color = palette[[...name].reduce((s, c) => s + c.charCodeAt(0), 0) % palette.length];
  return `<span class="av" style="background:${color}">${ini}</span>`;
}

// Optimización de seguridad: escapa el texto escrito por el usuario antes de pintarlo como HTML.
function esc(s) { return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
// Convierte la prioridad en clase de color (Alta=rojo, Baja=verde, Media=azul).
const prio = p => (p === 'Alta' ? 'red' : p === 'Baja' ? 'green' : '');
// Actualiza el texto de búsqueda y redibuja.
function setQuery(v) { query = v; render(); }
// Abre el detalle de la tarea seleccionada.
function openTask(i) { selected = i; go('detalle'); }
// Menú "…" de la tarjeta: mueve la tarea a la siguiente columna.
function cycleStatus(i) { tasks[i][1] = states[(states.indexOf(tasks[i][1]) + 1) % 4]; save(); render(); }
// Cambia el estado de la tarea desde su detalle.
function setStatus(i, v) { tasks[i][1] = v; save(); render(); }
// Elimina la tarea y vuelve al tablero.
function delTask(i) { tasks.splice(i, 1); save(); selected = 0; go('tareas'); }
// Selecciona un día del calendario.
function pickDay(d) { day = d; render(); }
// Crea una tarea desde la modal, la guarda y abre el tablero.
function addTask() {
  const g = id => document.getElementById(id).value.trim();
  if (!g('task-title')) { document.getElementById('task-title').focus(); return; }
  const d = new Date((g('task-date') || '2026-11-18') + 'T12:00:00');
  tasks.unshift([g('task-title'), 'Por hacer', g('task-priority'), g('task-owner'),
    `${d.getDate()} ${months[d.getMonth()]}. ${d.getFullYear()}`, g('task-desc') || 'Sin descripción.']);
  save();
  go('tareas');
}

// Botón "Nueva tarea" con icono +.
function newBtn() { return `<button class="btn newbtn" onclick="openNewTask()">${icon('mas', 18)} Nueva tarea</button>`; }
// Selector de mes del encabezado.
function monthPicker() {
  return `<label class="monthpick">${icon('calendario', 18)}<select aria-label="Mes"><option>Noviembre 2026</option><option>Diciembre 2026</option></select></label>`;
}

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
// Modificación, se añadio que las métricas calculadas con las tareas, gráfica de línea semanal y dona de estados.
function dashboard() {
  const cnt = s => tasks.filter(t => t[1] === s).length;
  const total = tasks.length || 1;
  const stats = [
    ['Proyectos activos', '10', '+2 este mes'],
    ['Tareas pendientes', '18', 'En seguimiento'],
    ['Tareas completadas', '32', '+8 esta semana'],
    ['Avance general', '72%', 'Buen progreso']
    ['Tareas totales', tasks.length, 'tareas', 'blue', '+12% desde el mes pasado'],
    ['En progreso', cnt('En curso'), 'reloj', 'cyan', 'Tareas activas del equipo'],
    ['En revisión', cnt('En revisión'), 'filtro', 'violet', 'Esperando aprobación'],
    ['Completadas', cnt('Completadas'), 'tareas', 'green', Math.round(cnt('Completadas') / 
  total * 100) + '% de cumplimiento']
  ];

  const week = [3, 5, 6, 8, 7, 9, 11];
  const pts = week.map((v, i) => [45 + i * 100, 190 - v * 15]);
  const line = pts.map(p => p.join(',')).join(' ');
  let acc = 0;
  const donut = lanes.map(([n, c]) => { const from = acc; acc += cnt(n) / total * 100; 
  return `${c} ${from}% ${acc}%`; }).join(',');
  const recent = [
    ['Sofía Torres', 'Actualizó la API de Proyectos'],
    ['Ana Gómez', 'Creó una nueva tarea'],
    ['Carlos Pérez', 'Completó configuración'],
    ['Laura Martínez', 'Revisó documentación']
  ];

  return `
    ${head('Dashboard', 'Aquí tienes un resumen del progreso de tu equipo.', newBtn())}
    <div class="statgrid">
      ${stats.map(([label, value, ico, color, note]) => `
        <div class="stat">
          <span class="statico ${color}">${icon(ico, 22)}</span>
          <div><span class="lbl">${label}</span><div class="metric">${value}</div><span class="trend">${note}</span></div>
        </div>`).join('')}
    </div>
    <div class="layout2">
      <section class="panel">
         <h2>Productividad</h2>
        <p class="sub">Tareas completadas durante la semana</p>
        <svg viewBox="0 0 700 230" class="linechart" role="img" aria-label="Tareas completadas por día">
          ${[0, 3, 6, 9, 12].map(g => `<line x1="40" x2="660" y1="${190 - g * 15}" y2="${190 - g * 15}" stroke="#e8eef6"/><text x="30" y="${194 - g * 15}" font-size="11" text-anchor="end" fill="#8a9ab0">${g}</text>`).join('')}
          <polygon points="45,190 ${line} 645,190" fill="#2f80ed" opacity=".12"/>
          <polyline points="${line}" fill="none" stroke="#2f80ed" stroke-width="3" stroke-linejoin="round"/>
          ${pts.map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="4.5" fill="#fff" stroke="#2f80ed" stroke-width="2.5"/>`).join('')}
          ${['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map((d, i) => `<text x="${45 + i * 100}" y="216" font-size="11" text-anchor="middle" fill="#8a9ab0">${d}</text>`).join('')}
        </svg>
      </section>
      <section class="panel">
        <h2>Estado de tareas</h2>
        <p class="sub">Distribución actual</p>
        <div class="donutwrap">
          <div class="donut" style="background:conic-gradient(${donut})"><div><strong>${tasks.length}</strong><span>Tareas</span></div></div>
          <ul class="legend">
            ${lanes.map(([n, c]) => `<li><i style="background:${c}"></i>${n}<b>${cnt(n)}</b></li>`).join('')}
          </ul>
        </div>
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
    <section class="panel">
        <h2>Actividad reciente</h2>
         ${recent.map(([name, act]) => `
          <div class="feedrow"><div>${avatar(name)} <strong>${name}</strong><br>
          <span>${act}</span></div><span>Hoy</span></div>`).join('')}
           </section>
    </div>
  `;
}

function tareas() {
  const visibleTasks = visible();
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
      `${newBtn()}`
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
  const visibleTasks = visible();

  return `
    ${head(
      'Mis Tareas · Lista',
      'Consulta el estado, la prioridad y los responsables.',
      `${newBtn()}`
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
              <td>${esc(task[0])}</td>
              <td>${task[1]}</td>
              <td>
                <span class="tag ${task[2] === 'Alta' ? 'red' : task[2] === 'Baja' ? 'green' : ''}">
                  ${task[2]}
                </span>
              </td>
              <td>${esc(task[3]}</td>
              <td>
                <button class="btn secondary" onclick="openTask(${tasks.indexOf(task)})">Ver detalle</button>
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
      `${newBtn()}`
    )}
    <div class="projects">
      ${projects.map(([name, progress, description]) => `
        <article class="project" onclick="go('tareas')">
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

// Modificación, en el calendario ahora tendra las tareas por día, selección de día y panel Agenda del día.
function calendario() {
  const dated = d => tasks.filter(t => t[4].startsWith(d + ' nov.'));
  const names = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  const cells = Array.from({ length: 42 }, (_, i) => i - 5);
  const agenda = dated(day);

  return `
    ${head(
      'Calendario',
      'Consulta fechas, responsables y próximos vencimientos.',
      `${newBtn()}`
    )}
    <div class="calwrap">
      <section class="panel calpanel">
        <div class="calnav">
          <span class="navbtns">
            <button class="sq" disabled aria-label="Mes anterior">${icon('izq', 16)}</button>
            <button class="sq" disabled aria-label="Mes siguiente">${icon('der', 16)}</button>
          </span>
          <h2>Noviembre 2026</h2>
          <button class="btn secondary" onclick="pickDay(19)">Hoy</button>
        </div>
        <div class="cal7">
          ${['LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB', 'DOM'].map(d => `<div class="calhead">${d}</div>`).join('')}
          ${cells.map(d => {
            if (d < 1 || d > 30) return '<div class="cd empty"></div>';
            const list = dated(d);
            return `<div class="cd ${d === day ? 'sel' : ''}" onclick="pickDay(${d})">
              <span class="dn ${d === day ? 'on' : ''}">${d}</span>
              ${list.slice(0, 2).map(t => `<div class="pill ${prio(t[2]) || 'blue'}">${esc(t[0])}</div>`).join('')}
              ${list.length > 2 ? `<div class="more">+${list.length - 2} más</div>` : ''}
            </div>`;
          }).join('')}
        </div>
      </section>
      <aside class="panel agenda">
        <div class="agendahead">
          <div><small>AGENDA DEL DÍA</small><h2>${names[(day + 5) % 7]}, ${day} de noviembre</h2></div>
          <button class="btn sq-btn" onclick="openNewTask()" aria-label="Nueva tarea">${icon('mas', 18)}</button>
        </div>
        ${agenda.length ? agenda.map(t => `
          <div class="agendaitem" onclick="openTask(${tasks.indexOf(t)})">
            <span class="tag ${prio(t[2])}">${t[2]}</span>
            <strong>${esc(t[0])}</strong>
            <p class="sub">${esc(t[5])}</p>
            <span class="owner">${avatar(t[3])} ${esc(t[3])}</span>
          </div>`).join('') : '<p class="sub">No hay tareas para este día.</p>'}
      </aside>
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

// Modificación, en el detalle de la tarea elegida mostrara el con cambio de estado y botón Eliminar.
function detalle() {
  const i = Math.min(selected, tasks.length - 1);
  const t = tasks[i];
  if (!t) return `${head('Detalle de tarea', 'No hay tareas disponibles.', 
  `<button class="btn secondary" onclick="go('tareas')">← Volver a tareas</button>`)}`;
  
  return `
    ${head(
      'Detalle de tarea',
      'Visualización informativa de una actividad.',
      `<button class="btn secondary" onclick="go('tareas')">← Volver a tareas</button>`
    )}
    <div class="detail">
      <span class="tag ${prio(t[2])}">Prioridad ${t[2].toLowerCase()}</span>
      <h2>${esc(t[0])}</h2>
      <p>${esc(t[5])}</p>
      <div class="listrow">
        <strong>Estado</strong>
        <select onchange="setStatus(${i}, this.value)">${states.map(s => `<option ${s === t[1] ? 'selected' : ''}>${s}</option>`).join('')}
        </select>
        </div>
      <div class="listrow">
        <strong>Responsable</strong>
        <span>class="owner">${avatar(t[3])} ${esc(t[3])}</span>
      </div>
      <div class="listrow">
        <strong>Fecha de entrega</strong>
        <span>${esc(t[4])}</span>
      </div>
      <div style="margin-top:22px;display:flex;gap:10px">
      <button class="btn" onclick="go('tareas')">Volver al tablero</button>
      <button class="btn secondary" onclick="if (confirm('¿Eliminar esta tarea?')) delTask(${i})">Eliminar</button> 
      </div>
    </div>
  `;
}

// Apartado de ajustes
function ajustes() {
  return `
    ${head('Ajustes', 'Preferencias de la aplicación.')}
    <section class="panel">
      <h2>Datos locales</h2>
      <p class="sub">Las tareas se guardan en este navegador.</p>
      <p><button class="btn secondary" onclick="localStorage.removeItem('tf-tasks'); location.reload()">Restablecer datos de ejemplo</button></p>
    </section>
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
// Modificación, se conserva el foco y el cursor del buscador mientras se redibuja al escribir.
function render() {
  const a = document.activeElement, id = a && a.id, pos = a && a.selectionStart;
  paint();
  const el = id && document.getElementById(id);
  if (el && (id === 'gq' || id === 'tq')) { el.focus(); el.setSelectionRange(pos, pos); }
}

function paint() {
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

// Añadido extra, la tecla Esc cierra la ventana de Nueva Tarea.
document.addEventListener('keydown', e => { if (e.key === 'Escape' && modalOpen) 
closeNewTask(); });
