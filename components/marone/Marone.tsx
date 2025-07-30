"use client";

import React, { useEffect, useState } from 'react';
import styles from "./marone.module.css";


const Marone = () => {
    const allStatus = ["Front-end", "UX / UI Designer", "Software Engineer"];
    const [status, setStatus] = useState(allStatus[0]);
    const changeStatus = () => {
        const currentIndex = allStatus.indexOf(status);
        const nextIndex = (currentIndex + 1) % allStatus.length;
        setStatus(allStatus[nextIndex]);
    }
    useEffect(() => {
        const interval = setInterval(changeStatus, 7000);
        return () => clearInterval(interval);
    }
    , [status]);

    return (
        <div className={styles.marone}
            style={{ ['--status-content' as string]: `"${status}"` }}
        >
            <h1>MARONE</h1>
        </div>

    );
}

export default Marone;
