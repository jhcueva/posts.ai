import { useStore } from "@nanostores/preact";
import { isLoading, apiBodyParagraphResponse, apiTitleParagraphResponse } from "./store";

function FacebookCard() {
  const $apiBodyParagraphResponse = useStore(apiBodyParagraphResponse);
  const $apiTitleParagraphResponse = useStore(apiTitleParagraphResponse)
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
        {
          !$isLoading && ($apiBodyParagraphResponse.length < 2)
            ?
            <p class="leading-snug text-gray-800 dark:text-gray-100 md:leading-normal text-xl">
              Here will appear your response
            </p>
            : null
        }
        {
          $isLoading
            ?
            <section role="status" class="flex justify-center items-center mt-3">
              <svg aria-hidden="true" role="status" class="inline w-8 h-8 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
              </svg>
              <span class="sr-only">Loading...</span>
            </section>
            : null
        }
        {

          !$isLoading && ($apiBodyParagraphResponse.length > 2)
            ?
            <section class="relative">
              <button
                onClick={() => navigator.clipboard.writeText(`${$apiTitleParagraphResponse} \n${$apiBodyParagraphResponse}`)}
                class="dark:text-white absolute top-0 right-0 p-2 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition delay-150 duration-150 ease-in-out rounded-md"
              >
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" fill="currentColor" data-view-component="true" class="octicon octicon-copy">
                  <path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path>
                </svg>
              </button>
              <p class="whitespace-pre-line leading-snug text-gray-800 text-xl dark:text-gray-100 md:leading-normal pr-8">
                {$apiTitleParagraphResponse}
              </p>
              <p class="whitespace-pre-line leading-snug text-gray-800 text-xl dark:text-gray-100 md:leading-normal pr-7">
                {$apiBodyParagraphResponse}
              </p>
            </section>
            : null
        }


        <div class="mt-5 flex items-center justify-between">
          <div class="flex ">
            <svg
              class="z-20 h-6 w-6 rounded-full bg-white p-0.5 dark:bg-gray-800 "
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 16 16"
            >
              <defs>
                <linearGradient id="a1" x1="50%" x2="50%" y1="0%" y2="100%">
                  <stop offset="0%" stop-color="#18AFFF" />
                  <stop offset="100%" stop-color="#0062DF" />
                </linearGradient>
                <filter
                  id="c1"
                  width="118.8%"
                  height="118.8%"
                  x="-9.4%"
                  y="-9.4%"
                  filterUnits="objectBoundingBox"
                >
                  <feGaussianBlur
                    in="SourceAlpha"
                    result="shadowBlurInner1"
                    stdDeviation="1"
                  />
                  <feOffset
                    dy="-1"
                    in="shadowBlurInner1"
                    result="shadowOffsetInner1"
                  />
                  <feComposite
                    in="shadowOffsetInner1"
                    in2="SourceAlpha"
                    k2="-1"
                    k3="1"
                    operator="arithmetic"
                    result="shadowInnerInner1"
                  />
                  <feColorMatrix
                    in="shadowInnerInner1"
                    values="0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0"
                  />
                </filter>
                <path
                  id="b1"
                  d="M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z"
                />
              </defs>
              <g fill="none">
                <use fill="url(#a1)" xlinkHref="#b1" />
                <use fill="black" filter="url(#c1)" xlinkHref="#b1" />
                <path
                  fill="white"
                  d="M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z"
                />
              </g>
            </svg>
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
