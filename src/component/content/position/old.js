import jobPosition from "./";

/**
 * bundle job position Past
 *
 * need :
 * @param data
 */
export default function positionPast(data) {
  const title = `<h2>position past</h2>`;
  const bundle_position = data
    .map((e) => {
      return jobPosition(e, true);
    })
    .join("");
  const bundle = title + `<div class='d-flex'>` + bundle_position + "</div>";
  return bundle;
}
