const modal = document.getElementById("modalProducto");
const btn = document.getElementById("verProductoBtn");
const cerrar = document.querySelector(".cerrar");

btn.onclick = (e) => {
    e.preventDefault();
    modal.style.display = "flex";
};

cerrar.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };