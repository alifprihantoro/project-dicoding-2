import btnBootstrap from "../bootstrap/btn";

/**
 * show data social media
 *
 * need :
 * @param social_media: data social media;
 *
 *  structure data :
 * {
 * "twitter": ["username1", "username2"],
 * "facebook": ["username1", "username2"],
 * "instagram": ["username1", "username2"],
 * "github": ["username1", "username2"]
 * }
 */
export default function socialMedia (social_media) {
  const sosmed_keys = Object.keys(social_media);
  const sosmed_bundle_html = sosmed_keys
    .map((sosmed_name) => {
      const sosmed_list_bundle_html = social_media[sosmed_name]
        .map((username) =>
          btnBootstrap(
            `https://${sosmed_name}.com/${username}`,
            "@" + username,
            `akar-icons:${sosmed_name}-fill`
          )
        )
        .join("");
      return sosmed_list_bundle_html;
    })
    .join("");
  return sosmed_bundle_html;
};
