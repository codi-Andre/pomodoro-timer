import { JSX, createContext, onCleanup, useContext } from "solid-js"
import { Timer } from "../utils/timer"
import { createStore } from "solid-js/store"
import { formatTimeToTwoDigits } from "../utils/formatTimeToTwoDigits"
import { convertToPercentage } from "../utils/convertToPercentage"

interface TimerState {
  time: string
  timeWork: number
  timeRest: number
  timeInPercentage: number
  countDown: boolean
  isRunning: boolean
  timerId: NodeJS.Timeout | undefined
}

interface TimerMethods {
  start: () => void
  stop: () => void
  reset: () => void
  clear: () => void
  countMode: () => void
  countdownMode: () => void
  switchTimerMode: () => void
  setTimeInMin: (timeWork?: number, timeRest?: number) => void
}

type TimerStore = [TimerState, TimerMethods]

const initialState: TimerState = {
  time: "25:00",
  timeWork: 25,
  timeRest: 5,
  timeInPercentage: 0,
  countDown: true,
  isRunning: false,
  timerId: undefined
}

const TimerContext = createContext([initialState, {}] as TimerStore)

interface TimerProviderProps {
  children: JSX.Element
}

export function TimerProvider(props: TimerProviderProps) {
  const [state, setState] = createStore(initialState)

  const timer = new Timer()

  onCleanup(() => clearInterval(state.timerId))

  function updateCountTime() {
    const timeInPercentage = convertToPercentage(
      timer.getTimeRemaining,
      timer.targetTime
    )
    let time: number[] | string

    time = [timer.getTimeInMin, timer.getTimeInSec]
    time = formatTimeToTwoDigits(time)

    setState({ time, timeInPercentage })

    if (timeInPercentage <= 0) {
      switchTimerMode()
    }
  }

  function updateCountdownTime() {
    const timeInPercentage = convertToPercentage(
      timer.getTime,
      timer.targetTime
    )
    let time: number[] | string

    time = [timer.getTimeRemainingInMin, timer.getTimeRemainingInSec]
    time = formatTimeToTwoDigits(time)

    setState({ time, timeInPercentage })

    if (timeInPercentage >= 100) {
      switchTimerMode()
    }
  }

  function setTargetTime(minutes: number = 25) {
    const oneMinuteInMs = 1000 * 60

    timer.setTargetTime = oneMinuteInMs * minutes
  }

  function start() {
    timer.start()
    setState("isRunning", true)

    if (state.countDown) {
      setState("timerId", setInterval(updateCountdownTime, 1000))
    } else {
      setState("timerId", setInterval(updateCountTime, 1000))
    }
  }

  function stop() {
    timer.stop()

    setState("isRunning", false)
    clearInterval(state.timerId)
  }

  function reset() {
    timer.reset()

    if (state.countDown) {
      setState("time", formatTimeToTwoDigits([state.timeWork, 0]))
      setState("timeInPercentage", 0)
    } else {
      setState("time", formatTimeToTwoDigits([0, 0]))
      setState("timeInPercentage", 100)
    }
  }

  function clear() {
    timer.clear()

    clearInterval(state.timerId)
    setState({
      time: "25:00",
      countDown: true,
      timeWork: 25,
      timeRest: 5,
      isRunning: false,
      timeInPercentage: 0
    })
  }

  function countMode() {
    clearInterval(state.timerId)

    timer.clear()

    setState({ time: "00:00", countDown: false, isRunning: false })
  }

  function countdownMode() {
    clearInterval(state.timerId)

    timer.clear()
  }

  function switchTimerMode() {
    clearInterval(state.timerId)
    timer.clear()

    if (state.countDown) {
      setTargetTime(state.timeRest)
      setState({
        time: "00:00",
        countDown: false,
        isRunning: false,
        timeInPercentage: 100
      })
    } else {
      setTargetTime(state.timeWork)
      setState({
        time: formatTimeToTwoDigits([state.timeWork, 0]),
        countDown: true,
        isRunning: false,
        timeInPercentage: 0
      })
    }
  }

  function setTimeInMin(timeWork: number = 25, timeRest: number = 5) {
    timer.clear()
    clearInterval(state.timerId)

    setState({ timeWork, timeRest, isRunning: false })

    if (state.countDown) {
      setTargetTime(state.timeWork)
      setState({
        time: formatTimeToTwoDigits([state.timeWork, 0]),
        timeInPercentage: 0
      })
    } else {
      setTargetTime(state.timeRest)
      setState({
        time: formatTimeToTwoDigits([state.timeRest, 0]),
        timeInPercentage: 100
      })
    }
  }

  return (
    <TimerContext.Provider
      value={[
        state,
        {
          clear,
          countdownMode,
          countMode,
          reset,
          setTimeInMin,
          start,
          stop,
          switchTimerMode
        }
      ]}
    >
      {props.children}
    </TimerContext.Provider>
  )
}

export const useTimerContext = () => useContext(TimerContext)
