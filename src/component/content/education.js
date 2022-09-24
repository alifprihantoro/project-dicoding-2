import cardBootstrap from "../bootstrap/card";

// education
export default function educationBtn(data) {
  return data.map((e) => {
    const content = `
      <h3 class="card-title">${e.name}</h3>
      <h5 class="card-subtitle mb-2 text-muted">${
        e.current ? "still learn" : `${e.from} - ${e.to}`
      }</h4>
      <h4 class="card-subtitle mb-2 text-muted">${e.field_of_study}</h4>
    `;
    return cardBootstrap(content);
  });
}
