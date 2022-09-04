import Link from "next/link";
import { useLearningItemState } from "../hooks/useLearningItemState";
import { LearningItem, LearningItemStep } from "../types";
import styles from "../styles/Home.module.css";
import { useLearningItemStepCompleteness } from "../hooks/useLearningItemStepCompleteness";

interface ItemStepCardProps {
  item: LearningItem;
  itemStep: LearningItemStep;
}

export const ItemStepCard: React.FC<ItemStepCardProps> = ({
  item,
  itemStep,
}) => {
  const learningState = useLearningItemState(item.id);
  const isCompleted = useLearningItemStepCompleteness(
    learningState,
    itemStep.id
  );

  return (
    <Link key={itemStep.id} href={itemStep.url}>
      <a
        className={`${styles.card} ${isCompleted ? styles.cardCompleted : ""}`}
      >
        <h2>{itemStep.name} &rarr;</h2>
        <p>{isCompleted ? "Completed" : "Incompleted"}</p>
      </a>
    </Link>
  );
};
