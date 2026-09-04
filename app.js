(function () {
  'use strict';

  // 1. REAL PROJECTS DATASET MATCHING MERTOZKARDES.COM.TR
  const projectsData = {
    rocket: {
      title: "Head of Avionics, Model Rocket Club",
      date: "2022 – 2026",
      summary: "Led the R&D of 3 model rockets carrying 9 lbs of experimental payload to 7,400 ft with a focus on avionics design and simulation testing of components in flight.",
      lorem: "Developed telemetry systems, flight computer microcontrollers, and recovery parachutes for high-altitude atmospheric rockets. Tested extensively in flight simulations and real flight launches at TeknoFest aerospace competitions.",
      fileName: "Model_Rocket_Avionics_Report.pdf",
      docUrl: "https://www.mertozkardes.com.tr/",
      projectUrl: "https://www.mertozkardes.com.tr/"
    },
    earthquake: {
      title: "Founder, Earthquake Early Warning & Structural Safety System",
      date: "2022 – 2024",
      summary: "Reduced unsafe building detection costs x15 and was invited as a speaker by the ministry for creating the first CNN-based model comparing acceleration data against the calculated risk.",
      lorem: "Created following the 2020 İzmir earthquake. Selected as one of 100 Rise Global Winners by Rhodes Trust & Schmidt Futures for converting complex seismic acceleration data into real-time 3D risk assessment models.",
      fileName: "Earthquake_Safety_Model_Report.pdf",
      docUrl: "https://www.mertozkardes.com.tr/",
      projectUrl: "https://www.mertozkardes.com.tr/"
    },
    actior: {
      title: "Co-Founder, Actior Exam Management Systems",
      date: "2024",
      summary: "Managed over 10,000 individual applications over 2 schools by co-creating an internal exam registration and management portal for students and administrators.",
      lorem: "Built a high-concurrency exam registration portal equipped with automated application tracking, online payment processing, seating arrangement algorithms, and administrative reporting dashboards.",
      fileName: "Actior_Exam_Portal_Documentation.pdf",
      docUrl: "https://www.mertozkardes.com.tr/",
      projectUrl: "https://www.mertozkardes.com.tr/"
    },
    cras: {
      title: "Creator, Cras AI Multilingual LLM Platform",
      date: "2024 – Present",
      summary: "Architected Cras AI, a high-performance multilingual LLM platform featuring PDF and image document ingestion powered by a Go-based backend microservice architecture.",
      lorem: "Engineered scalable document processing pipelines with OCR, vector embedding search, and real-time streaming LLM responses across multiple languages for enterprise and research documents.",
      fileName: "Cras_AI_Architecture_Spec.pdf",
      docUrl: "https://www.mertozkardes.com.tr/",
      projectUrl: "https://www.mertozkardes.com.tr/"
    },
    rumer: {
      title: "Founder, Rumer Digital Business Card Platform",
      date: "2024",
      summary: "Designed and launched Rumer, a modern digital business card platform featuring instant contact sharing and dynamic social graph networking features.",
      lorem: "Full-stack web application enabling professionals to exchange digital contact cards via NFC and QR codes, build dynamic professional connections, and track interaction analytics.",
      fileName: "Rumer_Platform_Overview.pdf",
      docUrl: "https://www.mertozkardes.com.tr/",
      projectUrl: "https://www.mertozkardes.com.tr/"
    },
    veo3: {
      title: "Author, Research on Detecting Veo3 AI Videos",
      date: "2024",
      summary: "Authored a paper detecting Veo3-generated content with ~91% accuracy using a CNN-based model, reviewed and evaluated by Prof. Hanan Hibshi (Carnegie Mellon University).",
      lorem: "Researched deep learning techniques for synthetic media forensics. Designed a convolutional neural network architecture analyzing frame consistency and artifact signatures in Google Veo3 AI video models.",
      fileName: "Veo3_AI_Detection_Paper.pdf",
      docUrl: "https://www.mertozkardes.com.tr/",
      projectUrl: "https://www.mertozkardes.com.tr/"
    },
    solar: {
      title: "Intern, University Solar Car Team (Solaris)",
      date: "2024 – 2025",
      summary: "Contributed to a 2nd place finish in efficiency and 3rd overall out of 50+ teams in the Albi Eco Solar Race by researching algorithms assisting the driver to reduce energy consumption.",
      lorem: "Investigated power optimization algorithms and telemetry data processing to assist drivers in managing battery state-of-charge, speed control, and solar panel collection during high-endurance solar races.",
      fileName: "Solaris_Optimization_Report.pdf",
      docUrl: "https://www.mertozkardes.com.tr/",
      projectUrl: "https://www.mertozkardes.com.tr/"
    }
  };

  // 2. DOM ELEMENTS FOR PROJECT DETAILS WORKSPACE
  const projectDetailTitle = document.getElementById('project-detail-title');
  const projectDetailDate = document.getElementById('project-detail-date');
  const projectDetailSummary = document.getElementById('project-detail-summary');
  const projectDetailLorem = document.getElementById('project-detail-lorem');
  const projectDetailDownloadBtn = document.getElementById('project-detail-download-btn');
  const emptyState = document.getElementById('projects-empty-state');
  const detailWorkspace = document.getElementById('project-detail-workspace');

  function resetProjectsWorkspace() {
    if (emptyState) emptyState.style.display = 'flex';
    if (detailWorkspace) detailWorkspace.style.display = 'none';

    document.querySelectorAll('.project-book-item').forEach(item => {
      item.classList.remove('selected-project');
    });
  }

  function renderProjectDetails(projectId) {
    const data = projectsData[projectId];
    if (!data) return;

    if (projectDetailTitle) projectDetailTitle.textContent = data.title;
    if (projectDetailDate) projectDetailDate.textContent = data.date;
    if (projectDetailSummary) projectDetailSummary.textContent = data.summary;
    if (projectDetailLorem) projectDetailLorem.textContent = data.lorem;
    
    if (projectDetailDownloadBtn) {
      projectDetailDownloadBtn.textContent = `Open Documentation at mertozkardes.com.tr ↗`;
      projectDetailDownloadBtn.href = data.docUrl || "https://www.mertozkardes.com.tr/";
      projectDetailDownloadBtn.target = "_blank";
      projectDetailDownloadBtn.rel = "noopener noreferrer";
      projectDetailDownloadBtn.onclick = null;
    }

    // Show workspace details and hide empty prompt
    if (emptyState) emptyState.style.display = 'none';
    if (detailWorkspace) detailWorkspace.style.display = 'flex';

    // Highlight active project book on shelf
    document.querySelectorAll('.project-book-item').forEach(item => {
      if (item.getAttribute('data-project') === projectId) {
        item.classList.add('selected-project');
      } else {
        item.classList.remove('selected-project');
      }
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
