import loopListAccordion from "./loopList";

/**
 * accordion
 *
 * need :
 * @param name: title, id unique, and title;
 * @param data: array object for list ex : [ { judul<string>,content<string> } ];
 *
 * this component from bootstrap
 */
export default function accordion(name, data) {
  return `
    <h2 id='title-${name}'>${name}</h2>
    <div class="accordion" id="${name}">
      ${loopListAccordion(name, data)}
    </div>
  `;
}
