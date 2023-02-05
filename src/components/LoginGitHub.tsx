import { useUser } from "../hooks/useUser"
import { supabase } from "../utils/supabase"
import { Icons } from "./Icons"


function LoginGitHub() {
  const { user } = useUser()

  const handleClick = async () => {
    await supabase.auth.signInWithOAuth({ provider: "github" })
  }

  return (
    <>
      {
        !user
          ?
          <button type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30" onClick={handleClick}>
            <Icons.github />
            Sign in with Github
          </button>
          : null
      }

    </>

  )
}

export default LoginGitHub