import { Icons } from "./Icons";
import WelcomeMessage from "./WelcomeMessage";
import CopyToClipboard from "./CopyToClipboard";

function TwitterCard({ user, title, body, date, isLoading }) {
  return (
    <section class="flex items-center justify-center lg:py-0">
      <article class="max-w-lg rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-800">
        <div class="flex justify-between">
          <div class="flex items-center">
            <img
              class="h-11 w-11 rounded-full object-cover"
              src={user ? user.avatar : "https://www.alphr.com/wp-content/uploads/2020/10/twitter.png"}
            />
            <div class="ml-1.5 text-sm leading-tight">
              <span class="block font-bold text-black dark:text-white ">
                {user ? user.name : "Eric Mc."}
              </span>
              <span class="block font-normal text-gray-500 dark:text-gray-400">
                {user ? `@${user.username}` : "@ericmc"}
              </span>
            </div>
          </div>
          <svg
            class="inline-block h-6 w-auto fill-current text-blue-400 dark:text-white"
            viewBox="0 0 24 24"
          >
            <g>
              <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
            </g>
          </svg>
        </div>

        {
          !isLoading && body.length < 2
            ? <WelcomeMessage styles={"mt-3 text-black dark:text-white"} />
            : null
        }
        {isLoading ? (
          <section role="status" class="mt-3 flex items-center justify-center">
            <Icons.spinnerTwitter />
            <span class="sr-only">Loading...</span>
          </section>
        ) : null}
        {!isLoading && body.length > 2 ? (
          <section class="relative">
            <CopyToClipboard titleParagraph={title} bodyParagraph={body} />
            <p class="mt-3 block whitespace-pre-line pr-8 text-xl leading-snug text-black dark:text-white">
              {title}
            </p>

            <p class="mt-3 block whitespace-pre-line text-xl leading-snug text-black dark:text-white">
              {body}
            </p>
          </section>
        ) : null}

        <p class="my-0.5 py-1 text-sm text-gray-500 dark:text-gray-400">
          {date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })} ?? {date.toLocaleString('default', { month: 'long' }).slice(0, 3)} {date.getDate()}, {date.getFullYear()}
        </p>
        <div class="my-1 border border-b-0 border-gray-200 dark:border-gray-600"></div>
        <div class="mt-3 flex text-gray-500 dark:text-gray-400 text-base">
          <div class="mr-6 flex items-center">
            <Icons.twitterLike />
            <span class="ml-3">615</span>
          </div>
          <div class="mr-6 flex items-center">
            <Icons.twitterComment />
            <span class="ml-3">93 people are Tweeting about this</span>
          </div>
        </div>
      </article>
    </section>
  );
}

export default TwitterCard;
