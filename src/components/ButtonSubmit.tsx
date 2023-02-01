import { useStore } from "@nanostores/preact";
import { createBodyParagraph } from "../services/cohere.js";
import { apiBodyParagraphResponse, isLoading, isEnglish } from "./store";

let promise = null;

function SubmitButton() {
  const $isEnglish = useStore(isEnglish);

  const handleClick = async () => {
    const text = document.getElementById("textArea").value;
    promise = createBodyParagraph(text);
    isLoading.set(true);
    apiBodyParagraphResponse.set(await promise);
    isLoading.set(false);
  };

  return (
    <button
      class="dark:focus: my-2 rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white ring-blue-800 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300"
      onClick={handleClick}
      disabled={!$isEnglish}
    >
      Submit
    </button>
  );
}

export default SubmitButton;
