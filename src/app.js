const profiles = {
  recruiter: {
    name: "Recruiter",
    short: "The signal-rich version",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Professionals talking around a table",
    eyebrow: "For people building teams",
    title: "Software engineer for the systems that cannot blink.",
    description:
      "Lokesh builds developer platforms and financial-data systems with measurable outcomes: lower support overhead, faster integrations, and reliability at real production volume.",
    action: "See career highlights",
    kicker: "Top picks for recruiters",
    highlightsTitle: "Impact with receipts",
    stats: [
      ["50M+", "daily financial-data transactions"],
      ["99.95%", "platform uptime SLA"],
      ["70%", "less onboarding support time"],
    ],
    highlightIds: ["idx", "rag", "onboarding"],
  },
  designer: {
    name: "Designer",
    short: "The product-and-systems version",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Designer working with a color palette and a laptop",
    eyebrow: "For people who care about the experience",
    title: "Clear journeys, even when the platform underneath is complex.",
    description:
      "From self-serve API onboarding to searchable documentation and responsive Angular interfaces, Lokesh turns complicated systems into tools people can actually use.",
    action: "Explore the work",
    kicker: "Selected for design-minded collaborators",
    highlightsTitle: "Where engineering meets clarity",
    stats: [
      ["350+", "microservices made easier to navigate"],
      ["40%", "faster API integrations"],
      ["30%", "better application performance"],
    ],
    highlightIds: ["onboarding", "rag", "angular"],
  },
  friends: {
    name: "Friends",
    short: "The human version",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "A group of friends laughing together outdoors",
    eyebrow: "For the people cheering from the front row",
    title: "A builder who likes making difficult things feel doable.",
    description:
      "Lokesh has worked on everything from a farmer-support chatbot to the financial-data systems behind products millions of people use. The through line is simple: build useful things, then make them better.",
    action: "See the story",
    kicker: "A few favorite chapters",
    highlightsTitle: "What Lokesh has been up to",
    stats: [
      ["4", "engineering roles across India and the U.S."],
      ["8x", "more throughput in a critical pipeline"],
      ["60%", "faster incident resolution"],
    ],
    highlightIds: ["farmer", "idx", "migration"],
  },
};

const highlights = {
  idx: {
    label: "Intuit · Data Exchange",
    title: "Financial data at production scale",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=85",
    summary: "Secure ingestion and processing for the platform behind QuickBooks, TurboTax, and Credit Karma.",
    metric: "50M+ daily transactions",
    details:
      "Engineered secure, high-throughput data ingestion and processing on Intuit's Data Exchange platform. The platform processes banking and account data across the Intuit ecosystem with a 99.95% uptime SLA.",
    tags: ["Distributed systems", "Financial data", "Reliability"],
  },
  rag: {
    label: "Intuit · Developer productivity",
    title: "Documentation with the right context",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1000&q=85",
    summary: "A RAG documentation pipeline that turns service code into useful, structured context for engineers.",
    metric: "350+ services · 200+ daily users",
    details:
      "Designed and built a RAG-based documentation pipeline that ingests source code across more than 350 internal microservices and generates structured API and architecture documentation. Deployed as live context to an LLM-powered developer assistant used by over 200 engineers daily.",
    tags: ["RAG", "LLM applications", "Developer experience"],
  },
  onboarding: {
    label: "Intuit · Platform experience",
    title: "Self-serve API onboarding",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=85",
    summary: "An onboarding portal that helped product teams integrate financial-data APIs without manual support.",
    metric: "70% less support time",
    details:
      "Built a self-serve onboarding portal for financial data and account APIs, enabling TurboTax, Credit Karma, and QuickBooks teams to integrate independently. It reduced onboarding support time by 70%.",
    tags: ["API design", "Self-service", "Product systems"],
  },
  angular: {
    label: "Tata Consultancy Services · UI engineering",
    title: "Responsive interfaces with design fidelity",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1000&q=85",
    summary: "Reusable Angular components translated from Adobe XD designs for dependable, responsive web experiences.",
    metric: "Design to production",
    details:
      "Built and maintained reusable, responsive UI components by translating Adobe XD designs into production-ready Angular code, maintaining cross-device consistency and visual fidelity.",
    tags: ["Angular", "Adobe XD", "Responsive UI"],
  },
  farmer: {
    label: "Rover · Early chapter",
    title: "A chatbot for farmers",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1000&q=85",
    summary: "A mobile-first assistant that brought market and supply insights closer to people who needed them.",
    metric: "NLP + real-world data",
    details:
      "Built a farmer chatbot using intent classification, LSTMs, and ELMo to surface farming insights from third-party supply-price and market-trend APIs. The Flask and Python backend was integrated into a React Native mobile app.",
    tags: ["NLP", "Python", "React Native"],
  },
  migration: {
    label: "Intuit · Platform modernization",
    title: "A zero-downtime move",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1000&q=85",
    summary: "High-volume banking payment flows moved onto a consolidated core platform without breaking existing consumers.",
    metric: "10M+ annual transactions",
    details:
      "Owned the end-to-end migration of high-volume banking payment flows with more than 10 million annual transactions onto a consolidated core platform, achieving zero-downtime cutover and backward compatibility across legacy consumer-facing APIs.",
    tags: ["Platform migration", "APIs", "Backward compatibility"],
  },
};

const experiences = [
  {
    company: "Intuit",
    role: "Software Engineer",
    dates: "Jan 2026 - Present",
    location: "Mountain View, CA",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85",
    summary: "Developer tooling and high-volume financial-data systems for the Intuit ecosystem.",
    details: [
      "Built self-serve API onboarding that reduced support time by 70%.",
      "Developed RAG documentation across 350+ microservices, cutting integration time by 40% and LLM costs by 30%.",
      "Improved Kafka-based ingestion throughput 8x while reducing latency from 5 seconds to 200 milliseconds.",
      "Reduced MTTR by 60% with distributed tracing and log-analysis tooling.",
    ],
    tags: ["Java", "Kafka", "RAG", "Splunk", "APIs"],
  },
  {
    company: "AT&T",
    role: "Software Engineer",
    dates: "May 2024 - Jan 2026",
    location: "Remote",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85",
    summary: "Cloud-native microservices and automated delivery on AWS.",
    details: [
      "Deployed JavaScript microservices on AWS with EKS, EC2, ASG, ELB, and RDS.",
      "Improved application performance by 30% through Kubernetes orchestration.",
      "Automated cloud infrastructure with CloudFormation and Terraform.",
      "Reduced deployment time by 40% with CodeBuild, CodeDeploy, and CodePipeline.",
    ],
    tags: ["AWS", "Kubernetes", "Terraform", "JavaScript"],
  },
  {
    company: "Tata Consultancy Services",
    role: "Systems Engineer",
    dates: "Oct 2021 - Aug 2022",
    location: "Hyderabad, India",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1000&q=85",
    summary: "Responsive Angular applications backed by Firebase services.",
    details: [
      "Contributed to Angular web applications with Firestore, Authentication, and Cloud Functions.",
      "Translated Adobe XD designs into reusable responsive components with cross-device consistency.",
    ],
    tags: ["Angular", "Firebase", "Adobe XD"],
  },
  {
    company: "Rover",
    role: "Software Intern",
    dates: "May 2021 - Aug 2021",
    location: "Hyderabad, India",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1000&q=85",
    summary: "An NLP-powered mobile chatbot for farming insights.",
    details: [
      "Built an intent-classification chatbot with LSTMs and ELMo for real-time farming insights.",
      "Connected third-party market and supply-price data through a Flask and Python backend.",
      "Integrated the assistant into a React Native mobile experience.",
    ],
    tags: ["Python", "Flask", "NLP", "React Native"],
  },
];

const skillGroups = [
  ["Languages", ["Java", "Python", "JavaScript", "SQL", "C++", "Bash"]],
  ["AI and developer productivity", ["RAG", "LLM applications", "Prompt engineering", "NLP", "Context engineering"]],
  ["Backend and data", ["Spring Boot", "Node.js", "REST APIs", "gRPC", "Kafka", "Redis", "MySQL", "DynamoDB"]],
  ["Cloud and reliability", ["Kubernetes", "Docker", "Terraform", "CloudFormation", "Splunk", "OpenTelemetry", "Datadog", "Grafana"]],
];

const chooser = document.getElementById("profileChooser");
const app = document.getElementById("portfolioApp");
const profilesGrid = document.getElementById("profilesGrid");
const hero = document.getElementById("hero");
const dialog = document.getElementById("detailDialog");
const dialogContent = document.getElementById("dialogContent");
let activeProfile = null;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderChooser() {
  profilesGrid.innerHTML = Object.entries(profiles)
    .map(
      ([id, profile]) => `
        <button class="profile-card" type="button" data-profile="${id}" aria-label="View Lokesh's portfolio as a ${profile.name}">
          <span class="profile-image-wrap">
            <img src="${profile.image}" alt="${profile.imageAlt}" />
          </span>
          <span class="profile-name">${profile.name}</span>
          <span class="profile-caption">${profile.short}</span>
        </button>
      `
    )
    .join("");

  profilesGrid.querySelectorAll("[data-profile]").forEach((button) => {
    button.addEventListener("click", () => activateProfile(button.dataset.profile));
  });
}

function renderStats(stats) {
  document.getElementById("stats").innerHTML = stats
    .map(
      ([value, label]) => `
        <article class="stat">
          <strong>${value}</strong>
          <span>${label}</span>
        </article>
      `
    )
    .join("");
}

function renderHighlights(profile) {
  document.getElementById("highlightsKicker").textContent = profile.kicker;
  document.getElementById("highlightsTitle").textContent = profile.highlightsTitle;
  document.getElementById("highlightsRow").innerHTML = profile.highlightIds
    .map((id) => {
      const item = highlights[id];
      return `
        <button class="show-card highlight-card" type="button" data-highlight="${id}">
          <img src="${item.image}" alt="" />
          <span class="show-card-body">
            <span class="card-label">${item.label}</span>
            <strong>${item.title}</strong>
            <span>${item.summary}</span>
            <em>${item.metric}</em>
          </span>
        </button>
      `;
    })
    .join("");

  document.querySelectorAll("[data-highlight]").forEach((card) => {
    card.addEventListener("click", () => openHighlight(card.dataset.highlight));
  });
}

function renderExperience() {
  document.getElementById("experienceRow").innerHTML = experiences
    .map(
      (experience, index) => `
        <button class="show-card experience-card" type="button" data-experience="${index}">
          <img src="${experience.image}" alt="" />
          <span class="show-card-body">
            <span class="card-label">${experience.dates}</span>
            <strong>${experience.company}</strong>
            <span>${experience.role} · ${experience.location}</span>
            <em>${experience.summary}</em>
          </span>
        </button>
      `
    )
    .join("");

  document.querySelectorAll("[data-experience]").forEach((card) => {
    card.addEventListener("click", () => openExperience(Number(card.dataset.experience)));
  });
}

function renderSkills() {
  document.getElementById("skillsGrid").innerHTML = skillGroups
    .map(
      ([title, skills]) => `
        <article class="skill-group">
          <h3>${title}</h3>
          <div class="chip-list">${skills.map((skill) => `<span>${skill}</span>`).join("")}</div>
        </article>
      `
    )
    .join("");
}

function openHighlight(id) {
  const item = highlights[id];
  dialogContent.innerHTML = `
    <p class="dialog-kicker">${item.label}</p>
    <h2 id="dialogTitle">${item.title}</h2>
    <p class="dialog-metric">${item.metric}</p>
    <p class="dialog-copy">${item.details}</p>
    <div class="dialog-tags">${item.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
  `;
  dialog.showModal();
}

function openExperience(index) {
  const item = experiences[index];
  dialogContent.innerHTML = `
    <p class="dialog-kicker">${item.dates} · ${item.location}</p>
    <h2 id="dialogTitle">${item.role} at ${item.company}</h2>
    <p class="dialog-copy">${item.summary}</p>
    <ul class="dialog-list">${item.details.map((detail) => `<li>${escapeHtml(detail)}</li>`).join("")}</ul>
    <div class="dialog-tags">${item.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
  `;
  dialog.showModal();
}

function activateProfile(id) {
  const profile = profiles[id];
  if (!profile) return;

  activeProfile = id;
  document.body.dataset.profile = id;
  document.title = `Lokesh Reddy Gangasani | ${profile.name} view`;
  hero.style.backgroundImage = `url("${profile.image}")`;
  document.getElementById("heroEyebrow").textContent = profile.eyebrow;
  document.getElementById("heroTitle").textContent = profile.title;
  document.getElementById("heroDescription").textContent = profile.description;
  document.getElementById("heroActions").innerHTML = `
    <a class="button button-light" href="#highlights">${profile.action}</a>
    <a class="button button-quiet" href="./assets/Lokesh_Reddy_Gangasani_Resume.pdf" target="_blank" rel="noreferrer">Open resume</a>
  `;

  renderStats(profile.stats);
  renderHighlights(profile);
  renderExperience();
  renderSkills();
  chooser.hidden = true;
  app.hidden = false;
  window.scrollTo({ top: 0, behavior: "instant" });
}

function showChooser() {
  activeProfile = null;
  app.hidden = true;
  chooser.hidden = false;
  document.title = "Lokesh Reddy Gangasani | Software Engineer";
  window.scrollTo({ top: 0, behavior: "instant" });
}

document.getElementById("profileSwitchButton").addEventListener("click", showChooser);
document.getElementById("closeDialogButton").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

renderChooser();
