import cardBootstrap from "../bootstrap/card";

/**
 * education list
 *
 * need :
 * @function example: for something;
 */
export default function educationList(data) {
  const title = "<h2>Education</h2>";
  const bundle_card = data
    .map((e) => {
      const content = `
      <h3 class="card-title">${e.name}</h3>
      <h5 class="card-subtitle mb-2 text-muted">${
        e.current ? "still learn" : `${e.from} - ${e.to}`
      }</h4>
      <h4 class="card-subtitle mb-2 text-muted">${e.field_of_study}</h4>
    `;
      return cardBootstrap(content);
    })
    .join("");
  const bundle = title + `<div class='d-flex'>` + bundle_card + "</div>";
  return bundle;
}
