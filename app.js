(function () {
  'use strict';

  // 1. SEAMLESS SHELF TIER & SECTION SWITCHING (DEFAULT: COFFEE CHAT)
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

      // Check if clicking the currently active tier a second time
      if (tier.classList.contains('active')) {
        tier.classList.remove('active');

        if (previousActiveTier && previousActiveTier !== tier) {
          previousActiveTier.classList.add('active');
          const prevTarget = previousActiveTier.getAttribute('data-section');
          activateSection(prevTarget);
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
    });
  });

  // 2. OXFORD SPEECH DETAILS POPUP MODAL HANDLER
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

  // 3. HEAD CLICK VIBRANT SPIN TRIGGER (NO MOUSE TRACKING)
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
