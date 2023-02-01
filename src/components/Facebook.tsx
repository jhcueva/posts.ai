function FacebookCard() {
  return (
    <article class="flex items-center justify-center bg-gray-50 p-8 dark:bg-gray-900">
      <div class="max-w-lg rounded-lg bg-white px-5 py-4 shadow dark:bg-gray-800">
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
        <p class="leading-snug text-gray-800 dark:text-gray-100 md:leading-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
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
