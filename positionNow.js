// position now
export default function jobPosition(e, current) {
  const content = `
    <h3 class="card-title">${e.company}</h3>
    <h5 class="card-subtitle mb-2 text-muted">${e.from} - ${
    current ? "Now" : e.out
  }</h5>
    <p class="card-subtitle mb-2 text-muted">${e.description}</p>
  `;
  return cardBootstrap(content);
}
