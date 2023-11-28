import styles from "./display.module.css"

export function Display() {
  return (
    <div class={styles.display}>
      <p class={styles.timer}>
        <span class={styles.clock}>25:00</span>{" "}
        <span class={styles.label}>time work</span>
      </p>

      <p class={styles.timer}>
        <span class={styles.clock}>5:00</span>{" "}
        <span class={styles.label}>time rest</span>
      </p>
    </div>
  )
}
