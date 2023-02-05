import { useStore } from "@nanostores/preact";
import WelcomeMessage from "./WelcomeMessage";
import { Icons } from "./Icons";
import {
  isLoading,
  apiBodyParagraphResponse,
  apiTitleParagraphResponse,
  postDate,
} from "./store";

function FacebookCard({ user }) {
  const $apiBodyParagraphResponse = useStore(apiBodyParagraphResponse);
  const $apiTitleParagraphResponse = useStore(apiTitleParagraphResponse);
  const $isLoading = useStore(isLoading);
  const $postDate = useStore(postDate)

  return (
    <article class="flex items-center justify-center">
      <div class="max-w-xl rounded-lg bg-white px-5 md:w-[425.67px] py-4 shadow dark:bg-gray-800">
        <section class="mb-4 flex">
          <img
            class="h-12 w-12 rounded-full object-cover"
            src={user ? user.avatar : "https://user-images.githubusercontent.com/11250/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpg"}
          />
          <section class="ml-2 mt-0.5">
            <span class="block text-base font-medium leading-snug text-black dark:text-gray-100">
              {user ? user.name : "newUser"}
            </span>
            <span class="block text-sm font-light leading-snug text-gray-500 dark:text-gray-400">
              {$postDate.getDate()} {$postDate.toLocaleString('default', { month: 'long' })} at {$postDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false })}
            </span>
          </section>
        </section>
        {
          !$isLoading && $apiBodyParagraphResponse.length < 2
            ? <WelcomeMessage styles={"text-gray-800 dark:text-gray-100 md:leading-normal"} />
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
            <p class="whitespace-pre-line pr-8 text-xl leading-snug text-gray-800 dark:text-gray-100 md:leading-normal">
              {$apiTitleParagraphResponse}
            </p>
            <p class="whitespace-pre-line pr-7 text-xl leading-snug text-gray-800 dark:text-gray-100 md:leading-normal">
              {$apiBodyParagraphResponse}
            </p>
          </section>
        ) : null}

        <div class="mt-5 flex items-center justify-between">
          <div class="flex ">
            <Icons.facebookLike />
            <span class="ml-1 font-light text-gray-500  dark:text-gray-400">
              8
            </span>
          </div>
          <div class="ml-1 font-light text-gray-500 dark:text-gray-400">
            33 comments
          </div>
        </div>
      </div>
    </article>
  );
}

export default FacebookCard;
