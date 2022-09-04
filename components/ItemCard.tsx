import Link from "next/link";
import { useLearningItemState } from "../hooks/useLearningItemState";
import { LearningItem } from "../types";
import styles from "../styles/Home.module.css";
import { useLearningItemCompleteness } from "../hooks/useLearningItemCompleteness";

interface ItemCardProps {
  item: LearningItem;
}

export const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  const learningState = useLearningItemState(item.id);
  const [completedStepsCount, allStepsCount] =
    useLearningItemCompleteness(learningState);

  return (
    <Link key={item.id} href={item.url}>
      <a
        className={`${styles.card} ${
          learningState?.completeness ? styles.cardCompleted : ""
        }`}
      >
        <h2>{item.name} &rarr;</h2>
        <p>
          Completed {completedStepsCount}/{allStepsCount}
        </p>
      </a>
    </Link>
  );
};
