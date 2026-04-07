import {useEffect, useState} from "react";
import sidebarColors, { fontStyles } from "@design-pattern/colors.js";

export const LiveClock = () => {
    const [currentTime, setCurrentTime] = useState(() =>
        new Date().toLocaleTimeString()
    );

    useEffect(() => {
        const updateClock = () => setCurrentTime(new Date().toLocaleTimeString());
        updateClock();
        const timer = setInterval(updateClock, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <span
            style={{
                ...fontStyles.body,
                fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
                color: sidebarColors.textPrimary
            }}
        >
            {currentTime}
        </span>
    );
};