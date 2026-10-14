/* ============================================================
   DAKSHAYANI KALE — CINEMATIC PORTFOLIO
   Main Application Logic
   ============================================================ */

(function () {
  'use strict';

  /* ---------- DOM Ready ---------- */
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    initOpeningSequence();
    initNavigation();
    initScrollProgress();
    initThemeToggle();
    initCustomCursor();
    initParticles();
    renderSkills();
    renderProjects();
    renderExperience();
    renderCertifications();
    renderCompetitiveProgramming();
    renderContactInfo();
    initContactForm();
    initProjectModal();
    initCertLightbox();
    initBackToTop();
    initSmoothScroll();
    initScrollAnimations();
  }

  /* ==========================================
     OPENING SEQUENCE
     ========================================== */
  function initOpeningSequence() {
    const intro = document.getElementById('intro');
    if (!intro) return;

    // If user prefers reduced motion, skip
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      intro.remove();
      document.getElementById('nav').classList.add('visible');
      return;
    }

    const letters = intro.querySelectorAll('.intro-name span');
    const title = intro.querySelector('.intro-title');
    const tagline = intro.querySelector('.intro-tagline');
    const skipBtn = intro.querySelector('.skip-btn');
    const sweep = intro.querySelector('.light-sweep');

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(intro, {
          opacity: 0,
          duration: 0.6,
          onComplete: () => {
            intro.remove();
            document.getElementById('nav').classList.add('visible');
            animateHeroSection();
          }
        });
      }
    });

    // Light sweep
    tl.to(sweep, { left: '100%', opacity: 1, duration: 1.2, ease: 'power2.inOut' })
      .to(sweep, { opacity: 0, duration: 0.3 });

    // Letters appear
    tl.to(letters, {
      opacity: 1,
      y: 0,
      duration: 0.06,
      stagger: 0.05,
      ease: 'power3.out'
    }, '-=0.5');

    // Title
    tl.to(title, { opacity: 1, duration: 0.6, ease: 'power2.out' }, '+=0.3');

    // Tagline
    tl.to(tagline, { opacity: 1, duration: 0.6, ease: 'power2.out' }, '+=0.2');

    // Show skip button
    tl.to(skipBtn, { opacity: 1, duration: 0.3 }, 1);

    // Skip button
    function skipIntro() {
      tl.kill();
      gsap.to(intro, {
        opacity: 0,
        duration: 0.4,
        onComplete: () => {
          intro.remove();
          document.getElementById('nav').classList.add('visible');
          animateHeroSection();
        }
      });
    }

    skipBtn.addEventListener('click', skipIntro);

    // Also skip on Escape
    document.addEventListener('keydown', function handler(e) {
      if (e.key === 'Escape') {
        skipIntro();
        document.removeEventListener('keydown', handler);
      }
    });
  }

  function animateHeroSection() {
    const heroElements = document.querySelectorAll('#home [data-animate]');
    gsap.fromTo(heroElements,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out' }
    );
  }

  /* ==========================================
     NAVIGATION
     ========================================== */
  function initNavigation() {
    const nav = document.getElementById('nav');
    const links = nav.querySelectorAll('.nav-links a');
    const hamburger = nav.querySelector('.nav-hamburger');
    const navLinksContainer = nav.querySelector('.nav-links');
    const sections = document.querySelectorAll('section[id]');

    // Hamburger toggle
    if (hamburger) {
      hamburger.addEventListener('click', () => {
        navLinksContainer.classList.toggle('open');
        hamburger.setAttribute('aria-expanded',
          navLinksContainer.classList.contains('open'));
      });
    }

    // Close mobile nav on link click
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinksContainer.classList.remove('open');
        if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Active section highlighting
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          links.forEach(l => l.classList.remove('active'));
          const activeLink = nav.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
          if (activeLink) activeLink.classList.add('active');
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
  }

  /* ==========================================
     SCROLL PROGRESS BAR
     ========================================== */
  function initScrollProgress() {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;

    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      bar.style.width = progress + '%';
    }, { passive: true });
  }

  /* ==========================================
     THEME TOGGLE
     ========================================== */
  function initThemeToggle() {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;

    const saved = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
    updateThemeIcon(btn, saved);

    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      updateThemeIcon(btn, next);
    });
  }

  function updateThemeIcon(btn, theme) {
    btn.textContent = theme === 'dark' ? '☀️' : '🌙';
    btn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
  }

  /* ==========================================
     CUSTOM CURSOR
     ========================================== */
  function initCustomCursor() {
    // Only on desktop with fine pointer
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot = document.querySelector('.cursor-dot');
    const outline = document.querySelector('.cursor-outline');
    if (!dot || !outline) return;

    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;

    document.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + 'px';
      dot.style.top = mouseY + 'px';
    });

    function animateOutline() {
      outlineX += (mouseX - outlineX) * 0.28;
      outlineY += (mouseY - outlineY) * 0.28;
      outline.style.left = outlineX + 'px';
      outline.style.top = outlineY + 'px';
      requestAnimationFrame(animateOutline);
    }
    animateOutline();

    // Hover effects
    const hoverTargets = document.querySelectorAll('a, button, .project-card, .skill-card, .cert-card, .social-link');
    hoverTargets.forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }

  /* ==========================================
     RENDER: SKILLS
     ========================================== */
  function renderSkills() {
    const grid = document.getElementById('skills-grid');
    const filterBar = document.getElementById('skills-filter');
    if (!grid || !siteData || !siteData.skills) return;

    // Render all skills
    function render(filter) {
      grid.innerHTML = '';
      siteData.skills.forEach(category => {
        if (filter !== 'All' && category.name !== filter) return;
        category.skills.forEach(skill => {
          const card = document.createElement('div');
          card.className = 'skill-card';
          card.setAttribute('data-category', category.name);
          card.innerHTML = `
            <div class="skill-name">${skill.name}</div>
            <div class="skill-level">${skill.level}</div>
            <div class="skill-proof">
              <div>
                <span class="skill-proof-label">Proven by</span>
                <span class="skill-proof-text">${skill.proof}</span>
              </div>
            </div>
          `;
          grid.appendChild(card);
        });
      });

      // Re-init cursor hover for new cards
      refreshCursorTargets();
    }

    render('All');

    // Filter buttons
    if (filterBar) {
      filterBar.addEventListener('click', e => {
        if (!e.target.classList.contains('filter-btn')) return;
        filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        render(e.target.textContent.trim());
      });
    }

    // Touch tap support for skill proof on mobile
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
      grid.addEventListener('click', e => {
        const card = e.target.closest('.skill-card');
        if (!card) return;
        // Toggle tapped state
        const wasTapped = card.classList.contains('tapped');
        grid.querySelectorAll('.skill-card.tapped').forEach(c => c.classList.remove('tapped'));
        if (!wasTapped) card.classList.add('tapped');
      });
      // Dismiss on tap outside
      document.addEventListener('click', e => {
        if (!e.target.closest('.skill-card')) {
          grid.querySelectorAll('.skill-card.tapped').forEach(c => c.classList.remove('tapped'));
        }
      });
    }
  }

  /* ==========================================
     RENDER: PROJECTS (Grid + Pagination)
     ========================================== */
  function renderProjects() {
    const container = document.getElementById('projects-carousel');
    const filterBar = document.getElementById('projects-filter');
    if (!container || !siteData || !siteData.projects) return;

    const PROJECTS_PER_PAGE = 6;
    let currentPage = 0;

    function render(filter) {
      currentPage = 0;
      renderPage(filter);
    }

    function renderPage(filter) {
      // Get filtered projects
      const filtered = filter === 'All'
        ? siteData.projects
        : siteData.projects.filter(p => p.category === filter);

      const totalPages = Math.ceil(filtered.length / PROJECTS_PER_PAGE);
      const start = currentPage * PROJECTS_PER_PAGE;
      const pageProjects = filtered.slice(start, start + PROJECTS_PER_PAGE);

      // Clear and render
      container.innerHTML = '';
      pageProjects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-project-id', project.id);
        card.innerHTML = `
          <span class="project-category-badge">${project.category}</span>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-tagline">${project.tagline}</p>
          <div class="project-tech-tags">
            ${project.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
          <div class="project-cta">
            <a href="${project.github}" target="_blank" rel="noopener" class="btn btn-outline" onclick="event.stopPropagation()">GitHub ↗</a>
            <button class="btn btn-ghost" onclick="event.stopPropagation(); openProjectModal('${project.id}')">Details →</button>
          </div>
        `;
        card.addEventListener('click', () => openProjectModal(project.id));
        container.appendChild(card);
      });

      // Render pagination dots
      let dotsContainer = document.querySelector('.projects-pagination');
      if (dotsContainer) dotsContainer.remove();

      if (totalPages > 1) {
        dotsContainer = document.createElement('div');
        dotsContainer.className = 'projects-pagination';
        for (let i = 0; i < totalPages; i++) {
          const dot = document.createElement('button');
          dot.className = 'dot' + (i === currentPage ? ' active' : '');
          dot.setAttribute('aria-label', `Page ${i + 1}`);
          dot.addEventListener('click', () => {
            currentPage = i;
            renderPage(filter);
          });
          dotsContainer.appendChild(dot);
        }
        container.parentNode.insertBefore(dotsContainer, container.nextSibling);
      }

      refreshCursorTargets();

      // Animate new cards in
      if (typeof gsap !== 'undefined') {
        gsap.fromTo(container.querySelectorAll('.project-card'),
          { opacity: 0, y: 20, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.06, ease: 'power3.out' }
        );
      }
    }

    render('All');

    if (filterBar) {
      filterBar.addEventListener('click', e => {
        if (!e.target.classList.contains('filter-btn')) return;
        filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        const filterValue = e.target.getAttribute('data-filter') || e.target.textContent.trim();
        render(filterValue);
      });
    }
  }

  /* ==========================================
     PROJECT MODAL
     ========================================== */
  window.openProjectModal = function (projectId) {
    const modal = document.getElementById('project-modal');
    const content = modal.querySelector('.modal-content');
    const project = siteData.projects.find(p => p.id === projectId);
    if (!project || !modal) return;

    content.innerHTML = `
      <button class="modal-close" aria-label="Close modal">&times;</button>
      <span class="modal-category">${project.category}</span>
      <h2 class="modal-title">${project.title}</h2>
      <p class="modal-tagline">${project.tagline}</p>
      <div class="project-tech-tags" style="margin-bottom: 24px;">
        ${project.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>

      <div class="journey-section">
        <h4 class="journey-title">🎬 Project Journey</h4>
        <div class="journey-steps">
          <div class="journey-step">
            <div class="journey-step-icon">🔍</div>
            <div class="journey-step-label">The Problem</div>
            <div class="journey-step-text">${project.journey.problem}</div>
          </div>
          <div class="journey-step">
            <div class="journey-step-icon">💡</div>
            <div class="journey-step-label">My Approach</div>
            <div class="journey-step-text">${project.journey.approach}</div>
          </div>
          <div class="journey-step">
            <div class="journey-step-icon">⚙️</div>
            <div class="journey-step-label">The Solution</div>
            <div class="journey-step-text">${project.journey.solution}</div>
          </div>
          <div class="journey-step">
            <div class="journey-step-icon">🚀</div>
            <div class="journey-step-label">The Outcome</div>
            <div class="journey-step-text">${project.journey.outcome}</div>
          </div>
        </div>
      </div>

      ${project.videoPlaceholder ? `
      <div class="video-placeholder">
        <div class="play-icon">▶</div>
        <p>Demo video coming soon — record with Win+G or <a href="https://loom.com" target="_blank">Loom</a></p>
      </div>
      ` : ''}

      <div class="modal-actions">
        <a href="${project.github}" target="_blank" rel="noopener" class="btn btn-primary">View on GitHub ↗</a>
        ${project.liveDemo && project.liveDemo !== project.github ? `<a href="${project.liveDemo}" target="_blank" rel="noopener" class="btn btn-outline">Live Demo ↗</a>` : ''}
      </div>
    `;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Close handlers
    const closeBtn = content.querySelector('.modal-close');
    closeBtn.addEventListener('click', closeProjectModal);
    modal.addEventListener('click', e => {
      if (e.target === modal) closeProjectModal();
    });
    document.addEventListener('keydown', function handler(e) {
      if (e.key === 'Escape') { closeProjectModal(); document.removeEventListener('keydown', handler); }
    });
  };

  function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  function initProjectModal() {
    // Modal is initialized on open via openProjectModal
  }

  /* ==========================================
     RENDER: EXPERIENCE
     ========================================== */
  function renderExperience() {
    const timeline = document.getElementById('experience-timeline');
    if (!timeline || !siteData || !siteData.experience) return;

    siteData.experience.forEach(exp => {
      const item = document.createElement('div');
      item.className = 'exp-item';
      item.innerHTML = `
        <h3 class="exp-role">${exp.role}</h3>
        <div class="exp-company">${exp.company}</div>
        <div class="exp-meta">
          <span>${exp.duration}</span>
          <span>${exp.location}</span>
          <span class="exp-type-badge">${exp.type}</span>
        </div>
        <ul class="exp-responsibilities">
          ${exp.responsibilities.map(r => `<li>${r}</li>`).join('')}
        </ul>
        <div class="exp-tools">
          ${exp.tools.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
        ${exp.achievements && exp.achievements.length > 0 ? `
        <div class="exp-achievements">
          ${exp.achievements.map(a => `
            <div class="achievement-stat">
              <div class="achievement-value" data-count="${a.value}">0</div>
              <div class="achievement-label">${a.label}</div>
            </div>
          `).join('')}
        </div>` : ''}
      `;
      timeline.appendChild(item);
    });
  }

  /* ==========================================
     RENDER: CERTIFICATIONS
     ========================================== */
  function renderCertifications() {
    const carousel = document.getElementById('cert-carousel');
    if (!carousel || !siteData || !siteData.certifications) return;

    siteData.certifications.forEach(cert => {
      const card = document.createElement('div');
      card.className = 'cert-card';
      card.innerHTML = `
        <div class="cert-issuer">${cert.issuer}</div>
        <h4 class="cert-name">${cert.name}</h4>
        <div class="cert-date">${cert.date}</div>
        ${cert.image ? `<img src="${cert.image}" alt="${cert.name} certificate" class="cert-image" loading="lazy" onclick="openCertLightbox('${cert.image}')">` : ''}
        ${cert.verifyLink && !cert.verifyLink.includes('[ADD') ? `<a href="${cert.verifyLink}" target="_blank" rel="noopener" class="cert-verify-link">Verify Credential →</a>` : '<span class="cert-verify-link" style="opacity:0.4">Verification link coming soon</span>'}
      `;
      carousel.appendChild(card);
    });
  }

  /* ==========================================
     CERT LIGHTBOX
     ========================================== */
  function initCertLightbox() {
    // Lightbox is opened via openCertLightbox
  }

  window.openCertLightbox = function (imageSrc) {
    const lightbox = document.getElementById('cert-lightbox');
    if (!lightbox) return;
    lightbox.innerHTML = `<img src="${imageSrc}" alt="Certificate enlarged view">`;
    lightbox.classList.add('open');
    lightbox.addEventListener('click', () => {
      lightbox.classList.remove('open');
    });
    document.addEventListener('keydown', function handler(e) {
      if (e.key === 'Escape') { lightbox.classList.remove('open'); document.removeEventListener('keydown', handler); }
    });
  };

  /* ==========================================
     RENDER: COMPETITIVE PROGRAMMING
     ========================================== */
  function renderCompetitiveProgramming() {
    const container = document.getElementById('cp-stats');
    if (!container || !siteData || !siteData.competitiveProgramming) return;

    // Platform SVG icons
    const platformIcons = {
      'LeetCode': '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>',
      'HackerRank': '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c1.285 0 9.75 4.886 10.392 6.12.642 1.237.642 10.517 0 11.76C21.75 19.114 13.285 24 12 24s-9.75-4.886-10.392-6.12c-.642-1.237-.642-10.523 0-11.76C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V7.057c0-.143-.117-.258-.258-.258h-1.46c-.14 0-.257.115-.257.258v9.886c0 .143.117.258.258.258h1.46c.14 0 .257-.115.257-.258V13.07h4.074v3.873c0 .143.117.258.258.258h1.46c.14 0 .257-.115.257-.258V7.057c0-.143-.117-.258-.258-.258z"/></svg>',
      'CodeChef': '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.007.22C10.236.553 9.753.835 9.092 1.2c-.452.264-.792.425-1.088.56-.39.18-.657.304-1.098.666-.38.311-.377.412-.398.656-.023.267.006.477.172.802.12.232.072.228.11.623.027.277-.085.622-.36 1.06-.38.605-.527.88-.6 1.177-.058.237-.07.461.072.844.126.337.186.593.234.826.093.452.12.648.146.852.039.304.068.532.141.845.06.256.063.68.042 1.238-.026.695-.011 1.17.167 1.594.146.343.325.56.746.972.155.152.3.296.496.495.154.158.152.173.145.306-.01.16-.07.268-.198.424-.164.197-.285.338-.368.455-.17.237-.253.38-.347.582-.12.26-.167.47-.16.675.013.394.098.66.42 1.1.234.32.286.395.41.72.067.176.215.79.326 1.196.175.636.185.633.396.957.163.25.24.397.453.548a2.83 2.83 0 0 0 .478.264c.273.117.645.227 1.142.39a3.48 3.48 0 0 0 .953.05c.5-.02.744-.023 1.284-.013.54.01.807-.044 1.16-.137a2.58 2.58 0 0 0 .48-.176c.122-.06.217-.12.42-.27.305-.227.346-.263.538-.398.27-.188.358-.233.71-.317.228-.054.424-.071.722-.07.294.003.397-.032.684-.127.155-.052.235-.077.43-.155.288-.112.404-.174.606-.322.255-.185.43-.371.66-.716.2-.3.325-.577.405-.806.091-.262.133-.44.206-.78.082-.383.143-.536.29-.755.104-.158.166-.242.402-.457.152-.14.315-.323.49-.558.245-.332.347-.578.373-.887.017-.208-.006-.362-.116-.7-.06-.192-.077-.222-.157-.592-.075-.345-.075-.6.033-.901.1-.284.182-.358.36-.612.214-.308.28-.49.32-.722a2.47 2.47 0 0 0-.02-.694c-.037-.2-.107-.41-.172-.565a2.6 2.6 0 0 1-.168-.58c-.036-.236.006-.553.08-.745.034-.09.06-.16.143-.336.134-.28.136-.367.14-.516.007-.294-.072-.45-.276-.672a6.4 6.4 0 0 0-.483-.46 1.69 1.69 0 0 1-.318-.372 1.96 1.96 0 0 1-.246-.628c-.037-.147-.062-.295-.09-.508-.024-.185-.036-.32-.098-.558a2.16 2.16 0 0 0-.136-.366c-.146-.317-.285-.484-.58-.728a10.1 10.1 0 0 0-.675-.475 4.43 4.43 0 0 1-.548-.39 2.7 2.7 0 0 1-.38-.406C13.39.55 13.35.52 13.282.4c-.075-.14-.075-.14-.203-.196C12.795.08 12.39 0 12.018 0c-.403 0-.665.06-1.01.22z"/></svg>',
      'GeeksforGeeks': '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.79 3.79 0 0 1-2.135-2.078 3.571 3.571 0 0 1-.16-.95H17.54c.033.469.197.908.475 1.274a1.613 1.613 0 0 0 1.308.574c.486-.008.946-.2 1.286-.535.385-.38.596-.905.587-1.45a2.04 2.04 0 0 0-.576-1.418c-.39-.395-.913-.61-1.458-.6H17.54V9.076h1.622c.52.01 1.015-.2 1.375-.584a2.02 2.02 0 0 0 .567-1.407 1.97 1.97 0 0 0-.578-1.413 1.755 1.755 0 0 0-1.274-.528c-.5-.009-.966.206-1.28.587-.295.367-.458.81-.475 1.274h-3.17c.014-.565.155-1.12.41-1.62a3.79 3.79 0 0 1 1.253-1.462A4.51 4.51 0 0 1 18.538 3c1.155-.007 2.269.452 3.09 1.275a4.315 4.315 0 0 1 1.298 3.14 3.26 3.26 0 0 1-.552 1.82 2.87 2.87 0 0 1-1.482 1.1v.058a2.978 2.978 0 0 1 1.614 1.107c.405.544.618 1.2.605 1.87.013.788-.243 1.558-.729 2.17zM2.552 14.316c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.79 3.79 0 0 1-2.135-2.078 3.571 3.571 0 0 1-.16-.95h3.17c.033.469.197.908.475 1.274a1.613 1.613 0 0 0 1.308.574c.486-.008.946-.2 1.286-.535.385-.38.596-.905.587-1.45a2.04 2.04 0 0 0-.576-1.418c-.39-.395-.913-.61-1.458-.6H-1.358V9.076H.264c.52.01 1.015-.2 1.375-.584a2.02 2.02 0 0 0 .567-1.407 1.97 1.97 0 0 0-.578-1.413 1.755 1.755 0 0 0-1.274-.528c-.5-.009-.966.206-1.28.587-.295.367-.458.81-.475 1.274h-3.17c.014-.565.155-1.12.41-1.62a3.79 3.79 0 0 1 1.253-1.462A4.51 4.51 0 0 1-.36 3c1.155-.007 2.269.452 3.09 1.275a4.315 4.315 0 0 1 1.298 3.14 3.26 3.26 0 0 1-.552 1.82 2.87 2.87 0 0 1-1.482 1.1v.058a2.978 2.978 0 0 1 1.614 1.107c.405.544.618 1.2.605 1.87.013.788-.243 1.558-.729 2.17z" transform="translate(2.1 3)"/></svg>'
    };

    siteData.competitiveProgramming.forEach(cp => {
      const card = document.createElement('a');
      card.className = 'cp-stat-card';
      card.href = cp.link;
      card.target = '_blank';
      card.rel = 'noopener';
      const iconHtml = platformIcons[cp.platform] || `<span style="font-size:1.5rem">${cp.icon}</span>`;
      card.innerHTML = `
        <div class="cp-stat-icon">${iconHtml}</div>
        <div class="cp-stat-platform">${cp.platform}</div>
        <div class="cp-stat-value">${cp.stat}</div>
        <div class="cp-stat-label">${cp.label}</div>
        ${cp.extra ? `<div class="cp-stat-extra">${cp.extra}</div>` : ''}
      `;
      container.appendChild(card);
    });
  }

  /* ==========================================
     RENDER: CONTACT INFO
     ========================================== */
  function renderContactInfo() {
    const infoContainer = document.getElementById('contact-info');
    if (!infoContainer || !siteData || !siteData.contact) return;

    const c = siteData.contact;

    // SVG icons for contact
    const icons = {
      email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
      phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
      linkedin: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
      github: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
      leetcode: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>',
      hackerrank: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12 0c1.285 0 9.75 4.886 10.392 6.12.642 1.237.642 10.517 0 11.76C21.75 19.114 13.285 24 12 24s-9.75-4.886-10.392-6.12c-.642-1.237-.642-10.523 0-11.76C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V7.057c0-.143-.117-.258-.258-.258h-1.46c-.14 0-.257.115-.257.258v9.886c0 .143.117.258.258.258h1.46c.14 0 .257-.115.257-.258V13.07h4.074v3.873c0 .143.117.258.258.258h1.46c.14 0 .257-.115.257-.258V7.057c0-.143-.117-.258-.258-.258z"/></svg>',
      codechef: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M11.007.22C10.236.553 9.753.835 9.092 1.2c-.452.264-.792.425-1.088.56-.39.18-.657.304-1.098.666-.38.311-.377.412-.398.656-.023.267.006.477.172.802.12.232.072.228.11.623.027.277-.085.622-.36 1.06-.38.605-.527.88-.6 1.177-.058.237-.07.461.072.844.126.337.186.593.234.826.093.452.12.648.146.852.039.304.068.532.141.845.06.256.063.68.042 1.238-.026.695-.011 1.17.167 1.594.146.343.325.56.746.972.155.152.3.296.496.495.154.158.152.173.145.306-.01.16-.07.268-.198.424-.164.197-.285.338-.368.455-.17.237-.253.38-.347.582-.12.26-.167.47-.16.675.013.394.098.66.42 1.1.234.32.286.395.41.72.067.176.215.79.326 1.196.175.636.185.633.396.957.163.25.24.397.453.548a2.83 2.83 0 0 0 .478.264c.273.117.645.227 1.142.39a3.48 3.48 0 0 0 .953.05c.5-.02.744-.023 1.284-.013.54.01.807-.044 1.16-.137a2.58 2.58 0 0 0 .48-.176c.122-.06.217-.12.42-.27.305-.227.346-.263.538-.398.27-.188.358-.233.71-.317.228-.054.424-.071.722-.07.294.003.397-.032.684-.127.155-.052.235-.077.43-.155.288-.112.404-.174.606-.322.255-.185.43-.371.66-.716.2-.3.325-.577.405-.806.091-.262.133-.44.206-.78.082-.383.143-.536.29-.755.104-.158.166-.242.402-.457.152-.14.315-.323.49-.558.245-.332.347-.578.373-.887.017-.208-.006-.362-.116-.7-.06-.192-.077-.222-.157-.592-.075-.345-.075-.6.033-.901.1-.284.182-.358.36-.612.214-.308.28-.49.32-.722a2.47 2.47 0 0 0-.02-.694c-.037-.2-.107-.41-.172-.565a2.6 2.6 0 0 1-.168-.58c-.036-.236.006-.553.08-.745.034-.09.06-.16.143-.336.134-.28.136-.367.14-.516.007-.294-.072-.45-.276-.672a6.4 6.4 0 0 0-.483-.46 1.69 1.69 0 0 1-.318-.372 1.96 1.96 0 0 1-.246-.628c-.037-.147-.062-.295-.09-.508-.024-.185-.036-.32-.098-.558a2.16 2.16 0 0 0-.136-.366c-.146-.317-.285-.484-.58-.728a10.1 10.1 0 0 0-.675-.475 4.43 4.43 0 0 1-.548-.39 2.7 2.7 0 0 1-.38-.406C13.39.55 13.35.52 13.282.4c-.075-.14-.075-.14-.203-.196C12.795.08 12.39 0 12.018 0c-.403 0-.665.06-1.01.22z"/></svg>',
      gfg: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.79 3.79 0 0 1-2.135-2.078 3.571 3.571 0 0 1-.16-.95H17.54c.033.469.197.908.475 1.274a1.613 1.613 0 0 0 1.308.574c.486-.008.946-.2 1.286-.535.385-.38.596-.905.587-1.45a2.04 2.04 0 0 0-.576-1.418c-.39-.395-.913-.61-1.458-.6H17.54V9.076h1.622c.52.01 1.015-.2 1.375-.584a2.02 2.02 0 0 0 .567-1.407 1.97 1.97 0 0 0-.578-1.413 1.755 1.755 0 0 0-1.274-.528c-.5-.009-.966.206-1.28.587-.295.367-.458.81-.475 1.274h-3.17c.014-.565.155-1.12.41-1.62a3.79 3.79 0 0 1 1.253-1.462A4.51 4.51 0 0 1 18.538 3c1.155-.007 2.269.452 3.09 1.275a4.315 4.315 0 0 1 1.298 3.14 3.26 3.26 0 0 1-.552 1.82 2.87 2.87 0 0 1-1.482 1.1v.058a2.978 2.978 0 0 1 1.614 1.107c.405.544.618 1.2.605 1.87.013.788-.243 1.558-.729 2.17zM2.552 14.316c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.79 3.79 0 0 1-2.135-2.078 3.571 3.571 0 0 1-.16-.95h3.17c.033.469.197.908.475 1.274a1.613 1.613 0 0 0 1.308.574c.486-.008.946-.2 1.286-.535.385-.38.596-.905.587-1.45a2.04 2.04 0 0 0-.576-1.418c-.39-.395-.913-.61-1.458-.6H-1.358V9.076H.264c.52.01 1.015-.2 1.375-.584a2.02 2.02 0 0 0 .567-1.407 1.97 1.97 0 0 0-.578-1.413 1.755 1.755 0 0 0-1.274-.528c-.5-.009-.966.206-1.28.587-.295.367-.458.81-.475 1.274h-3.17c.014-.565.155-1.12.41-1.62a3.79 3.79 0 0 1 1.253-1.462A4.51 4.51 0 0 1-.36 3c1.155-.007 2.269.452 3.09 1.275a4.315 4.315 0 0 1 1.298 3.14 3.26 3.26 0 0 1-.552 1.82 2.87 2.87 0 0 1-1.482 1.1v.058a2.978 2.978 0 0 1 1.614 1.107c.405.544.618 1.2.605 1.87.013.788-.243 1.558-.729 2.17z" transform="translate(2.1 3)"/></svg>'
    };

    // Map profile name to icon key
    const profileIconMap = {
      'LeetCode': 'leetcode',
      'HackerRank': 'hackerrank',
      'CodeChef': 'codechef',
      'GeeksforGeeks': 'gfg'
    };

    infoContainer.innerHTML = `
      <h3>Get in Touch</h3>
      <a href="mailto:${c.emails[0]}" class="contact-detail">
        <span class="contact-icon">${icons.email}</span>
        <span>${c.emails[0]}</span>
      </a>
      ${c.emails[1] ? `
      <a href="mailto:${c.emails[1]}" class="contact-detail">
        <span class="contact-icon">${icons.email}</span>
        <span>${c.emails[1]}</span>
      </a>` : ''}
      <a href="tel:${c.phone.replace(/[-\s]/g, '')}" class="contact-detail">
        <span class="contact-icon">${icons.phone}</span>
        <span>${c.phone}</span>
      </a>
      <a href="${c.linkedin}" target="_blank" rel="noopener" class="contact-detail">
        <span class="contact-icon">${icons.linkedin}</span>
        <span>LinkedIn Profile</span>
      </a>
      <a href="${c.github}" target="_blank" rel="noopener" class="contact-detail">
        <span class="contact-icon">${icons.github}</span>
        <span>GitHub Profile</span>
      </a>

      <div class="availability-badge">
        <span class="availability-dot"></span>
        ${c.availability.text}
      </div>

      <div class="social-links">
        <a href="${c.linkedin}" target="_blank" rel="noopener" class="social-link" aria-label="LinkedIn" title="LinkedIn">${icons.linkedin}</a>
        <a href="${c.github}" target="_blank" rel="noopener" class="social-link" aria-label="GitHub" title="GitHub">${icons.github}</a>
        ${c.codingProfiles.map(p => `
          <a href="${p.url}" target="_blank" rel="noopener" class="social-link" aria-label="${p.name}" title="${p.name}">${icons[profileIconMap[p.name]] || p.name.substring(0, 2)}</a>
        `).join('')}
      </div>
    `;
  }

  /* ==========================================
     CONTACT FORM
     ========================================== */
  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const status = form.querySelector('.form-status');
      const submitBtn = form.querySelector('.form-submit');

      // Clear previous errors
      form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
      form.querySelectorAll('.form-error-text').forEach(el => el.remove());
      if (status) { status.className = 'form-status'; status.style.display = 'none'; }

      // Validate
      const name = form.querySelector('#form-name');
      const email = form.querySelector('#form-email');
      const subject = form.querySelector('#form-subject');
      const message = form.querySelector('#form-message');
      let valid = true;

      if (!name.value.trim()) { showFieldError(name, 'Name is required'); valid = false; }
      if (!email.value.trim() || !isValidEmail(email.value)) { showFieldError(email, 'Valid email is required'); valid = false; }
      if (!subject.value.trim()) { showFieldError(subject, 'Subject is required'); valid = false; }
      if (!message.value.trim()) { showFieldError(message, 'Message is required'); valid = false; }

      if (!valid) return;

      // Submit
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      try {
        // Check if EmailJS is configured
        const c = siteData.contact;
        if (c.formServiceId.includes('[ADD')) {
          // Demo mode — show success without actual sending
          status.textContent = '✅ Form is working! Configure EmailJS keys in data.js to enable real email delivery.';
          status.className = 'form-status success';
          status.style.display = 'block';
          form.reset();
        } else {
          // Real EmailJS submission
          await emailjs.send(c.formServiceId, c.formTemplateId, {
            from_name: name.value,
            from_email: email.value,
            subject: subject.value,
            message: message.value
          }, c.formPublicKey);

          status.textContent = '✅ Message sent successfully! I\'ll get back to you soon.';
          status.className = 'form-status success';
          status.style.display = 'block';
          form.reset();
        }
      } catch (err) {
        status.textContent = '❌ Failed to send. Please email me directly.';
        status.className = 'form-status error';
        status.style.display = 'block';
      }

      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
    });
  }

  function showFieldError(field, message) {
    field.classList.add('error');
    const errorEl = document.createElement('div');
    errorEl.className = 'form-error-text';
    errorEl.textContent = message;
    field.parentNode.appendChild(errorEl);
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  /* ==========================================
     BACK TO TOP
     ========================================== */
  function initBackToTop() {
    const btn = document.querySelector('.back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 600) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ==========================================
     FLOATING PARTICLES BACKGROUND
     ========================================== */
  function initParticles() {
    // Skip on mobile for performance
    if (window.innerWidth < 768) return;

    const bg = document.createElement('div');
    bg.className = 'particles-bg';
    bg.setAttribute('aria-hidden', 'true');
    document.body.prepend(bg);

    const count = 20;
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const size = Math.random() * 3 + 1;
      p.style.width = size + 'px';
      p.style.height = size + 'px';
      p.style.left = Math.random() * 100 + '%';
      p.style.animationDuration = (Math.random() * 15 + 10) + 's';
      p.style.animationDelay = (Math.random() * 10) + 's';
      bg.appendChild(p);
    }
  }

  /* ==========================================
     SMOOTH SCROLL (Lenis)
     ========================================== */
  function initSmoothScroll() {
    // If Lenis is available, use it
    if (typeof Lenis !== 'undefined') {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      // Sync with GSAP ScrollTrigger
      if (typeof ScrollTrigger !== 'undefined') {
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => lenis.raf(time * 1000));
        gsap.ticker.lagSmoothing(0);
      }
    }

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  /* ==========================================
     SCROLL ANIMATIONS (GSAP + ScrollTrigger)
     ========================================== */
  function initScrollAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    // Animate sections on scroll
    gsap.utils.toArray('.section').forEach(section => {
      const header = section.querySelector('.section-header');
      if (header) {
        gsap.fromTo(header,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: header, start: 'top 85%', once: true }
          }
        );
      }
    });

    // Animate skill cards
    gsap.utils.toArray('.skill-card').forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.5, delay: i * 0.03,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 90%', once: true }
        }
      );
    });

    // Animate experience items
    gsap.utils.toArray('.exp-item').forEach((item, i) => {
      gsap.fromTo(item,
        { opacity: 0, x: -40 },
        {
          opacity: 1, x: 0, duration: 0.7, delay: i * 0.15,
          ease: 'power3.out',
          scrollTrigger: { trigger: item, start: 'top 85%', once: true }
        }
      );
    });

    // Animate achievement counters
    gsap.utils.toArray('.achievement-value[data-count]').forEach(counter => {
      const target = parseInt(counter.dataset.count);
      ScrollTrigger.create({
        trigger: counter,
        start: 'top 90%',
        once: true,
        onEnter: () => {
          gsap.to(counter, {
            duration: 1.5,
            ease: 'power2.out',
            onUpdate: function () {
              counter.textContent = Math.round(this.progress() * target) + '+';
            }
          });
        }
      });
    });

    // Parallax on hero photo
    const heroPhoto = document.querySelector('.hero-photo-container');
    if (heroPhoto) {
      gsap.to(heroPhoto, {
        y: 60,
        ease: 'none',
        scrollTrigger: {
          trigger: '#home',
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      });
    }

    // Philosophy quotes
    gsap.utils.toArray('.philosophy-quote').forEach(quote => {
      gsap.fromTo(quote,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1, scale: 1, duration: 1, ease: 'power2.out',
          scrollTrigger: { trigger: quote, start: 'top 80%', once: true }
        }
      );
    });

    // Education items
    gsap.utils.toArray('.edu-item').forEach((item, i) => {
      gsap.fromTo(item,
        { opacity: 0, x: 30 },
        {
          opacity: 1, x: 0, duration: 0.6, delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: item, start: 'top 85%', once: true }
        }
      );
    });
  }

  /* ==========================================
     UTILITY: Refresh cursor targets
     ========================================== */
  function refreshCursorTargets() {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const hoverTargets = document.querySelectorAll('a, button, .project-card, .skill-card, .cert-card, .social-link, .cp-stat-card');
    hoverTargets.forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }

})();
