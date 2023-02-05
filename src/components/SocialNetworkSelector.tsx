import { useStore } from "@nanostores/preact";
import { socialNetwork } from "./store";
import { Icons } from "./Icons";

function SocialNetworkSelector() {
  const handleClick = (name: string) => {
    socialNetwork.set(name);
  };
  return (
    <ul class="flex w-56 h-14 md:w-14 md:h-56 md:flex-col items-center justify-center gap-6 rounded-t-full rounded-b-full bg-slate-200 pt-4 pb-4 dark:bg-slate-800">
      <li class="rounded-full p-1">
        <input
          onChange={() => handleClick("twitter")}
          id="twitter"
          type="radio"
          value=""
          name="list-radio"
          class="peer hidden"
          checked
        />
        <label
          for="twitter"
          class="aspect-square w-12 cursor-pointer rounded-full hover:bg-gray-100 hover:text-[#03A9F4] peer-checked:text-[#03A9F4] dark:border-gray-700  dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-[#03A9F4] dark:peer-checked:text-[#03A9F4]"
        >
          <Icons.twitter />
        </label>
      </li>
      <li class="">
        <input
          onChange={() => handleClick("facebook")}
          id="facebook"
          type="radio"
          value=""
          name="list-radio"
          class="peer hidden"
        />
        <label
          for="facebook"
          class="cursor-pointer rounded-lg hover:bg-gray-100 hover:text-gray-600 peer-checked:text-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-blue-500"
        >
          <Icons.facebook />
        </label>
      </li>
      <li class="">
        <input
          onChange={() => handleClick("linkedin")}
          id="linkedin"
          type="radio"
          value=""
          name="list-radio"
          class="peer hidden"
        />
        <label
          for="linkedin"
          class="cursor-pointer rounded-lg hover:bg-gray-100 hover:text-[#0288D1] peer-checked:text-[#0288D1] dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-[#0288D1] dark:peer-checked:text-[#0288D1]"
        >
          <Icons.linkedin />
        </label>
      </li>
    </ul>
  );
}

export default SocialNetworkSelector;
