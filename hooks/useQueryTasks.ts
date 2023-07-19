import { useQuery } from 'react-query'
import { supabase } from '../utils/supabase'
import { delay } from '../utils/delay'
import { Task } from '../types'

export const useQueryTasks = () => {
  const getTasks = async () => {
    const { data, error } = await supabase
      .from('Tasks')
      .select('*')
      .order('created_at', { ascending: true })
    await delay(2000)
    if (error) {
      throw new Error(error.message)
    }
    return data
  }

  return useQuery<Task[]>({
    queryKey: ['Tasks'],
    queryFn: getTasks,
  })
}
