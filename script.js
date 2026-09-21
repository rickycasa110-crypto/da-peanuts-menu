const nav = document.getElementById("nav");
const content = document.getElementById("content");

const categoryIcons = {
  "Colazione": "☕",
  "Primi": "🍝",
  "Secondi": "🍕",
  "Aperitivo": "🥂",
  "Vini": "🍷"
};

Object.entries(MENU).forEach(([category, items], index) => {
  const id = `cat-${index}`;
  const icon = categoryIcons[category] || "✦";

  const link = document.createElement("a");
  link.href = `#${id}`;
  link.innerHTML = `<span>${icon}</span> ${category}`;
  nav.appendChild(link);

  const section = document.createElement("section");
  section.className = "section";
  section.id = id;

  const title = document.createElement("h2");
  title.innerHTML = `<span class="section-icon">${icon}</span><span>${category}</span>`;
  section.appendChild(title);

  if (!items.length) {
    const empty = document.createElement("div");
    empty.className = "empty";
    empty.textContent = "Menù in aggiornamento";
    section.appendChild(empty);
  } else {
    const list = document.createElement("div");
    list.className = "items";

    items.forEach(item => {
      const row = document.createElement("article");
      row.className = "item";

      const main = document.createElement("div");
      main.className = "item-main";

      const name = document.createElement("div");
      name.className = "item-name";
      name.textContent = item.nome || "";
      main.appendChild(name);

      if (item.descrizione) {
        const desc = document.createElement("div");
        desc.className = "item-desc";
        desc.textContent = item.descrizione;
        main.appendChild(desc);
      }

      if (item.prezzo) {
        const price = document.createElement("div");
        price.className = "price";
        price.textContent = item.prezzo;
        row.appendChild(price);
      }

      row.insertBefore(main, row.firstChild);
      list.appendChild(row);
    });

    section.appendChild(list);
  }

  content.appendChild(section);
});
