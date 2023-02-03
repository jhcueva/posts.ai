import { useStore } from "@nanostores/preact";
import { Icons } from "./Icons";
import {
  isLoading,
  apiBodyParagraphResponse,
  apiTitleParagraphResponse,
} from "./store";

function FacebookCard() {
  const $apiBodyParagraphResponse = useStore(apiBodyParagraphResponse);
  const $apiTitleParagraphResponse = useStore(apiTitleParagraphResponse);
  const $isLoading = useStore(isLoading);

  return (
    <article class="flex items-center justify-center">
      <div class="max-w-xl rounded-lg bg-white px-5 py-4 shadow dark:bg-gray-800">
        <section class="mb-4 flex">
          <img
            class="h-12 w-12 rounded-full"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          />
          <section class="ml-2 mt-0.5">
            <span class="block text-base font-medium leading-snug text-black dark:text-gray-100">
              Loyce Kuvalis
            </span>
            <span class="block text-sm font-light leading-snug text-gray-500 dark:text-gray-400">
              16 December at 08:25
            </span>
          </section>
        </section>
        {!$isLoading && $apiBodyParagraphResponse.length < 2 ? (
          <p class="text-xl leading-snug text-gray-800 dark:text-gray-100 md:leading-normal">
            Here will appear your response
          </p>
        ) : null}
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
