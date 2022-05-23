import Layout from "../components/Layout"
import { GetStaticProps } from "next"
import { getAllTaskData } from "../lib/fetch"
import { FC } from "react"
import useSWR from "swr"
import axios from "axios"
import { TASK } from "../types/types"


/* SSG + PreFetch + Client side fetching */

type STATICPROPS = {
  staticTasks: TASK[]
}

const axiosFetcher =async () => {
  const result =await axios.get<TASK[]>(
    'https://jsonplaceholder.typicode.com/todos/?_limit=10'
  )
  return result.data
}

const TaskPage: FC<STATICPROPS> = ({ staticTasks }) => {
  const { data: tasks, error } = useSWR('todosFetch', axiosFetcher, {
    fallbackData: staticTasks,
    revalidateOnMount: true,
  })

  if (error) return <span>Eor!</span>

  return (
    <Layout title="Task">
      <p className=" text-4xl mb-10">todos page</p>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.id}
            {': '}
            <span>{task.title}</span>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
export default TaskPage

export const getStaticProps: GetStaticProps = async () => {
  const staticTasks = await getAllTaskData()
  return {
    props: { staticTasks }
  }
}
