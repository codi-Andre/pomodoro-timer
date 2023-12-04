import { Show } from "solid-js"
import styles from "./panel.module.css"
import { useTimerContext } from "../../contexts/timer-context"

export function Panel() {
  const [state, { start, stop, reset, clear }] = useTimerContext()

  return (
    <div class={styles.panel}>
      <button
        aria-label="restart"
        class={`${styles["restart-btn"]} btn-active`}
        onClick={() => {
          reset()
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          viewBox="0 0 256 256"
          class={styles["restart-svg"]}
        >
          <path d="M240,56v48a8,8,0,0,1-8,8H184a8,8,0,0,1,0-16H211.4L184.81,71.64l-.25-.24a80,80,0,1,0-1.67,114.78,8,8,0,0,1,11,11.63A95.44,95.44,0,0,1,128,224h-1.32A96,96,0,1,1,195.75,60L224,85.8V56a8,8,0,1,1,16,0Z" />
        </svg>
      </button>

      <Show
        when={state.isRunning}
        fallback={
          <button
            aria-label="play"
            class={`${styles["play-btn"]} ${
              state.countDown ? "bg-pink" : "bg-green"
            } btn-active`}
            onClick={() => {
              start()
            }}
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
              class={styles["play-svg"]}
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </button>
        }
      >
        <button
          aria-label="pause"
          class={`${styles["pause-btn"]} ${
            state.countDown ? "bg-pink" : "bg-green"
          } btn-active`}
          onClick={() => {
            stop()
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class={styles["pause-svg"]}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 5.25v13.5m-7.5-13.5v13.5"
            />
          </svg>
        </button>
      </Show>

      <button
        aria-label="clear"
        class={`${styles["clear-btn"]} btn-active`}
        onClick={() => {
          clear()
        }}
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
          class={styles["clear-svg"]}
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
    </div>
  )
}
