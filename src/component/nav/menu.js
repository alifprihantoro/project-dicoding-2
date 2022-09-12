import { data } from './data'

export default function menu() {
  return data
    .map((e) => {
      return `
        <li class="nav-item"><a class="nav-link" href='${e.link}'>${e.nama}</a></li>`;
    })
    .join("");
}
