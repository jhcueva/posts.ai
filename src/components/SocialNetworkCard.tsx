import { useStore } from "@nanostores/preact";
import { socialNetwork } from "./store";
import TwitterCard from "./Twitter";
import FacebookCard from "./Facebook";
import LinkedInCard from "./LinkedInCard";

function SocialNetworkCard() {
  const $socialNetwork = useStore(socialNetwork);
  return (
    <>
      {$socialNetwork === "twitter" ? <TwitterCard /> : null}
      {$socialNetwork === "facebook" ? <FacebookCard /> : null}
      {$socialNetwork === "linkedin" ? <LinkedInCard /> : null}
    </>
  );
}

export default SocialNetworkCard;
