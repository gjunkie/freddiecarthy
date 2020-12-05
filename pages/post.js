import * as React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import fire from '../config/fire-config'

import { CreatePost } from '../components/CreatePost/'

const Post = () => {
  const router = useRouter();
  const user = fire.auth().currentUser

  if (!user) {
    router.push("/")
  }

  return (
    <>
      <Head>
        <title>Freddie Carthy - Post</title>
      </Head>
      <CreatePost />
    </>
  )
}
export default Post
