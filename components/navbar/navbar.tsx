"use client"
import { useState, useEffect } from "react"
import { ModeToggle } from "../toggleMode"
import styles from "./nav_bar.module.css"
import Navigator from "./navigator"

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isHovering, setIsHovering] = useState(false)


  // Auto close after 3 seconds if not hovering
  useEffect(() => {
    let timer: NodeJS.Timeout
    if (isOpen && !isHovering) {
      timer = setTimeout(() => {
        setIsOpen(false)
      }, 1000)
    }
    return () => clearTimeout(timer)
  }, [isOpen, isHovering])

  return (
    <div className="col-span-1 row-span-1">
      <nav 
        className={`${styles.navbar}`}
        onMouseEnter={() => {
          setIsOpen(true)
          setIsHovering(true)}}
          onMouseLeave={() => {
            setIsHovering(false)
            if (!isOpen) {
              setIsOpen(false)
            }
          }}
          >
        <ModeToggle />
        {!isHovering && !isOpen && (<span className={`${styles.navigation} md:text-base text-xs`}>hover here for navigation</span>)}
        <span className={`${styles.logo} font-extrabold md:text-base text-xs`}>MARONE</span>
      </nav>
      <Navigator
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        setIsHovering={setIsHovering}
      />
    </div>
      
  )
}
