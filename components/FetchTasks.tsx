import { ExclamationIcon } from '@heroicons/react/solid'
import { Loader, Text, Alert, Center } from '@mantine/core'
import { useQueryTasks } from '../hooks/useQueryTasks'

export const FetchTasks = () => {
  const { data, status } = useQueryTasks()
  if (status === 'loading')
    return (
      <Center>
        <Loader color="cyan" size="xl" />
      </Center>
    )
  if (status === 'error')
    return (
      <Alert
        icon={<ExclamationIcon />}

        title="Fetch Error!"
        color="red"
        radius="md"
      >
        Something wrong happend !
      </Alert>
    )
  return (
    <div className="text-center">
      <Text weight="bold">Task List</Text>
      {data?.map((task) => (
        <Text my="xs" size="sm" key={task.id}>
          {task.title}
        </Text>
      ))}
    </div>
  )
}
