import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
// import Todo from './Todo'

const querylient = new QueryClient()

const TodoCSR = () => {
  const router = useRouter()
  const { data: photos, isLoading } = useQuery(['photos'], async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    return res.json()
  })

  if (isLoading) return <p>Loading..</p>

  // return (

  return (
    <QueryClientProvider client={querylient}>
      <div>
        <button onClick={() => router.back()}>Back</button>
        {photos && photos.map((d: any, i: any) =>
          <div key={i}>
            <p>{d?.title}</p>
            <img src={d?.thumbnailUrl} />
          </div>
        )}
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint aliquam commodi, dolorum cum error natus mollitia. Eaque culpa ab dicta cum iure recusandae sunt assumenda fugiat minima, eum provident!</div>
      </div>
    </QueryClientProvider >
  )
  // )
}

export default TodoCSR
