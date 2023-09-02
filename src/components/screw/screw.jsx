import styles from './screw.module.css'

export function Screw() {
  return (
    <div class={styles.screw}>
      <div class={styles.screwLine} />
      <div class={styles.screwLine} />
    </div>
  )
}