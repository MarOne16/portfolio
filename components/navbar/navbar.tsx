/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { useState, useEffect } from "react"
import { ModeToggle } from "../toggleMode"
import styles from "./nav_bar.module.css"

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  const menuItems = [
    { label: "HOME", href: "#" },
    { label: "ABOUT", href: "#" },
    { label: "PROJECTS", href: "#" },
    { label: "SERVICES", href: "#" },
    { label: "CONTACT", href: "#" },
  ]

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
    <div className={`${styles.navbar}`}>
      <ModeToggle />
      <span className={`${styles.navigation} md:text-base text-xs`}>hover here for navigation</span>
      <span className={`${styles.logo} font-extrabold `}>MARONE</span>

    </div>
      
  )
}
