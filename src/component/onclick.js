export default function onClick(id, func) {
  document.getElementById(id).addEventListener("click", func);
}
