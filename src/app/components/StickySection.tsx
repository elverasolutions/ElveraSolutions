import { type ReactNode } from "react";

/**
 * StickySection — wraps a section for the stacking-scroll effect.
 * Each section sticks at top:0 so the next section (with higher z-index)
 * slides up and covers it. No extra padding is added — the natural
 * scroll flow ensures sections are visible as they come into the viewport.
 */
export function StickySection({
    children,
    zIndex,
    className = "",
}: {
    children: ReactNode;
    zIndex: number;
    className?: string;
}) {
    return (
        <div
            className={className}
            style={{
                position: "relative",
                zIndex,
            }}
        >
            <div style={{ position: "sticky", top: 0 }}>
                {children}
            </div>
        </div>
    );
}
