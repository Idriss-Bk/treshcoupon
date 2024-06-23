"use client";
import React, { useEffect, useState } from 'react';
import styles from './ProgressBrr.module.css';

interface ProgressBrrProps {
  onComplete: () => void;
}

const ProgressBrr: React.FC<ProgressBrrProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const totalTime = 29;
  const intervalTime = totalTime * 1000 / 100;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const nextProgress = prevProgress + 1;
        if (nextProgress === 100) {
          onComplete();
        }
        return nextProgress <= 100 ? nextProgress : prevProgress;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [intervalTime, onComplete]);

  return (
    <div className={styles.progressBar}>
      <div className={`${styles.progressContainer} bg-zinc-900`}>
        <span
          className={`${styles.progressText} absolute font-bold text-zinc-100 flex justify-center items-center`}
          style={{ left: `${progress}%` }}
        >
          {progress}%
        </span>
        <div
          className={styles.progressBarFill}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBrr;
