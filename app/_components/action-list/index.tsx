"use client";

import Button from "@/_components/button";
import styles from "./styles.module.css";
import { useEffect, useRef, useState } from "react";

type Action = {
    readonly label: string;
    readonly href: string;
    readonly primary?: boolean;
};

type Align = "left" | "center" | "right";

export default function ActionList({ actions, align = "left" }: { actions: Action[]; align?: Align }) {
    // Check for hover support and animation preferences
    const [isHoverWanted] = useState(() =>
        window.matchMedia("(hover: hover) and (prefers-reduced-motion: no-preference)")
    );

    const primaryActionRef = useRef(null);
    const [highlightedAction, setHighlightedAction] = useState<HTMLElement | null>(null);

    // Default highlight should be the primary action
    useEffect(() => {
        setHighlightedAction(primaryActionRef.current);
    }, []);

    const [indicatorPosition, setIndicatorPosition] = useState({});

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
            <ul className={styles.list} data-align={align}>
                {actions.map(action => (
                    <li key={action.label}>
                        <Button
                            href={action.href}
                            data-primary={action.primary}
                            ref={action.primary ? primaryActionRef : undefined}
                            onMouseEnter={e => isHoverWanted.matches && setHighlightedAction(e.currentTarget)}
                            onMouseLeave={_ => isHoverWanted.matches && setHighlightedAction(primaryActionRef.current)}
                            onFocus={e => isHoverWanted.matches && setHighlightedAction(e.currentTarget)}
                            onBlur={_ => isHoverWanted.matches && setHighlightedAction(primaryActionRef.current)}
                        >
                            {action.label}
                        </Button>
                    </li>
                ))}
            </ul>

            {/* Focus/hover indicator */}
            <div aria-hidden="true" className={styles.indicator} style={indicatorPosition}></div>
        </nav>
    );
}
