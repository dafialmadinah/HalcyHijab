"use client"
import { FaInstagram, FaTiktok, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import { motion } from "framer-motion"

export const SectionContact = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut" as const,
      },
    },
  }

  const navigationItems = [
    { label: "Home", action: () => handleScroll("home") },
    { label: "Shop", href: "https://id.shp.ee/23Du6F1" },
    { label: "Categories", href: "#" },
    { label: "About us", action: () => handleScroll("about-us") },
    { label: "Contact us", href: "https://linktr.ee/halcyhijab" },
  ]

  const contactInfo = [
    { icon: FaPhone, text: "+62 856-0499-4852", color: "text-pink-400" },
    { icon: FaEnvelope, text: "halcyhijab@gmail.com", color: "text-blue-400" },
    { icon: FaMapMarkerAlt, text: "Pondokmelati, Bekasi", color: "text-green-400" },
  ]

  const socialLinks = [
    {
      icon: FaInstagram,
      label: "Instagram",
      href: "https://instagram.com/halcyhijab",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: FaTiktok,
      label: "TikTok",
      href: "https://tiktok.com/@halcyhijab",
      color: "from-black to-red-500",
    },
  ]

  return (
    <section
      id="contact-us"
      className="w-full bg-gradient-to-b from-pink-50 via-purple-50 to-white relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full opacity-20 blur-xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
          className="absolute bottom-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full opacity-20 blur-xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "4s" }}
          className="absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full opacity-20 blur-xl"
        />
      </div>

      {/* Footer */}
      <footer className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 relative overflow-hidden">
        {/* Enhanced Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-r from-pink-500 to-purple-500 opacity-10 rounded-full -translate-y-1/2 translate-x-1/4"
          />
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: -360 }}
            transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-10 rounded-full translate-y-1/2 -translate-x-1/4"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col lg:flex-row justify-between gap-12"
          >
            {/* Left Column: Logo, Navigation, Social Icons, Copyright */}
            <div className="flex flex-col gap-8 lg:max-w-md">
              {/* Logo */}
              <motion.div variants={itemVariants} className="inline-block">
                <motion.span
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-2xl font-bold  text-transparent bg-clip-text px-6 py-4 rounded-xl bg-gradient-to-r from-[#ea3697] to-[#ff66cc] shadow-lg hover:shadow-pink-500/25 transition-all duration-300 cursor-pointer"
                >
                  Halcy Hijab
                </motion.span>
              </motion.div>

              {/* Navigation */}
              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Pages
                </h3>
                <ul className="flex flex-wrap gap-6">
                  {navigationItems.map((item, index) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {item.action ? (
                        <motion.button
                          onClick={item.action}
                          whileHover={{ scale: 1.05, color: "#ec4899" }}
                          whileTap={{ scale: 0.95 }}
                          className="text-gray-400 hover:text-pink-400 transition-all duration-300 font-medium"
                        >
                          {item.label}
                        </motion.button>
                      ) : (
                        <motion.a
                          href={item.href}
                          whileHover={{ scale: 1.05, color: "#ec4899" }}
                          whileTap={{ scale: 0.95 }}
                          className="text-gray-400 hover:text-pink-400 transition-all duration-300 font-medium"
                        >
                          {item.label}
                        </motion.a>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Social Media Icons */}
              <motion.div variants={itemVariants} className="flex gap-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${social.color} text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <social.icon className="text-lg" />
                    <span>{social.label}</span>
                  </motion.a>
                ))}
              </motion.div>

              {/* Copyright */}
              <motion.div variants={itemVariants} className="text-gray-500 text-sm space-y-1">
                <p>© terms & services</p>
                <p>Greenify © all right reserved 2023</p>
              </motion.div>
            </div>

            {/* Right Column: Contact */}
            <motion.div variants={itemVariants} className="flex flex-col gap-8">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Contact us
              </h3>
              <ul className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-3 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`p-2 rounded-full bg-gradient-to-r from-gray-700 to-gray-600 ${contact.color}`}
                    >
                      <contact.icon className="text-lg" />
                    </motion.div>
                    <span className="text-gray-300 font-medium">{contact.text}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Call to Action */}
              <motion.div variants={itemVariants} className="mt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
                >
                  Get in Touch
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Wave Effect */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            className="relative block w-full h-12"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="rgba(236, 72, 153, 0.1)"
            />
          </svg>
        </div>
      </footer>
    </section>
  )
}
