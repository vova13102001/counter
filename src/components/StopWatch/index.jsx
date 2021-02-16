import React, { Component } from 'react';
import styles from './StopWatch.module.css';

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.timeoutId = null;

    this.state = {
      isRunning: false,
      time: new Date(0, 0, 0, 0, 0, 0, 0),
    };
  }

  tick = () => {
    this.setState((state, props) => {
      const { time } = state;
      const newTime = new Date(time.getTime());
      newTime.setSeconds(newTime.getSeconds() + 1);
      return { time: newTime };
    });
  };

  start = () => {
    this.setState({ isRunning: true });
  };

  stop = () => {
    this.setState({ isRunning: false });
  };

  clear = () => {
    clearTimeout(this.timeoutId);
    this.timeoutId = null;
  };

  reset = () => {
    this.clear();
    this.setState({ time: new Date(0, 0, 0, 0, 0, 0, 0) });
  };

  componentDidMount() {
    // this.start();
  }

  componentDidUpdate() {
    const { isRunning } = this.state;
    this.clear();

    if (isRunning) {
      this.timeoutId = setTimeout(this.tick, 1000);
    }
  }

  componentWillUnmount() {
    this.clear();
  }
  render() {
    const { time, isRunning } = this.state;
    return (
      <article className={styles.container}>
        <h1 className={styles.curretTime}>
          {time.toLocaleTimeString('it-IT')}
        </h1>
        <div className={styles.controls}>
          {isRunning ? (
            <button className={styles.btn} onClick={this.stop}>
              STOP
            </button>
          ) : (
            <button className={styles.btn} onClick={this.start}>
              START
            </button>
          )}
          <button className={styles.btn} onClick={this.reset}>
            RESET
          </button>
        </div>
      </article>
    );
  }
}

export default StopWatch;
