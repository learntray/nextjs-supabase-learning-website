import styles from "@/styles/Home.module.css";
import Link from "next/link";

interface Breadcrumb {
  url: string;
  name: string;
}

interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbs }) => {
  return (
    <ul className={styles.breadcrumbs}>
      {breadcrumbs.map((breadcrumb, index) => (
        <li key={index}>
          <Link href={breadcrumb.url}>
            <a>{breadcrumb.name}</a>
          </Link>
          {" > "}
        </li>
      ))}
    </ul>
  );
};
