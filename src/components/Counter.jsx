import { useEffect } from 'react';
import Navbar from './Navbar';
import '../styles/counter.css';
import counterStore from '../stores/CounterStore';
import { observer } from 'mobx-react-lite';

function Counter() {
  useEffect(() => {
    const interval = setInterval(() => {
      if (counterStore.counter === 0) {
        clearInterval(interval);
        return alert('Finished');
      }
      counterStore.decreaseCounter();
    }, 1000);
  }, []);

  return (
    <div className="Counter">
      <Navbar />
      <main>
        <div className="container-counter">
          <label htmlFor="Remains" className="remains">
            Remains
          </label>
          <section className="digit">
            <span>{String(counterStore.hours).padStart(2, '0')}</span>
            <span>:</span>
            <span>{String(counterStore.minutes).padStart(2, '0')}</span>
            <span>:</span>
            <span>{String(counterStore.seconds).padStart(2, '0')}</span>
          </section>
          <section className="text">
            <span id="hour" className="text">
              Hours
            </span>
            <span id="min" className="text">
              Minutes
            </span>
            <span id="sec" className="text">
              Seconds
            </span>
          </section>
        </div>
      </main>
    </div>
  );
}

export default observer(Counter);
