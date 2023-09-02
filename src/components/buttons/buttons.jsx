
import Button from '../button/button'
import styles from './buttons.module.css'

export function Buttons() {

  return (
    <div class={styles.buttonWrapper}>
      <Button />
      <div class={styles.buttonsRight}>
        <Button />
        <Button />
      </div>
    </div>
  )
}