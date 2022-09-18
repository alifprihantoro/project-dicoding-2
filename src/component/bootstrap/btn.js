export default function btnBootstrap(link, text, icon) {
  return `
    <a 
      class="btn btn-primary"
      href="${link}"
      role="button">
      ${icon == "" ? "" : `<iconify-icon icon="${icon}"></iconify-icon>`}
      ${text}
    </a>
  `;
}
