import Link from 'next/link'
import { Button, Group, Grid, Text } from '@mantine/core'
import { ReplyIcon } from '@heroicons/react/solid'
import { LayoutNo } from '../components/LayoutNo'
import { BrandGithub, ThreeDCubeSphere, } from 'tabler-icons-react'
import { Soup } from 'tabler-icons-react'

const ButtonDemo = () => {
  return (
    <LayoutNo title="temp">
      <Grid>
        <Grid.Col md={6} lg={3}>
        <div className='x-full bg-gray-300 text-gray-700 justify-center flex items-center'>
          <Group mx="lg">
            <Button className="h-6" color="indigo"><Text size="xs" color="red">111</Text></Button>
            <Button className="h-12" color="teal">222</Button>
            <Button className="h-8" color="orange">333</Button>
          </Group>
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


