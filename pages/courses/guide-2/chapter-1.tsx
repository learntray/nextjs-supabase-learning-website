import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Footer from "@/components/Footer";
import MarkAsDone from "@/components/MarkAsDone";
import { learningItemList } from "@/data/items";
import { useLearningItemState } from "@/hooks/useLearningItemState";
import { useLearningItemStepCompleteness } from "@/hooks/useLearningItemStepCompleteness";
import styles from "@/styles/Home.module.css";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const guide = learningItemList[1];
const guideChapter = guide.steps![0];

const nextGuideChapter = guide.steps![1];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Courses", url: "/courses" },
  { name: guide.name, url: guide.url },
];

const Home: NextPage = () => {
  const learningState = useLearningItemState(guide.id);
  const isCompleted = useLearningItemStepCompleteness(
    learningState,
    guideChapter.id
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>{`${guide.name} - ${guideChapter.name}`}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Breadcrumbs breadcrumbs={breadcrumbs} />

        <h1 className={styles.title}>{guideChapter.name}</h1>

        <h2>{isCompleted ? "Completed" : "Incompleted"}</h2>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>{`pages${guideChapter.url}.tsx`}</code>
        </p>

        <MarkAsDone
          guideId={guide.id}
          guideChapterId={guideChapter.id}
          isDone={isCompleted}
        />

        <div className={styles.grid}>
          <Link href={nextGuideChapter.url}>
            <a className={styles.card}>
              <h2>Go to next chapter &rarr;</h2>
            </a>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
