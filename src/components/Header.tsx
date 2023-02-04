import useDarkMode from "../hooks/useDarkMode";
import { Icons } from "./Icons";

function Header() {
  const { colorTheme, setDarkMode } = useDarkMode();

  const handleClick = () => {
    setDarkMode(colorTheme)
  }

  return (
    <header class="relative">
      <h1 class="m-auto py-6 mb-12 max-w-[22ch] text-center text-5xl font-semibold leading-tight text-[#160647] dark:text-white md:text-6xl">
        Time to say <span>‘goodbye’</span> to the blank posts
      </h1>
      {
        colorTheme === "dark"
          ? <button class="dark:hover:bg-gray-700 hover:bg-gray-200 p-2 absolute top-4 right-4 rounded-md dark:text-white" onClick={handleClick}> <Icons.lightmode /> </button>
          : <button class="dark:hover:bg-gray-700 hover:bg-gray-200 p-2 absolute top-4 right-4 rounded-md dark:text-white" onClick={handleClick}> <Icons.darkmode /> </button>
      }
    </header>
  );
}

export default Header;
