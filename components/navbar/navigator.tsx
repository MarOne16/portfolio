import React from 'react';
import styles from './navigator.module.css';


interface NavigatorProps {
    setIsOpen: (isOpen: boolean) => void;
    setIsHovering: (isHovering: boolean) => void;
    isOpen?: boolean;
}

const Navigator = ({ setIsOpen, setIsHovering, isOpen }: NavigatorProps) => {
    const menuItems = [
        { label: "HOME", href: "#" },
        { label: "ABOUT", href: "#" },
        { label: "PROJECTS", href: "#" },
        { label: "SERVICES", href: "#" },
        { label: "CONTACT", href: "#" },
      ]
    
    return (
        <div className={`${styles.container}   transform transition-all duration-700 ease-out z-40 rounded-4xl ${
                        isOpen ? "translate-y-[54px]  shadow-xl" : "-translate-y-full shadow-none"}`}
            onMouseEnter={() => {
                setIsOpen(true);
                setIsHovering(true);
                }}
            onMouseLeave={() => {
                setIsHovering(false);
                if (!isOpen)
                    setIsOpen(false);
                }}
                >
              {menuItems.map((item, index) => (
                <div key={index} className={styles.navigationCard} >
                    <h2 className='font-light'>{item.label}</h2>
                </div>
              ))}
            <span className={styles.line} onClick={() => setIsOpen(false)} />
        </div>
    );
}

export default Navigator;
