"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import { ReactNode, useEffect, useRef, useState } from "react";

type Action = {
    readonly label: ReactNode;
    readonly href: string;
    readonly primary?: boolean;
};

type Position = {
    top?: number;
    left?: number;
    width?: number;
    height?: number;
};

export default function ActionList({ actions }: { actions: Action[] }) {
    // Check for hover support and animation preferences
    const [isHoverWanted] = useState(() =>
        window.matchMedia("(hover: hover) and (prefers-reduced-motion: no-preference)")
    );

    const primaryActionRef = useRef<HTMLAnchorElement>(null);
    const [highlightedAction, setHighlightedAction] = useState<HTMLElement | null>(null);

    // Default highlight should be the primary action
    useEffect(() => {
        setHighlightedAction(primaryActionRef.current);
    }, []);

    const [indicatorPosition, setIndicatorPosition] = useState<Position>({});

    // Update indicator position when highlighted action changes
    useEffect(() => {
        if (!highlightedAction) return;

        const updatePosition = () => {
            const rect = highlightedAction.getBoundingClientRect();
            setIndicatorPosition({
                top: rect.y,
                left: rect.x,
                width: rect.width,
                height: rect.height,
            });
        };

        updatePosition();

        window.addEventListener("resize", updatePosition);
        return () => window.removeEventListener("resize", updatePosition);
    }, [highlightedAction]);

    return (
        <nav>
            <ul className={styles.list}>
                {actions.map(action => (
                    <li key={action.href} className={styles["list-item"]}>
                        <Link
                            href={action.href}
                            data-primary={action.primary}
                            ref={action.primary ? primaryActionRef : undefined}
                            onMouseEnter={e => isHoverWanted.matches && setHighlightedAction(e.currentTarget)}
                            onMouseLeave={_ => isHoverWanted.matches && setHighlightedAction(primaryActionRef.current)}
                            onFocus={e => isHoverWanted.matches && setHighlightedAction(e.currentTarget)}
                            onBlur={_ => isHoverWanted.matches && setHighlightedAction(primaryActionRef.current)}
                        >
                            {action.label}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Focus/hover indicator */}
            <div aria-hidden="true" className={styles.indicator} style={indicatorPosition}></div>
        </nav>
    );
}
