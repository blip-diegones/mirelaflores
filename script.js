/**
 * Mirela Flores - Ateliê Floral & Presentes (Sorriso - MT)
 * Lógica Interativa da Landing Page
 */

document.addEventListener('DOMContentLoaded', () => {
  // Dados dos Produtos Reais da Mirela Flores para o Modal
  const productsData = {
    'buque-amor-love': {
      title: 'Buquê Clássico Amor "I Love You"',
      tag: 'Mais Romântico • Destaque',
      price: 'R$ 169,90',
      installments: 'ou 3x de R$ 56,63 sem juros',
      image: './images/buque-romantico-love.png',
      description: 'Uma declaração de amor inesquecível. Confeccionado com 5 rosas vermelhas aveludadas de corte especial, chuva-de-prata delicada (gipsofila), folhagens verdes selecionadas e embalagem romântica estilizada com tipografia "I Love You" e laço vermelho de cetim com o selo autoral da Mirela Flores.',
      features: [
        '5 Rosas vermelhas aveludadas de primeira linha',
        'Embalagem temática "I Love You" com laço de cetim',
        'Gipsofilas aéreas e folhagens nobres selecionadas',
        'Cartão com caligrafia personalizada incluso'
      ],
      whatsappMsg: 'Olá, Mirela Flores! Gostaria de encomendar o Buquê Clássico Amor "I Love You" (R$ 169,90). Como podemos combinar a entrega em Sorriso?'
    },
    'buque-rosas-pink': {
      title: 'Buquê Encanto Pink Vibrante',
      tag: 'Exclusivo Ateliê',
      price: 'R$ 149,90',
      installments: 'ou 3x de R$ 49,97 sem juros',
      image: './images/buque-rosas-pink.png',
      description: 'Charme, sofisticação e alegria em um buquê único. Composto por 4 rosas pink em tom magenta deslumbrante, mini flores de solidago (tango amarelo), gipsofila branca e folhagens botânicas. Envolto em papel especial rosa com corações dourados e laço duplo com detalhes contrastantes.',
      features: [
        '4 Rosas selecionadas em tom magenta vibrante',
        'Composição com tango amarelo e gipsofilas finas',
        'Embalagem especial rosa com corações dourados',
        'Cartão exclusivo para a sua dedicatória'
      ],
      whatsappMsg: 'Olá, Mirela Flores! Gostaria de encomendar o Buquê Encanto Pink Vibrante (R$ 149,90). Como podemos combinar a entrega em Sorriso?'
    },
    'buque-mix-primavera': {
      title: 'Buquê Mix Primavera Floral',
      tag: 'Harmonia & Cores',
      price: 'R$ 189,90',
      installments: 'ou 3x de R$ 63,30 sem juros',
      image: './images/buque-mix-colorido.png',
      description: 'Uma explosão encantadora de cores e texturas florais. Reúne rosas vermelhas aveludadas, rosas champagne nobres, margaridas lilás de centro ensolarado, astromélias magenta e solidago. Finalizado com tela rendada vinho e papel decorado com laço de cetim.',
      features: [
        'Mix farto com rosas, margaridas e astromélias frescas',
        'Embalagem em camadas com tela rendada texturizada',
        'Paleta alegre perfeita para aniversários e celebrações',
        'Acompanha cartão com mensagem afetiva personalizada'
      ],
      whatsappMsg: 'Olá, Mirela Flores! Gostaria de encomendar o Buquê Mix Primavera Floral (R$ 189,90). Como podemos combinar a entrega em Sorriso?'
    },
    'buque-solitaria-especial': {
      title: 'Buquê Delicadeza & Astromélias Radiantes',
      tag: 'Delicadeza Radiante',
      price: 'R$ 119,90',
      installments: 'ou 2x de R$ 59,95 sem juros',
      image: './images/buque-solitario-especial.png',
      description: 'A nobreza da rosa vermelha em destaque central com o calor das astromélias alaranjadas, gipsofila e solidago. O arranjo ideal para presentear em qualquer ocasião com muito carinho, embalado em papel vermelho texturizado com laço estampado de corações.',
      features: [
        'Rosa vermelha aveludada nobre em destaque',
        'Astromélias frescas em tons quentes e solares',
        'Embalagem rendada com laço especial decorado',
        'Cartão com dedicatória caligrafada incluso'
      ],
      whatsappMsg: 'Olá, Mirela Flores! Gostaria de encomendar o Buquê Delicadeza & Astromélias Radiantes (R$ 119,90). Como podemos combinar a entrega em Sorriso?'
    }
  };

  const whatsappBaseUrl = 'https://wa.me/5500000000000?text=';

  // Modal Elementos
  const modal = document.getElementById('product-modal');
  const modalImg = document.getElementById('modal-img');
  const modalTag = document.getElementById('modal-tag');
  const modalTitle = document.getElementById('modal-title');
  const modalPrice = document.getElementById('modal-price');
  const modalInstallments = document.getElementById('modal-installments');
  const modalDesc = document.getElementById('modal-desc');
  const modalFeatures = document.getElementById('modal-features');
  const modalOrderBtn = document.getElementById('modal-order-btn');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  // Abrir Modal do Produto
  window.openProductModal = function(productId) {
    const item = productsData[productId];
    if (!item || !modal) return;

    modalImg.src = item.image;
    modalImg.alt = item.title;
    modalTag.textContent = item.tag;
    modalTitle.textContent = item.title;
    modalPrice.textContent = item.price;
    modalInstallments.textContent = item.installments;
    modalDesc.textContent = item.description;

    modalFeatures.innerHTML = item.features.map(f => `
      <div class="modal-feat-item">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>${f}</span>
      </div>
    `).join('');

    modalOrderBtn.href = `${whatsappBaseUrl}${encodeURIComponent(item.whatsappMsg)}`;
    
    if (typeof modal.showModal === 'function') {
      modal.showModal();
    } else {
      modal.setAttribute('open', 'true');
    }
  };

  // Fechar Modal
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
      if (typeof modal.close === 'function') {
        modal.close();
      } else {
        modal.removeAttribute('open');
      }
    });
  }

  // Fechar modal ao clicar fora do conteúdo
  if (modal) {
    modal.addEventListener('click', (event) => {
      const rect = modal.getBoundingClientRect();
      const isInDialog = (
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
      );
      if (!isInDialog && modal.open) {
        modal.close();
      }
    });
  }

  // Filtros de Avaliações (Estilo Google)
  const filterPills = document.querySelectorAll('.filter-pill');
  const reviewCards = document.querySelectorAll('.review-item-card');

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filterValue = pill.getAttribute('data-filter');

      reviewCards.forEach(card => {
        const cardTags = card.getAttribute('data-tags') || '';
        if (filterValue === 'all' || cardTags.includes(filterValue)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Menu Mobile Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mainNav = document.getElementById('main-nav');

  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
      const isExpanded = mainNav.classList.contains('active');
      mobileToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Fechar menu mobile ao clicar em link
    const navLinks = mainNav.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Newsletter Form Prevenção simples
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input[type="email"]');
      if (input && input.value) {
        alert('Obrigado! Em breve você receberá nossas novidades e ofertas exclusivas no seu e-mail.');
        input.value = '';
      }
    });
  }
});
