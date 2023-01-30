import { useStore } from "@nanostores/preact"
import { isEnglish } from "./store"

function ErrorMessage() {
  const $isEnglish = useStore(isEnglish)
  return (
    <section class="block p-2.5 w-full bg-gray-50 rounded-t-md border-x border-t border-gray-300">
      {
        $isEnglish 
        ? null
        : <span>Sorry we only support english prompts for now</span>
      }
    </section>
  )
}

export default ErrorMessage