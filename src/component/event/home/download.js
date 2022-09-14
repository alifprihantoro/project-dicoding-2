export default function downloadBtn() {
  const element = document.getElementById("popup");
  const node = document.createElement("div");
  node.innerHTML = `
    <button type="button" class="btn btn-primary">pdf</button>
    <button type="button" class="btn btn-primary">jpg</button>
    <button type="button" class="btn btn-primary">png</button>
    <button type="button" class="btn btn-primary">html</button>
    <button type="button" class="btn btn-primary">copy html</button>
  `;
  element.appendChild(node);
}
