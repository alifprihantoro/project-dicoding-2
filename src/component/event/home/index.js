import onClick from "../../onclick";
import eventStartNowHomeBtn from "../../event/home/start-now";

/**
 * event on home
 * this list event for btn or any event in home
 */
export default function myEvent() {
  // btn start now on header
  onClick("start-now",eventStartNowHomeBtn);
}
