import { Show, createSignal } from "solid-js"
import styles from "./app.module.css"
import { Display } from "./components/display/display"
import { Menu } from "./components/menu/menu"
import { Panel } from "./components/panel/panel"
import { TimerProvider } from "./contexts/timer-context"

function App() {
  const [isMenuOpen, setIsMenuOpen] = createSignal(false)

  return (
    <TimerProvider>
      <main class={styles.card}>
        <button
          class={styles["menu-btn"]}
          aria-label="menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class={styles["menu-svg"]}
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
        <Show when={isMenuOpen()}>
          <Menu closeMenu={setIsMenuOpen} />
        </Show>

        <Display />

        <Panel />
      </main>
    </TimerProvider>
  )
}

export default App
