import { useStore } from "@nanostores/preact";
import { socialNetwork } from "./store";
import TwitterCard from "./Twitter";
import FacebookCard from "./Facebook";
import LinkedInCard from "./LinkedInCard";
import { useUser } from "../hooks/useUser";

function SocialNetworkCard() {
  const $socialNetwork = useStore(socialNetwork);
  const { user } = useUser()
  return (
    <>
      {$socialNetwork === "twitter" ? <TwitterCard /> : null}
      {$socialNetwork === "facebook" ? <FacebookCard /> : null}
      {$socialNetwork === "linkedin" ? <LinkedInCard /> : null}
    </>
  );
}

export default SocialNetworkCard;
