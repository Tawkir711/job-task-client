import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useTodo = () => {
  const axiosPublic = useAxiosPublic();
  const { data: task = [], refetch } = useQuery({
    queryKey: ['data'],
    queryFn: async () => {
      const res = await axiosPublic.get('/task')
      return res?.data
    }
  })
  return [task, refetch]
};

export default useTodo;