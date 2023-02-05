function WelcomeMessage({ styles }) {
  return (
    <p class={`block whitespace-pre-line text-xl leading-snug ${styles}`}>
      Write the topic of your post on the prompt.
      Here will be shown the answer.
    </p>
  )
}

export default WelcomeMessage