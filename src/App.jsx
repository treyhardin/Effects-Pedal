import styles from './App.module.css';
import Cable from './components/cable/cable';
import { Pedal } from './components/pedal/pedal';

function App() {
  return (
    <div class={styles.App}>
      <Cable />
      <Pedal />
      <Cable />
    </div>
  );
}

export default App;
