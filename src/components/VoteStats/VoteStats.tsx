import styles from './VoteStats.module.css';
import type { Votes } from '../../types/votes';

interface VoteStats {
  votes: Votes;
  totalVotes: number;
  positiveRate: number;
}

export default function VoteStats({ votes }: VoteStats) {
  const totalVotes = votes.bad + votes.good + votes.neutral;
  const positiveRate =
    totalVotes === 0 ? 0 : Math.round((votes.good / totalVotes) * 100);
  return (
    <div className={styles.container}>
      <p className={styles.stat}>
        Good: <strong>{votes.good}</strong>
      </p>
      <p className={styles.stat}>
        Neutral: <strong>{votes.neutral}</strong>
      </p>
      <p className={styles.stat}>
        Bad: <strong>{votes.bad}</strong>
      </p>
      <p className={styles.stat}>
        Total: <strong>{totalVotes}</strong>
      </p>
      <p className={styles.stat}>
        Positive: <strong>{positiveRate}%</strong>
      </p>
    </div>
  );
}

//  <div className={styles.container}>
//   <p className={styles.stat}>
//     Good: <strong>0</strong>
//   </p>
//   <p className={styles.stat}>
//     Neutral: <strong>0</strong>
//   </p>
//   <p className={styles.stat}>
//     Bad: <strong>0</strong>
//   </p>
//   <p className={styles.stat}>
//     Total: <strong>0</strong>
//   </p>
//   <p className={styles.stat}>
//     Positive: <strong>0%</strong>
//   </p>
// </div>;
