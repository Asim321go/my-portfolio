import Photo from '@/components/Photo'
import { Button } from '@/components/ui/button'
import { LuDownload } from 'react-icons/lu'
import React from 'react'
import Social from '@/components/Social'
import Stats from '@/components/Stats'

const Home = () => {
  return (
    <section>
      <div className="flex flex-col xl:flex-row container xl:justify-between items-center gap-14">
        <div className="flex w-full flex-col items-center xl:items-start text-center xl:text-left order-2 xl:order-none">
          <p className='pb-4 xl:pb-2 xl:text-lg'>Software Developer</p>
          <h1 className="h1">
            Hello I'm <br />
            <span className="text-accent">Asim Farhan</span>
          </h1>
          <p className="pt-6 w-[90%] text-white">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
          </p>
          <div className="flex flex-col gap-10 items-center xl:flex-row  xl:gap-12 w-full my-6">
            <div>
              <Button variant="outline" size="lg" className="gap-2">
                <span>Download CV</span>
                <LuDownload className="text-lg" />
              </Button>
            </div>
            <Social />
          </div>
        </div>
        <div className="order-1 w-full flex items-start justify-center bg-blend-multiply">
          <Photo />
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home
