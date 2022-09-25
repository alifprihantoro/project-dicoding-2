import cardBootstrap from "../../bootstrap/card";

/**
 * card for job position
 *
 * need :
 * @param data from detail
 * @param isCurrent is position now or past
 */
export default function jobPosition(data = {}, isCurrent = false) {
  const content = `
    <h3 class="card-title">${data.company}</h3>
    <h5 class="card-subtitle mb-2 text-muted">${data.from} - ${
    isCurrent ? "Now" : data.out
  }</h5>
    <p class="card-subtitle mb-2 text-muted">${data.description}</p>
  `;
  return cardBootstrap(content);
}
