import { createSignal, onMount } from 'solid-js'
import styles from './potentiometer.module.css'
// import '../helpers/input-knobs'

export default function Potentiometer({min, max, state, setState}) {

  let inputRef

  const minAngle = -180 + 45
  const maxAngle = 180 - 45
  const angleRange = maxAngle - minAngle
  const knobRange = max - min
  const knobSensitivity = 0.5

  const [ isEditing, setIsEditing ] = createSignal(false)
  const [ dragPosition, setDragPosition ] = createSignal(null)


  const throttle = (cb, delay = 1000) => {
    let shouldWait = false
    let waitingArgs

    const timeoutFunction = () => {
      if (waitingArgs == null) {
        shouldWait = false
      } else {
        cb(...waitingArgs)
        waitingArgs = null
        setTimeout(timeoutFunction, delay)
      }
    }

    return (...args) => {
      if (shouldWait) {
        waitingArgs = args
        return
      }

      cb(...args)
      shouldWait = true

      setTimeout(timeoutFunction, delay)
    }
  }


  const updateKnob = throttle((value) => {

    if (inputRef) {

      setState(value)

      const percentage = ( value - min ) / knobRange
      const angle = angleRange * percentage - angleRange / 2
      inputRef.style.rotate = `${angle}deg`
    }
  }, 20)

  onMount(() => {

    updateKnob(state())

    inputRef.addEventListener("pointerdown", (e) => {
      setIsEditing(true)
      setDragPosition({
        x: e.clientX,
        y: e.clientY
      })
    })

    document.addEventListener("pointerup", (e) => {
      setIsEditing(false)
      setDragPosition(null)
    })

    document.addEventListener("pointermove", (e) => {

      if (isEditing() && dragPosition()) {

        const dragDistanceX = ( dragPosition().x - e.clientX ) / window.innerWidth * -1
        const dragDistanceY = ( dragPosition().y - e.clientY ) / window.innerHeight

        const newValue = parseFloat(state()) + (dragDistanceX * knobRange * knobSensitivity) + (dragDistanceY * knobRange * knobSensitivity)
        const clampedValue = Math.min(Math.max(newValue, min), max);
        
        updateKnob(clampedValue)
      }
    })

  })
  
  return (
    <div class={styles.potentiometer}>
      <input 
          class={`${styles.knobInput}`}
          ref={inputRef}
          type='range' 
          min={min}
          max={max}
          value={state()}
        />
        <p class={styles.label}>{Math.floor(state())}</p>
    </div>
  )
}