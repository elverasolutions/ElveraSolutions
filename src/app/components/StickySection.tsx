import { useRef, useState, useEffect, type ReactNode } from "react";

/**
 * StickySection — wraps a section so it participates in a stacking-scroll
 * layout.  The inner content sticks at `top: 0` while the outer wrapper
 * provides enough scroll-room for the FULL content to be visible before
 * the next section can start covering it.
 *
 * For sections shorter than or equal to the viewport this is cosmetic.
 * For sections TALLER than the viewport the extra wrapper height gives
 * the user room to scroll through all the content.
 */
export function StickySection({
    children,
    zIndex,
    className = "",
    enabled = true,
}: {
    children: ReactNode;
    zIndex: number;
    className?: string;
    enabled?: boolean;
}) {
    const innerRef = useRef<HTMLDivElement>(null);
    const [extraHeight, setExtraHeight] = useState(0);

    useEffect(() => {
        if (!enabled) return;

        const measure = () => {
            if (!innerRef.current) return;
            const contentH = innerRef.current.offsetHeight;
            const viewportH = window.innerHeight;
            // Only add extra height when content exceeds viewport
            setExtraHeight(contentH > viewportH ? contentH - viewportH : 0);
        };

        measure();
        window.addEventListener("resize", measure);
        // Re-measure after images/fonts load
        window.addEventListener("load", measure);
        // Also measure after a short delay for dynamic content
        const timer = setTimeout(measure, 1000);

        return () => {
            window.removeEventListener("resize", measure);
            window.removeEventListener("load", measure);
            clearTimeout(timer);
        };
    }, [enabled]);

    if (!enabled) {
        return (
            <div className={className} style={{ position: "relative", zIndex }}>
                {children}
            </div>
        );
    }

    return (
        <div
            className={className}
            style={{
                position: "relative",
                zIndex,
                // Extra height gives scroll room so the sticky content
                // can be scrolled through fully before un-pinning
                paddingBottom: extraHeight,
            }}
        >
            <div
                ref={innerRef}
                style={{ position: "sticky", top: 0 }}
            >
                {children}
            </div>
        </div>
    );
}
