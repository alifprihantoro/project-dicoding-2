/**
 * btn from bootstrap
 *
 * need :
 * @param link link btn
 * @param text text btn (optional)
 * @param icon name from iconify (optional)
 */
export default function btnBootstrap({ link = "", text = "", icon = "" }) {
  const content = `
    <a 
      class="btn btn-primary"
      href="${link}"
      role="button">
      ${icon == "" ? "" : `<iconify-icon icon="${icon}"></iconify-icon>`}
      ${text == "" ? link : text}
    </a>
  `;
  return content
}
