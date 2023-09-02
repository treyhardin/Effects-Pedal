import { createSignal } from 'solid-js'
import styles from './stompSwitch.module.css'

export const [ stompSwitchState, setStompSwitchState ] = createSignal(false)

export default function StompSwitch() {

  const handleStomp = () => {
    setStompSwitchState(!stompSwitchState())
  }

  return (
    <div class={styles.stompSwitch}>
      <div class={`${styles.led} ${stompSwitchState() ? styles.on : ''}`}></div>
      <div class={styles.switch}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 88">
          <path fill="#A4A4A4" d="M76.155 85.301a4 4 0 0 1-3.464 2H27.309a4 4 0 0 1-3.464-2L1.155 46a4 4 0 0 1 0-4l22.69-39.301a4 4 0 0 1 3.465-2h45.38a4 4 0 0 1 3.465 2L98.845 42a4 4 0 0 1 0 4l-22.69 39.301Z"/>
        </svg>
        <button class={`${styles.button} ${stompSwitchState() ? styles.active : ''}`} onClick={handleStomp}></button>
      </div>
    </div>
  )
}