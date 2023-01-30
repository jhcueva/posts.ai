import useDarkMode  from '../hooks/useDarkMode'

function Header() {
  const { colorTheme, $isDarkMode } = useDarkMode()

  return (
    <header>
      <input type="checkbox" id="toggle" class="hidden"/>

      <label class="toggle flex w-32 h-16 justify-between relative cursor-pointer" for="toggle">
          <i class="bx bxs-sun"></i>
          <i class="bx bx-moon"></i>
          <span class="ball absolute aspect-square w-10 rounded-full"></span>
      </label>
      {
        colorTheme === 'dark'
        ? <span class="dark:text-white">Is dark</span>
        : <span class="dark:text-white">Not dark</span>
      }
    </header>
  )
}

export default Header