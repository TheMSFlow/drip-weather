import React from 'react'
import SearchBar from '../global/SearchBar'
import Locator from '../global/Locator'
import Header from '../global/Header'

const SearchLocator = () => {
  return (
    <>
      <div className='absolute top-0 xl:hidden'>
        <Header backBtn={false} logo={true} shareBtn={false} />
      </div>
        <div className='flex flex-col justify-center gap-7 xl:justify-between items-center py-6 h-full xl:w-[273px] '>
          <div className='xl:hidden w-[70%] lg:w-[80%]'><img className='w-full' src='/weather-location-enabled.svg'/></div>
          <SearchBar />
          <div className='xl:hidden w-[65%]' ><img src='/divider.svg'/></div>
          <Locator />
        </div>
    </>
  )
}

export default SearchLocator