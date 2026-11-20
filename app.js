(function () {
  'use strict';

  // 1. PROJECTS DATASET
  const projectsData = {
    kedy: {
      title: "Co-Founder & CTO, Kedy Technologies",
      date: "2025 – Present",
      summary: "Co-founded Kedy, an efficient-AI research lab between İzmir and San Francisco, and lead technical development of our flagship model NOVAQ and the E1 small-language-model family.",
      highlights: [
        "NOVAQ scores 88.5% on IFEval (instruction-level, strict).",
        "Built the synthetic-data and fine-tuning pipeline behind every model we ship.",
        "Shipped an OpenAI-compatible chat API and a developer dashboard.",
        "Deployed fine-tuned E1 models for a space-debris nonprofit's collision work and an FRC robot (+30% in autonomous).",
        "1,000 users in launch week; 3rd place at Princeton's Tiger Launch startup competition."
      ],
      tags: ["LLM fine-tuning", "Synthetic data", "PyTorch", "API design"],
      links: [{ label: "Visit kedy.dev", url: "https://www.kedy.dev" }]
    },
    tickmark: {
      title: "Tickmark — Finalist, BBS × Ramp Hackathon",
      date: "Oct 2026",
      summary: "Co-built (team of 2) an app that turns an auditor's request list into a cited evidence binder, pulled from live Ramp data.",
      highlights: [
        "Caught 8 of 8 planted control failures with 0 false alarms.",
        "Flagged 122 exceptions across a 1,170-transaction Ramp sandbox.",
        "Every finding is cited back to the source transaction, so auditors can verify it in one click."
      ],
      tags: ["TypeScript", "Next.js", "Claude API", "Ramp API", "MCP"],
      links: [{ label: "View on GitHub", url: "https://github.com/VolodymyrLinuxovich/tickmark" }]
    },
    chameleon: {
      title: "Chameleon — Finalist, Adobe University Hackathon",
      date: "Oct 2026",
      summary: "Co-built (team of 2) an engine that rearranges a design for any canvas size instead of stretching it.",
      highlights: [
        "Passed every hard layout rule on 2,250 of 2,250 test resizes across 15 formats.",
        "A plain stretch passes the same rules only 3% of the time.",
        "North America finalist at Adobe's University Hackathon."
      ],
      tags: ["Python", "Skia", "pytest", "Docker"],
      links: [{ label: "View on GitHub", url: "https://github.com/VolodymyrLinuxovich/chameleon" }]
    },
    earthquake: {
      title: "Earthquake Early Warning & Structural Safety System",
      date: "2022 – 2024",
      summary: "After the 2020 İzmir earthquake, I built a low-cost way to find unsafe buildings: model how a building should sway, then let a CNN read the gap between that model and real accelerometer data.",
      highlights: [
        "Modeled building sway with a differential equation; trained a CNN on its gap vs. real sensor readings.",
        "Cut the cost of unsafe-building detection by 93%.",
        "Won me a Rise Global Fellowship (Rhodes Trust & Schmidt Futures) — 1 of 100 from 10,000+ applicants.",
        "Presented at the University of Oxford and covered in 20+ news stories."
      ],
      tags: ["CNN", "Differential equations", "Accelerometers", "Python"],
      links: [{ label: "Watch the Oxford talk", url: "https://youtu.be/EbbGutxnNeg" }]
    },
    veo3: {
      title: "Detecting Veo 3 AI-Generated Video",
      date: "2024 – 2025",
      summary: "Independent research on telling Google Veo 3 videos apart from real footage, written up as a paper with feedback from Prof. Hanan Hibshi (Carnegie Mellon).",
      highlights: [
        "Trained a CNN classifier that detects Veo 3-generated video with ~91% accuracy.",
        "Looks at frame consistency and the artifact signatures generative video leaves behind.",
        "Wrote up the method as a research paper reviewed by Prof. Hibshi."
      ],
      tags: ["CNN", "Computer vision", "PyTorch", "Media forensics"],
      links: []
    },
    actior: {
      title: "Co-Founder & CEO, Actior Exam Management Systems",
      date: "2024 – 2026",
      summary: "Built and sold a SQL-backed web platform that automates exam enrollment, payments and announcements for schools.",
      highlights: [
        "Signed 2 schools to annual B2B subscriptions.",
        "The platform has processed 10,000+ exam applications.",
        "Handles registration, online payments, seating and admin reporting in one place."
      ],
      tags: ["SQL", "Web platform", "Payments", "B2B SaaS"],
      links: []
    },
    solar: {
      title: "Research Intern, Solaris Solar Car Team",
      date: "2024 – 2025",
      summary: "First high-school intern on the university's solar car team, researching driver-assist algorithms that cut the car's energy use.",
      highlights: [
        "Researched speed and power strategies that help the driver manage battery charge over a race.",
        "Team finished 2nd in efficiency and 3rd overall of 50+ teams at the Albi Eco Race."
      ],
      tags: ["Optimization", "Telemetry", "Energy"],
      links: []
    },
    rocket: {
      title: "Co-Founder & Head of Avionics, Model Rocket Team",
      date: "2022 – 2026",
      summary: "Led avionics R&D for 3 model rockets — flight computers, telemetry and recovery.",
      highlights: [
        "Best flight carried a 4 kg (9 lb) experimental payload to 7,400 ft.",
        "Designed and simulation-tested flight electronics before every launch."
      ],
      tags: ["Avionics", "Embedded", "Telemetry", "Simulation"],
      links: []
    },
    frc: {
      title: "Sub-Division Lead, FIRST Robotics Competition Team",
      date: "2022 – 2026",
      summary: "Ran planning, execution and reporting for the team's outreach work.",
      highlights: [
        "Managed 50+ outreach projects that reached 3 million people.",
        "Won the Engineering Inspiration Award at the FIRST World Championship.",
        "Helped secure NASA grants for the team twice."
      ],
      tags: ["Leadership", "Outreach", "Robotics"],
      links: []
    },
    cras: {
      title: "Creator, Cras AI",
      date: "2024",
      summary: "A multilingual LLM platform that reads PDFs and images and answers questions about them, on a Go microservice backend.",
      highlights: [
        "Document pipeline with OCR and vector-embedding search.",
        "Streams LLM answers in real time across multiple languages."
      ],
      tags: ["Go", "LLMs", "OCR", "Vector search"],
      links: []
    },
    rumer: {
      title: "Founder, Rumer Digital Business Cards",
      date: "2024",
      summary: "A digital business card platform for sharing contact details instantly over NFC and QR codes.",
      highlights: [
        "Tap or scan to exchange contact cards.",
        "Tracks who viewed your card and when."
      ],
      tags: ["Full-stack", "NFC", "QR"],
      links: []
    }
  };

  // 2. DOM ELEMENTS FOR PROJECT DETAILS WORKSPACE
  const projectDetailTitle = document.getElementById('project-detail-title');
  const projectDetailDate = document.getElementById('project-detail-date');
  const projectDetailSummary = document.getElementById('project-detail-summary');
  const projectDetailHighlights = document.getElementById('project-detail-highlights');
  const projectDetailTags = document.getElementById('project-detail-tags');
  const projectDetailLinks = document.getElementById('project-detail-links');
  const emptyState = document.getElementById('projects-empty-state');
  const detailWorkspace = document.getElementById('project-detail-workspace');

  function resetProjectsWorkspace() {
    if (emptyState) emptyState.style.display = 'flex';
    if (detailWorkspace) detailWorkspace.style.display = 'none';
    document.querySelectorAll('.project-book-item').forEach(item => item.classList.remove('selected-project'));
  }

  function el(tag, text, attrs) {
    const node = document.createElement(tag);
    if (text) node.textContent = text;
    if (attrs) Object.entries(attrs).forEach(([k, v]) => node.setAttribute(k, v));
    return node;
  }

  function renderProjectDetails(projectId) {
    const data = projectsData[projectId];
    if (!data) return;

    projectDetailTitle.textContent = data.title;
    projectDetailDate.textContent = data.date;
    projectDetailSummary.textContent = data.summary;
    projectDetailHighlights.replaceChildren(...data.highlights.map(h => el('li', h)));
    projectDetailTags.replaceChildren(...data.tags.map(t => el('span', t)));
    projectDetailLinks.replaceChildren(...data.links.map(l =>
      el('a', `${l.label} ↗`, { href: l.url, target: '_blank', rel: 'noopener noreferrer', class: 'project-download-btn' })
    ));
    projectDetailLinks.style.display = data.links.length ? '' : 'none';

    if (emptyState) emptyState.style.display = 'none';
    if (detailWorkspace) { detailWorkspace.style.display = 'flex'; detailWorkspace.scrollTop = 0; }

    document.querySelectorAll('.project-book-item').forEach(item => {
      item.classList.toggle('selected-project', item.getAttribute('data-project') === projectId);
    });
  }

  // 3. SEAMLESS SHELF TIER & SECTION SWITCHING (DEFAULT: COFFEE CHAT)
  const shelfTiers = document.querySelectorAll('.shelf-tier');
  const sections = document.querySelectorAll('.section');
  let previousActiveTier = document.querySelector('.shelf-tier.active') || shelfTiers[3]; // Default Tier IV (Coffee Chat)

  function activateSection(targetId) {
    sections.forEach(s => s.classList.remove('active'));
    const targetSection = document.getElementById(`section-${targetId}`);
    if (targetSection) {
      targetSection.classList.add('active');
    }
  }

  shelfTiers.forEach(tier => {
    tier.addEventListener('click', (e) => {
      const target = tier.getAttribute('data-section');

      // If user clicks a specific project book inside Shelf Tier II
      const projectItem = e.target.closest('[data-project]');
      if (projectItem) {
        e.stopPropagation();
        const projectId = projectItem.getAttribute('data-project');
        
        // Render project details into main workspace
        renderProjectDetails(projectId);
        
        // Collapse expanded shelf navbar tier!
        shelfTiers.forEach(t => t.classList.remove('active'));
        
        // Activate main Projects section
        activateSection('projects');
        return;
      }

      // Check if clicking the currently active tier a second time
      if (tier.classList.contains('active')) {
        tier.classList.remove('active');

        if (previousActiveTier && previousActiveTier !== tier) {
          previousActiveTier.classList.add('active');
          const prevTarget = previousActiveTier.getAttribute('data-section');
          activateSection(prevTarget);
          if (prevTarget === 'projects') {
            resetProjectsWorkspace();
          }
        } else {
          // Default fallback to Coffee Chat tier
          const coffeeTier = document.querySelector('.shelf-tier[data-section="coffee"]');
          if (coffeeTier) coffeeTier.classList.add('active');
          activateSection('coffee');
        }
        return;
      }

      // First click on a new tier: remember current active tier before switching
      const currentActive = document.querySelector('.shelf-tier.active');
      if (currentActive) {
        previousActiveTier = currentActive;
      }

      shelfTiers.forEach(t => t.classList.remove('active'));
      tier.classList.add('active');
      activateSection(target);

      // When clicking Projects tier, always reset main workspace to clean empty state until a specific project is chosen
      if (target === 'projects') {
        resetProjectsWorkspace();
      }
    });
  });

  // 4. OXFORD SPEECH DETAILS POPUP MODAL HANDLER
  const btnOpenDetails = document.getElementById('btn-open-details');
  const detailsModal = document.getElementById('details-modal');
  const closeDetailsBtn = document.getElementById('close-details-btn');

  if (btnOpenDetails && detailsModal && closeDetailsBtn) {
    btnOpenDetails.addEventListener('click', () => {
      detailsModal.classList.add('open');
    });

    closeDetailsBtn.addEventListener('click', () => {
      detailsModal.classList.remove('open');
    });

    detailsModal.addEventListener('click', (e) => {
      if (e.target === detailsModal) {
        detailsModal.classList.remove('open');
      }
    });
  }

  // 4b. ABOUT ME MODAL
  const aboutModal = document.getElementById('about-modal');
  const btnOpenAbout = document.getElementById('btn-open-about');
  const closeAboutBtn = document.getElementById('close-about-btn');
  const openAbout = () => aboutModal.classList.add('open');
  const closeAbout = () => {
    aboutModal.classList.remove('open');
    if (location.hash === '#about') history.replaceState(null, '', location.pathname + location.search);
  };

  if (aboutModal && btnOpenAbout && closeAboutBtn) {
    btnOpenAbout.addEventListener('click', (e) => { e.preventDefault(); openAbout(); });
    closeAboutBtn.addEventListener('click', closeAbout);
    aboutModal.addEventListener('click', (e) => { if (e.target === aboutModal) closeAbout(); });
    if (location.hash === '#about') openAbout();
  }

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open'));
  });

  // 5. HEAD CLICK VIBRANT SPIN TRIGGER (NO MOUSE TRACKING)
  const userHeadWrapper = document.querySelector('.user-head-wrapper');

  if (userHeadWrapper) {
    userHeadWrapper.addEventListener('click', (e) => {
      e.stopPropagation();
      userHeadWrapper.classList.add('vibrant-spin');

      setTimeout(() => {
        userHeadWrapper.classList.remove('vibrant-spin');
      }, 1500);
    });
  }

})();
