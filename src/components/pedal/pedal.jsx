
import { createSignal } from 'solid-js'
import Display from '../display/display'
import StompSwitch, { stompSwitchState } from '../stompSwitch/stompSwitch'
import styles from './pedal.module.css'
import { Screws } from '../screws/screws'
import Potentiometers from '../potentiometers/potentiometers'
import { Buttons } from '../buttons/buttons'

export function Pedal() {
  
  return (
    <section class={styles.pedal}>
      <Screws />
      <div class={styles.pedalControls}>
        <Display />
        <Buttons />
        <Potentiometers />
        <StompSwitch />
      </div>
      <Screws />
    </section>
  )
}