import { debounce } from "lodash-es";
import React, { useCallback, useEffect, useState } from "react";
import { getUserLearningKey, setUserLearningKey } from "@/data/localStorage";
import styles from "@/styles/Home.module.css";
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

  const delayedSetUserLearningKey = debounce(
    (insertedUserLearningId) => setUserLearningKey(insertedUserLearningId),
    1000
  );

  useEffect(() => {
    setUserLearningId(getUserLearningKey());
  }, []);

  useEffect(() => {
    setUserLearningId(getUserLearningKey());
  }, [learningState]);

  const onUserLearningIdChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const changedUserLearningId = event.target.value;

    setUserLearningId(changedUserLearningId);
    delayedSetUserLearningKey(changedUserLearningId);
  };

  const shownUserLearningId = showUserLearningId
    ? userLearningId
    : getLastFourCharsUserLearningId(userLearningId);

  if (!userLearningId && !showUserLearningId) {
    return (
      <div className={styles.userLearningKey}>
        <button onClick={() => setShowUserLearningId(true)}>
          Assign user learning key
        </button>
      </div>
    );
  }

  if (showUserLearningId) {
    return (
      <div className={styles.userLearningKey}>
        <span>User learning key: </span>
        <input
          type="text"
          autoFocus={true}
          value={shownUserLearningId || ""}
          onChange={onUserLearningIdChange}
        />
        <button onClick={() => setShowUserLearningId(false)}>Hide</button>
      </div>
    );
  }

  return (
    <div className={styles.userLearningKey}>
      <span>User learning key: </span>
      <pre>
        <code>{shownUserLearningId}</code>
      </pre>
      <button onClick={() => setShowUserLearningId(true)}>Show</button>
    </div>
  );
};
export default UserLearningKey;
