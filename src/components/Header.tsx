import useDarkMode from "../hooks/useDarkMode";
import { Icons } from "./Icons";
import LoginGitHub from "./LoginGitHub";

function Header() {
  const { colorTheme, setDarkMode } = useDarkMode();

  const handleClick = () => {
    setDarkMode(colorTheme)
  }
  return (
    <header class="relative">
      <section class="flex justify-end items-center gap-4 p-8">
        <LoginGitHub />
        {
          colorTheme === "dark"
            ? <button class="dark:hover:bg-gray-700 hover:bg-gray-200 p-3 rounded-md dark:text-white" onClick={handleClick}> <Icons.lightmode /> </button>
            : <button class="dark:hover:bg-gray-700 hover:bg-gray-200 p-3 rounded-md dark:text-white" onClick={handleClick}> <Icons.darkmode /> </button>
        }
      </section>

      <h1 class="m-auto py-12 mb-8 max-w-[22ch] text-center text-5xl font-semibold leading-tight text-[#160647] dark:text-white md:text-6xl">
        Time to say <span>‘goodbye’</span> to the blank posts
      </h1>
    </header>
  );
}

export default Header;
