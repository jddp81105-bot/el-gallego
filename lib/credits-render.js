fetch("assets/credits.json").then(r => r.json()).then(credits => {
  const list = document.querySelector("[data-credits]");
  if (!list) return;
  list.innerHTML = Object.values(credits).map(c => `
    <li>
      <strong>${c.title}</strong> —
      ${c.creator_url ? `<a href="${c.creator_url}" target="_blank" rel="noopener">${c.creator}</a>` : c.creator}
      (${c.source}) ·
      <a href="${c.license_url}" target="_blank" rel="noopener">${(c.license || "").toUpperCase()} ${c.license_version || ""}</a> ·
      <a href="${c.foreign_landing_url}" target="_blank" rel="noopener">Ver original ↗</a>
    </li>
  `).join("");
});
