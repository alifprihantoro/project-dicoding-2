import btnBootstrap from "../bootstrap/btn";

/**
 * show data tech stack (skill)
 *
 * need :
 * @param stack: data tech stack;
 *
 * data example :
 * ["javascript", "css", "typescript", "tailwind"]
 */
export default function techStack  (stack)  {
  return stack.map((name_icon) => {
    return btnBootstrap("#", name_icon, `akar-icons:${name_icon}-fill`);
  });
};
