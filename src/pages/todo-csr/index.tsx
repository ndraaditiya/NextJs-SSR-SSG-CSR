import Layout from '@/layout'
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import Todo from './Todo'

const querylient = new QueryClient()

const TodoCSR = () => {
  return (
    // <QueryClientProvider client={querylient}>
    <Layout>
      <Todo />
    </Layout>

    // </QueryClientProvider>
  )
}

export default TodoCSR
