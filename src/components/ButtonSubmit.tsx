import { useStore } from "@nanostores/preact";
import { createBodyParagraph, createTitle } from "../services/cohere.js";
import {
  apiBodyParagraphResponse,
  isLoading,
  isEnglish,
  apiTitleParagraphResponse,
} from "./store";
import { Icons } from "./Icons.js";

let promiseBody = null;
let promiseTitle = null;

function SubmitButton() {
  const $isEnglish = useStore(isEnglish);

  const handleClick = async () => {
    const text = document.getElementById("textArea").value;
    promiseBody = createBodyParagraph(text);
    promiseTitle = createTitle(text);
    isLoading.set(true);
    apiTitleParagraphResponse.set(await promiseTitle);
    apiBodyParagraphResponse.set(await promiseBody);
    isLoading.set(false);
  };

  return (
    <button
      class="absolute p-1 rounded-md text-gray-500 bottom-1.5 right-1 md:bottom-2.5 md:right-2 hover:bg-gray-100 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent transition delay-150 duration-150 ease-in-out"
      onClick={handleClick}
      disabled={!$isEnglish}
    >
      <Icons.sentIcon />
    </button>
  );
}

export default SubmitButton;
