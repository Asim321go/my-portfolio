'use client'
import { BsArrowDownRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    num: '01',
    title: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    href: '',
  },

  {
    num: '02',
    title: 'App Development',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    href: '',
  },
  {
    num: '03',
    title: 'Web Desgign',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    href: '',
  },
  {
    num: '04',
    title: 'React Native Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    href: '',
  },
]

const Services = () => {
  return (
    <section className="container min-h-[70vh] mb-8 flex items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.5, duration: 0.4, ease: 'easeIn' },
        }}
      >
        <div className="grid place-items-center xl:grid-cols-2 lg:grid-cols-2 gap-16">
          {services.map((item, index) => {
            return (
              <div className="flex gap-4 flex-col group">
                <div className="flex justify-between">
                  <div className="text-4xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {item.num}
                  </div>
                  <Link
                    href={item.href}
                    className="w-12 h-12 bg-white rounded-full flex justify-center items-center group-hover:bg-accent hover:-rotate-45 transition-all duration-500"
                  >
                    <BsArrowDownRight className="text-primary text-lg" />
                  </Link>
                </div>
                <h2 className="text-3xl font-bold leading-none group-hover:text-accent transition-all duration-500">
                  {item.title}
                </h2>
                <p className="text-white/60 text-sm leading-6">
                  {item.description}
                </p>
                <div className="border-b-2 border-white/20"></div>
              </div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}

export default Services
