import { data } from './data'

export default function menu() {
  return data
    .map((e) => {
      return `<li><a href='${e.link}'>${e.nama}</a></li>`;
    })
    .join("");
}
