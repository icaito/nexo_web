/* Datos base */
const stages = [
  {
    name: "El origen",
    subtitle: "Mis primeras huellas",
    reference: "Referencia: infancia y raíces familiares",
    icon: "🌱",
    image: "img/etapa-origen.jpg",
    description: "El comienzo de tu historia. Aquí puedes reunir relatos, fotografías y recuerdos de tus primeros años, aportados por ti o por personas autorizadas.",
    milestones: [
      "El lugar o casa donde creciste",
      "Una anécdota contada por tu familia",
      "Un aroma, canción o juguete de tu niñez"
    ],
    mission: "Añade una historia sobre tus primeros años o guarda un recuerdo familiar.",
    color: "sage"
  },
  {
    name: "Los descubrimientos",
    subtitle: "Explorar el mundo",
    reference: "Referencia: niñez y adolescencia",
    icon: "🌿",
    image: "img/etapa-descubrimientos.jpg",
    description: "Una etapa de curiosidad, juegos, amistades y descubrimientos. Conserva aquello que despertó tu imaginación.",
    milestones: [
      "Un juego o actividad que te apasionaba",
      "Una amistad importante en tus años de descubrimiento",
      "Algo nuevo que te sorprendió aprender"
    ],
    mission: "Registra algo que te encantaba explorar, aprender o hacer.",
    color: "green"
  },
  {
    name: "Mi identidad",
    subtitle: "Conocer quién soy",
    reference: "Referencia: juventud y búsqueda personal",
    icon: "🏔️",
    image: "img/etapa-identidad.jpg",
    description: "Un espacio para expresar tus intereses, valores, ideas y capacidades. Tu identidad puede cambiar y crecer contigo.",
    milestones: [
      "Una decisión propia que marcó tu camino",
      "Un valor o principio que te define",
      "Una habilidad o interés que descubriste en ti"
    ],
    mission: "Escribe tres cosas que te interesan o que te gustaría aprender.",
    color: "blue"
  },
  {
    name: "Mis sueños",
    subtitle: "Construir mi camino",
    reference: "Referencia: adultez y proyectos personales",
    icon: "🏡",
    image: "img/etapa-suenos.jpg",
    description: "Reúne proyectos, metas y experiencias. Puedes registrar tus avances sin convertirlos en una competencia.",
    milestones: [
      "Una meta o proyecto personal que construiste",
      "Un lugar que visitaste o deseas conocer",
      "Un logro cotidiano del que te sientes en paz"
    ],
    mission: "Anota una idea o proyecto que te gustaría desarrollar.",
    color: "gold"
  },
  {
    name: "La sabiduría",
    subtitle: "Lo que he aprendido",
    reference: "Referencia: madurez y perspectiva",
    icon: "🍂",
    image: "img/etapa-sabiduria.jpg",
    description: "Un jardín para reunir aprendizajes, reflexiones y experiencias que quieras conservar o compartir.",
    milestones: [
      "Una enseñanza que te dejó un reto",
      "Un consejo que le darías a tu yo más joven",
      "Un momento de calma o gratitud"
    ],
    mission: "Guarda una enseñanza que te haya dejado una experiencia.",
    color: "amber"
  },
  {
    name: "Mi legado",
    subtitle: "Lo que deseo conservar",
    reference: "Referencia: en cualquier momento de la vida",
    icon: "✨",
    image: "img/etapa-legado.jpg",
    description: "Organiza historias, mensajes y recuerdos que tú decidas conservar para el futuro y compartir con personas de confianza.",
    milestones: [
      "Una carta o mensaje para alguien especial",
      "Una tradición o historia familiar que no debe perderse",
      "Lo que te gustaría que recuerden de tu recorrido"
    ],
    mission: "Piensa en una historia o mensaje que te gustaría preservar.",
    color: "violet"
  }
];

const missions = [
  {
    id: "m1",
    title: "Una historia de mis comienzos",
    desc: "Guarda un relato sobre tus primeros años, escrito por ti o por alguien autorizado.",
    type: "memory",
    stage: 0,
    icon: "📖"
  },
  {
    id: "m2",
    title: "Un descubrimiento inolvidable",
    desc: "Registra algo que te gustaba explorar o que te sorprendió aprender.",
    type: "discovery",
    stage: 1,
    icon: "🔎"
  },
  {
    id: "m3",
    title: "Lo que me representa",
    desc: "Anota tres intereses, valores o actividades que sean importantes para ti.",
    type: "discovery",
    stage: 2,
    icon: "🧭"
  },
  {
    id: "m4",
    title: "Una idea para el futuro",
    desc: "Escribe un proyecto o una meta que te gustaría explorar a tu manera.",
    type: "dream",
    stage: 3,
    icon: "🌠"
  },
  {
    id: "m5",
    title: "Una lección que conservo",
    desc: "Describe algo que aprendiste y que te gustaría recordar.",
    type: "learning",
    stage: 4,
    icon: "🍁"
  },
  {
    id: "m6",
    title: "Un mensaje para el futuro",
    desc: "Escribe un mensaje que quieras conservar. Tú decides si algún día lo compartes.",
    type: "memory",
    stage: 5,
    icon: "💌"
  }
];

const rewards = [
  {
    id: "r1",
    name: "Primera huella",
    icon: "🌱",
    desc: "Guardar tu primer recuerdo.",
    condition: (s) => s.memories.length >= 1
  },
  {
    id: "r2",
    name: "Pequeño explorador",
    icon: "🧭",
    desc: "Completar tu primera misión.",
    condition: (s) => s.completed.length >= 1
  },
  {
    id: "r3",
    name: "Coleccionista de historias",
    icon: "📚",
    desc: "Guardar tres recuerdos.",
    condition: (s) => s.memories.length >= 3
  },
  {
    id: "r4",
    name: "Aprendiz constante",
    icon: "💡",
    desc: "Completar tres misiones.",
    condition: (s) => s.completed.length >= 3
  },
  {
    id: "r5",
    name: "Camino recorrido",
    icon: "🌳",
    desc: "Explorar tres etapas diferentes.",
    condition: (s) => s.explored.length >= 3
  },
  {
    id: "r6",
    name: "Mi universo",
    icon: "✨",
    desc: "Explorar las seis etapas.",
    condition: (s) => s.explored.length >= 6
  }
];

/* Gestión de Espacio Personal y Parámetros de Enlace */
const LAST_SPACE_KEY = "nexo-last-space-id";
const ADMIN_LINKS_KEY = "nexo-admin-generated-links";
const urlParams = new URLSearchParams(window.location.search);
const isAdminMode = urlParams.get("admin") === "1";

function sanitizeSlug(raw) {
  return String(raw || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9-_]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40);
}

function getInitialSpaceContext() {
  const paramId = sanitizeSlug(urlParams.get("id"));
  const paramName = (urlParams.get("nombre") || "").trim();
  const paramSubtitle = (urlParams.get("subtitulo") || "").trim();

  if (paramId) {
    localStorage.setItem(LAST_SPACE_KEY, paramId);
    return {
      spaceId: paramId,
      ownerName: paramName || "Mi espacio",
      ownerSubtitle: paramSubtitle || "Mi historia personal",
      needsOnboarding: false
    };
  }

  const savedId = sanitizeSlug(localStorage.getItem(LAST_SPACE_KEY));
  if (savedId) {
    return {
      spaceId: savedId,
      ownerName: "Mi espacio",
      ownerSubtitle: "Mi historia personal",
      needsOnboarding: false
    };
  }

  return {
    spaceId: "default",
    ownerName: "Mi espacio",
    ownerSubtitle: "Mi historia personal",
    needsOnboarding: !isAdminMode
  };
}

let spaceContext = getInitialSpaceContext();
let currentStage = 0;
let activeMemoryStage = "all";
let editingMemoryId = null;
let pendingMemoryImage = "";

function getStorageKey() {
  return `nexo-space-${spaceContext.spaceId}`;
}

function loadState() {
  try {
    const raw = JSON.parse(localStorage.getItem(getStorageKey()) || "{}");
    return {
      profile: {
        name: spaceContext.ownerName,
        subtitle: spaceContext.ownerSubtitle
      },
      memories: [],
      completed: [],
      explored: [],
      ...raw
    };
  } catch {
    return {
      profile: {
        name: spaceContext.ownerName,
        subtitle: spaceContext.ownerSubtitle
      },
      memories: [],
      completed: [],
      explored: []
    };
  }
}

let state = loadState();

if (urlParams.get("nombre")) {
  state.profile.name = urlParams.get("nombre").trim();
}
if (urlParams.get("subtitulo")) {
  state.profile.subtitle = urlParams.get("subtitulo").trim();
}

function saveState() {
  try {
    localStorage.setItem(getStorageKey(), JSON.stringify(state));
    renderAll();
    return true;
  } catch (err) {
    alert("El almacenamiento local del navegador está lleno. Descarga un respaldo (.json) y elimina recuerdos antiguos o fotos pesadas para liberar espacio.");
    return false;
  }
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[c]));
}

/* Compresión y Vista Previa de Fotografías */
function compressImageFile(file, maxWidth = 900, quality = 0.75) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("No se pudo leer la imagen."));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error("Archivo de imagen inválido."));
      img.onload = () => {
        const scale = Math.min(1, maxWidth / img.width);
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      img.src = String(reader.result);
    };
    reader.readAsDataURL(file);
  });
}

function updateImagePreview(dataUrl) {
  pendingMemoryImage = dataUrl || "";
  const box = document.getElementById("memoryImagePreview");
  const img = document.getElementById("memoryPreviewImg");
  if (!box || !img) return;
  if (pendingMemoryImage) {
    img.src = pendingMemoryImage;
    box.style.display = "flex";
  } else {
    img.src = "";
    box.style.display = "none";
  }
}

function applyPersonalBranding() {
  const name = state.profile?.name || "Mi espacio";
  const subtitle = state.profile?.subtitle || "Mi historia personal";
  const initial = name.charAt(0).toUpperCase() || "N";

  document.title = `NEXO — ${name}`;

  const avatarEl = document.getElementById("profileAvatar");
  const nameEl = document.getElementById("profileName");
  const subEl = document.getElementById("profileSubtitle");
  const crumbOwnerEl = document.getElementById("crumbOwner");
  const privacyOwnerEl = document.getElementById("privacyOwner");
  const welcomeEyebrowEl = document.getElementById("welcomeEyebrow");

  if (avatarEl) avatarEl.textContent = initial;
  if (nameEl) nameEl.textContent = name;
  if (subEl) subEl.textContent = subtitle;
  if (crumbOwnerEl) crumbOwnerEl.textContent = name.toUpperCase();
  if (privacyOwnerEl) privacyOwnerEl.textContent = name;
  if (welcomeEyebrowEl && name !== "Mi espacio") {
    welcomeEyebrowEl.textContent = `EL UNIVERSO DE ${name.toUpperCase()}`;
  }

  const adminBtn = document.getElementById("navAdminBtn");
  if (adminBtn && isAdminMode) {
    adminBtn.style.display = "flex";
  }

  const overlay = document.getElementById("onboardingOverlay");
  if (overlay) {
    overlay.style.display = spaceContext.needsOnboarding ? "flex" : "none";
  }
}

/* Renderizado de Línea de Vida y Etapas */
function renderLifeline() {
  const track = document.getElementById("lifelineTrack");
  if (!track) return;

  track.innerHTML = stages.map((s, i) => {
    const count = state.memories.filter((m) => Number(m.stage) === i).length;
    const isExplored = state.explored.includes(i);
    const countLabel = count === 0
      ? "Sin recuerdos aún"
      : `${count} ${count === 1 ? "recuerdo" : "recuerdos"}`;

    return `
      <button class="lifeline-node ${isExplored ? "explored" : ""}" data-stage="${i}" type="button">
        <div>
          <span class="lifeline-dot">${s.icon}</span>
          <strong>${s.name}</strong>
          <span class="lifeline-ref">${s.reference}</span>
        </div>
        <span class="lifeline-count">${countLabel}</span>
      </button>
    `;
  }).join("");

  track.querySelectorAll("[data-stage]").forEach((b) => {
    b.addEventListener("click", () => openStage(Number(b.dataset.stage)));
  });
}

function renderStages() {
  const grid = document.getElementById("stageGrid");
  if (!grid) return;

  grid.innerHTML = stages.map((s, i) => `
    <button class="stage-card" data-stage="${i}" type="button">
      <img class="stage-cover" src="${s.image}" alt="${s.name}" onerror="this.style.display='none'">
      <div class="stage-body">
        <div class="stage-top">
          <span class="stage-icon">${s.icon}</span>
          <span class="stage-number">ETAPA 0${i + 1}</span>
        </div>
        <h3>${s.name}</h3>
        <p>${s.subtitle}</p>
        <span class="stage-arrow">↗</span>
      </div>
    </button>
  `).join("");

  grid.querySelectorAll("[data-stage]").forEach((b) => {
    b.addEventListener("click", () => openStage(Number(b.dataset.stage)));
  });

  const stageCount = document.getElementById("stage-count");
  if (stageCount) {
    stageCount.textContent = `${state.explored.length} de 6 exploradas`;
  }
}

function openStage(index) {
  currentStage = index;
  const s = stages[index];
  if (!s) return;

  if (!state.explored.includes(index)) {
    state.explored.push(index);
    localStorage.setItem(getStorageKey(), JSON.stringify(state));
  }

  const modalBanner = document.getElementById("modalBanner");
  if (modalBanner) {
    modalBanner.style.display = "block";
    modalBanner.src = s.image || "";
    modalBanner.alt = s.name;
  }

  document.getElementById("modalIcon").textContent = s.icon;
  document.getElementById("modalEyebrow").textContent = `ETAPA 0${index + 1}`;
  document.getElementById("modalTitle").textContent = s.name;

  const modalRef = document.getElementById("modalReference");
  if (modalRef) modalRef.textContent = s.reference;

  document.getElementById("modalDescription").textContent = s.description;

  const modalMilestones = document.getElementById("modalMilestones");
  if (modalMilestones && Array.isArray(s.milestones)) {
    modalMilestones.innerHTML = s.milestones.map((item) => `<li>${escapeHTML(item)}</li>`).join("");
  }

  document.getElementById("modalMission").textContent = s.mission;

  const modal = document.getElementById("stageModal");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  renderAll();
}

function closeModal() {
  const modal = document.getElementById("stageModal");
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

/* Modal de Guía Rápida para Clientes */
function openGuideModal() {
  const modal = document.getElementById("guideModal");
  if (!modal) return;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.getElementById("sidebar")?.classList.remove("open");
}

function closeGuideModal() {
  const modal = document.getElementById("guideModal");
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

/* Renderizado de Misiones */
function labelType(type) {
  return {
    memory: "Memoria",
    discovery: "Descubrimiento",
    learning: "Aprendizaje",
    dream: "Sueños"
  }[type] || "Actividad";
}

function renderMissions(filter = "all") {
  const list = document.getElementById("missionList");
  if (!list) return;

  const filtered = missions.filter((m) => filter === "all" || m.type === filter);

  list.innerHTML = filtered.map((m) => {
    const done = state.completed.includes(m.id);
    return `
      <article class="mission-card">
        <div class="mission-symbol">${m.icon}</div>
        <div class="mission-info">
          <h3>${m.title}</h3>
          <p>${m.desc}</p>
          <div class="mission-meta">${stages[m.stage].name} · ${labelType(m.type)}</div>
        </div>
        <button class="complete-button ${done ? "done" : ""}" data-mission="${m.id}" type="button">
          ${done ? "✓ Completada" : "Marcar lista"}
        </button>
      </article>
    `;
  }).join("");

  list.querySelectorAll("[data-mission]").forEach((b) => {
    b.addEventListener("click", () => toggleMission(b.dataset.mission));
  });
}

function toggleMission(id) {
  state.completed = state.completed.includes(id)
    ? state.completed.filter((x) => x !== id)
    : [...state.completed, id];

  saveState();
  renderMissions(document.querySelector("#missionFilters .filter.active")?.dataset.filter || "all");
}

/* Respaldo y Edición de Recuerdos */
function setBackupStatus(message) {
  const el = document.getElementById("backupStatus");
  if (el) el.textContent = message;
}

function exportBackup() {
  const payload = {
    app: "NEXO",
    version: 1,
    spaceId: spaceContext.spaceId,
    exportedAt: new Date().toISOString(),
    data: state
  };

  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const dateStr = new Date().toISOString().slice(0, 10);

  const link = document.createElement("a");
  link.href = url;
  link.download = `nexo-${spaceContext.spaceId}-${dateStr}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);

  setBackupStatus(`Respaldo descargado (${dateStr})`);
}

function importBackupFromFile(file, fromOnboarding = false) {
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(String(reader.result || "{}"));
      const incoming = parsed.data && typeof parsed.data === "object" ? parsed.data : parsed;

      if (!Array.isArray(incoming.memories)) {
        alert("El archivo seleccionado no contiene un respaldo válido de NEXO.");
        return;
      }

      if (fromOnboarding) {
        const importedId = sanitizeSlug(parsed.spaceId || incoming.profile?.name || `espacio-${Date.now()}`);
        spaceContext = {
          spaceId: importedId,
          ownerName: incoming.profile?.name || "Mi espacio",
          ownerSubtitle: incoming.profile?.subtitle || "Mi historia personal",
          needsOnboarding: false
        };
        localStorage.setItem(LAST_SPACE_KEY, importedId);
        state = {
          profile: {
            name: spaceContext.ownerName,
            subtitle: spaceContext.ownerSubtitle
          },
          memories: incoming.memories,
          completed: Array.isArray(incoming.completed) ? incoming.completed : [],
          explored: Array.isArray(incoming.explored) ? incoming.explored : []
        };
        saveState();
        applyPersonalBranding();
        return;
      }

      const replaceMode = confirm(
        "¿Quieres REEMPLAZAR tus datos actuales con este respaldo?\n\nAceptar = Reemplazar todo\nCancelar = Combinar recuerdos sin duplicar"
      );

      if (replaceMode) {
        state = {
          profile: incoming.profile || state.profile,
          memories: incoming.memories,
          completed: Array.isArray(incoming.completed) ? incoming.completed : [],
          explored: Array.isArray(incoming.explored) ? incoming.explored : []
        };
      } else {
        const existingIds = new Set(state.memories.map((m) => String(m.id)));
        const mergedMemories = [...state.memories];

        for (const item of incoming.memories) {
          if (item && !existingIds.has(String(item.id))) {
            mergedMemories.push(item);
            existingIds.add(String(item.id));
          }
        }

        state = {
          ...state,
          memories: mergedMemories,
          completed: Array.from(new Set([
            ...state.completed,
            ...(Array.isArray(incoming.completed) ? incoming.completed : [])
          ])),
          explored: Array.from(new Set([
            ...state.explored,
            ...(Array.isArray(incoming.explored) ? incoming.explored : [])
          ]))
        };
      }

      resetMemoryFormState();
      if (saveState()) {
        applyPersonalBranding();
        setBackupStatus("Respaldo importado correctamente");
      }
    } catch {
      alert("No se pudo leer el archivo JSON. Verifica que no esté dañado.");
    }
  };

  reader.readAsText(file);
}

function resetMemoryFormState() {
  const form = document.getElementById("memoryForm");
  if (form) form.reset();

  editingMemoryId = null;
  updateImagePreview("");

  const saveBtn = document.getElementById("saveMemoryBtn");
  const cancelBtn = document.getElementById("cancelEditBtn");
  const dateInput = document.getElementById("memoryDate");

  if (saveBtn) saveBtn.textContent = "＋ Guardar recuerdo";
  if (cancelBtn) cancelBtn.style.display = "none";
  if (dateInput) dateInput.value = new Date().toISOString().slice(0, 10);
}

function startEditingMemory(id) {
  const target = state.memories.find((m) => String(m.id) === String(id));
  if (!target) return;

  editingMemoryId = String(target.id);
  document.getElementById("memoryTitle").value = target.title || "";
  document.getElementById("memoryDate").value = target.date || "";
  document.getElementById("memoryStage").value = String(target.stage ?? 0);
  document.getElementById("memoryText").value = target.text || "";
  updateImagePreview(target.image || "");

  const saveBtn = document.getElementById("saveMemoryBtn");
  const cancelBtn = document.getElementById("cancelEditBtn");
  if (saveBtn) saveBtn.textContent = "✓ Actualizar recuerdo";
  if (cancelBtn) cancelBtn.style.display = "inline-block";

  showView("memories");
  document.getElementById("memoryTitle")?.focus();
}

function renderMemoryFilters() {
  const container = document.getElementById("memoryFilters");
  if (!container) return;

  const stageButtons = stages.map((stage, index) => `
    <button
      class="filter ${String(activeMemoryStage) === String(index) ? "active" : ""}"
      data-stage-filter="${index}"
      type="button"
    >
      ${stage.icon} ${stage.name}
    </button>
  `).join("");

  container.innerHTML = `
    <button
      class="filter ${activeMemoryStage === "all" ? "active" : ""}"
      data-stage-filter="all"
      type="button"
    >
      Todas las etapas
    </button>
    ${stageButtons}
  `;
}

function renderMemories() {
  renderMemoryFilters();

  const list = document.getElementById("memoryList");
  const countLabel = document.getElementById("memoryFilterCount");
  if (!list) return;

  const filtered = activeMemoryStage === "all"
    ? state.memories
    : state.memories.filter((m) => Number(m.stage) === Number(activeMemoryStage));

  if (countLabel) {
    if (!state.memories.length) {
      countLabel.textContent = "";
    } else if (activeMemoryStage === "all") {
      countLabel.textContent = `${state.memories.length} en total`;
    } else {
      const stageName = stages[Number(activeMemoryStage)]?.name || "Etapa";
      countLabel.textContent = `${filtered.length} en ${stageName}`;
    }
  }

  if (!state.memories.length) {
    list.innerHTML = '<div class="empty-state">Todavía no hay recuerdos guardados. Tu colección puede comenzar con una pequeña historia.</div>';
    return;
  }

  if (!filtered.length) {
    const stageName = stages[Number(activeMemoryStage)]?.name || "esta etapa";
    list.innerHTML = `<div class="empty-state">Aún no has guardado recuerdos en <strong>${escapeHTML(stageName)}</strong>.</div>`;
    return;
  }

  list.innerHTML = [...filtered].reverse().map((m) => {
    const stageObj = stages[Number(m.stage)] || stages[0];
    const photoHtml = m.image
      ? `<img class="memory-photo" src="${escapeHTML(m.image)}" alt="${escapeHTML(m.title)}">`
      : "";

    return `
      <article class="memory-card">
        <div class="memory-date">
          ${m.date
            ? new Date(`${m.date}T12:00:00`).toLocaleDateString("es-MX", {
                day: "2-digit",
                month: "short",
                year: "numeric"
              })
            : "Sin fecha"}
        </div>
        <div class="memory-body">
          <h3>${escapeHTML(m.title)}</h3>
          ${photoHtml}
          <p>${escapeHTML(m.text || "Sin descripción.")}</p>
          <div class="memory-stage">${stageObj.icon} ${stageObj.name}</div>
        </div>
        <div class="memory-actions">
          <button class="complete-button" data-edit="${m.id}" aria-label="Editar recuerdo" type="button">Editar</button>
          <button class="complete-button" data-delete="${m.id}" aria-label="Eliminar recuerdo" type="button">Eliminar</button>
        </div>
      </article>
    `;
  }).join("");

  list.querySelectorAll("[data-edit]").forEach((b) => {
    b.addEventListener("click", () => startEditingMemory(b.dataset.edit));
  });

  list.querySelectorAll("[data-delete]").forEach((b) => {
    b.addEventListener("click", () => {
      if (confirm("¿Quieres eliminar este recuerdo de este navegador?")) {
        if (editingMemoryId === String(b.dataset.delete)) {
          resetMemoryFormState();
        }
        state.memories = state.memories.filter((m) => String(m.id) !== String(b.dataset.delete));
        saveState();
      }
    });
  });
}

/* Recompensas y Estadísticas */
function renderRewards() {
  const grid = document.getElementById("rewardGrid");
  if (!grid) return;

  grid.innerHTML = rewards.map((r) => {
    const unlocked = r.condition(state);
    return `
      <article class="reward-card ${unlocked ? "unlocked" : ""}">
        <div class="reward-medal">${r.icon}</div>
        <h3>${r.name}</h3>
        <p>${r.desc}</p>
        <div class="reward-state">${unlocked ? "✓ Desbloqueada" : "Aún por descubrir"}</div>
      </article>
    `;
  }).join("");
}

function renderStats() {
  const memEl = document.getElementById("memoryCount");
  const misEl = document.getElementById("missionCount");
  const rewEl = document.getElementById("rewardCount");

  if (memEl) memEl.textContent = state.memories.length;
  if (misEl) misEl.textContent = state.completed.length;
  if (rewEl) rewEl.textContent = rewards.filter((r) => r.condition(state)).length;
}

/* Historial y Generador de Enlaces (?admin=1) */
function loadGeneratedLinks() {
  try {
    const data = JSON.parse(localStorage.getItem(ADMIN_LINKS_KEY) || "[]");
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

function saveGeneratedLinks(links) {
  localStorage.setItem(ADMIN_LINKS_KEY, JSON.stringify(links));
  renderGeneratedLinks();
}

function buildSpaceUrl({ slug, name, subtitle }) {
  const baseUrl = `${window.location.origin}${window.location.pathname}`;
  const params = new URLSearchParams();
  params.set("id", slug);
  params.set("nombre", name);
  if (subtitle) params.set("subtitulo", subtitle);
  return `${baseUrl}?${params.toString()}`;
}

function buildWhatsappInviteText(name, url) {
  return [
    `✦ *Bienvenido/a a tu universo NEXO, ${name}*`,
    ``,
    `Aquí tienes el enlace privado a tu espacio personal:`,
    `${url}`,
    ``,
    `📌 *Recomendaciones rápidas:*`,
    `• Guarda este enlace en tus favoritos o en la pantalla de inicio de tu celular.`,
    `• Tus recuerdos y fotografías se guardan de forma privada en tu navegador.`,
    `• Puedes descargar una copia de seguridad (.json) en cualquier momento desde la sección *Mis recuerdos*.`
  ].join("\n");
}

function renderGeneratedLinks() {
  const list = document.getElementById("generatedLinksList");
  const countEl = document.getElementById("generatedLinksCount");
  if (!list) return;

  const links = loadGeneratedLinks();
  if (countEl) {
    countEl.textContent = `${links.length} ${links.length === 1 ? "registrado" : "registrados"}`;
  }

  if (!links.length) {
    list.innerHTML = '<div class="empty-state">Aún no has generado enlaces desde este navegador. Cuando crees uno, quedará guardado aquí para tu control.</div>';
    return;
  }

  list.innerHTML = [...links].reverse().map((item) => {
    const currentUrl = buildSpaceUrl(item);
    const createdLabel = item.createdAt
      ? new Date(item.createdAt).toLocaleDateString("es-MX", { day: "2-digit", month: "short", year: "numeric" })
      : "";

    return `
      <article class="link-history-card">
        <div class="link-history-info">
          <h3>${escapeHTML(item.name)}</h3>
          <p class="link-history-meta">
            ID: <strong>${escapeHTML(item.slug)}</strong>
            ${item.subtitle ? ` · ${escapeHTML(item.subtitle)}` : ""}
            ${createdLabel ? ` · Creado: ${createdLabel}` : ""}
          </p>
          <span class="link-history-url">${escapeHTML(currentUrl)}</span>
        </div>
        <div class="link-history-actions">
          <button class="complete-button" data-copy-link="${escapeHTML(item.slug)}" type="button">📋 Copiar URL</button>
          <button class="complete-button" data-copy-invite="${escapeHTML(item.slug)}" type="button">💬 Invitación</button>
          <button class="complete-button" data-load-link="${escapeHTML(item.slug)}" type="button">Cargar arriba</button>
          <button class="complete-button" data-remove-link="${escapeHTML(item.slug)}" type="button">Quitar</button>
        </div>
      </article>
    `;
  }).join("");

  list.querySelectorAll("[data-copy-link]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const target = loadGeneratedLinks().find((x) => x.slug === btn.dataset.copyLink);
      if (!target) return;
      await navigator.clipboard.writeText(buildSpaceUrl(target));
      btn.textContent = "✓ Copiada";
      setTimeout(() => { btn.textContent = "📋 Copiar URL"; }, 1800);
    });
  });

  list.querySelectorAll("[data-copy-invite]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const target = loadGeneratedLinks().find((x) => x.slug === btn.dataset.copyInvite);
      if (!target) return;
      await navigator.clipboard.writeText(buildWhatsappInviteText(target.name, buildSpaceUrl(target)));
      btn.textContent = "✓ Invitación copiada";
      setTimeout(() => { btn.textContent = "💬 Invitación"; }, 1800);
    });
  });

  list.querySelectorAll("[data-load-link]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = loadGeneratedLinks().find((x) => x.slug === btn.dataset.loadLink);
      if (!target) return;
      document.getElementById("genPersonName").value = target.name;
      document.getElementById("genPersonSubtitle").value = target.subtitle || "";
      document.getElementById("genCustomSlug").value = target.slug;
      document.getElementById("genPersonName")?.focus();
    });
  });

  list.querySelectorAll("[data-remove-link]").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (confirm("¿Quitar este enlace de tu lista de control? (El enlace ya enviado seguirá funcionando para el usuario).")) {
        const updated = loadGeneratedLinks().filter((x) => x.slug !== btn.dataset.removeLink);
        saveGeneratedLinks(updated);
      }
    });
  });
}

function renderAll() {
  renderLifeline();
  renderStages();
  renderMemories();
  renderRewards();
  renderStats();
  renderGeneratedLinks();
}

/* Navegación y Eventos */
function showView(view) {
  document.querySelectorAll(".view").forEach((v) => {
    v.classList.toggle("active", v.id === `view-${view}`);
  });
  document.querySelectorAll(".nav-link[data-view]").forEach((b) => {
    b.classList.toggle("active", b.dataset.view === view);
  });

  const labels = {
    universe: "MI UNIVERSO",
    missions: "MIS MISIONES",
    memories: "MIS RECUERDOS",
    rewards: "MIS RECOMPENSAS",
    generator: "GENERADOR DE ENLACES",
    about: "ACERCA DE NEXO"
  };

  const crumb = document.getElementById("crumb");
  if (crumb) crumb.textContent = labels[view] || "MI UNIVERSO";

  const sidebar = document.getElementById("sidebar");
  if (sidebar) sidebar.classList.remove("open");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll(".nav-link[data-view]").forEach((b) => {
  b.addEventListener("click", () => showView(b.dataset.view));
});

document.getElementById("mobileMenu")?.addEventListener("click", () => {
  document.getElementById("sidebar")?.classList.toggle("open");
});

document.getElementById("closeModal")?.addEventListener("click", closeModal);

document.getElementById("stageModal")?.addEventListener("click", (e) => {
  if (e.target.id === "stageModal") closeModal();
});

document.getElementById("openGuideBtn")?.addEventListener("click", openGuideModal);
document.getElementById("closeGuideModal")?.addEventListener("click", closeGuideModal);
document.getElementById("guideDoneBtn")?.addEventListener("click", closeGuideModal);

document.getElementById("guideModal")?.addEventListener("click", (e) => {
  if (e.target.id === "guideModal") closeGuideModal();
});

document.getElementById("guideGoBackupBtn")?.addEventListener("click", () => {
  closeGuideModal();
  showView("memories");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
    closeGuideModal();
  }
});

document.getElementById("exploreMission")?.addEventListener("click", () => {
  closeModal();
  showView("missions");
});

document.getElementById("addMemoryFromStage")?.addEventListener("click", () => {
  closeModal();
  showView("memories");
  const stageSelect = document.getElementById("memoryStage");
  if (stageSelect) stageSelect.value = String(currentStage);
  document.getElementById("memoryTitle")?.focus();
});

document.getElementById("missionFilters")?.addEventListener("click", (e) => {
  const b = e.target.closest("[data-filter]");
  if (!b) return;
  document.querySelectorAll("#missionFilters .filter").forEach((x) => x.classList.remove("active"));
  b.classList.add("active");
  renderMissions(b.dataset.filter);
});

document.getElementById("memoryFilters")?.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-stage-filter]");
  if (!btn) return;
  activeMemoryStage = btn.dataset.stageFilter;
  renderMemories();
});

document.getElementById("exportBackupBtn")?.addEventListener("click", exportBackup);

document.getElementById("importBackupInput")?.addEventListener("change", (e) => {
  const input = e.target;
  const file = input.files?.[0];
  if (file) importBackupFromFile(file, false);
  input.value = "";
});

document.getElementById("memoryImageInput")?.addEventListener("change", async (e) => {
  const file = e.target.files?.[0];
  if (!file) return;
  try {
    setBackupStatus("Optimizando fotografía...");
    const compressed = await compressImageFile(file);
    updateImagePreview(compressed);
    setBackupStatus("Fotografía lista para guardar");
  } catch {
    alert("No se pudo procesar la imagen seleccionada.");
    setBackupStatus("Guardado local activo");
  }
});

document.getElementById("removeMemoryImageBtn")?.addEventListener("click", () => {
  updateImagePreview("");
  const imgInput = document.getElementById("memoryImageInput");
  if (imgInput) imgInput.value = "";
});

document.getElementById("cancelEditBtn")?.addEventListener("click", resetMemoryFormState);

document.getElementById("memoryForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const titleInput = document.getElementById("memoryTitle");
  const title = titleInput?.value.trim();
  if (!title) return;

  const dateVal = document.getElementById("memoryDate")?.value || "";
  const selectedStage = Number(document.getElementById("memoryStage")?.value || 0);
  const textVal = document.getElementById("memoryText")?.value.trim() || "";
  const imageVal = pendingMemoryImage || "";

  if (editingMemoryId) {
    const previous = [...state.memories];
    state.memories = state.memories.map((m) => (
      String(m.id) === String(editingMemoryId)
        ? { ...m, title, date: dateVal, stage: selectedStage, text: textVal, image: imageVal }
        : m
    ));
    if (saveState()) {
      resetMemoryFormState();
      setBackupStatus("Recuerdo actualizado");
    } else {
      state.memories = previous;
    }
  } else {
    state.memories.push({
      id: Date.now().toString(),
      title,
      date: dateVal,
      stage: selectedStage,
      text: textVal,
      image: imageVal
    });
    if (saveState()) {
      resetMemoryFormState();
      setBackupStatus("Recuerdo guardado");
    } else {
      state.memories.pop();
    }
  }

  showView("memories");
});

/* Eventos de Onboarding (Visitante sin enlace) */
document.getElementById("onboardingForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("onboardingName")?.value.trim();
  if (!name) return;

  const subtitle = document.getElementById("onboardingSubtitle")?.value.trim() || "Mi historia personal";
  const newId = sanitizeSlug(`${name}-${Date.now().toString().slice(-4)}`) || `espacio-${Date.now()}`;

  spaceContext = {
    spaceId: newId,
    ownerName: name,
    ownerSubtitle: subtitle,
    needsOnboarding: false
  };

  localStorage.setItem(LAST_SPACE_KEY, newId);
  state = {
    profile: { name, subtitle },
    memories: [],
    completed: [],
    explored: []
  };

  saveState();
  applyPersonalBranding();
});

document.getElementById("onboardingImportInput")?.addEventListener("change", (e) => {
  const file = e.target.files?.[0];
  if (file) importBackupFromFile(file, true);
  e.target.value = "";
});

/* Eventos del Generador de Enlaces (?admin=1) */
document.getElementById("genPersonName")?.addEventListener("input", (e) => {
  const slugInput = document.getElementById("genCustomSlug");
  if (!slugInput) return;
  const baseSlug = sanitizeSlug(e.target.value);
  const randomCode = Math.floor(100 + Math.random() * 900);
  slugInput.value = baseSlug ? `${baseSlug}-${randomCode}` : "";
});

document.getElementById("linkGeneratorForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("genPersonName")?.value.trim();
  const subtitle = document.getElementById("genPersonSubtitle")?.value.trim();
  const slug = sanitizeSlug(document.getElementById("genCustomSlug")?.value);

  if (!name || !slug) return;

  const finalUrl = buildSpaceUrl({ slug, name, subtitle });

  const links = loadGeneratedLinks();
  const existingIndex = links.findIndex((item) => item.slug === slug);
  const record = {
    slug,
    name,
    subtitle,
    createdAt: existingIndex >= 0 ? links[existingIndex].createdAt : new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  if (existingIndex >= 0) {
    links[existingIndex] = record;
  } else {
    links.push(record);
  }
  saveGeneratedLinks(links);

  const box = document.getElementById("generatedLinkBox");
  const output = document.getElementById("generatedUrlOutput");
  const openLink = document.getElementById("openGeneratedUrl");
  const copyStatus = document.getElementById("copyStatus");

  if (box) box.style.display = "block";
  if (output) output.value = finalUrl;
  if (openLink) openLink.href = finalUrl;
  if (copyStatus) copyStatus.textContent = "✓ Guardado en tu lista de control";
});

document.getElementById("copyGeneratedUrl")?.addEventListener("click", async () => {
  const output = document.getElementById("generatedUrlOutput");
  const copyStatus = document.getElementById("copyStatus");
  if (!output?.value) return;

  try {
    await navigator.clipboard.writeText(output.value);
    if (copyStatus) copyStatus.textContent = "✓ Enlace copiado al portapapeles";
  } catch {
    output.select();
    document.execCommand("copy");
    if (copyStatus) copyStatus.textContent = "✓ Enlace seleccionado y copiado";
  }
});

document.getElementById("copyWhatsappInvite")?.addEventListener("click", async () => {
  const name = document.getElementById("genPersonName")?.value.trim() || "Hola";
  const url = document.getElementById("generatedUrlOutput")?.value;
  const copyStatus = document.getElementById("copyStatus");
  if (!url) return;

  try {
    await navigator.clipboard.writeText(buildWhatsappInviteText(name, url));
    if (copyStatus) copyStatus.textContent = "✓ Invitación completa copiada para WhatsApp";
  } catch {
    if (copyStatus) copyStatus.textContent = "No se pudo copiar automático; usa Copiar enlace.";
  }
});

document.getElementById("exportLinksBtn")?.addEventListener("click", () => {
  const links = loadGeneratedLinks();
  const payload = {
    app: "NEXO-ADMIN-LINKS",
    exportedAt: new Date().toISOString(),
    links
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const dateStr = new Date().toISOString().slice(0, 10);
  const a = document.createElement("a");
  a.href = url;
  a.download = `nexo-enlaces-clientes-${dateStr}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);

  const status = document.getElementById("linksBackupStatus");
  if (status) status.textContent = `Lista exportada (${dateStr})`;
});

document.getElementById("importLinksInput")?.addEventListener("change", (e) => {
  const file = e.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(String(reader.result || "{}"));
      const incoming = Array.isArray(parsed.links) ? parsed.links : [];
      if (!incoming.length) {
        alert("No se encontraron enlaces válidos en el archivo.");
        return;
      }
      const current = loadGeneratedLinks();
      const map = new Map(current.map((item) => [item.slug, item]));
      incoming.forEach((item) => {
        if (item?.slug && item?.name) map.set(item.slug, item);
      });
      saveGeneratedLinks(Array.from(map.values()));
      const status = document.getElementById("linksBackupStatus");
      if (status) status.textContent = "Lista de enlaces importada";
    } catch {
      alert("No se pudo leer el archivo JSON.");
    }
  };
  reader.readAsText(file);
  e.target.value = "";
});

/* Inicialización */
const initialDateInput = document.getElementById("memoryDate");
if (initialDateInput) {
  initialDateInput.value = new Date().toISOString().slice(0, 10);
}

document.getElementById("anio").textContent = new Date().getFullYear();

applyPersonalBranding();
renderAll();
renderMissions();
