import { Photos } from "@/interfaces"
import Image from "next/image"
import { useRouter } from "next/router"

const Todos = ({ data }: any) => {
  const router = useRouter()

  return (
    <div>
      <button onClick={() => router.back()}>Back</button>
      {data && data.map((t: Photos, i: number) =>
        <div key={i}>
          <p>{t?.title}</p>
          <Image src={t?.thumbnailUrl} alt={t?.title} loading='lazy' width={150} height={150} />
          {/* <img src={t?.thumbnailUrl} loading='lazy' /> */}
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

export default Todos

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos')
  const data = await res.json()

  return { props: { data } }
}
