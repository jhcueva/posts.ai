import { useStore } from "@nanostores/preact";
import { socialNetwork } from "./store";

function SocialNetworkSelector() {
  const handleClick = (name: string) => {
    socialNetwork.set(name)
    console.log(name)
  }
  return (
    <ul class="w-14 flex flex-col justify-center items-center gap-6 bg-slate-300 dark:bg-slate-800  rounded-t-full rounded-b-full pt-4 pb-4">
      <li class="rounded-full p-1">
        <input onChange={() => handleClick("twitter")} id="twitter" type="radio" value="" name="list-radio" class="hidden peer" checked />
        <label for="twitter" class="aspect-square w-12 rounded-full cursor-pointer dark:hover:text-[#03A9F4] dark:border-gray-700 dark:peer-checked:text-[#03A9F4] peer-checked:text-[#03A9F4]  hover:text-[#03A9F4] hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          <svg
            class="w-10 h-10"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
        </label>
      </li>
      <li class="">
        <input onChange={() => handleClick("facebook")} id="facebook" type="radio" value="" name="list-radio" class="hidden peer" />
        <label for="facebook" class="rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          <svg
            class="w-10 h-10"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"><path
              fill-rule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clip-rule="evenodd" /></svg>
        </label>
      </li>
      <li class="">
        <input onChange={() => handleClick("linkedin")} id="linkedin" type="radio" value="" name="list-radio" class="hidden peer" />
        <label for="linkedin" class="rounded-lg cursor-pointer dark:hover:text-[#0288D1] dark:border-gray-700 dark:peer-checked:text-[#0288D1] peer-checked:text-[#0288D1] hover:text-[#0288D1] hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" viewBox="0 0 48 48" width="48px" height="48px"><path fill="currentColor" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z" /><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z" /></svg>
        </label>
      </li>
    </ul>
  )
}

export default SocialNetworkSelector