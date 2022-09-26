import onClick from "../../onclick";
function generate() {
  const input_username = document.getElementById("username-github");
  const link = `user/?${input_username.value}`
  window.location.href = link
}
/**
 * event on home
 * this list event for btn or any event in home
 */
export default function myEvent() {
  // btn start now on header
  onClick("start-now", generate);
}
