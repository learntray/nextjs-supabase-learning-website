import { useEffect, useState } from "react";
import { getUserLearningKey } from "../data/localStorage";
import styles from "../styles/Home.module.css";
import useLearningContext from "./LearningContext";

const getLastFourCharsUserLearningId = (userLearningId?: string | null) => {
  if (!userLearningId) {
    return "";
  }

  if (userLearningId.length >= 8) {
    const lastFourChars = userLearningId?.substring(
      userLearningId.length - 4,
      userLearningId.length
    );
    return `••••••••••••••••••••••••••••${lastFourChars}`;
  }

  return "••••••••••••••••••••••••••••••••";
};

const UserLearningKey: React.FC = () => {
  const { learningState } = useLearningContext();

  const [userLearningId, setUserLearningId] = useState<string | null>();
  const [showUserLearningId, setShowUserLearningId] = useState(false);

  useEffect(() => {
    setUserLearningId(getUserLearningKey());
  }, []);

  useEffect(() => {
    setUserLearningId(getUserLearningKey());
  }, [learningState]);

  const shownUserLearningId = showUserLearningId
    ? userLearningId
    : getLastFourCharsUserLearningId(userLearningId);

  if (!userLearningId) {
    return null;
  }

  return (
    <div className={styles.userLearningKey}>
      <span>User learning key: </span>
      <pre>
        <code>{shownUserLearningId}</code>
      </pre>
      <button onClick={() => setShowUserLearningId(!showUserLearningId)}>
        {showUserLearningId ? "Hide" : "Show"}
      </button>
    </div>
  );
};
export default UserLearningKey;
