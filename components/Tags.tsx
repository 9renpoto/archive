import React from 'react'

export default ({ tags }: any) => {
  if (!tags.length) {
    return null
  }
  return (
    <div>
      {tags.map((tag: any, i: number) => <span key={i}> &gt; {tag}</span>)}
    </div>
  )
}
