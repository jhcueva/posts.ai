import useDarkMode from "../hooks/useDarkMode";
import { Icons } from "./Icons";

function DarkModeToggle() {
  const { colorTheme, setDarkMode } = useDarkMode();

  const handleClick = () => {
    setDarkMode(colorTheme)
  }
  return (
    <>
      {
        colorTheme === "dark"
          ? <button class="dark:hover:bg-gray-700 hover:bg-gray-200 p-3 rounded-md dark:text-white" aria-label="lightMode" onClick={handleClick} > <Icons.lightmode /> </button>
          : <button class="dark:hover:bg-gray-700 hover:bg-gray-200 p-3 rounded-md dark:text-white" aria-label="darkMode" onClick={handleClick}> <Icons.darkmode /> </button>
      }
    </>
  )
}

export default DarkModeToggle