import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
//import { client } from "./lib/apollo" // se quiser usar client.query

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
      teacher {
        name
      }
    }
  }
`

function App() {

  //uma forma de chamar query:
  /*
  useEffect(() => {
    client.query({
      query: GET_LESSONS_QUERY,
    }).then(response => {
      console.log(response.data)
    })
  }, []) 
  */
  //segunda forma de chamar query:
  //É necessário colocar um componente ApolloProvider no main.tsx envolvendo o <App />
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY)
  console.log(data)

  //temp
  interface Lesson {
    id: string;
    title: string;
  }

  return (
    <>
      <h1 className="text-5xl font-bold text-violet-500">Hello World</h1>
      <ul>
        {data?.lessons.map(lesson => {
          return <li key={lesson.id}>{lesson.title}</li>
        })}
      </ul>
    </>
  )
}

export default App
