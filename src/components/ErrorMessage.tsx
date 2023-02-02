import { useStore } from "@nanostores/preact";
import { isEnglish } from "./store";

function ErrorMessage() {
  const $isEnglish = useStore(isEnglish);
  return (
    <section class="flex w-full items-center gap-2 rounded-t-md border-x border-t border-gray-300 bg-gray-50 p-2.5">
      🤖
      {!$isEnglish ? (
        <span class="text-sm text-red-600">
          Sorry we only support english prompts for now
        </span>
      ) : null}
    </section>
  );
}

export default ErrorMessage;
