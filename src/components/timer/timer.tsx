import styles from "./timer.module.css"

export function Timer() {
  return (
    <div class={styles.container}>
      <div class={styles.display}>
        <span class={styles.timer}>0</span>
        <span class={styles.timer}>0</span>
        <span class={styles.timer}>:</span>
        <span class={styles.timer}>0</span>
        <span class={styles.timer}>0</span>
      </div>
    </div>
  )
}
