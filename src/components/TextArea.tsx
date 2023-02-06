import { useStore } from "@nanostores/preact";
import { checkIsEnglish, createBodyParagraph, createTitle } from "../services/cohere.js";
import {
  apiBodyParagraphResponse,
  isLoading,
  isEnglish,
  apiTitleParagraphResponse,
  postDate,
} from "./store";
import { useState, useRef } from "preact/hooks";
import useAutosizeTextArea from "../hooks/useAutoSizeText.js";
import SubmitButton from "./ButtonSubmit.js";
import { Icons } from "./Icons.js";


let promiseBody = null;
let promiseTitle = null;

function TextArea() {
  const [valueText, setValueText] = useState("");
  const [isPrompt, setIsPrompt] = useState(true)
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const $isEnglish = useStore(isEnglish);

  useAutosizeTextArea(textAreaRef.current, valueText);

  const handleClick = async () => {
    const text = (document.getElementById("textArea") as HTMLInputElement).value;
    promiseBody = createBodyParagraph(text);
    promiseTitle = createTitle(text);
    isLoading.set(true);
    apiTitleParagraphResponse.set(await promiseTitle);
    apiBodyParagraphResponse.set(await promiseBody);
    postDate.set(new Date())
    isLoading.set(false);
  };

  const handleChange = async (event) => {
    const { value } = event.target;
    setIsPrompt(value.length > 0)
    setValueText(value)
    const language = await checkIsEnglish(value);
    isEnglish.set(language);
  };

  const onEnterPress = (event) => {
    if (event.keyCode == 13 && event.shiftKey == false && $isEnglish) {
      event.preventDefault()
      handleClick()
    }
  }

  return (
    <section class="flex flex-col w-full max-w-3xl m-auto py-2 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]">
      {
        !$isEnglish
          ?
          (<span class="text-sm mb-2 text-red-600">
            Sorry we only support english prompts for now.
          </span>)
          : null
      }
      <textarea
        onInput={handleChange}
        name=""
        id="textArea"
        rows={1}
        class="m-0 w-full resize-none border-0 bg-transparent p-0 pl-2 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pl-0"
        placeholder="How to start learning programming?"
        ref={textAreaRef}
        onKeyDown={onEnterPress}
        value={valueText}
        style="max-height: 200px; height: 24px; overflow-y: hidden; outline: none; border: none;"
      ></textarea>
      <button
        class="absolute p-1 rounded-md text-gray-500 bottom-1.5 right-1 md:bottom-2.5 md:right-2 hover:bg-gray-100 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent transition delay-150 duration-150 ease-in-out"
        aria-label="Send Prompt"
        disabled={!$isEnglish}
        onClick={handleClick}>
        <Icons.sentIcon />
      </button>
    </section>
  );
}

export default TextArea;
