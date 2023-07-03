import React from 'react'

function PostPage({params}: {params: {id: string}}) {
  
  
    return (
    <div>
        {params.id}
    </div>
  )
}

export default PostPage