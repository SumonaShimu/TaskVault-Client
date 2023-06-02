import { useQuery } from '@tanstack/react-query'

const useTasks = () => {

    const { refetch, data: tasks = [] } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await fetch(`https://task-vault-server.vercel.app/tasks`)
            return res.json();
        },
    })

    return [tasks, refetch]
};

export default useTasks;