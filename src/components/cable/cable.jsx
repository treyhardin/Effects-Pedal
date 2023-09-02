import styles from './cable.module.css'

export default function Cable() {
  return (
    <div class={styles.cable}>
      <div class={styles.wire}></div>
      <div class={styles.connector}>
        <div class={styles.notch} />
      </div>
      <div class={styles.jack}></div>
    </div>
  )
}