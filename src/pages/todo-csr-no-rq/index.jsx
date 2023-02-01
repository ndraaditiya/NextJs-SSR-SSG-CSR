import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const Todo = () => {
  const router = useRouter()
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((res) => res.json())
      .then((data) => setPhotos(data))

    return () => {
      setPhotos([])
    }
  }, [])

  return (
    <div>
      <button onClick={() => router.back()}>Back</button>
      {photos && photos.map((d, i) =>
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
  )
}

export default Todo