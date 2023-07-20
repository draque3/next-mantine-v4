import Link from 'next/link'
import { Button, Group, Grid, SimpleGrid } from '@mantine/core'
import { ReplyIcon } from '@heroicons/react/solid'
import { LayoutNo } from '../components/LayoutNo'
import { BrandGithub, ThreeDCubeSphere, } from 'tabler-icons-react'
import { Soup } from 'tabler-icons-react'

const ButtonDemo = () => {
  return (
    <LayoutNo title="temp">
      <SimpleGrid
          cols={4}
          spacing="lg"
          breakpoints={[
            { maxWidth: 980, cols: 3, spacing: 'md' },
            { maxWidth: 755, cols: 2, spacing: 'sm' },
            { maxWidth: 600, cols: 1, spacing: 'sm' },
          ]}
          >
          <div className='x-full bg-gray-300 text-gray-700 font-black text-sm justify-center flex items-center'>1</div>
          <div className='x-full bg-gray-100 text-gray-700 font-black text-sm justify-center flex items-center'>2</div>
          <div className='x-full bg-gray-300 text-gray-700 font-black text-sm justify-center flex items-center'>3</div>
          <div className='x-full bg-gray-100 text-gray-700 font-black text-sm justify-center flex items-center'>4</div>
          <div className='x-full bg-gray-300 text-gray-700 font-black text-sm justify-center flex items-center'>5</div>
          <div className='x-full bg-gray-100 text-gray-700 font-black text-sm justify-center flex items-center'>6</div>
          <div className='x-full bg-gray-300 text-gray-700 font-black text-sm justify-center flex items-center'>7</div>
          <div className='x-full bg-gray-100 text-gray-700 font-black text-sm justify-center flex items-center'>8</div>
      
      </SimpleGrid>



      
    </LayoutNo>
  )
}




export default ButtonDemo


