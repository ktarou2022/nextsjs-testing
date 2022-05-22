import Link from 'next/link'
import { FC } from 'react';

import { POST } from '../types/types'


const Post: FC<Omit<POST, "userId" | "body">> = ({ id, title }) => {
  return (
    <div>
      <span>{id}</span>
      {' : '}
      <Link href={`/posts/${id}`}>
        <a className=' cursor-pointer border-b border-gray-500 hover:bg-gray-300'>
          {title}
        </a>
      </Link>
    </div>
  )
}

export default Post
