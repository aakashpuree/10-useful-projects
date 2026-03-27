const STORAGE_KEY = "habitta_v1";

const defaultThirtyDayPlan = [
  { day: 1, tasks: ["Define why you want change", "Write 3 strengths + 3 weaknesses", "15 min focus session"] },
  { day: 2, tasks: ["Plan a 30-day schedule", "Study 45 minutes", "10 min breathing exercise"] },
  { day: 3, tasks: ["Introduce yourself to one person", "Workout 20 minutes", "Read 10 pages"] },
  { day: 4, tasks: ["Practice eye contact", "Summarize a lesson", "Stretch 15 minutes"] },
  { day: 5, tasks: ["Speak up in class once", "Write a mini story", "Walk 30 minutes"] },
  { day: 6, tasks: ["Declutter your room", "Study 60 minutes", "Skill practice 30 minutes"] },
  { day: 7, tasks: ["Weekly review", "Plan next week", "Call a friend/family"] },
  { day: 8, tasks: ["Learn a persuasion tip", "Practice loud speaking", "Workout 25 minutes"] },
  { day: 9, tasks: ["Do a deep work block", "Read 15 pages", "Speak to 2 people"] },
  { day: 10, tasks: ["Write your life vision", "Record a 2-min talk", "Meditate 10 minutes"] },
  { day: 11, tasks: ["Teach someone a concept", "Skill practice 45 minutes", "Walk 30 minutes"] },
  { day: 12, tasks: ["Read about leadership", "Create a simple presentation", "Workout 30 minutes"] },
  { day: 13, tasks: ["Tell a short story", "Study 60 minutes", "Drink 2L water"] },
  { day: 14, tasks: ["Weekly review", "Plan a social activity", "Stretch 20 minutes"] },
  { day: 15, tasks: ["Start Project 1", "Deep work 90 minutes", "Public speaking practice"] },
  { day: 16, tasks: ["Pitch your project idea", "Read 20 pages", "Jog 20 minutes"] },
  { day: 17, tasks: ["Learn storytelling structure", "Study 60 minutes", "Speak with confidence"] },
  { day: 18, tasks: ["Build a mini prototype", "Skill practice 45 minutes", "Workout 30 minutes"] },
  { day: 19, tasks: ["Lead a small task", "Write 1-page reflection", "Walk 30 minutes"] },
  { day: 20, tasks: ["Present Project 1 progress", "Focus 90 minutes", "Stretch 15 minutes"] },
  { day: 21, tasks: ["Weekly review", "Plan Project 2", "Call someone new"] },
  { day: 22, tasks: ["Start Project 2", "Practice persuasion", "Workout 30 minutes"] },
  { day: 23, tasks: ["Explain an idea to 3 people", "Study 60 minutes", "Read 15 pages"] },
  { day: 24, tasks: ["Build a product page", "Deep work 90 minutes", "Meditate 10 minutes"] },
  { day: 25, tasks: ["Improve confidence posture", "Skill practice 60 minutes", "Jog 20 minutes"] },
  { day: 26, tasks: ["Share progress online/offline", "Study 45 minutes", "Stretch 20 minutes"] },
  { day: 27, tasks: ["Leadership exercise", "Tell a story to friend", "Workout 30 minutes"] },
  { day: 28, tasks: ["Prepare final presentations", "Read 20 pages", "Walk 30 minutes"] },
  { day: 29, tasks: ["Finalize both projects", "Record a 3-min talk", "Meditate 15 minutes"] },
  { day: 30, tasks: ["Showcase your projects", "Write a transformation journal", "Celebrate progress"] }
];

const starterSkills = [
  "Learn public speaking",
  "Become more disciplined",
  "Improve study performance",
  "Build strong focus",
  "Improve communication skills",
  "Learn storytelling",
  "Improve public speaking",
  "Learn persuasion / influence skills",
  "Become physically fit",
  "Increase confidence",
  "Become more extroverted",
  "Build leadership mindset"
];

const skillChallengeTemplates = [
  ["Define your 30-day goal for {focus}", "Baseline: 10-minute {practice}"],
  ["Learn 1 core principle of {focus}", "Practice {practice} for 15 minutes"],
  ["Study a short lesson on {focus}", "Write 3 takeaways"],
  ["Practice {practice} for 20 minutes", "Self-review: note 1 improvement"],
  ["Mini challenge: {output}", "Reflect on what felt hard"],
  ["Repeat {practice} for 20 minutes", "Add one new technique"],
  ["Weekly review + plan week 2", "Reward your consistency"],
  ["Apply {focus} in a real task", "Practice {practice} for 20 minutes"],
  ["Ask for feedback on {focus}", "Fix 1 weak area"],
  ["Create a small deliverable: {output}", "Review your progress"],
  ["Practice {practice} for 25 minutes", "Add difficulty or time"],
  ["Study an advanced tip of {focus}", "Try it immediately"],
  ["Do a public or social test of {focus}", "Write 3 lessons learned"],
  ["Weekly review + plan week 3", "Celebrate improvement"],
  ["Increase intensity: 30-minute {practice}", "Record or log results"],
  ["Build a mini project using {focus}", "Break it into 3 tasks"],
  ["Get feedback from 1 person", "Iterate based on feedback"],
  ["Practice {practice} for 30 minutes", "Focus on clarity"],
  ["Do a timed challenge: {output}", "Reflect on performance"],
  ["Create a checklist for {focus}", "Use it today"],
  ["Weekly review + plan week 4", "Pick 1 mastery target"],
  ["Teach someone a key idea of {focus}", "Note gaps in knowledge"],
  ["Practice {practice} for 35 minutes", "Increase precision"],
  ["Do a real-world application of {focus}", "Capture results"],
  ["Prepare a final showcase: {output}", "Draft talking points"],
  ["Rehearse or practice {practice} for 40 minutes", "Polish details"],
  ["Run a mock or live test", "Fix the top 2 issues"],
  ["Create a short guide for {focus}", "Share with someone"],
  ["Final rehearsal: {output}", "Build confidence routine"],
  ["Showcase day: {output}", "Write your next 30-day plan"]
];

const defaultSkillPlan = [
  { day: 1, tasks: ["Set 30-day goals for skills", "Create a daily time-block plan"] },
  { day: 2, tasks: ["Discipline: consistent wake time", "Study 45 minutes with focus"] },
  { day: 3, tasks: ["Communication: record 1-min intro", "Fitness: 20-min workout"] },
  { day: 4, tasks: ["Storytelling: learn 3-act structure", "Tell a 2-min story"] },
  { day: 5, tasks: ["Public speaking: voice + posture drill", "Persuasion: learn 1 principle"] },
  { day: 6, tasks: ["Leadership: take charge of a task", "Confidence: journal 3 wins"] },
  { day: 7, tasks: ["Weekly review + adjust plan", "Start 1 new conversation"] },
  { day: 8, tasks: ["Study performance: summarize a topic", "Focus: 25-min deep work"] },
  { day: 9, tasks: ["Communication: ask 3 questions", "Fitness: 30-min walk"] },
  { day: 10, tasks: ["Public speaking: record 2-min talk", "Storytelling: craft a hook"] },
  { day: 11, tasks: ["Discipline: no-phone study block", "Persuasion: practice framing"] },
  { day: 12, tasks: ["Leadership: help or mentor someone", "Confidence: list 5 strengths"] },
  { day: 13, tasks: ["Extroversion: join a group activity", "Fitness: strength routine"] },
  { day: 14, tasks: ["Weekly review + plan next week", "Focus: 60-min deep work"] },
  { day: 15, tasks: ["Communication: teach a concept", "Public speaking: timed practice"] },
  { day: 16, tasks: ["Storytelling: share a personal story", "Discipline: keep routine 100%"] },
  { day: 17, tasks: ["Persuasion: practice a small negotiation", "Confidence: eye contact drill"] },
  { day: 18, tasks: ["Study: mini quiz or mock test", "Fitness: 25-min workout"] },
  { day: 19, tasks: ["Leadership: organize a small plan", "Extroversion: 2 conversations"] },
  { day: 20, tasks: ["Public speaking: record 3-min talk", "Storytelling: add emotion + detail"] },
  { day: 21, tasks: ["Weekly review + reflection", "Focus: 90-min deep work"] },
  { day: 22, tasks: ["Communication: write a clear message", "Persuasion: learn social proof"] },
  { day: 23, tasks: ["Discipline: track habits all day", "Fitness: run or brisk walk"] },
  { day: 24, tasks: ["Leadership: write a vision statement", "Confidence: mirror presentation"] },
  { day: 25, tasks: ["Study: teach-back session", "Public speaking: practice Q&A"] },
  { day: 26, tasks: ["Storytelling: build a story bank", "Extroversion: attend an event"] },
  { day: 27, tasks: ["Persuasion: craft a 60-sec pitch", "Focus: 2x 45-min sessions"] },
  { day: 28, tasks: ["Leadership: delegate a task", "Fitness: full-body workout"] },
  { day: 29, tasks: ["Communication: summarize progress", "Confidence: share results publicly"] },
  { day: 30, tasks: ["Final 5-min showcase speech", "Write your next 30-day plan"] }
];

const defaultFitnessPlan = [
  { day: 1, tasks: ["1 push-up", "10 squats", "30-sec plank"] },
  { day: 2, tasks: ["2 push-ups", "12 squats", "35-sec plank"] },
  { day: 3, tasks: ["3 push-ups", "14 squats", "40-sec plank"] },
  { day: 4, tasks: ["4 push-ups", "16 squats", "45-sec plank"] },
  { day: 5, tasks: ["5 push-ups", "18 squats", "50-sec plank"] },
  { day: 6, tasks: ["6 push-ups", "20 squats", "55-sec plank"] },
  { day: 7, tasks: ["7 push-ups", "22 squats", "60-sec plank"] },
  { day: 8, tasks: ["8 push-ups", "24 squats", "65-sec plank"] },
  { day: 9, tasks: ["9 push-ups", "26 squats", "70-sec plank"] },
  { day: 10, tasks: ["10 push-ups", "28 squats", "75-sec plank"] },
  { day: 11, tasks: ["11 push-ups", "30 squats", "80-sec plank"] },
  { day: 12, tasks: ["12 push-ups", "32 squats", "85-sec plank"] },
  { day: 13, tasks: ["13 push-ups", "34 squats", "90-sec plank"] },
  { day: 14, tasks: ["14 push-ups", "36 squats", "95-sec plank"] },
  { day: 15, tasks: ["15 push-ups", "38 squats", "100-sec plank"] },
  { day: 16, tasks: ["16 push-ups", "40 squats", "105-sec plank"] },
  { day: 17, tasks: ["17 push-ups", "42 squats", "110-sec plank"] },
  { day: 18, tasks: ["18 push-ups", "44 squats", "115-sec plank"] },
  { day: 19, tasks: ["19 push-ups", "46 squats", "120-sec plank"] },
  { day: 20, tasks: ["20 push-ups", "48 squats", "125-sec plank"] },
  { day: 21, tasks: ["22 push-ups", "50 squats", "130-sec plank"] },
  { day: 22, tasks: ["24 push-ups", "52 squats", "135-sec plank"] },
  { day: 23, tasks: ["26 push-ups", "54 squats", "140-sec plank"] },
  { day: 24, tasks: ["28 push-ups", "56 squats", "145-sec plank"] },
  { day: 25, tasks: ["30 push-ups", "58 squats", "150-sec plank"] },
  { day: 26, tasks: ["32 push-ups", "60 squats", "155-sec plank"] },
  { day: 27, tasks: ["34 push-ups", "62 squats", "160-sec plank"] },
  { day: 28, tasks: ["36 push-ups", "64 squats", "165-sec plank"] },
  { day: 29, tasks: ["38 push-ups", "66 squats", "170-sec plank"] },
  { day: 30, tasks: ["40 push-ups", "70 squats", "180-sec plank"] }
];

const defaultData = {
  routines: [
    { id: uid(), title: "Study", createdAt: todayStr(), history: {} },
    { id: uid(), title: "Workout", createdAt: todayStr(), history: {} },
    { id: uid(), title: "Reading", createdAt: todayStr(), history: {} }
  ],
  challenges: [],
  thirtyDay: { startDate: null, days: [] },
  projects: [],
  startup: { idea: "", tasks: [], milestones: [] },
  skills: [
    { id: uid(), name: "Learn public speaking", tasks: [{ id: uid(), title: "Daily speaking practice", done: false }] },
    { id: uid(), name: "Become more disciplined", tasks: [{ id: uid(), title: "Follow morning routine", done: false }] },
    { id: uid(), name: "Improve study performance", tasks: [{ id: uid(), title: "One focused study block", done: false }] },
    { id: uid(), name: "Build strong focus", tasks: [{ id: uid(), title: "25-min deep work", done: false }] },
    { id: uid(), name: "Improve communication skills", tasks: [{ id: uid(), title: "Start one conversation", done: false }] },
    { id: uid(), name: "Learn storytelling", tasks: [{ id: uid(), title: "Tell a 2-min story", done: false }] },
    { id: uid(), name: "Improve public speaking", tasks: [{ id: uid(), title: "Record a 1-min talk", done: false }] },
    { id: uid(), name: "Learn persuasion / influence skills", tasks: [{ id: uid(), title: "Study 1 persuasion tip", done: false }] },
    { id: uid(), name: "Become physically fit", tasks: [{ id: uid(), title: "20-min workout", done: false }] },
    { id: uid(), name: "Increase confidence", tasks: [{ id: uid(), title: "Power pose + journal", done: false }] },
    { id: uid(), name: "Become more extroverted", tasks: [{ id: uid(), title: "Initiate 1 conversation", done: false }] },
    { id: uid(), name: "Build leadership mindset", tasks: [{ id: uid(), title: "Lead a small task", done: false }] }
  ],
  skillPlan: { startDate: null, days: [] },
  fitnessPlan: { startDate: null, days: [] },
  fitness: [{ id: uid(), title: "Daily movement", createdAt: todayStr(), history: {} }],
  planner: {}
};

let state = normalizeState(loadData());
let charts = {};

function uid() {
  return Math.random().toString(36).slice(2, 10);
}

function todayStr(date = new Date()) {
  return date.toISOString().split("T")[0];
}

function daysBetween(start, end) {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const diff = endDate - startDate;
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

function loadData() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    const seeded = structuredClone(defaultData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seeded));
    return seeded;
  }
  try {
    return JSON.parse(raw);
  } catch (error) {
    console.error("Failed to parse local data", error);
    localStorage.removeItem(STORAGE_KEY);
    return structuredClone(defaultData);
  }
}

function normalizeState(data) {
  if (!data || typeof data !== "object") {
    return structuredClone(defaultData);
  }

  return {
    ...structuredClone(defaultData),
    ...data,
    thirtyDay: { ...structuredClone(defaultData.thirtyDay), ...data.thirtyDay },
    startup: { ...structuredClone(defaultData.startup), ...data.startup },
    skillPlan: { ...structuredClone(defaultData.skillPlan), ...data.skillPlan },
    fitnessPlan: { ...structuredClone(defaultData.fitnessPlan), ...data.fitnessPlan },
    planner: data.planner || structuredClone(defaultData.planner)
  };
}

function getSkillProfile(name) {
  const lower = name.toLowerCase();
  if (lower.includes("public speaking")) {
    return { focus: "public speaking", practice: "speak aloud with structure", output: "record a 2-minute talk" };
  }
  if (lower.includes("story")) {
    return { focus: "storytelling", practice: "craft a short story", output: "tell a 2-minute story" };
  }
  if (lower.includes("persuasion") || lower.includes("influence")) {
    return { focus: "persuasion / influence", practice: "practice a persuasion technique", output: "deliver a 60-second pitch" };
  }
  if (lower.includes("communication")) {
    return { focus: "communication", practice: "active listening and clear speaking", output: "summarize a conversation" };
  }
  if (lower.includes("discipline")) {
    return { focus: "discipline", practice: "follow a strict routine", output: "complete a full-day checklist" };
  }
  if (lower.includes("study")) {
    return { focus: "study performance", practice: "focused study session", output: "write a 1-page summary" };
  }
  if (lower.includes("focus")) {
    return { focus: "focus", practice: "deep work without distraction", output: "finish a 25-minute focus block" };
  }
  if (lower.includes("fit") || lower.includes("fitness")) {
    return { focus: "physical fitness", practice: "workout routine", output: "complete a 20-minute workout" };
  }
  if (lower.includes("confidence")) {
    return { focus: "confidence", practice: "confidence drill and posture", output: "deliver a confident introduction" };
  }
  if (lower.includes("extrovert")) {
    return { focus: "extroversion", practice: "start social interactions", output: "start one new conversation" };
  }
  if (lower.includes("leadership")) {
    return { focus: "leadership", practice: "lead a small task", output: "guide someone to complete a task" };
  }
  return { focus: name, practice: `practice ${name}`, output: `create a small output for ${name}` };
}

function buildSkillChallenge(name) {
  const profile = getSkillProfile(name);
  return skillChallengeTemplates.map((tasks, index) => ({
    day: index + 1,
    tasks: tasks.map((task) =>
      task
        .replace(/\{focus\}/g, profile.focus)
        .replace(/\{practice\}/g, profile.practice)
        .replace(/\{output\}/g, profile.output)
    )
  }));
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function setTodayLabel() {
  const label = document.getElementById("todayLabel");
  const now = new Date();
  label.textContent = `Today: ${now.toDateString()} • Keep the momentum going.`;
}

function renderAll() {
  renderRoutines();
  renderChallenges();
  renderThirtyDay();
  renderProjects();
  renderStartup();
  renderSkills();
  renderSkillPlan();
  renderStarterSkills();
  renderFitness();
  renderFitnessPlan();
  renderPlanner();
  updateDashboard();
  updateCharts();
}

function renderRoutines() {
  const list = document.getElementById("routineList");
  const today = todayStr();

  if (!state.routines.length) {
    list.innerHTML = "<p class=\"small\">No routines yet. Add your first routine above.</p>";
    return;
  }

  list.innerHTML = state.routines
    .map((routine) => {
      const checked = routine.history[today] ? "checked" : "";
      return `
        <div class="list-item">
          <div class="list-item-row">
            <label class="checkbox">
              <input type="checkbox" class="routine-check" data-id="${routine.id}" ${checked} />
              <span>${routine.title}</span>
            </label>
            <span class="chip">Daily</span>
          </div>
          <div class="actions">
            <button class="btn secondary edit-routine" data-id="${routine.id}">Edit</button>
            <button class="btn danger delete-routine" data-id="${routine.id}">Delete</button>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderFitness() {
  const list = document.getElementById("fitnessList");
  const today = todayStr();

  if (!state.fitness.length) {
    list.innerHTML = "<p class=\"small\">No fitness habits yet. Add your first habit above.</p>";
    return;
  }

  list.innerHTML = state.fitness
    .map((habit) => {
      const checked = habit.history[today] ? "checked" : "";
      return `
        <div class="list-item">
          <div class="list-item-row">
            <label class="checkbox">
              <input type="checkbox" class="fitness-check" data-id="${habit.id}" ${checked} />
              <span>${habit.title}</span>
            </label>
            <span class="chip">Fitness</span>
          </div>
          <div class="actions">
            <button class="btn secondary edit-fitness" data-id="${habit.id}">Edit</button>
            <button class="btn danger delete-fitness" data-id="${habit.id}">Delete</button>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderFitnessPlan() {
  const list = document.getElementById("fitnessPlanList");
  const status = document.getElementById("fitnessPlanStatus");

  if (!state.fitnessPlan.startDate || !state.fitnessPlan.days.length) {
    status.textContent = "Not started yet.";
    list.innerHTML = "<p class=\"small\">Start the plan to generate your 30-day fitness tasks.</p>";
    return;
  }

  const currentDayIndex = daysBetween(state.fitnessPlan.startDate, todayStr());
  const currentDay = Math.min(30, Math.max(1, currentDayIndex + 1));
  status.textContent = `Started on ${state.fitnessPlan.startDate}. Today is Day ${currentDay}.`;

  list.innerHTML = state.fitnessPlan.days
    .map((day) => {
      const tasks = day.tasks
        .map((task, index) => {
          const checked = day.done[index] ? "checked" : "";
          return `
            <label class="checkbox">
              <input type="checkbox" class="fitness-plan-task" data-day="${day.day}" data-index="${index}" ${checked} />
              <span>${task}</span>
            </label>
          `;
        })
        .join("");

      return `
        <div class="list-item">
          <div class="list-item-row">
            <strong>Day ${day.day}</strong>
            <span class="chip">${day.day === currentDay ? "Today" : ""}</span>
          </div>
          <div class="list">${tasks}</div>
        </div>
      `;
    })
    .join("");
}

function renderChallenges() {
  const list = document.getElementById("challengeList");

  if (!state.challenges.length) {
    list.innerHTML = "<p class=\"small\">No challenges yet. Add a challenge above.</p>";
    return;
  }

  list.innerHTML = state.challenges
    .map((challenge) => {
      const dayCount = daysBetween(challenge.createdAt, todayStr()) + 1;
      const difficulty = Math.min(10, challenge.baseDifficulty + dayCount);
      const tasks = challenge.tasks
        .map((task) => {
          const checked = task.done ? "checked" : "";
          return `
            <label class="checkbox">
              <input type="checkbox" class="challenge-task" data-challenge-id="${challenge.id}" data-task-id="${task.id}" ${checked} />
              <span>${task.title}</span>
            </label>
          `;
        })
        .join("");

      return `
        <div class="list-item">
          <div class="list-item-row">
            <strong>${challenge.title}</strong>
            <span class="chip">${challenge.category}</span>
          </div>
          <p class="small">Day ${dayCount} • Difficulty ${difficulty}/10</p>
          <div class="list">${tasks || "<p class=\"small\">No tasks yet.</p>"}</div>
          <div class="grid" style="margin-top: 8px;">
            <input class="challenge-task-input" data-id="${challenge.id}" placeholder="Add a challenge task" />
            <button class="btn secondary add-challenge-task" data-id="${challenge.id}">Add Task</button>
          </div>
          <div class="actions" style="margin-top: 8px;">
            <button class="btn ghost delete-challenge" data-id="${challenge.id}">Delete Challenge</button>
          </div>
        </div>
      `;
    })
    .join("");
}
function renderThirtyDay() {
  const list = document.getElementById("thirtyList");
  const status = document.getElementById("thirtyStatus");

  if (!state.thirtyDay.startDate || !state.thirtyDay.days.length) {
    status.textContent = "Not started yet.";
    list.innerHTML = "<p class=\"small\">Start the plan to generate your 30-day tasks.</p>";
    return;
  }

  const currentDayIndex = daysBetween(state.thirtyDay.startDate, todayStr());
  const currentDay = Math.min(30, Math.max(1, currentDayIndex + 1));
  status.textContent = `Started on ${state.thirtyDay.startDate}. Today is Day ${currentDay}.`;

  list.innerHTML = state.thirtyDay.days
    .map((day) => {
      const tasks = day.tasks
        .map((task, index) => {
          const checked = day.done[index] ? "checked" : "";
          return `
            <label class="checkbox">
              <input type="checkbox" class="thirty-task" data-day="${day.day}" data-index="${index}" ${checked} />
              <span>${task}</span>
            </label>
          `;
        })
        .join("");

      return `
        <div class="list-item">
          <div class="list-item-row">
            <strong>Day ${day.day}</strong>
            <span class="chip">${day.day === currentDay ? "Today" : ""}</span>
          </div>
          <div class="list">${tasks}</div>
        </div>
      `;
    })
    .join("");
}

function renderProjects() {
  const list = document.getElementById("projectList");

  if (!state.projects.length) {
    list.innerHTML = "<p class=\"small\">No projects yet. Add your first project above.</p>";
    return;
  }

  list.innerHTML = state.projects
    .map((project) => {
      const tasks = project.tasks
        .map((task) => {
          const checked = task.done ? "checked" : "";
          return `
            <label class="checkbox">
              <input type="checkbox" class="project-task" data-project-id="${project.id}" data-task-id="${task.id}" ${checked} />
              <span>${task.title}</span>
            </label>
          `;
        })
        .join("");

      const statusLabel = project.status === "Completed" ? "Mark Active" : "Mark Completed";

      return `
        <div class="list-item">
          <div class="list-item-row">
            <strong>${project.name}</strong>
            <span class="chip">${project.status}</span>
          </div>
          <div class="progress"><span style="width:${project.progress}%;"></span></div>
          <p class="small">Progress: ${project.progress}%</p>
          <div class="list">${tasks || "<p class=\"small\">No tasks yet.</p>"}</div>
          <div class="grid" style="margin-top: 8px;">
            <input class="project-task-input" data-id="${project.id}" placeholder="Add a project task" />
            <button class="btn secondary add-project-task" data-id="${project.id}">Add Task</button>
          </div>
          <div class="actions" style="margin-top: 8px;">
            <button class="btn secondary toggle-project-status" data-id="${project.id}">${statusLabel}</button>
            <button class="btn ghost delete-project" data-id="${project.id}">Delete Project</button>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderStartup() {
  const list = document.getElementById("startupList");

  const tasks = state.startup.tasks
    .map((task) => {
      const checked = task.done ? "checked" : "";
      return `
        <label class="checkbox">
          <input type="checkbox" class="startup-task" data-task-id="${task.id}" ${checked} />
          <span>${task.title}</span>
        </label>
      `;
    })
    .join("");

  const milestones = state.startup.milestones
    .map((milestone) => `
      <div class="list-item-row">
        <span>${milestone}</span>
        <button class="btn ghost delete-milestone" data-title="${milestone}">Remove</button>
      </div>
    `)
    .join("");

  const totalTasks = state.startup.tasks.length;
  const doneTasks = state.startup.tasks.filter((task) => task.done).length;
  const progress = totalTasks ? Math.round((doneTasks / totalTasks) * 100) : 0;

  list.innerHTML = `
    <div class="list-item">
      <div class="list-item-row">
        <strong>Idea</strong>
        <span class="chip">30-Day Build</span>
      </div>
      <p>${state.startup.idea || "No idea yet."}</p>
    </div>
    <div class="list-item">
      <div class="list-item-row">
        <strong>Progress</strong>
        <span class="chip">${progress}%</span>
      </div>
      <div class="progress"><span style="width:${progress}%;"></span></div>
      <p class="small">${doneTasks}/${totalTasks || 0} tasks completed</p>
    </div>
    <div class="list-item">
      <strong>Daily Tasks</strong>
      <div class="list">${tasks || "<p class=\"small\">No tasks yet.</p>"}</div>
    </div>
    <div class="list-item">
      <strong>Milestones</strong>
      <div class="list">${milestones || "<p class=\"small\">No milestones yet.</p>"}</div>
    </div>
  `;
}

function renderSkills() {
  const list = document.getElementById("skillList");

  if (!state.skills.length) {
    list.innerHTML = "<p class=\"small\">No skills yet. Add your first skill above.</p>";
    return;
  }

  list.innerHTML = state.skills
    .map((skill) => {
      const tasks = skill.tasks
        .map((task) => {
          const checked = task.done ? "checked" : "";
          return `
            <label class="checkbox">
              <input type="checkbox" class="skill-task" data-skill-id="${skill.id}" data-task-id="${task.id}" ${checked} />
              <span>${task.title}</span>
            </label>
          `;
        })
        .join("");

      const totalTasks = skill.tasks.length;
      const doneTasks = skill.tasks.filter((task) => task.done).length;
      const progress = totalTasks ? Math.round((doneTasks / totalTasks) * 100) : 0;

      const challenge = skill.challenge;
      const hasChallenge = challenge && challenge.startDate && challenge.days.length;
      const challengeDayIndex = hasChallenge ? daysBetween(challenge.startDate, todayStr()) : 0;
      const currentChallengeDay = hasChallenge ? Math.min(30, Math.max(1, challengeDayIndex + 1)) : null;

      const challengeStatus = hasChallenge
        ? `Started on ${challenge.startDate}. Day ${currentChallengeDay}.`
        : "No 30-day challenge started yet.";

      const challengeDays = hasChallenge
        ? challenge.days
            .map((day) => {
              const dayTasks = day.tasks
                .map((task, index) => {
                  const checked = day.done[index] ? "checked" : "";
                  return `
                    <label class="checkbox">
                      <input type="checkbox" class="skill-challenge-task" data-skill-id="${skill.id}" data-day="${day.day}" data-index="${index}" ${checked} />
                      <span>${task}</span>
                    </label>
                  `;
                })
                .join("");

              return `
                <div class="list-item">
                  <div class="list-item-row">
                    <strong>Day ${day.day}</strong>
                    <span class="chip">${day.day === currentChallengeDay ? "Today" : ""}</span>
                  </div>
                  <div class="list">${dayTasks}</div>
                </div>
              `;
            })
            .join("")
        : "<p class=\"small\">Start the challenge to generate daily tasks.</p>";

      const challengeButtonLabel = hasChallenge ? "Reset 30-Day Challenge" : "Start 30-Day Challenge";

      return `
        <div class="list-item">
          <div class="list-item-row">
            <strong>${skill.name}</strong>
            <span class="chip">Skill</span>
          </div>
          <div class="progress"><span style="width:${progress}%;"></span></div>
          <p class="small">${doneTasks}/${totalTasks || 0} tasks completed</p>
          <div class="list">${tasks || "<p class=\"small\">No tasks yet.</p>"}</div>
          <div class="grid" style="margin-top: 8px;">
            <input class="skill-task-input" data-id="${skill.id}" placeholder="Add a skill task" />
            <button class="btn secondary add-skill-task" data-id="${skill.id}">Add Task</button>
          </div>
          <div class="list" style="margin-top: 10px;">
            <div class="list-item">
              <div class="list-item-row">
                <strong>30-Day Challenge</strong>
                <span class="chip">${currentChallengeDay ? `Day ${currentChallengeDay}` : "Not started"}</span>
              </div>
              <p class="small">${challengeStatus}</p>
              <details>
                <summary class="small">View all 30 days</summary>
                <div class="list">${challengeDays}</div>
              </details>
            </div>
          </div>
          <div class="actions" style="margin-top: 8px;">
            <button class="btn secondary start-skill-challenge" data-id="${skill.id}">${challengeButtonLabel}</button>
            <button class="btn ghost delete-skill" data-id="${skill.id}">Delete Skill</button>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderStarterSkills() {
  const list = document.getElementById("starterSkillList");
  const existing = new Set(state.skills.map((skill) => skill.name.toLowerCase()));

  list.innerHTML = starterSkills
    .map((skill) => {
      const isAdded = existing.has(skill.toLowerCase());
      return `
        <button class="chip-btn add-starter-skill" data-skill="${skill}" ${isAdded ? "disabled" : ""}>
          ${isAdded ? "Added" : skill}
        </button>
      `;
    })
    .join("");
}

function renderSkillPlan() {
  const list = document.getElementById("skillPlanList");
  const status = document.getElementById("skillPlanStatus");

  if (!state.skillPlan.startDate || !state.skillPlan.days.length) {
    status.textContent = "Not started yet.";
    list.innerHTML = "<p class=\"small\">Start the plan to generate your 30-day skill tasks.</p>";
    return;
  }

  const currentDayIndex = daysBetween(state.skillPlan.startDate, todayStr());
  const currentDay = Math.min(30, Math.max(1, currentDayIndex + 1));
  status.textContent = `Started on ${state.skillPlan.startDate}. Today is Day ${currentDay}.`;

  list.innerHTML = state.skillPlan.days
    .map((day) => {
      const tasks = day.tasks
        .map((task, index) => {
          const checked = day.done[index] ? "checked" : "";
          return `
            <label class="checkbox">
              <input type="checkbox" class="skill-plan-task" data-day="${day.day}" data-index="${index}" ${checked} />
              <span>${task}</span>
            </label>
          `;
        })
        .join("");

      return `
        <div class="list-item">
          <div class="list-item-row">
            <strong>Day ${day.day}</strong>
            <span class="chip">${day.day === currentDay ? "Today" : ""}</span>
          </div>
          <div class="list">${tasks}</div>
        </div>
      `;
    })
    .join("");
}

function renderPlanner() {
  const list = document.getElementById("planList");
  const today = todayStr();
  const plans = state.planner[today] || [];

  if (!plans.length) {
    list.innerHTML = "<p class=\"small\">No plans yet. Add your first plan above.</p>";
    return;
  }

  list.innerHTML = plans
    .map((plan) => `
      <div class="list-item">
        <div class="list-item-row">
          <strong>${plan.time}</strong>
          <span class="chip">${plan.duration}</span>
        </div>
        <p>${plan.task}</p>
        <div class="actions">
          <button class="btn ghost delete-plan" data-id="${plan.id}">Delete</button>
        </div>
      </div>
    `)
    .join("");
}

function updateDashboard() {
  const { completedToday, totalToday } = calculateTodayTotals();
  const completionRate = totalToday ? Math.round((completedToday / totalToday) * 100) : 0;
  const streak = calculateStreak();
  const activeProjects = state.projects.length;

  document.getElementById("completionRate").textContent = `${completionRate}%`;
  document.getElementById("dailyStreak").textContent = `${streak} days`;
  document.getElementById("activeRoutines").textContent = `${state.routines.length}`;
  document.getElementById("activeProjects").textContent = `${activeProjects}`;

  updateOverviewStats();
}

function updateOverviewStats() {
  const stats = document.getElementById("overviewStats");
  const weekly = lastNDays(7).map((day) => dayScore(day));
  const monthly = lastNDays(30).map((day) => dayScore(day));

  const weeklyAvg = average(weekly);
  const monthlyAvg = average(monthly);
  const routineRate = routineMonthlyRate();
  const fitnessRate = fitnessMonthlyRate();

  stats.innerHTML = `
    <div class="stat">
      <span>Weekly Avg Completion</span>
      <strong>${weeklyAvg}%</strong>
    </div>
    <div class="stat">
      <span>Monthly Avg Completion</span>
      <strong>${monthlyAvg}%</strong>
    </div>
    <div class="stat">
      <span>Routine Completion</span>
      <strong>${routineRate}%</strong>
    </div>
    <div class="stat">
      <span>Fitness Completion</span>
      <strong>${fitnessRate}%</strong>
    </div>
  `;

  document.getElementById("monthlyRoutineRate").textContent = `Monthly completion: ${routineRate}%`;
}

function calculateTodayTotals() {
  const today = todayStr();
  let completed = 0;
  let total = 0;

  state.routines.forEach((routine) => {
    total += 1;
    if (routine.history[today]) completed += 1;
  });

  state.fitness.forEach((habit) => {
    total += 1;
    if (habit.history[today]) completed += 1;
  });

  state.challenges.forEach((challenge) => {
    challenge.tasks.forEach((task) => {
      total += 1;
      if (task.done) completed += 1;
    });
  });

  state.projects.forEach((project) => {
    project.tasks.forEach((task) => {
      total += 1;
      if (task.done) completed += 1;
    });
  });

  state.skills.forEach((skill) => {
    skill.tasks.forEach((task) => {
      total += 1;
      if (task.done) completed += 1;
    });
  });

  state.skills.forEach((skill) => {
    if (!skill.challenge || !skill.challenge.startDate) return;
    const skillIndex = daysBetween(skill.challenge.startDate, today);
    const day = skill.challenge.days[skillIndex];
    if (!day) return;
    day.tasks.forEach((_, index) => {
      total += 1;
      if (day.done[index]) completed += 1;
    });
  });

  if (state.fitnessPlan.startDate) {
    const fitnessIndex = daysBetween(state.fitnessPlan.startDate, today);
    const day = state.fitnessPlan.days[fitnessIndex];
    if (day) {
      day.tasks.forEach((_, index) => {
        total += 1;
        if (day.done[index]) completed += 1;
      });
    }
  }

  if (state.thirtyDay.startDate) {
    const dayIndex = daysBetween(state.thirtyDay.startDate, today);
    const day = state.thirtyDay.days[dayIndex];
    if (day) {
      day.tasks.forEach((_, index) => {
        total += 1;
        if (day.done[index]) completed += 1;
      });
    }
  }

  if (state.skillPlan.startDate) {
    const skillIndex = daysBetween(state.skillPlan.startDate, today);
    const skillDay = state.skillPlan.days[skillIndex];
    if (skillDay) {
      skillDay.tasks.forEach((_, index) => {
        total += 1;
        if (skillDay.done[index]) completed += 1;
      });
    }
  }

  return { completedToday: completed, totalToday: total };
}

function calculateStreak() {
  let streak = 0;
  for (const day of lastNDays(30).reverse()) {
    if (dayScore(day) > 0) {
      streak += 1;
    } else {
      break;
    }
  }
  return streak;
}

function lastNDays(n) {
  const days = [];
  const today = new Date();
  for (let i = 0; i < n; i += 1) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    days.push(todayStr(date));
  }
  return days.reverse();
}

function dayScore(dateStr) {
  const total = state.routines.length + state.fitness.length;
  if (!total) return 0;
  let completed = 0;

  state.routines.forEach((routine) => {
    if (routine.history[dateStr]) completed += 1;
  });
  state.fitness.forEach((habit) => {
    if (habit.history[dateStr]) completed += 1;
  });

  return Math.round((completed / total) * 100);
}

function routineMonthlyRate() {
  const days = lastNDays(30);
  const total = days.length * state.routines.length;
  if (!total) return 0;
  let completed = 0;
  days.forEach((day) => {
    state.routines.forEach((routine) => {
      if (routine.history[day]) completed += 1;
    });
  });
  return Math.round((completed / total) * 100);
}

function fitnessMonthlyRate() {
  const days = lastNDays(30);
  const total = days.length * state.fitness.length;
  if (!total) return 0;
  let completed = 0;
  days.forEach((day) => {
    state.fitness.forEach((habit) => {
      if (habit.history[day]) completed += 1;
    });
  });
  return Math.round((completed / total) * 100);
}

function average(list) {
  if (!list.length) return 0;
  return Math.round(list.reduce((sum, val) => sum + val, 0) / list.length);
}

function updateCharts() {
  if (!window.Chart) return;

  const { completedToday, totalToday } = calculateTodayTotals();
  const remaining = Math.max(totalToday - completedToday, 0);

  const productivityLabels = lastNDays(7);
  const productivityData = productivityLabels.map((day) => dayScore(day));

  const progressLabels = lastNDays(30);
  const progressData = progressLabels.map((day) => dayScore(day));

  const routineLabels = lastNDays(14);
  const routineData = routineLabels.map((day) => {
    if (!state.routines.length) return 0;
    let done = 0;
    state.routines.forEach((routine) => {
      if (routine.history[day]) done += 1;
    });
    return Math.round((done / state.routines.length) * 100);
  });

  const fitnessLabels = lastNDays(14);
  const fitnessData = fitnessLabels.map((day) => {
    if (!state.fitness.length) return 0;
    let done = 0;
    state.fitness.forEach((habit) => {
      if (habit.history[day]) done += 1;
    });
    return Math.round((done / state.fitness.length) * 100);
  });

  if (!charts.completionChart) {
    charts.completionChart = new Chart(document.getElementById("completionChart"), {
      type: "doughnut",
      data: {
        labels: ["Completed", "Remaining"],
        datasets: [
          {
            data: [completedToday, remaining],
            backgroundColor: ["#18c08b", "#22314b"],
            borderWidth: 0
          }
        ]
      },
      options: {
        plugins: { legend: { position: "bottom", labels: { color: "#e7eef9" } } }
      }
    });
  } else {
    charts.completionChart.data.datasets[0].data = [completedToday, remaining];
    charts.completionChart.update();
  }

  if (!charts.productivityChart) {
    charts.productivityChart = new Chart(document.getElementById("productivityChart"), {
      type: "bar",
      data: {
        labels: productivityLabels,
        datasets: [
          {
            label: "Completion %",
            data: productivityData,
            backgroundColor: "#0b5fa5"
          }
        ]
      },
      options: {
        scales: {
          x: { ticks: { color: "#99a9c2" } },
          y: { ticks: { color: "#99a9c2" }, min: 0, max: 100 }
        },
        plugins: { legend: { labels: { color: "#e7eef9" } } }
      }
    });
  } else {
    charts.productivityChart.data.labels = productivityLabels;
    charts.productivityChart.data.datasets[0].data = productivityData;
    charts.productivityChart.update();
  }

  if (!charts.progressChart) {
    charts.progressChart = new Chart(document.getElementById("progressChart"), {
      type: "line",
      data: {
        labels: progressLabels,
        datasets: [
          {
            label: "Momentum",
            data: progressData,
            borderColor: "#18c08b",
            backgroundColor: "rgba(24, 192, 139, 0.18)",
            fill: true,
            tension: 0.35
          }
        ]
      },
      options: {
        scales: {
          x: { ticks: { color: "#99a9c2" } },
          y: { ticks: { color: "#99a9c2" }, min: 0, max: 100 }
        },
        plugins: { legend: { labels: { color: "#e7eef9" } } }
      }
    });
  } else {
    charts.progressChart.data.labels = progressLabels;
    charts.progressChart.data.datasets[0].data = progressData;
    charts.progressChart.update();
  }

  if (!charts.routineChart) {
    charts.routineChart = new Chart(document.getElementById("routineChart"), {
      type: "line",
      data: {
        labels: routineLabels,
        datasets: [
          {
            label: "Routine %",
            data: routineData,
            borderColor: "#f3b650",
            backgroundColor: "rgba(243, 182, 80, 0.2)",
            fill: true,
            tension: 0.3
          }
        ]
      },
      options: {
        scales: {
          x: { ticks: { color: "#99a9c2" } },
          y: { ticks: { color: "#99a9c2" }, min: 0, max: 100 }
        },
        plugins: { legend: { labels: { color: "#e7eef9" } } }
      }
    });
  } else {
    charts.routineChart.data.labels = routineLabels;
    charts.routineChart.data.datasets[0].data = routineData;
    charts.routineChart.update();
  }

  if (!charts.fitnessChart) {
    charts.fitnessChart = new Chart(document.getElementById("fitnessChart"), {
      type: "bar",
      data: {
        labels: fitnessLabels,
        datasets: [
          {
            label: "Fitness %",
            data: fitnessData,
            backgroundColor: "#18c08b"
          }
        ]
      },
      options: {
        scales: {
          x: { ticks: { color: "#99a9c2" } },
          y: { ticks: { color: "#99a9c2" }, min: 0, max: 100 }
        },
        plugins: { legend: { labels: { color: "#e7eef9" } } }
      }
    });
  } else {
    charts.fitnessChart.data.labels = fitnessLabels;
    charts.fitnessChart.data.datasets[0].data = fitnessData;
    charts.fitnessChart.update();
  }
}
function initNav() {
  const buttons = document.querySelectorAll(".nav button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.target;
      document.querySelectorAll(".section").forEach((section) => {
        section.classList.toggle("active", section.id === target);
      });
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

function initEvents() {
  document.getElementById("addRoutineBtn").addEventListener("click", () => {
    const input = document.getElementById("routineInput");
    const value = input.value.trim();
    if (!value) return;
    state.routines.push({ id: uid(), title: value, createdAt: todayStr(), history: {} });
    input.value = "";
    saveAndRender();
  });

  document.getElementById("addFitnessBtn").addEventListener("click", () => {
    const input = document.getElementById("fitnessInput");
    const value = input.value.trim();
    if (!value) return;
    state.fitness.push({ id: uid(), title: value, createdAt: todayStr(), history: {} });
    input.value = "";
    saveAndRender();
  });

  document.getElementById("startFitnessPlanBtn").addEventListener("click", () => {
    state.fitnessPlan = {
      startDate: todayStr(),
      days: defaultFitnessPlan.map((day) => ({
        day: day.day,
        tasks: day.tasks,
        done: day.tasks.map(() => false)
      }))
    };
    saveAndRender();
  });

  document.getElementById("addChallengeBtn").addEventListener("click", () => {
    const title = document.getElementById("challengeTitle").value.trim();
    const category = document.getElementById("challengeCategory").value;
    if (!title) return;
    state.challenges.push({
      id: uid(),
      title,
      category,
      createdAt: todayStr(),
      baseDifficulty: 1,
      tasks: []
    });
    document.getElementById("challengeTitle").value = "";
    saveAndRender();
  });

  document.getElementById("startThirtyBtn").addEventListener("click", () => {
    state.thirtyDay = {
      startDate: todayStr(),
      days: defaultThirtyDayPlan.map((day) => ({
        day: day.day,
        tasks: day.tasks,
        done: day.tasks.map(() => false)
      }))
    };
    saveAndRender();
  });

  document.getElementById("startSkillPlanBtn").addEventListener("click", () => {
    state.skillPlan = {
      startDate: todayStr(),
      days: defaultSkillPlan.map((day) => ({
        day: day.day,
        tasks: day.tasks,
        done: day.tasks.map(() => false)
      }))
    };
    saveAndRender();
  });

  document.getElementById("addProjectBtn").addEventListener("click", () => {
    const name = document.getElementById("projectName").value.trim();
    const progress = Number(document.getElementById("projectProgress").value) || 0;
    const taskText = document.getElementById("projectTask").value.trim();
    if (!name) return;

    const tasks = taskText ? [{ id: uid(), title: taskText, done: false }] : [];

    state.projects.push({
      id: uid(),
      name,
      progress: Math.min(100, Math.max(0, progress)),
      status: "Active",
      tasks
    });

    document.getElementById("projectName").value = "";
    document.getElementById("projectProgress").value = "";
    document.getElementById("projectTask").value = "";
    saveAndRender();
  });

  document.getElementById("addStartupBtn").addEventListener("click", () => {
    const idea = document.getElementById("startupIdea").value.trim();
    const task = document.getElementById("startupTask").value.trim();
    const milestone = document.getElementById("startupMilestone").value.trim();

    if (idea) state.startup.idea = idea;
    if (task) state.startup.tasks.push({ id: uid(), title: task, done: false });
    if (milestone) state.startup.milestones.push(milestone);

    document.getElementById("startupTask").value = "";
    document.getElementById("startupMilestone").value = "";
    saveAndRender();
  });

  document.getElementById("addSkillBtn").addEventListener("click", () => {
    const name = document.getElementById("skillName").value.trim();
    const task = document.getElementById("skillTask").value.trim();
    if (!name) return;

    const tasks = task ? [{ id: uid(), title: task, done: false }] : [];
    state.skills.push({ id: uid(), name, tasks });

    document.getElementById("skillName").value = "";
    document.getElementById("skillTask").value = "";
    saveAndRender();
  });

  document.getElementById("addAllStarterSkills").addEventListener("click", () => {
    const existing = new Set(state.skills.map((skill) => skill.name.toLowerCase()));
    starterSkills.forEach((skill) => {
      if (!existing.has(skill.toLowerCase())) {
        state.skills.push({ id: uid(), name: skill, tasks: [] });
      }
    });
    saveAndRender();
  });

  document.getElementById("addPlanBtn").addEventListener("click", () => {
    const time = document.getElementById("planTime").value.trim();
    const task = document.getElementById("planTask").value.trim();
    const duration = document.getElementById("planDuration").value.trim();
    if (!time || !task) return;

    const day = todayStr();
    if (!state.planner[day]) state.planner[day] = [];
    state.planner[day].push({ id: uid(), time, task, duration: duration || "" });

    document.getElementById("planTime").value = "";
    document.getElementById("planTask").value = "";
    document.getElementById("planDuration").value = "";
    saveAndRender();
  });

  document.addEventListener("click", (event) => {
    const target = event.target;

    if (target.classList.contains("edit-routine")) {
      const routine = state.routines.find((item) => item.id === target.dataset.id);
      if (!routine) return;
      const updated = prompt("Edit routine", routine.title);
      if (updated) routine.title = updated.trim();
      saveAndRender();
    }

    if (target.classList.contains("delete-routine")) {
      state.routines = state.routines.filter((item) => item.id !== target.dataset.id);
      saveAndRender();
    }

    if (target.classList.contains("edit-fitness")) {
      const habit = state.fitness.find((item) => item.id === target.dataset.id);
      if (!habit) return;
      const updated = prompt("Edit fitness habit", habit.title);
      if (updated) habit.title = updated.trim();
      saveAndRender();
    }

    if (target.classList.contains("delete-fitness")) {
      state.fitness = state.fitness.filter((item) => item.id !== target.dataset.id);
      saveAndRender();
    }

    if (target.classList.contains("add-challenge-task")) {
      const challenge = state.challenges.find((item) => item.id === target.dataset.id);
      if (!challenge) return;
      const input = document.querySelector(`.challenge-task-input[data-id="${challenge.id}"]`);
      const value = input.value.trim();
      if (!value) return;
      challenge.tasks.push({ id: uid(), title: value, done: false });
      input.value = "";
      saveAndRender();
    }

    if (target.classList.contains("delete-challenge")) {
      state.challenges = state.challenges.filter((item) => item.id !== target.dataset.id);
      saveAndRender();
    }

    if (target.classList.contains("add-project-task")) {
      const project = state.projects.find((item) => item.id === target.dataset.id);
      if (!project) return;
      const input = document.querySelector(`.project-task-input[data-id="${project.id}"]`);
      const value = input.value.trim();
      if (!value) return;
      project.tasks.push({ id: uid(), title: value, done: false });
      input.value = "";
      saveAndRender();
    }

    if (target.classList.contains("toggle-project-status")) {
      const project = state.projects.find((item) => item.id === target.dataset.id);
      if (!project) return;
      project.status = project.status === "Completed" ? "Active" : "Completed";
      saveAndRender();
    }

    if (target.classList.contains("delete-project")) {
      state.projects = state.projects.filter((item) => item.id !== target.dataset.id);
      saveAndRender();
    }

    if (target.classList.contains("add-skill-task")) {
      const skill = state.skills.find((item) => item.id === target.dataset.id);
      if (!skill) return;
      const input = document.querySelector(`.skill-task-input[data-id="${skill.id}"]`);
      const value = input.value.trim();
      if (!value) return;
      skill.tasks.push({ id: uid(), title: value, done: false });
      input.value = "";
      saveAndRender();
    }

    if (target.classList.contains("start-skill-challenge")) {
      const skill = state.skills.find((item) => item.id === target.dataset.id);
      if (!skill) return;
      skill.challenge = {
        startDate: todayStr(),
        days: buildSkillChallenge(skill.name).map((day) => ({
          day: day.day,
          tasks: day.tasks,
          done: day.tasks.map(() => false)
        }))
      };
      saveAndRender();
    }

    if (target.classList.contains("add-starter-skill")) {
      const skillName = target.dataset.skill;
      if (!skillName) return;
      const exists = state.skills.some((skill) => skill.name.toLowerCase() === skillName.toLowerCase());
      if (exists) return;
      state.skills.push({ id: uid(), name: skillName, tasks: [] });
      saveAndRender();
    }

    if (target.classList.contains("delete-skill")) {
      state.skills = state.skills.filter((item) => item.id !== target.dataset.id);
      saveAndRender();
    }

    if (target.classList.contains("delete-plan")) {
      const day = todayStr();
      state.planner[day] = (state.planner[day] || []).filter((plan) => plan.id !== target.dataset.id);
      saveAndRender();
    }

    if (target.classList.contains("delete-milestone")) {
      state.startup.milestones = state.startup.milestones.filter((item) => item !== target.dataset.title);
      saveAndRender();
    }
  });

  document.addEventListener("change", (event) => {
    const target = event.target;
    const today = todayStr();

    if (target.classList.contains("routine-check")) {
      const routine = state.routines.find((item) => item.id === target.dataset.id);
      if (!routine) return;
      routine.history[today] = target.checked;
      saveAndRender();
    }

    if (target.classList.contains("fitness-check")) {
      const habit = state.fitness.find((item) => item.id === target.dataset.id);
      if (!habit) return;
      habit.history[today] = target.checked;
      saveAndRender();
    }

    if (target.classList.contains("fitness-plan-task")) {
      const dayNumber = Number(target.dataset.day);
      const index = Number(target.dataset.index);
      const day = state.fitnessPlan.days.find((item) => item.day === dayNumber);
      if (!day) return;
      day.done[index] = target.checked;
      saveAndRender();
    }

    if (target.classList.contains("challenge-task")) {
      const challenge = state.challenges.find((item) => item.id === target.dataset.challengeId);
      if (!challenge) return;
      const task = challenge.tasks.find((item) => item.id === target.dataset.taskId);
      if (!task) return;
      task.done = target.checked;
      saveAndRender();
    }

    if (target.classList.contains("project-task")) {
      const project = state.projects.find((item) => item.id === target.dataset.projectId);
      if (!project) return;
      const task = project.tasks.find((item) => item.id === target.dataset.taskId);
      if (!task) return;
      task.done = target.checked;
      saveAndRender();
    }

    if (target.classList.contains("skill-task")) {
      const skill = state.skills.find((item) => item.id === target.dataset.skillId);
      if (!skill) return;
      const task = skill.tasks.find((item) => item.id === target.dataset.taskId);
      if (!task) return;
      task.done = target.checked;
      saveAndRender();
    }

    if (target.classList.contains("skill-challenge-task")) {
      const skill = state.skills.find((item) => item.id === target.dataset.skillId);
      if (!skill || !skill.challenge) return;
      const dayNumber = Number(target.dataset.day);
      const index = Number(target.dataset.index);
      const day = skill.challenge.days.find((item) => item.day === dayNumber);
      if (!day) return;
      day.done[index] = target.checked;
      saveAndRender();
    }

    if (target.classList.contains("startup-task")) {
      const task = state.startup.tasks.find((item) => item.id === target.dataset.taskId);
      if (!task) return;
      task.done = target.checked;
      saveAndRender();
    }

    if (target.classList.contains("thirty-task")) {
      const dayNumber = Number(target.dataset.day);
      const index = Number(target.dataset.index);
      const day = state.thirtyDay.days.find((item) => item.day === dayNumber);
      if (!day) return;
      day.done[index] = target.checked;
      saveAndRender();
    }

    if (target.classList.contains("skill-plan-task")) {
      const dayNumber = Number(target.dataset.day);
      const index = Number(target.dataset.index);
      const day = state.skillPlan.days.find((item) => item.day === dayNumber);
      if (!day) return;
      day.done[index] = target.checked;
      saveAndRender();
    }
  });
}

function saveAndRender() {
  saveData();
  renderAll();
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js").catch((error) => {
      console.error("Service worker registration failed", error);
    });
  }
}

window.addEventListener("load", () => {
  setTodayLabel();
  initNav();
  initEvents();
  renderAll();
  registerServiceWorker();

  const chartInterval = setInterval(() => {
    if (window.Chart) {
      updateCharts();
      clearInterval(chartInterval);
    }
  }, 200);
});
