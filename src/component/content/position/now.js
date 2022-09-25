import jobPosition from "./";

/**
 * bundle position now
 *
 * need :
 * @param data data from detail
 */
export default function positionNow(data) {
  const title = `<h2>position now</h2>`;
  const bundle =
    title + `<div class='d-flex'>` + jobPosition(data, false) + "</div>";
  return bundle;
}
