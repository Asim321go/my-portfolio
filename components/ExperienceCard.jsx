import React from 'react'

const ExperienceCard = ({ duration, position, techUniversity }) => {
  return (
    <div className="bg-[#232329] p-8 shadow-md rounded-[10px] flex flex-col gap-3">
      <p className="text-accent text-sm font-semibold">{duration}</p>
      <h2 className="text-md text-white">{position}</h2>
      <div class="flex items-center">
        <span class="text-xl text-accent mr-2 font-extrabold">•</span>
         <span className="text-sm text text-white/60">{techUniversity}</span>
      </div>
    </div>
  )
}

export default ExperienceCard
