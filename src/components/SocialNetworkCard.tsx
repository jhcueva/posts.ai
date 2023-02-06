import { useStore } from "@nanostores/preact";
import { socialNetwork } from "./store";
import TwitterCard from "./Twitter";
import FacebookCard from "./Facebook";
import LinkedInCard from "./LinkedInCard";
import { useUser } from "../hooks/useUser";
import {
  isLoading,
  apiBodyParagraphResponse,
  apiTitleParagraphResponse,
  postDate
} from "./store";

function SocialNetworkCard() {
  const $apiBodyParagraphResponse = useStore(apiBodyParagraphResponse);
  const $apiTitleParagraphResponse = useStore(apiTitleParagraphResponse);
  const $isLoading = useStore(isLoading);
  const $postDate = useStore(postDate)
  const $socialNetwork = useStore(socialNetwork);
  const { user } = useUser()
  return (
    <>
      {$socialNetwork === "twitter" ? <TwitterCard user={user} title={$apiTitleParagraphResponse} body={$apiBodyParagraphResponse} date={$postDate} isLoading={$isLoading} /> : null}
      {$socialNetwork === "facebook" ? <FacebookCard user={user} title={$apiTitleParagraphResponse} body={$apiBodyParagraphResponse} date={$postDate} isLoading={$isLoading} /> : null}
      {$socialNetwork === "linkedin" ? <LinkedInCard user={user} title={$apiTitleParagraphResponse} body={$apiBodyParagraphResponse} date={$postDate} isLoading={$isLoading} /> : null}
    </>
  );
}

export default SocialNetworkCard;
