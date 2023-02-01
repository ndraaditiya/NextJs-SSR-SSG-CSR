import { useRouter } from "next/router"

export default function User() {
  const router = useRouter()
  const { user } = router.query

  return (
    <div>
      <h5>Hello {user}</h5>
      <button onClick={() => router.back()}>Back</button>
    </div>
  )
}