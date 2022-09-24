import cardBootstrap from "../bootstrap/card";
// position now
export const jobPosition = (e, current) => {
  const content = `
    <h3 class="card-title">${e.company}</h3>
    <h5 class="card-subtitle mb-2 text-muted">${e.from} - ${
    current ? "Now" : e.out
  }</h5>
    <p class="card-subtitle mb-2 text-muted">${e.description}</p>
  `;
  return cardBootstrap(content);
};

export const positionNow = (data) => {
  return jobPosition(data, false);
};
export const positionPast = (data) => {
  return data.map((e) => {
    return jobPosition(e, true);
  });
};

