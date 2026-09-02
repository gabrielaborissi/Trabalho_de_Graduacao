/**
 * ============================================================================
 * GAJU - Aplicação de Prototipagem Interativa
 * Lógica de Interface, Calendário Integrado, Predição Biológica e CRUD
 * ============================================================================
 */

// Estado Global da Aplicação
const GAJU_STATE = {
  currentUser: {
    name: "Gabriela Borissi",
    email: "gabriela@gaju.app",
    phone: "(11) 98765-4321",
    cycleLength: 28,
    periodLength: 5,
    lastPeriodDate: "2026-08-22",
    contraceptive: "Pílula Combinada (21 dias)",
    simulatedPhase: "auto" // 'auto', 'menstrual', 'follicular', 'ovulatory', 'luteal'
  },
  selectedDate: new Date(2026, 7, 30), // 30 de Agosto de 2026
  currentCalendarMonth: 7, // 0-indexed (7 = Agosto)
  currentCalendarYear: 2026,
  
  // Banco de Dados Local de Eventos & Tarefas
  events: [
    {
      id: 1,
      date: "2026-08-28",
      title: "Entrega do Relatório TCC",
      category: "work",
      categoryName: "Trabalho / Estudo",
      time: "14:00 - 15:30",
      demand: "high",
      completed: true
    },
    {
      id: 2,
      date: "2026-08-30",
      title: "Reunião de Alinhamento do Projeto GAJU",
      category: "work",
      categoryName: "Reunião",
      time: "10:00 - 11:30",
      demand: "high",
      completed: false
    },
    {
      id: 3,
      date: "2026-08-30",
      title: "Treino de Força & Musculação",
      category: "workout",
      categoryName: "Treino",
      time: "18:00 - 19:00",
      demand: "high",
      completed: false
    },
    {
      id: 4,
      date: "2026-09-02",
      title: "Consulta Médica de Rotina (Ginecologista)",
      category: "health",
      categoryName: "Saúde",
      time: "15:00 - 16:00",
      demand: "medium",
      completed: false
    },
    {
      id: 5,
      date: "2026-09-14",
      title: "Apresentação Final para Banca",
      category: "work",
      categoryName: "Apresentação",
      time: "09:00 - 11:00",
      demand: "high",
      completed: false
    },
    {
      id: 6,
      date: "2026-09-18",
      title: "Jantar de Aniversário com Amigos",
      category: "social",
      categoryName: "Lazer",
      time: "20:00 - 23:00",
      demand: "low",
      completed: false
    }
  ],

  // Banco de Dados de Sintomas e Contraceptivos por Data
  symptomsLog: {
    "2026-08-22": {
      symptoms: ["colica", "fadiga", "ciclo"],
      contraceptive: "pontual",
      energyLevel: 3,
      notes: "Início do ciclo menstrual. Cólica moderada."
    },
    "2026-08-23": {
      symptoms: ["colica", "cabeca", "ciclo"],
      contraceptive: "pontual",
      energyLevel: 4,
      notes: "Fluxo intenso e dor de cabeça leve."
    },
    "2026-08-28": {
      symptoms: ["joia"],
      contraceptive: "pontual",
      energyLevel: 8,
      notes: "Me sentindo ótima e com muito foco!"
    },
    "2026-08-30": {
      symptoms: ["joia"],
      contraceptive: "pontual",
      energyLevel: 9,
      notes: "Disposição alta, fase de alta produtividade."
    }
  }
};

// Informações Didáticas sobre cada Fase
const CYCLE_PHASE_INFO = {
  menstrual: {
    name: "Fase Menstrual",
    days: "Dias 1 a 5",
    color: "#E66363",
    bg: "#FFE5E5",
    energy: "Baixa / Introspectiva (30% - 45%)",
    energyScore: 35,
    window: "Descanso & Planejamento Suave",
    windowType: "rest",
    description: "Momento de renovação. O corpo gasta energia com a descamação do endométrio. Priorize tarefas analíticas individuais e repouso.",
    tipNutrition: "Chás calmantes (camomila, gengibre), alimentos ricos em ferro e hidratação redobrada.",
    tipWorkout: "Alongamentos leves, caminhadas tranquilas ou yoga restaurativa."
  },
  follicular: {
    name: "Fase Folicular",
    days: "Dias 6 a 12",
    color: "#2E9E6B",
    bg: "#E3F8EE",
    energy: "Alta & Crescente (80% - 95%)",
    energyScore: 88,
    window: "Foco Alto & Resolução de Problemas",
    windowType: "focus",
    description: "A elevação de estrogênio impulsiona a clareza mental, motivação e energia. Período ideal para iniciar novos projetos e tarefas complexas.",
    tipNutrition: "Proteínas magras, folhas verdes escuras, grãos integrais e sementes.",
    tipWorkout: "Treinos de força, musculação progressiva e treinos funcionais intensos."
  },
  ovulatory: {
    name: "Fase Ovulatória",
    days: "Dias 13 a 16",
    color: "#E67E22",
    bg: "#FFF3E0",
    energy: "Pico Máximo & Sociabilidade (95% - 100%)",
    energyScore: 98,
    window: "Criatividade, Reuniões & Apresentações",
    windowType: "creative",
    description: "Pico de testosterona e estrogênio. Habilidades de comunicação e carisma estão no ápice. Excelente para networking e liderança.",
    tipNutrition: "Vegetais crucíferos, antioxidantes, frutas vermelhas e fibras.",
    tipWorkout: "Treinos HIIT, corridas, esportes coletivos e dança."
  },
  luteal: {
    name: "Fase Lútea / Pré-Menstrual (TPM)",
    days: "Dias 17 a 28",
    color: "#8E44AD",
    bg: "#F5EEF8",
    energy: "Moderada a Baixa (40% - 60%)",
    energyScore: 50,
    window: "Organização, Revisão & Autocuidado",
    windowType: "rest",
    description: "A progesterona predomina. Bom momento para finalizar pendências e organizar arquivos. Evite sobrecarga de reuniões tensas.",
    tipNutrition: "Magnésio (chocolate amargo 70%, banana), sementes de abóbora e chás diuréticos.",
    tipWorkout: "Pilates, caminhadas moderadas e treinos com carga reduzida."
  }
};

/**
 * Utilitários de Data & Formatação
 */
function formatDateISO(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function formatDateBR(dateStr) {
  const [y, m, d] = dateStr.split('-');
  return `${d}/${m}/${y}`;
}

function getCycleDayAndPhase(targetDateStr) {
  if (GAJU_STATE.currentUser.simulatedPhase !== "auto") {
    const phaseKey = GAJU_STATE.currentUser.simulatedPhase;
    return {
      cycleDay: phaseKey === 'menstrual' ? 2 : phaseKey === 'follicular' ? 9 : phaseKey === 'ovulatory' ? 14 : 22,
      phaseKey: phaseKey,
      phaseInfo: CYCLE_PHASE_INFO[phaseKey]
    };
  }

  const lastPeriod = new Date(GAJU_STATE.currentUser.lastPeriodDate + "T00:00:00");
  const target = new Date(targetDateStr + "T00:00:00");
  const diffTime = target.getTime() - lastPeriod.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  const cycleLength = GAJU_STATE.currentUser.cycleLength || 28;
  const periodLength = GAJU_STATE.currentUser.periodLength || 5;

  let currentCycleDay = ((diffDays % cycleLength) + cycleLength) % cycleLength + 1;

  let phaseKey = 'follicular';
  if (currentCycleDay <= periodLength) {
    phaseKey = 'menstrual';
  } else if (currentCycleDay <= 12) {
    phaseKey = 'follicular';
  } else if (currentCycleDay <= 16) {
    phaseKey = 'ovulatory';
  } else {
    phaseKey = 'luteal';
  }

  return {
    cycleDay: currentCycleDay,
    phaseKey: phaseKey,
    phaseInfo: CYCLE_PHASE_INFO[phaseKey]
  };
}

/**
 * Navegação entre Telas do Protótipo
 */
function showScreen(screenId) {
  document.querySelectorAll('.screen-view').forEach(view => {
    view.classList.remove('active-screen');
  });

  const targetScreen = document.getElementById(screenId);
  if (targetScreen) {
    targetScreen.classList.add('active-screen');
  }

  document.querySelectorAll('.nav-screen-btn').forEach(btn => {
    if (btn.getAttribute('data-screen') === screenId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (screenId === 'screen-dashboard') {
    renderDashboard();
  } else if (screenId === 'screen-report') {
    renderHarmonyReport();
  }
}

/**
 * Toast Notification
 */
function showToast(message, type = 'normal') {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = `toast-message ${type === 'success' ? 'success' : ''}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '🌸' : '🔔'}</span>
    <div>${message}</div>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

/**
 * Renderização do Calendário Integrado no Dashboard
 */
function renderIntegratedCalendar() {
  const calGrid = document.getElementById('integrated-calendar-grid');
  const monthTitle = document.getElementById('calendar-month-heading');
  if (!calGrid || !monthTitle) return;

  const year = GAJU_STATE.currentCalendarYear;
  const month = GAJU_STATE.currentCalendarMonth;

  const monthNames = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];
  monthTitle.textContent = `${monthNames[month]} ${year}`;

  calGrid.innerHTML = `
    <div class="grid-day-header">Dom</div>
    <div class="grid-day-header">Seg</div>
    <div class="grid-day-header">Ter</div>
    <div class="grid-day-header">Qua</div>
    <div class="grid-day-header">Qui</div>
    <div class="grid-day-header">Sex</div>
    <div class="grid-day-header">Sáb</div>
  `;

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  // Dias do mês anterior
  for (let i = firstDay - 1; i >= 0; i--) {
    const dayNum = daysInPrevMonth - i;
    const prevDate = new Date(year, month - 1, dayNum);
    const dateStr = formatDateISO(prevDate);
    const cell = document.createElement('div');
    cell.className = 'calendar-day-box other-month';
    cell.innerHTML = `<div class="day-box-top"><span class="day-number" style="opacity:0.4">${dayNum}</span></div>`;
    calGrid.appendChild(cell);
  }

  // Dias do mês atual
  const todayStr = "2026-08-30";
  const selectedStr = formatDateISO(GAJU_STATE.selectedDate);

  for (let d = 1; d <= daysInMonth; d++) {
    const thisDate = new Date(year, month, d);
    const dateStr = formatDateISO(thisDate);
    const { phaseKey } = getCycleDayAndPhase(dateStr);

    const cell = document.createElement('div');
    cell.className = `calendar-day-box phase-${phaseKey}-cell`;
    
    if (dateStr === todayStr) cell.classList.add('today');
    if (dateStr === selectedStr) cell.classList.add('selected-day');

    // Eventos do dia
    const dayEvents = GAJU_STATE.events.filter(e => e.date === dateStr);
    let eventsHtml = '';
    dayEvents.slice(0, 2).forEach(ev => {
      eventsHtml += `<div class="event-mini-pill ${ev.category}">${ev.title}</div>`;
    });
    if (dayEvents.length > 2) {
      eventsHtml += `<div class="event-mini-pill" style="background:#f0f0f0;color:#666">+${dayEvents.length - 2} mais</div>`;
    }

    // Sintomas do dia
    const daySymptoms = GAJU_STATE.symptomsLog[dateStr];
    let symptomsHtml = '';
    if (daySymptoms && daySymptoms.symptoms && daySymptoms.symptoms.length > 0) {
      symptomsHtml = `
        <div class="symptom-icons-row" title="${daySymptoms.symptoms.join(', ')}">
          <span class="symptom-mini-dot"></span>
          <span style="font-size:0.65rem; color:var(--c-rose-400); font-weight:700;">${daySymptoms.symptoms.length} sintomas</span>
        </div>
      `;
    }

    let phaseIcon = '🌸';
    if (phaseKey === 'menstrual') phaseIcon = '🩸';
    else if (phaseKey === 'follicular') phaseIcon = '🌱';
    else if (phaseKey === 'ovulatory') phaseIcon = '✨';
    else if (phaseKey === 'luteal') phaseIcon = '🌙';

    cell.innerHTML = `
      <div class="day-box-top">
        <span class="day-number">${d}</span>
        <span class="day-phase-mini-icon" title="${phaseKey}">${phaseIcon}</span>
      </div>
      <div class="day-events-pills">${eventsHtml}</div>
      ${symptomsHtml}
    `;

    cell.addEventListener('click', () => {
      GAJU_STATE.selectedDate = thisDate;
      renderDashboard();
    });

    calGrid.appendChild(cell);
  }
}

/**
 * Renderização Completa do Painel Principal (Dashboard)
 */
function renderDashboard() {
  renderIntegratedCalendar();

  const selectedDateStr = formatDateISO(GAJU_STATE.selectedDate);
  const { cycleDay, phaseKey, phaseInfo } = getCycleDayAndPhase(selectedDateStr);

  // Painel Esquerdo: Fase Atual
  const phaseTagEl = document.getElementById('dash-current-phase-tag');
  const cycleDayNumEl = document.getElementById('dash-cycle-day-num');
  const energyFillEl = document.getElementById('dash-energy-fill');
  const energyScoreTextEl = document.getElementById('dash-energy-score-text');
  const recoTitleEl = document.getElementById('dash-reco-title');
  const recoDescEl = document.getElementById('dash-reco-desc');

  if (phaseTagEl) {
    phaseTagEl.className = `phase-tag ${phaseKey}`;
    phaseTagEl.textContent = phaseInfo.name;
  }
  if (cycleDayNumEl) {
    cycleDayNumEl.textContent = `Dia ${cycleDay}`;
  }
  if (energyFillEl && energyScoreTextEl) {
    energyFillEl.style.width = `${phaseInfo.energyScore}%`;
    energyScoreTextEl.textContent = `${phaseInfo.energyScore}% (${phaseInfo.energy.split(' ')[0]})`;
  }
  if (recoTitleEl && recoDescEl) {
    recoTitleEl.innerHTML = `💡 Recomendação do Dia (${phaseInfo.name})`;
    recoDescEl.innerHTML = `
      <strong>Produtividade:</strong> ${phaseInfo.description}<br>
      <div style="margin-top:6px;"><strong>Nutrição:</strong> ${phaseInfo.tipNutrition}</div>
      <div style="margin-top:4px;"><strong>Treino:</strong> ${phaseInfo.tipWorkout}</div>
    `;
  }

  // Painel Direito: Detalhes do Dia Selecionado
  const selectedDateHeading = document.getElementById('selected-day-heading');
  const selectedDateSub = document.getElementById('selected-day-sub');
  const prodBadge = document.getElementById('selected-prod-badge');
  const eventsListContainer = document.getElementById('selected-day-events-list');
  const symptomsCloud = document.getElementById('selected-day-symptoms-cloud');

  if (selectedDateHeading) {
    const formattedDate = GAJU_STATE.selectedDate.toLocaleDateString('pt-BR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    });
    selectedDateHeading.textContent = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  }

  if (selectedDateSub) {
    selectedDateSub.textContent = `${phaseInfo.name} • Dia ${cycleDay} do Ciclo`;
  }

  if (prodBadge) {
    prodBadge.className = `productivity-window-badge ${phaseInfo.windowType}`;
    prodBadge.innerHTML = `
      <h5><span>⚡</span> Janela: ${phaseInfo.window}</h5>
      <p>Nível de energia ideal para tarefas de ${phaseInfo.window.toLowerCase()}.</p>
    `;
  }

  // Lista de Compromissos do Dia
  if (eventsListContainer) {
    const dayEvents = GAJU_STATE.events.filter(e => e.date === selectedDateStr);
    if (dayEvents.length === 0) {
      eventsListContainer.innerHTML = `
        <div style="text-align:center; padding:20px; color:var(--text-muted); font-size:0.85rem;">
          Nenhum compromisso marcado para este dia.<br>
          <button class="btn-outline" style="margin-top:10px; padding:6px 14px; font-size:0.8rem;" onclick="openNewEventForDate('${selectedDateStr}')">+ Adicionar Compromisso</button>
        </div>
      `;
    } else {
      eventsListContainer.innerHTML = '';
      dayEvents.forEach(ev => {
        const item = document.createElement('div');
        item.className = 'event-item-card';
        item.innerHTML = `
          <div class="event-info">
            <div class="event-category-icon">
              ${ev.category === 'workout' ? '👟' : ev.category === 'health' ? '🩺' : ev.category === 'social' ? '🎉' : '💼'}
            </div>
            <div class="event-text">
              <h5 style="${ev.completed ? 'text-decoration:line-through;opacity:0.6' : ''}">${ev.title}</h5>
              <div class="event-meta">🕒 ${ev.time} • <span style="font-weight:600; color:var(--c-crimson-500)">Demanda ${ev.demand === 'high' ? 'Alta' : ev.demand === 'medium' ? 'Média' : 'Baixa'}</span></div>
            </div>
          </div>
          <button class="event-delete-btn" title="Excluir evento" onclick="deleteEvent(${ev.id})">🗑️</button>
        `;
        eventsListContainer.appendChild(item);
      });
    }
  }

  // Nuvem de Sintomas do Dia
  if (symptomsCloud) {
    const log = GAJU_STATE.symptomsLog[selectedDateStr];
    if (!log || !log.symptoms || log.symptoms.length === 0) {
      symptomsCloud.innerHTML = `
        <div style="color:var(--text-muted); font-size:0.82rem; margin-top:6px;">
          Nenhum sintoma registrado nesta data.
          <button class="btn-outline" style="display:block; margin-top:8px; padding:6px 12px; font-size:0.8rem;" onclick="openSymptomsForDate('${selectedDateStr}')">🌸 Registrar Sintomas de Hoje</button>
        </div>
      `;
    } else {
      symptomsCloud.innerHTML = '';
      const symptomLabels = {
        joia: { text: "Está tudo bem", img: "IMAGENS/joia.jpg" },
        colica: { text: "Cólicas", img: "IMAGENS/colica.jpg" },
        cabeca: { text: "Dor de Cabeça", img: "IMAGENS/cabeca.jpg" },
        seio: { text: "Dor no Seio", img: "IMAGENS/seio.jpg" },
        fadiga: { text: "Fadiga", img: "IMAGENS/fadiga.jpg" },
        acne: { text: "Acne", img: "IMAGENS/acne.jpg" },
        ciclo: { text: "Ciclo Menstrual", img: "IMAGENS/ciclo.jfif" }
      };

      log.symptoms.forEach(symKey => {
        const info = symptomLabels[symKey] || { text: symKey, img: "IMAGENS/joia.jpg" };
        const tag = document.createElement('span');
        tag.className = 'symptom-pill-tag';
        tag.innerHTML = `<img src="${info.img}" alt="${info.text}" onerror="this.style.display='none'"> ${info.text}`;
        symptomsCloud.appendChild(tag);
      });

      if (log.contraceptive) {
        const cTag = document.createElement('span');
        cTag.className = 'symptom-pill-tag';
        cTag.style.background = '#E8F5E9';
        cTag.style.color = '#2E7D32';
        cTag.innerHTML = `<img src="IMAGENS/CERTO.jpg" alt="Anticoncepcional"> Tomou pílula`;
        symptomsCloud.appendChild(cTag);
      }
    }
  }
}

/**
 * Atalhos Rápidos para abrir telas com data pré-selecionada
 */
function openNewEventForDate(dateStr) {
  const dateInput = document.getElementById('reg-event-date');
  if (dateInput) {
    dateInput.value = dateStr;
    checkSmartConflict();
  }
  showScreen('screen-event-reg');
}

function openSymptomsForDate(dateStr) {
  const dateInput = document.getElementById('symptoms-date-input');
  if (dateInput) {
    dateInput.value = dateStr;
  }
  showScreen('screen-symptoms');
}

function deleteEvent(eventId) {
  GAJU_STATE.events = GAJU_STATE.events.filter(e => e.id !== eventId);
  showToast("Compromisso removido da agenda.", "normal");
  renderDashboard();
}

/**
 * Detecção Inteligente de Conflitos Biológicos (RF005 / RF008 / BPMN)
 */
function checkSmartConflict() {
  const dateInput = document.getElementById('reg-event-date');
  const demandSelect = document.getElementById('reg-event-demand');
  const alertCard = document.getElementById('smart-conflict-alert-card');
  const alertDesc = document.getElementById('smart-conflict-desc');

  if (!dateInput || !demandSelect || !alertCard) return;

  const dateVal = dateInput.value;
  const demandVal = demandSelect.value;

  if (!dateVal) {
    alertCard.classList.remove('show-alert');
    return;
  }

  const { phaseKey, phaseInfo, cycleDay } = getCycleDayAndPhase(dateVal);

  // Conflito: Demanda ALTA em fase Menstrual ou Lútea / TPM
  if (demandVal === 'high' && (phaseKey === 'menstrual' || phaseKey === 'luteal')) {
    alertCard.classList.add('show-alert');
    
    // Sugerir uma data na fase folicular
    const suggestedDate = "2026-09-08"; // Fase Folicular com Alta Energia
    alertDesc.innerHTML = `
      Nesta data (${formatDateBR(dateVal)}) você estará no <strong>Dia ${cycleDay} (${phaseInfo.name})</strong>, que é um período de <strong>baixa energia e predisposição a fadiga</strong>.<br>
      Recomendamos reagendar este compromisso de alta demanda para a <strong>Fase Folicular (ex: 08/09/2026)</strong> onde seu foco e disposição estarão no pico máximo!
    `;
    alertCard.setAttribute('data-suggested-date', suggestedDate);
  } else {
    alertCard.classList.remove('show-alert');
  }
}

function applySuggestedDate() {
  const alertCard = document.getElementById('smart-conflict-alert-card');
  const dateInput = document.getElementById('reg-event-date');
  if (alertCard && dateInput) {
    const suggestedDate = alertCard.getAttribute('data-suggested-date') || "2026-09-08";
    dateInput.value = suggestedDate;
    alertCard.classList.remove('show-alert');
    showToast("Data ajustada para a janela de alta energia! 🌸", "success");
  }
}

function dismissConflictAlert() {
  const alertCard = document.getElementById('smart-conflict-alert-card');
  if (alertCard) alertCard.classList.remove('show-alert');
}

/**
 * Salvar Novo Compromisso (frmRegComp)
 */
function handleSaveEvent(e) {
  e.preventDefault();
  const title = document.getElementById('reg-event-title').value.trim();
  const category = document.getElementById('reg-event-category').value;
  const date = document.getElementById('reg-event-date').value;
  const time = document.getElementById('reg-event-time').value || "Horário livre";
  const demand = document.getElementById('reg-event-demand').value;
  const desc = document.getElementById('reg-event-desc').value.trim();

  if (!title || !date) {
    showToast("Por favor preencha o título e a data do compromisso.");
    return;
  }

  const newEvent = {
    id: Date.now(),
    date: date,
    title: title,
    category: category,
    categoryName: category === 'workout' ? 'Treino' : category === 'health' ? 'Saúde' : category === 'social' ? 'Lazer' : 'Trabalho',
    time: time,
    demand: demand,
    desc: desc,
    completed: false
  };

  GAJU_STATE.events.push(newEvent);
  showToast("Compromisso inteligente salvo com sucesso!", "success");
  
  // Limpar formulário
  document.getElementById('form-reg-event').reset();
  dismissConflictAlert();

  GAJU_STATE.selectedDate = new Date(date + "T00:00:00");
  showScreen('screen-dashboard');
}

/**
 * Salvar Sintomas & Contraceptivos (frmEventos)
 */
function handleSaveSymptoms(e) {
  e.preventDefault();
  const dateInput = document.getElementById('symptoms-date-input');
  const dateVal = dateInput ? dateInput.value : formatDateISO(GAJU_STATE.selectedDate);

  const selectedSymptoms = [];
  document.querySelectorAll('.symptom-checkbox-card.selected').forEach(card => {
    selectedSymptoms.push(card.getAttribute('data-symptom'));
  });

  let contraChoice = null;
  const selectedContraCard = document.querySelector('.contraceptive-radio-card.selected');
  if (selectedContraCard) {
    contraChoice = selectedContraCard.getAttribute('data-contra');
  }

  const notes = document.getElementById('symptoms-notes-input') ? document.getElementById('symptoms-notes-input').value : "";
  const energyVal = document.getElementById('symptoms-energy-slider') ? document.getElementById('symptoms-energy-slider').value : 7;

  GAJU_STATE.symptomsLog[dateVal] = {
    symptoms: selectedSymptoms,
    contraceptive: contraChoice,
    energyLevel: parseInt(energyVal),
    notes: notes
  };

  showToast("Sintomas e bem-estar registrados com sucesso!", "success");
  GAJU_STATE.selectedDate = new Date(dateVal + "T00:00:00");
  showScreen('screen-dashboard');
}

/**
 * Renderização da Tela de Relatório de Harmonia (UC06)
 */
function renderHarmonyReport() {
  const totalEvents = GAJU_STATE.events.length;
  // Simulação de cálculo da Taxa de Harmonia baseada nos eventos e fases
  let harmoniousEvents = 0;
  GAJU_STATE.events.forEach(ev => {
    const { phaseKey } = getCycleDayAndPhase(ev.date);
    if (ev.demand === 'high' && (phaseKey === 'follicular' || phaseKey === 'ovulatory')) {
      harmoniousEvents++;
    } else if (ev.demand !== 'high') {
      harmoniousEvents++;
    }
  });

  const harmonyRate = totalEvents > 0 ? Math.round((harmoniousEvents / totalEvents) * 100) : 88;
  const scoreEl = document.getElementById('report-harmony-score');
  if (scoreEl) scoreEl.textContent = `${harmonyRate}%`;
}

/**
 * Fluxo de Cadastro Multi-Etapas
 */
function nextSignupStep(targetStep) {
  document.querySelectorAll('.step-tab-content').forEach(tab => {
    tab.classList.remove('active-step');
  });
  document.querySelectorAll('.stepper-header .step-item').forEach(item => {
    item.classList.remove('active');
  });

  const targetTab = document.getElementById(`signup-step-${targetStep}`);
  if (targetTab) targetTab.classList.add('active-step');

  const stepItem = document.getElementById(`step-badge-${targetStep}`);
  if (stepItem) stepItem.classList.add('active');

  for (let i = 1; i < targetStep; i++) {
    const prevItem = document.getElementById(`step-badge-${i}`);
    if (prevItem) prevItem.classList.add('completed');
  }
}

/**
 * Funcionalidades de Conta: Logoff e Exclusão de Perfil
 */
function handleLogoff() {
  showToast("Você saiu da sua conta. Até logo! 🌸", "normal");
  showScreen('screen-login');
}

function handleDeleteProfile() {
  const confirmed = confirm("Tem certeza de que deseja excluir seu perfil? Todos os seus dados de ciclo, sintomas e compromissos salvos serão apagados permanentemente.");
  if (confirmed) {
    GAJU_STATE.currentUser.name = "";
    GAJU_STATE.currentUser.email = "";
    GAJU_STATE.events = [];
    GAJU_STATE.symptomsLog = {};
    showToast("Perfil e dados excluídos com sucesso.", "normal");
    showScreen('screen-signup');
  }
}

/**
 * Calendário Interativo da Data de Nascimento (Cadastro)
 */
let birthCalendarState = {
  month: 2, // Março (0-indexed)
  year: 2000,
  day: 15
};

function renderBirthCalendar() {
  const grid = document.getElementById('birth-cal-grid');
  const monthSelect = document.getElementById('birth-month-select');
  const yearSelect = document.getElementById('birth-year-select');
  const display = document.getElementById('birth-selected-display');
  if (!grid || !monthSelect || !yearSelect) return;

  const month = parseInt(monthSelect.value);
  const year = parseInt(yearSelect.value);
  birthCalendarState.month = month;
  birthCalendarState.year = year;

  const monthNames = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  grid.innerHTML = `
    <div class="cal-weekday">Dom</div>
    <div class="cal-weekday">Seg</div>
    <div class="cal-weekday">Ter</div>
    <div class="cal-weekday">Qua</div>
    <div class="cal-weekday">Qui</div>
    <div class="cal-weekday">Sex</div>
    <div class="cal-weekday">Sáb</div>
  `;

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  // Dias do mês anterior
  for (let i = firstDay - 1; i >= 0; i--) {
    const dayNum = daysInPrevMonth - i;
    const cell = document.createElement('div');
    cell.className = 'cal-day-cell other-month';
    cell.textContent = dayNum;
    grid.appendChild(cell);
  }

  // Dias do mês atual
  for (let d = 1; d <= daysInMonth; d++) {
    const cell = document.createElement('div');
    cell.className = 'cal-day-cell';
    if (d === birthCalendarState.day) {
      cell.classList.add('selected');
    }
    cell.textContent = d;
    cell.addEventListener('click', () => {
      birthCalendarState.day = d;
      document.querySelectorAll('#birth-cal-grid .cal-day-cell').forEach(c => c.classList.remove('selected'));
      cell.classList.add('selected');
      if (display) {
        display.textContent = `Data Selecionada: ${d} de ${monthNames[month]} de ${year}`;
      }
    });
    grid.appendChild(cell);
  }

  if (display) {
    display.textContent = `Data Selecionada: ${birthCalendarState.day} de ${monthNames[month]} de ${year}`;
  }
}

function initBirthCalendar() {
  const monthSelect = document.getElementById('birth-month-select');
  const yearSelect = document.getElementById('birth-year-select');
  const prevBtn = document.getElementById('birth-btn-prev');
  const nextBtn = document.getElementById('birth-btn-next');

  if (monthSelect) {
    monthSelect.addEventListener('change', renderBirthCalendar);
  }
  if (yearSelect) {
    yearSelect.addEventListener('change', renderBirthCalendar);
  }
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      let m = parseInt(monthSelect.value) - 1;
      let y = parseInt(yearSelect.value);
      if (m < 0) {
        m = 11;
        y--;
      }
      monthSelect.value = m;
      yearSelect.value = y;
      renderBirthCalendar();
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      let m = parseInt(monthSelect.value) + 1;
      let y = parseInt(yearSelect.value);
      if (m > 11) {
        m = 0;
        y++;
      }
      monthSelect.value = m;
      yearSelect.value = y;
      renderBirthCalendar();
    });
  }

  renderBirthCalendar();
}

/**
 * Inicialização e Event Listeners
 */
document.addEventListener('DOMContentLoaded', () => {
  initBirthCalendar();
  // Configurações de datas padrão nos inputs
  const todayStr = "2026-08-30";
  const regDateInput = document.getElementById('reg-event-date');
  const symptomsDateInput = document.getElementById('symptoms-date-input');
  if (regDateInput) regDateInput.value = todayStr;
  if (symptomsDateInput) symptomsDateInput.value = todayStr;

  // Listeners de Navegação das Telas
  document.querySelectorAll('[data-screen-target]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = btn.getAttribute('data-screen-target');
      showScreen(target);
    });
  });

  // Simulador de Fase
  const simSelect = document.getElementById('phase-simulator-select');
  if (simSelect) {
    simSelect.addEventListener('change', (e) => {
      GAJU_STATE.currentUser.simulatedPhase = e.target.value;
      showToast(`Simulação alterada para: ${e.target.options[e.target.selectedIndex].text}`, "success");
      renderDashboard();
    });
  }

  // Navegação do Calendário (Mês Anterior / Próximo)
  const btnPrevMonth = document.getElementById('btn-prev-month');
  const btnNextMonth = document.getElementById('btn-next-month');
  if (btnPrevMonth) {
    btnPrevMonth.addEventListener('click', () => {
      GAJU_STATE.currentCalendarMonth--;
      if (GAJU_STATE.currentCalendarMonth < 0) {
        GAJU_STATE.currentCalendarMonth = 11;
        GAJU_STATE.currentCalendarYear--;
      }
      renderIntegratedCalendar();
    });
  }
  if (btnNextMonth) {
    btnNextMonth.addEventListener('click', () => {
      GAJU_STATE.currentCalendarMonth++;
      if (GAJU_STATE.currentCalendarMonth > 11) {
        GAJU_STATE.currentCalendarMonth = 0;
        GAJU_STATE.currentCalendarYear++;
      }
      renderIntegratedCalendar();
    });
  }

  // Seleção de Sintomas (Cards clicáveis)
  document.querySelectorAll('.symptom-checkbox-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('selected');
    });
  });

  // Seleção de Anticoncepcional (Radio Cards)
  document.querySelectorAll('.contraceptive-radio-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.contraceptive-radio-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
    });
  });

  // Listener para Alerta Inteligente de Conflito
  if (regDateInput) {
    regDateInput.addEventListener('change', checkSmartConflict);
  }
  const regDemandSelect = document.getElementById('reg-event-demand');
  if (regDemandSelect) {
    regDemandSelect.addEventListener('change', checkSmartConflict);
  }

  // Form Handlers
  const formEvent = document.getElementById('form-reg-event');
  if (formEvent) formEvent.addEventListener('submit', handleSaveEvent);

  const formSymptoms = document.getElementById('form-reg-symptoms');
  if (formSymptoms) formSymptoms.addEventListener('submit', handleSaveSymptoms);

  // Form Login
  const formLogin = document.getElementById('form-login');
  if (formLogin) {
    formLogin.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast("Login realizado com sucesso! Bem-vinda ao GAJU 🌸", "success");
      showScreen('screen-dashboard');
    });
  }

  // Form Recuperação de Senha
  const formRecSenha = document.getElementById('form-rec-senha');
  if (formRecSenha) {
    formRecSenha.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast("Senha redefinida com sucesso! Você já pode entrar.", "success");
      showScreen('screen-login');
    });
  }

  // Toggle de visibilidade de senha
  document.querySelectorAll('.toggle-password-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const inputId = btn.getAttribute('data-for');
      const input = document.getElementById(inputId);
      if (input) {
        if (input.type === 'password') {
          input.type = 'text';
          btn.textContent = '👁️';
        } else {
          input.type = 'password';
          btn.textContent = '🔒';
        }
      }
    });
  });

  // Medidor de Força de Senha
  const passwordInput = document.getElementById('signup-password');
  const strengthFill = document.getElementById('signup-strength-fill');
  const strengthText = document.getElementById('signup-strength-text');
  if (passwordInput && strengthFill && strengthText) {
    passwordInput.addEventListener('input', () => {
      const val = passwordInput.value;
      if (val.length === 0) {
        strengthFill.style.width = '0%';
        strengthText.textContent = 'Força da senha: -';
      } else if (val.length < 6) {
        strengthFill.style.width = '30%';
        strengthFill.style.background = '#E66363';
        strengthText.textContent = 'Força da senha: Fraca';
      } else if (val.length < 10) {
        strengthFill.style.width = '65%';
        strengthFill.style.background = '#FF9292';
        strengthText.textContent = 'Força da senha: Média';
      } else {
        strengthFill.style.width = '100%';
        strengthFill.style.background = '#2E9E6B';
        strengthText.textContent = 'Força da senha: Forte ✨';
      }
    });
  }

  // Render inicial
  renderDashboard();
});
