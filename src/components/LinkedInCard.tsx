import { useStore } from "@nanostores/preact";
import WelcomeMessage from "./WelcomeMessage";
import { Icons } from "./Icons";
import {
  isLoading,
  apiBodyParagraphResponse,
  apiTitleParagraphResponse,
} from "./store";

function LinkedInCard() {
  const $apiBodyParagraphResponse = useStore(apiBodyParagraphResponse);
  const $apiTitleParagraphResponse = useStore(apiTitleParagraphResponse);
  const $isLoading = useStore(isLoading);

  return (
    <section class="flex items-center justify-center">
      <article class="max-w-lg rounded-lg md:w-[512px] border bg-white px-4 py-3 shadow-sm dark:border-gray-800 dark:bg-gray-800">
        <div class="flex items-center">
          <img
            class="h-12 w-12 rounded-full"
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          />
          <div class="ml-2">
            <div class="text-sm ">
              <span class="font-semibold dark:text-white">Dallin Baumbach</span>
              <span class="text-gray-500 dark:text-white"> • 1st</span>
            </div>
            <div class="text-xs text-gray-500 dark:text-white">
              Software Engineer at Tesla, Inc
            </div>
            <div class="flex text-xs text-gray-500 dark:text-white">
              <span class="inline-block">3d • Edited • </span>
              <Icons.linkedinWorld />
            </div>
          </div>
        </div>
        {
          !$isLoading && $apiBodyParagraphResponse.length < 2
            ? <WelcomeMessage styles={"mt-3 text-black dark:text-white"} />
            : null
        }
        {$isLoading ? (
          <section role="status" class="mt-3 flex items-center justify-center">
            <Icons.spinner />
            <span class="sr-only">Loading...</span>
          </section>
        ) : null}
        {!$isLoading && $apiBodyParagraphResponse.length > 2 ? (
          <section class="relative">
            <button
              onClick={() =>
                navigator.clipboard.writeText(
                  `${$apiTitleParagraphResponse} \n${$apiBodyParagraphResponse}`
                )
              }
              class="absolute top-0 right-0 rounded-md p-2 transition delay-150 duration-150 ease-in-out hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
            >
              <Icons.clipboard />
            </button>
            <p class="mt-3 block whitespace-pre-line pr-8 text-xl leading-snug text-black dark:text-white">
              {$apiTitleParagraphResponse}
            </p>
            <p class="mt-3 block whitespace-pre-line pr-7 text-xl leading-snug text-black dark:text-white">
              {$apiBodyParagraphResponse}
            </p>
          </section>
        ) : null}

        <p class="mt-2 text-sm leading-normal text-gray-800 dark:text-white md:leading-relaxed"></p>
        <div class="mt-3 flex items-center text-xs text-gray-500">
          <img
            class="mr-0.5"
            src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"
          />
          <img
            class="mr-0.5"
            src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f"
          />
          <img
            class="mr-0.5"
            src="https://static-exp1.licdn.com/sc/h/7fx9nkd7mx8avdpqm5hqcbi97"
          />
          <span class="ml-1 dark:text-white">47 • 26 comments</span>
        </div>
      </article>
    </section>
  );
}

export default LinkedInCard;
