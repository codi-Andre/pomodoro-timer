import styles from "./app.module.css"
import { Timer } from "./components/timer/timer"
import { Display } from "./components/display/display"
import { Panel } from "./components/panel/panel"

function App() {
  return (
    <main class={styles.card}>
      <header>
        <button class={styles.menu} aria-label="menu">
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
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </header>

      <Timer />

      <Display />

      <Panel />
    </main>
  )
}

export default App
