/*--=========== GSAP SCROLLTRIGGER ============- */

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const workflowDiv = document.querySelectorAll(".workflow-items");
  const strokeSvg = document.querySelectorAll(".animationFill");

  strokeSvg.forEach((stroke) => {
    gsap.from(stroke, {
      strokeOpacity: 0,
      ease: "power4.out",
      duration: 2,
      stagger: { each: 0.3 },
      scrollTrigger: {
        trigger: stroke,
        start: "top 80%",
        end: "top 50%",
      },
    });
  });

  // LOADING AO SCROLL NAS SEÇÕES

  const isMobile = window.matchMedia("(max-width: 768px)").matches; // Verifica se a largura da tela é menor ou igual a 768px (ajuste conforme necessário)
  const sections = document.querySelectorAll("section");

  const helpSection = document.querySelector(".help");
  const workflowItems = document.querySelectorAll(".workflow-item");
  const bars = document.querySelector(".bars");
  const BlueBar = document.querySelector(".BlueBar");

  sections.forEach((section) => {
    if (!isMobile) {
      gsap.from(section, {
        y: 200,
        opacity: 0,
        ease: "power4.out",
        duration: 3,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 50%",
          //markers: true,
        },
      });
    }

    ScrollTrigger.addEventListener("scrollStart", () => {
      ScrollTrigger.refresh();
    });
  });

  //OPENING PRICES MODAL

  const modalButton = document.querySelectorAll(".modalOpenButton");
  const modal = document.querySelectorAll(".modal");
  const pricePage = document.querySelectorAll(".pricePage");
  const modalClose = document.querySelectorAll(".modalCloseButton");

  function closeAllModals() {
    modal.forEach((modal) => {
      modal.classList.remove("modal-active");
    });
  }

  function showModalPrice(index) {
    closeAllModals(); // Fechar todos os modais antes de abrir o selecionado
    modal[index].classList.add("modal-active");
  }

  modalButton.forEach((button, index) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      showModalPrice(index);
    });
  });

  modalClose.forEach((btnClose, index) => {
    btnClose.addEventListener("click", () => {
      closeAllModals();
    });
  });

  // Adicionar ouvintes de eventos mouseleave para pricePage
  pricePage.forEach((priceModal, pricePageIndex) => {
    priceModal.addEventListener("mouseleave", () => {
      closeAllModals(); // Fechar todos os modais ao sair do elemento pricePage
    });
  });
});


