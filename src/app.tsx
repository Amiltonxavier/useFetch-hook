import { s } from './app.ts'
import { useFetch } from './hooks/usefetch'



function App() {
  const { data, loading } = useFetch({ endpoint: "posts" })

  if (loading) {
    <p>Loading...</p>
  }
  return (
    <div className={s.container}>
      <h1>Posts</h1>

      <div >
        {data?.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <span>{post.views}</span>
          </div>
        ))}
      </div>

    </div>

  )
}

export default App
