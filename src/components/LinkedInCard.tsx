import WelcomeMessage from "./WelcomeMessage";
import { Icons } from "./Icons";
import CopyToClipboard from "./CopyToClipboard";

function LinkedInCard({ user, title, body, date, isLoading }) {
  return (
    <section class="flex items-center justify-center">
      <article class="max-w-lg rounded-lg md:w-[425.67px] border bg-white px-4 py-3 shadow-sm dark:border-gray-800 dark:bg-gray-800">
        <div class="flex items-center">
          <img
            class="h-12 w-12 rounded-full object-cover"
            src={user ? user.avatar : "https://user-images.githubusercontent.com/11250/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpg"}
          />
          <div class="ml-2">
            <div class="text-sm ">
              <span class="font-semibold dark:text-white">
                {user ? user.name : "newUser"}
              </span>
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
          !isLoading && body.length < 2
            ? <WelcomeMessage styles={"mt-3 text-black dark:text-white"} />
            : null
        }
        {isLoading ? (
          <section role="status" class="mt-3 flex items-center justify-center">
            <Icons.spinner />
            <span class="sr-only">Loading...</span>
          </section>
        ) : null}
        {!isLoading && body.length > 2 ? (
          <section class="relative">
            <CopyToClipboard titleParagraph={title} bodyParagraph={body} />
            <p class="mt-3 block whitespace-pre-line pr-8 text-xl leading-snug text-black dark:text-white">
              {title}
            </p>
            <p class="mt-3 block whitespace-pre-line pr-7 text-xl leading-snug text-black dark:text-white">
              {body}
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
