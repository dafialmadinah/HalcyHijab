"use client"
import { useEffect, useState } from "react"
import { MdOutlineShoppingBag, MdClose } from "react-icons/md"
import { CgProfile } from "react-icons/cg"
import { RiMenuFoldFill } from "react-icons/ri"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

const HeaderTop = () => {
  const [burgerOpen, setBurgerOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
    }
    setBurgerOpen(false) // Close mobile menu after navigation
  }

  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen)
  }

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScrollEffect = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 50)
    }

    window.addEventListener("scroll", handleScrollEffect)
    return () => window.removeEventListener("scroll", handleScrollEffect)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (burgerOpen && !target.closest("#mobile-menu") && !target.closest("#burger-button")) {
        setBurgerOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [burgerOpen])

  const navItems = [
    { label: "Home", action: () => handleScroll("home") },
    { label: "Shop", href: "https://id.shp.ee/23Du6F1" },
    { label: "About Us", action: () => handleScroll("about-us") },
    { label: "Contact Us", href: "https://linktr.ee/halcyhijab" },
  ]

  const categories = [
    { label: "Classic", href: "/categories/classic" },
    { label: "Modern", href: "/categories/modern" },
    { label: "Premium", href: "/categories/premium" },
  ]

  return (
    <>
      {/* Backdrop overlay for mobile menu */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-all duration-300 ${
          burgerOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setBurgerOpen(false)}
      />

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-pink-100" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo with animation */}
            <div className="group">
              <Link href="/" className="block">
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#ea3697] to-[#ff66cc] bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
                  Halcy Hijab
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-[#ea3697] transition-all duration-300 font-medium relative overflow-hidden group"
                    >
                      <span className="relative z-10">{item.label}</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ea3697] to-[#ff66cc] group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  ) : (
                    <button
                      onClick={item.action}
                      className="text-gray-700 hover:text-[#ea3697] transition-all duration-300 font-medium relative overflow-hidden group"
                    >
                      <span className="relative z-10">{item.label}</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ea3697] to-[#ff66cc] group-hover:w-full transition-all duration-300"></span>
                    </button>
                  )}
                </div>
              ))}

              {/* Categories Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className="text-gray-700 hover:text-[#ea3697] transition-all duration-300 font-medium flex items-center gap-1 group">
                  <span className="relative">
                    Categories
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ea3697] to-[#ff66cc] group-hover:w-full transition-all duration-300"></span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-pink-100 overflow-hidden transition-all duration-300 ${
                    dropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  {categories.map((category, index) => (
                    <Link
                      key={category.label}
                      href={category.href}
                      className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 hover:text-[#ea3697] transition-all duration-200 transform hover:translate-x-1"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {category.label}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>

            {/* Icons and Mobile Menu Button */}
            <div className="flex items-center gap-4">
              {/* Desktop Icons */}
              <div className="hidden md:flex items-center gap-3">
                <Link href="/" className="group">
                  <MdOutlineShoppingBag className="text-2xl text-gray-700 group-hover:text-[#ea3697] transition-all duration-300 group-hover:scale-110" />
                </Link>
                <Link href="/" className="group">
                  <CgProfile className="text-2xl text-gray-700 group-hover:text-[#ea3697] transition-all duration-300 group-hover:scale-110" />
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                id="burger-button"
                onClick={toggleBurger}
                className="lg:hidden p-2 rounded-lg hover:bg-pink-50 transition-colors duration-200 group"
              >
                <div className="relative w-6 h-6">
                  <RiMenuFoldFill
                    className={`absolute text-2xl text-gray-700 group-hover:text-[#ea3697] transition-all duration-300 ${
                      burgerOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
                    }`}
                  />
                  <MdClose
                    className={`absolute text-2xl text-gray-700 group-hover:text-[#ea3697] transition-all duration-300 ${
                      burgerOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden fixed top-16 right-0 h-[calc(100vh-4rem)] w-80 max-w-[85vw] bg-white/95 backdrop-blur-md shadow-2xl transform transition-all duration-500 ease-in-out ${
            burgerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 space-y-6">
            {/* Mobile Icons */}
            <div className="flex items-center justify-center gap-6 pb-6 border-b border-pink-100">
              <Link href="/" className="group">
                <MdOutlineShoppingBag className="text-3xl text-gray-700 group-hover:text-[#ea3697] transition-all duration-300 group-hover:scale-110" />
              </Link>
              <Link href="/" className="group">
                <CgProfile className="text-3xl text-gray-700 group-hover:text-[#ea3697] transition-all duration-300 group-hover:scale-110" />
              </Link>
            </div>

            {/* Mobile Navigation Items */}
            {navItems.map((item, index) => (
              <div
                key={item.label}
                className="transform transition-all duration-300"
                style={{
                  animationDelay: `${index * 100}ms`,
                  transform: burgerOpen ? "translateX(0)" : "translateX(100px)",
                  opacity: burgerOpen ? 1 : 0,
                }}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="block py-3 px-4 text-lg font-medium text-gray-700 hover:text-[#ea3697] hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 rounded-lg transition-all duration-300 transform hover:translate-x-2"
                    onClick={() => setBurgerOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    onClick={item.action}
                    className="w-full text-left py-3 px-4 text-lg font-medium text-gray-700 hover:text-[#ea3697] hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 rounded-lg transition-all duration-300 transform hover:translate-x-2"
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}

            {/* Mobile Categories */}
            <div className="pt-4 border-t border-pink-100">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Categories</h3>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <Link
                    key={category.label}
                    href={category.href}
                    className="block py-2 px-4 text-gray-600 hover:text-[#ea3697] hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 rounded-lg transition-all duration-300 transform hover:translate-x-2"
                    onClick={() => setBurgerOpen(false)}
                    style={{
                      animationDelay: `${(navItems.length + index) * 100}ms`,
                      transform: burgerOpen ? "translateX(0)" : "translateX(100px)",
                      opacity: burgerOpen ? 1 : 0,
                    }}
                  >
                    {category.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default HeaderTop
