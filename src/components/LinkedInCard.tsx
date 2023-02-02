import { useStore } from "@nanostores/preact";
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
      <article class="max-w-lg rounded-lg border bg-white px-4 py-3 shadow-sm dark:border-gray-800 dark:bg-gray-800">
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
              <svg
                class="ml-1 inline-block fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                fill="currentColor"
                width="16"
                height="16"
                focusable="false"
              >
                <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
              </svg>
            </div>
          </div>
        </div>
        {!$isLoading && $apiBodyParagraphResponse.length < 2 ? (
          <p class="mt-3 block whitespace-pre-line text-xl leading-snug text-black dark:text-white">
            Here will appear your response
          </p>
        ) : null}
        {$isLoading ? (
          <section role="status" class="mt-3 flex items-center justify-center">
            <svg
              aria-hidden="true"
              role="status"
              class="mr-3 inline h-8 w-8 animate-spin text-white"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
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
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                fill="currentColor"
                data-view-component="true"
                class="octicon octicon-copy"
              >
                <path
                  fill-rule="evenodd"
                  d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"
                ></path>
                <path
                  fill-rule="evenodd"
                  d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"
                ></path>
              </svg>
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
