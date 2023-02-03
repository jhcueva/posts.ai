import { useStore } from "@nanostores/preact";
import { checkIsEnglish } from "../services/cohere.js";
import { isEnglish } from "./store.js";
import { useState, useRef } from "preact/hooks";
import useAutosizeTextArea from "../hooks/useAutoSizeText.js";
import SubmitButton from "./ButtonSubmit.js";

function TextArea() {
  const [valueText, setValueText] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const $isEnglish = useStore(isEnglish);

  useAutosizeTextArea(textAreaRef.current, valueText);

  const handleChange = async (event) => {
    const { value } = event.target;
    setValueText(value)
    const isValid = value.length > 0;
    const language = await checkIsEnglish(value);
    isEnglish.set(language);
  };

  return (
    <section class="flex flex-col w-full max-w-3xl m-auto py-2 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]">
      <textarea
        onInput={handleChange}
        name=""
        id="textArea"
        rows={1}
        class="m-0 w-full resize-none border-0 bg-transparent p-0 pl-2 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pl-0"
        placeholder="Seven free books to learn JavaScript"
        ref={textAreaRef}
        value={valueText}
        style="max-height: 200px; height: 24px; overflow-y: hidden; outline: none; border: none;"
      ></textarea>
      <SubmitButton />
    </section>
  );
}

export default TextArea;
