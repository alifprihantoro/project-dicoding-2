import btnBootstrap from "../bootstrap/btn";

/**
 * show data tech stack (skill)
 *
 * need :
 * @param stack data tech stack;
 *
 * data example :
 * ["javascript", "css", "typescript", "tailwind"]
 */
export default function techStack(stack) {
  const title = "<h2>Tech Stack</h2>";
  const btn_icon = stack
    .map((name_icon) => {
      return btnBootstrap({
        url: "#",
        text: name_icon,
        icon: `akar-icons:${name_icon}-fill`,
      });
    })
    .join("");
  return title + btn_icon;
}
