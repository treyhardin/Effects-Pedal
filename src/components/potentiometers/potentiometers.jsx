import { createSignal } from 'solid-js'
import Potentiometer from '../potentiometer/potentiometer'
import styles from './potentiometers.module.css'

export default function Potentiometers() {

  const [ pot1, setPot1 ] = createSignal(0)
  const [ pot2, setPot2 ] = createSignal(50)
  const [ pot3, setPot3 ] = createSignal(100)

  return (
    <div class={styles.potentiometerWrapper}>
      <Potentiometer 
        min={0}
        max={100}
        state={pot1}
        setState={setPot1}
      />
      <Potentiometer 
        min={0}
        max={200}
        state={pot2}
        setState={setPot2}
      />
      <Potentiometer 
        min={-50}
        max={100}
        state={pot3}
        setState={setPot3}
      />
    </div>
  )
}


