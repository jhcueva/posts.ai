import { useStore } from "@nanostores/preact";
import { isEnglish } from "./store";

function ErrorMessage() {
  const $isEnglish = useStore(isEnglish);
  return (
    <section class="flex items-center gap-2 w-full rounded-t-md border-x border-t border-gray-300 bg-gray-50  p-2.5">
      🤖
      {$isEnglish ? null : (
        <span class="text-red-600 text-sm">Sorry we only support english prompts for now</span>
      )}
    </section>
  );
}

export default ErrorMessage;
