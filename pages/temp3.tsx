import Link from 'next/link'
import { Button, Group, Grid } from '@mantine/core'
import { ReplyIcon } from '@heroicons/react/solid'
import { LayoutNo } from '../components/LayoutNo'
import { BrandGithub, ThreeDCubeSphere, } from 'tabler-icons-react'
import { Soup } from 'tabler-icons-react'

const ButtonDemo = () => {
  return (
    <LayoutNo title="temp">
      <Group position="right" spacing="xl">
        <Button
          classNames={{
            leftIcon: 'text-green-500 h-6 w-6',
            rightIcon: 'text-orange-500 h-6 w-6',
          }}
          color="cyan"
          radius="lg"
          uppercase
          leftIcon={<BrandGithub />}
          rightIcon={<ThreeDCubeSphere />}
        >
          Press
        </Button>
        <Button>Click</Button>
        
        <Link href="/">
          <Soup className="h-6 w-6 cursor-pointer text-green-600" />
        </Link>
        <Link href="/">
          <ReplyIcon className="h-6 w-6 cursor-pointer text-gray-500" />
        </Link>
      </Group>
      <Group position="left" direction='column' spacing="xl">
        <Button
          classNames={{
            leftIcon: 'text-green-500 h-6 w-6',
            rightIcon: 'text-orange-500 h-6 w-6',
          }}
          color="cyan"
          radius="lg"
          uppercase
          leftIcon={<BrandGithub />}
          rightIcon={<ThreeDCubeSphere />}
        >
          Press
        </Button>
        <Button>Click</Button>
        
        <Link href="/">
          <Soup className="h-6 w-6 cursor-pointer text-green-600" />
        </Link>
        <Link href="/">
          <ReplyIcon className="h-6 w-6 cursor-pointer text-gray-500" />
        </Link>
      </Group>
      <Group position="center" spacing="xl">
        <Button
          classNames={{
            leftIcon: 'text-green-500 h-6 w-6',
            rightIcon: 'text-orange-500 h-6 w-6',
          }}
          color="cyan"
          radius="lg"
          uppercase
          leftIcon={<BrandGithub />}
          rightIcon={<ThreeDCubeSphere />}
        >
          Press
        </Button>
        <Button>Click</Button>
        
        <Link href="/">
          <Soup className="h-6 w-6 cursor-pointer text-green-600" />
        </Link>
        <Link href="/">
          <ReplyIcon className="h-6 w-6 cursor-pointer text-gray-500" />
        </Link>
      </Group>
      <Group position="apart" spacing="xl">
        <Button
          classNames={{
            leftIcon: 'text-green-500 h-6 w-6',
            rightIcon: 'text-orange-500 h-6 w-6',
          }}
          color="cyan"
          radius="lg"
          uppercase
          leftIcon={<BrandGithub />}
          rightIcon={<ThreeDCubeSphere />}
        >
          Press
        </Button>
        <Button>Click</Button>
        
        <Link href="/">
          <Soup className="h-6 w-6 cursor-pointer text-green-600" />
        </Link>
        <Link href="/">
          <ReplyIcon className="h-6 w-6 cursor-pointer text-gray-500" />
        </Link>
      </Group>
      <Grid>
        <Grid.Col span={4}>1</Grid.Col>
        <Grid.Col span={4}>2</Grid.Col>
        <Grid.Col span={4}>3</Grid.Col>
        </Grid>
      


      
    </LayoutNo>
  )
}




export default ButtonDemo


