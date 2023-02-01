import { useStore } from "@nanostores/preact";
import { checkIsEnglish } from "../services/cohere.js";
import { isEnglish } from "./store.js";

function TextArea() {
  const $isEnglish = useStore(isEnglish);

  const handleChange = async (event) => {
    const { value } = event.target;
    const isValid = value.length > 0;
    const language = await checkIsEnglish(value);
    isEnglish.set(language);
  };

  return (
    <textarea
      onChange={handleChange}
      name=""
      id="textArea"
      cols={30}
      rows={10}
      class="block w-full rounded-b-md border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      placeholder="Seven free books to learn JavaScript"
    ></textarea>
  );
}

export default TextArea;
