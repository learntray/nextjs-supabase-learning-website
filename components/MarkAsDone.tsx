import styles from "@/styles/Home.module.css";
import { completeLearningStepState } from "@/methods";
import useLearningContext from "./LearningContext";

interface MarkAsDoneProps {
  guideId: string;
  guideChapterId: string;
  isDone: boolean;
}

const MarkAsDone: React.FC<MarkAsDoneProps> = ({
  guideId,
  guideChapterId,
  isDone,
}) => {
  const { refetchLearningState } = useLearningContext();

  const setCompleted = async () => {
    await completeLearningStepState(guideId, guideChapterId, !isDone);
    await refetchLearningState();
  };

  return (
    <div className={styles.grid} onClick={setCompleted}>
      <button
        className={`${styles.card} ${styles.clickable} ${
          isDone ? styles.cardCompleted : ""
        }`}
      >
        <h2>{isDone ? "Unmark as done" : "Mark as done"}</h2>
      </button>
    </div>
  );
};
export default MarkAsDone;
