"use client"

import { useState, useEffect } from "react"

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
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Top trigger area - invisible but detects hover/click */}
      <div
        className="fixed top-0 left-0 right-0 h-4 z-50  cursor-pointer"
        onMouseEnter={() => {
          setIsOpen(true)
          setIsHovering(true)
        }}
        onMouseLeave={() => setIsHovering(false)}
        onClick={() => setIsOpen(!isOpen)}
      />

      {/* Slide Navigation from Top */}
      <nav
        className={`fixed top-0 left-0 right-0 bg-gray-900/98 backdrop-blur-md shadow-2xl transform transition-all duration-700 ease-out z-40 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Notification-style header */}
        <div className="bg-gray-800/50 px-8 py-3 border-b border-gray-700/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300 tracking-wider">NAVIGATION</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm tracking-wider"
            >
              DISMISS
            </button>
          </div>
        </div>

        {/* Navigation Content */}
        <div className="px-8 py-6">
          <div className="max-w-4xl mx-auto">
            {/* Brand */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold tracking-wider">MARONE</h2>
              <p className="text-gray-400 text-sm tracking-wider mt-1">Front-end and UI/UX</p>
            </div>

            {/* Navigation Items */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 ">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="group relative bg-gray-800/30 hover:bg-gray-700/50 rounded-lg p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-600/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="w-8 h-8 bg-gray-700 rounded-full mx-auto mb-3 flex items-center justify-center group-hover:bg-gray-600 transition-colors duration-300">
                      <div className="w-3 h-3 bg-gray-400 rounded-full group-hover:bg-white transition-colors duration-300"></div>
                    </div>
                    <span className="text-sm font-medium tracking-wider text-gray-300 group-hover:text-white transition-colors duration-300">
                      {item.label}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="mt-8 pt-6 border-t border-gray-800/50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="text-center">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                  </div>
                  <p className="text-gray-400 tracking-wider">EMAIL</p>
                  <p className="text-gray-300">hello@marone.com</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-green-600/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                  </div>
                  <p className="text-gray-400 tracking-wider">PHONE</p>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-purple-600/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                  </div>
                  <p className="text-gray-400 tracking-wider">LOCATION</p>
                  <p className="text-gray-300">New York, NY</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom indicator */}
        <div className="bg-gray-800/30 px-8 py-2">
          <div className="flex justify-center">
            <div className="w-12 h-1 bg-gray-600 rounded-full"></div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      
    </div>
  )
}
