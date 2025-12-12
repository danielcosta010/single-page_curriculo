const acordeon = document.querySelectorAll(".acordeon");

acordeon.forEach((button) => {
  button.addEventListener("click", () => {
    const panel = button.nextElementSibling;
    const estaAberto = panel.style.maxHeight;

    acordeon.forEach((outros) => {
      if (outros !== button) {
        outros.classList.remove("active");
        outros.parentElement.classList.remove("active");
        const outroPanel = outros.nextElementSibling;
        outroPanel.style.maxHeight = null;
      }
    });

    button.classList.toggle("active");
    const section = button.parentElement;
    section.classList.toggle("active");
    panel.style.maxHeight = estaAberto ? null : panel.scrollHeight + "px";
  });
});

/* Componente reutilizável */
/* const acordeons = document.querySelectorAll(".acordeon");

acordeons.forEach((button) => {
  const panel = document.getElementById(button.getAttribute("aria-controls"));

  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";

    // Fecha todos os outros
    acordeons.forEach((other) => {
      if (other !== button) {
        other.setAttribute("aria-expanded", "false");
        const otherPanel = document.getElementById(
          other.getAttribute("aria-controls")
        );
        otherPanel.hidden = true;
        otherPanel.style.maxHeight = null;
        other.classList.remove("active");
      }
    });

    const section = button.parentElement;
    section.classList.toggle("active");

    // Alterna o atual
    button.setAttribute("aria-expanded", String(!isOpen));
    button.classList.toggle("active");

    if (isOpen) {
      panel.hidden = true;
      panel.style.maxHeight = null;
    } else {
      panel.hidden = false;
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});
 */