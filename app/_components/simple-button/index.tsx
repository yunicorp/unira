import { ReactNode } from "react";
import styles from "./styles.module.css";
import Link from "next/link";

export default function SimpleButton({
    href,
    className = "",
    children,
    ...attributes
}: {
    href?: string;
    className?: string;
    children?: ReactNode | ReactNode[];
    [attribute: string]: any;
}) {
    return href ? (
        <Link className={`${styles.button} ${className}`} href={href} {...attributes}>
            {children}
        </Link>
    ) : (
        <button className={`${styles.button} ${className}`} {...attributes}>
            {children}
        </button>
    );
}
