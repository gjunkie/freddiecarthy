import * as React from 'react';
import fire from '../config/fire-config'

export const CreatePost = () => {
  const [title, setTitle] = React.useState('')
  const [content, setContent] = React.useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    setTitle('')
    setContent('')

    fire.firestore()
      .collection('blog')
      .add({title, content})
  }

  return (
    <div>
      <h2>Add Blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Title<br />
          <input type="text" value={title} 
           onChange={({target}) => setTitle(target.value)} />
        </div>
        <div>
          Content<br />
          <textarea value={content} 
           onChange={({target}) => setContent(target.value)} />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}
