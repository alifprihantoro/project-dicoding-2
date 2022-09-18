export default function btnBootstrap(link, text, icon) {
  return `
    <a 
      class="btn btn-primary"
      href="${link}"
      role="button">
      sdaf
      ${icon == "" ? "" : `<iconify-icon icon="${icon}"/>`}
      ${text}
    </a>
  `;
}
