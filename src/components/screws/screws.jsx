import { Screw } from '../screw/screw'
import styles from './screws.module.css'

export function Screws() {
  return (
    <div class={styles.screwWrapper}>
      <Screw />
      <Screw />
    </div>
  )
}