import useDarkMode from "../hooks/useDarkMode";

function Header() {
  const { colorTheme, $isDarkMode } = useDarkMode();

  return (
    <header>
      <input type="checkbox" id="toggle" class="hidden" />

      <label
        class="toggle relative flex h-16 w-32 cursor-pointer justify-between"
        for="toggle"
      >
        <i class="bx bxs-sun"></i>
        <i class="bx bx-moon"></i>
        <span class="ball absolute aspect-square w-10 rounded-full"></span>
      </label>
      {colorTheme === "dark" ? (
        <span class="dark:text-white">Is dark</span>
      ) : (
        <span class="dark:text-white">Not dark</span>
      )}
    </header>
  );
}

export default Header;
