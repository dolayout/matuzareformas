const header = document.querySelector("[data-header]");
const menu = document.querySelector("[data-menu]");
const menuButton = document.querySelector("[data-menu-button]");
const form = document.querySelector("[data-whatsapp-form]");

function syncHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 20);
}

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

menuButton?.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("is-open");
  header?.classList.toggle("menu-open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

menu?.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    menu.classList.remove("is-open");
    header?.classList.remove("menu-open");
    menuButton?.setAttribute("aria-expanded", "false");
  }
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const text = `Olá, sou ${data.get("nome")}. Quero solicitar um orçamento para ${data.get("servico")}. ${data.get("mensagem")}`;
  window.open(`https://wa.me/5513997851607?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
});
