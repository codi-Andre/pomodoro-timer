import { createEffect } from "solid-js"
import { useTimerContext } from "../../contexts/timer-context"
import { calculatePercentage } from "../../utils/calculatePercentage"
import styles from "./display.module.css"

export function Display() {
  const [state] = useTimerContext()

  const progressBarSize = 750
  const progressBar = () =>
    calculatePercentage(state.timeInPercentage, progressBarSize)

  let progressBarRef: SVGCircleElement | undefined
  let audioRef: HTMLAudioElement | undefined

  createEffect(() => {
    if (state.countDown) {
      if (progressBarRef) progressBarRef.style.stroke = "url(#grad1)"
    } else {
      if (progressBarRef) progressBarRef.style.stroke = "url(#grad2)"
    }
  })

  createEffect(() => {
    if (state.isRunning && state.timeInPercentage >= 99 && state.countDown) {
      audioRef?.play()
    } else if (
      state.isRunning &&
      state.timeInPercentage <= 1 &&
      !state.countDown
    ) {
      audioRef?.play()
    }
  })

  return (
    <div class={styles.container}>
      <audio ref={audioRef} tabIndex={-1}>
        <source src="/timer-finished.mp3" type="audio/mpeg" />
      </audio>
      <div
        class={`${styles.display} ${
          state.countDown ? "text-pink" : "text-green"
        }`}
      >
        <span class={styles.timer}>{state.time[0]}</span>
        <span class={styles.timer}>{state.time[1]}</span>
        <span class={styles.timer}>:</span>
        <span class={styles.timer}>{state.time[3]}</span>
        <span class={styles.timer}>{state.time[4]}</span>
      </div>
      <div class={styles["info-container"]}>
        <p class={styles.info}>
          <span class={styles.clock}>{state.timeWork}:00</span>{" "}
          <span class={styles.label}>TIME WORK</span>
        </p>

        <p class={styles.info}>
          <span class={styles.clock}>{state.timeRest}:00</span>{" "}
          <span class={styles.label}>TIME REST</span>
        </p>
      </div>
      <svg class={styles["progress-bar"]} height={260} width={260} aria-hidden>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop
            offset="0%"
            style={{
              "stop-color": "var(--pink700)",
              "stop-opacity": "1"
            }}
          />
          <stop
            offset="100%"
            style={{
              "stop-color": "var(--pink500)",
              "stop-opacity": "1"
            }}
          />
        </linearGradient>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop
            offset="0%"
            style={{
              "stop-color": "var(--green700)",
              "stop-opacity": "1"
            }}
          />
          <stop
            offset="100%"
            style={{
              "stop-color": "var(--green500)",
              "stop-opacity": "1"
            }}
          />
        </linearGradient>
        <circle
          ref={progressBarRef}
          cx="129"
          cy="129"
          r="119"
          fill="none"
          stroke="url(grad1)"
          stroke-width="10"
          stroke-linecap="round"
          stroke-dasharray={progressBarSize.toString()}
          stroke-dashoffset={progressBar()}
          class={styles.circle}
        />
      </svg>
    </div>
  )
}
