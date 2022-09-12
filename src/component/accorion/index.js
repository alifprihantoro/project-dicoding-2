/**
 * accordion
 *
 * need :
 * @param name: title, id unique, and title;
 * @param data: array object for list ex : [ { judul<string>,content<string> } ];
 *
 * this component from bootstrap
 */
export default function accordion(name,data) {
  return `
    <h2>${name}</h2>
    <div class="accordion" id="${name}">
      ${data
        .map((e, i) => {
          return `
      <div class="accordion-item">
        <h2 class="accordion-header" id="${name}-${i}">
          <button
            class="accordion-button${i > 0 ? " collapsed" : ""}"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse-${name}-${i}"
            aria-expanded="${i == 0 ? "true" : "false"}"
            aria-controls="collapse-${name}-${i}"
          >
            ${e.judul}
          </button>
        </h2>
        <div
          id="collapse-${name}-${i}"
          class="accordion-collapse collapse${i == 0 ? " show" : ""}"
          aria-labelledby="${name}-${i}"
          data-bs-parent="#${name}"
        >
          <div class="accordion-body">
            ${e.content}
          </div>
        </div>
      </div>
    `;
        })
        .join("")}
    </div>
  `;
}
