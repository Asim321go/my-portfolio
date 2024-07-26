'use client'

import React from 'react'
import CountUp from 'react-countup'

const stats = [
  { num: 10, text: 'Years of experience' },
  { num: 18, text: 'Projects completed' },
  { num: 7, text: 'Technologies mastered' },
  { num: 500, text: 'Code commit' },
]

const Stats = () => {
  return (
    <section>
      <div className="container grid gap-10 place-items-center xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-2 xl:my-20 my-14">
        {stats.map((item, index) => {
          return (
            <div key={index} className="flex flex-shrink gap-3 items-center">
              <CountUp
                end={item.num}
                delay={2}
                duration={5}
                className="xl:text-6xl text-4xl font-extrabold"
              />
              <p
                className={`${
                  item.text.length < 15 ? 'max-w-24' : 'max-w-32'
                } leading-snug text-white/80`}
              >
                {item.text}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Stats
