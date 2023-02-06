import { Icons } from "./Icons";


function CopyToClipboard({ titleParagraph, bodyParagraph }) {
  const handleClick = () => {
    navigator.clipboard.writeText(`${titleParagraph} \n${bodyParagraph}`)
    import('https://cdn.skypack.dev/wc-toast')
      .then(({ toast }) => toast('Copied to clipboard', {
        duration: 2000,
        icon: {
          type: 'success'
        },
        theme: {
          type: 'dark'
        }
      }))
  }
  return (
    <button
      onClick={handleClick}
      class="absolute top-0 right-0 rounded-md p-2 transition delay-150 duration-150 ease-in-out hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
    >
      <Icons.clipboard />
    </button>
  )
}

export default CopyToClipboard