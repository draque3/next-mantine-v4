import Link from 'next/link'
import { Button, Group, Grid } from '@mantine/core'
import { ReplyIcon } from '@heroicons/react/solid'
import { LayoutNo } from '../components/LayoutNo'
import { BrandGithub, ThreeDCubeSphere, } from 'tabler-icons-react'
import { Soup } from 'tabler-icons-react'

const ButtonDemo = () => {
  return (
    <LayoutNo title="temp">
      <Grid>
        <Grid.Col md={6} lg={3}>
        <div className='x-full bg-gray-300 text-gray-700 font-black text-sm justify-center flex items-center'>
          1
        </div>
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
        <div className='x-full bg-gray-100 text-gray-700 font-black text-sm justify-center flex items-center'>
          2
        </div>
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
        <div className='x-full bg-gray-300 text-gray-700 font-black text-sm justify-center flex items-center'>
          3
        </div>
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
        <div className='x-full bg-gray-100 text-gray-700 font-black text-sm justify-center flex items-center'>
          4
        </div>
        </Grid.Col>
      </Grid>

      <Grid>
        <Grid.Col md={6} lg={3}>
        <div className='x-full bg-gray-300 text-gray-700 font-black text-sm justify-center flex items-center'>
          1
        </div>
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
        <div className='x-full bg-gray-100 text-gray-700 font-black text-sm justify-center flex items-center'>
          2
        </div>
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
        <div className='x-full bg-gray-300 text-gray-700 font-black text-sm justify-center flex items-center'>
          3
        </div>
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
        <div className='x-full bg-gray-100 text-gray-700 font-black text-sm justify-center flex items-center'>
          4
        </div>
        </Grid.Col>
      </Grid>
      
      


      
    </LayoutNo>
  )
}




export default ButtonDemo


