import cardBootstrap from "../bootstrap/card";

/**
 * bundle data credential <html>
 *
 * need :
 * @param data: data credential;
 *
 * example data :
 * [
 *   {
 *     "title": "Front End Development Libraries",
 *     "institute": "freeCodeCamp",
 *     "from": "Jul 2022",
 *     "current": false,
 *     "to": null,
 *     "id": null,
 *     "url": "https://freecodecamp.org/certification/alifmuryp/front-end-development-libraries"
 *   },
 *   {
 *     "title": "Belajar Dasar Pemrograman Web",
 *     "institute": "Dicoding Indonesia",
 *     "from": "Jun 2022",
 *     "current": false,
 *     "to": "Jun 2025",
 *     "id": "6RPND1DWRZ2M",
 *     "url": "https://www.dicoding.com/certificates/6RPND1DWRZ2M"
 *   }
 * ]
 */
export default function credentialList(data) {
  const title = "<h2>Credential or Certivicate</h2>";
  const bundle_card = data
    .map((e) => {
      const content = `
        <h3 class="card-title">${e.title}</h3>
        <h4 class="card-subtitle mb-2 text-muted">${e.institute}</h4>
        <h5 class="card-subtitle mb-2 text-muted">${
          e.current ? "still learn" : `${e.from} - ${e.to}`
        }</h4>
        <h4 class="card-subtitle mb-2 text-muted">${
          e.id == null ? "" : e.id
        }</h4>
        <a href="${e.url}" class="card-link">Show credential</a>
    `;
      return cardBootstrap(content);
    })
    .join("");
  const bundle = title + `<div class='d-flex'>` + bundle_card + `</div>`;
  return bundle;
}
