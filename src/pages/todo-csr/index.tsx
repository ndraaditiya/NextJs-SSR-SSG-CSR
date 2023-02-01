import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import Todo from './Todo'

const querylient = new QueryClient()

const TodoCSR = () => {
  return (
    <QueryClientProvider client={querylient}>
      <Todo />
    </QueryClientProvider>
  )
}

export default TodoCSR
