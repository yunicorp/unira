import { ReactNode } from "react";
import styles from "./styles.module.css";
import SimpleButton from "../simple-button";

type WidthPreference = "min" | "hug" | "fill";
type HeightPreference = "min" | "hug" | "fill";
type DensityPreference = "compact" | "default";

export default function Button({
    href,
    className = "",
    width = "hug",
    height = "hug",
    density = "default",
    children,
    ...attributes
}: {
    href?: string;
    className?: string;
    width?: WidthPreference;
    height?: HeightPreference;
    density?: DensityPreference;
    children?: ReactNode | ReactNode[];
    [attribute: string]: any;
}) {
    return (
        <SimpleButton
            className={`${styles.button} ${className}`}
            data-width={width}
            data-height={height}
            data-density={density}
            href={href}
            children={children}
            {...attributes}
        />
    );
}
