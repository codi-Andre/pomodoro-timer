import styles from "./menu.module.css"
import { useTimerContext } from "../../contexts/timer-context"
import { Setter } from "solid-js"

interface UserInput {
  work: string
  rest: string
}

interface MenuProps {
  closeMenu: Setter<boolean>
}

export function Menu(props: MenuProps) {
  const [, { setTimeInMin }] = useTimerContext()

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget as HTMLFormElement)
    const formJson = Object.fromEntries(formData.entries())
    const userEntries: UserInput = Object.create(formJson)

    const work = parseInt(userEntries.work, 10)
    const rest = parseInt(userEntries.rest, 10)

    setTimeInMin(work, rest)
  }

  return (
    <div class={styles.popover}>
      <h2 class={styles.title}>Want to set a time?</h2>

      <button
        class={styles.close}
        onClick={() => props.closeMenu((prev) => !prev)}
        aria-label="close menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class={styles["close-svg"]}
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
      <form class={styles.form} onSubmit={handleSubmit}>
        <label class={styles.label}>
          <span class={styles.tag}>time work:</span>

          <input
            class={styles.input}
            placeholder="25"
            type="number"
            name="work"
            min={1}
            max={60}
          />
        </label>

        <label class={styles.label}>
          <span class={styles.tag}>time rest:</span>

          <input
            class={styles.input}
            placeholder="5"
            type="number"
            name="rest"
            min={1}
            max={60}
          />
        </label>

        <button class={styles.submit} type="submit">
          Set Time
        </button>
      </form>

      <h3 class={styles.subtitle}>
        Design made by{" "}
        <a target="blank" href="https://dribbble.com/reticent_author">
          Marie
        </a>
      </h3>

      <p class={styles.legend}>except this menu &#128517;</p>
    </div>
  )
}
