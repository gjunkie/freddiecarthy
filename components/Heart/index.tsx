import * as React from 'react'
import { LIKE_LIMIT_PER_USER, LIKE_REQUEST_THROTTLE_TIME } from '../../lib/constants'
import { useThrottledCallback } from '../../hooks/useThrottledCallback'
import styles from './Heart.module.css'

type Props = {
  articleSlug: string,
  likes: {
    totalLikes: number,
    userLikes: number,
  }
}

export const Heart = (props: Props) => {
  const { articleSlug, likes } = props;

  // total likes from all users
  const [totalLikes, setTotalLikes] = React.useState(likes.totalLikes)
  // total likes for the current user
  const [userLikes, setUserLikes] = React.useState(likes.userLikes)
  // current session likes as the user clicks the heart
  const [sessionLikes, setSessionLikes] = React.useState(0)

  React.useEffect(() => {
    if (sessionLikes === 0) return
    setTotalLikes(totalLikes + 1)
    setUserLikes(userLikes + 1)
    throttledSaveRequest()
  }, [sessionLikes])

  // the audio player for the pop sound when a user
  // clicks the heart.
  const soundPlayer = React.useMemo(() => (
    typeof Audio !== "undefined" && userLikes < 16 ? new Audio(`/audio/pop${userLikes < 15 ? '1' : '2'}.ogg`) : undefined
  ), [userLikes])

  // a throttled instance of the request method to make
  // sure users can click the heart many times but we
  // only make a single request.
  const throttledSaveRequest = useThrottledCallback(async () => {
    await fetch(`/api/like`, {
      method: 'POST',
      body: JSON.stringify({slug: articleSlug, likes: sessionLikes})
    });
    setSessionLikes(0)
  }, LIKE_REQUEST_THROTTLE_TIME)

  // handler for clicking the heart
  const setLikes = () => {
    if (userLikes >= LIKE_LIMIT_PER_USER) return;
    soundPlayer && soundPlayer.play()
    setSessionLikes(sessionLikes + 1)
  }

  const copy = totalLikes === 0 ? 'likes... :(' : totalLikes === 1 ? 'like!' : 'likes!'

  return (
    <div className={styles.wrapper}>
      <span className={styles.heart}>
        <svg className={`${userLikes < 16 ? styles.incomplete : styles.complete}`} onClick={setLikes} x="0px" y="0px" viewBox="0 0 230 230">
          <linearGradient id="gradient1" x1="0.5" y1="1" x2="0.5" y2="0">
            <stop offset="6.25%" stopOpacity={userLikes > 0 ? '1' : '0'} stopColor="#d31717"/>
            <stop offset="12.5%" stopOpacity={userLikes > 1 ? '1' : '0'} stopColor="#d31717"/>
            <stop offset="18.75%" stopOpacity={userLikes > 2 ? '1' : '0'} stopColor="#d31717"/>
            <stop offset="25%" stopOpacity={userLikes > 3 ? '1' : '0'} stopColor="#d31717"/>
            <stop offset="31.25%" stopOpacity={userLikes > 4 ? '1' : '0'} stopColor="#d31717"/>
            <stop offset="37.5%" stopOpacity={userLikes > 5 ? '1' : '0'} stopColor="#d31717"/>
            <stop offset="43.75%" stopOpacity={userLikes > 6 ? '1' : '0'} stopColor="#d31717"/>
            <stop offset="50%" stopOpacity={userLikes > 7 ? '1' : '0'} stopColor="#d31717"/>
            <stop offset="56.25%" stopOpacity={userLikes > 8 ? '1' : '0'} stopColor="#d31717"/>
            <stop offset="62.5%" stopOpacity={userLikes > 9 ? '1' : '0'} stopColor="#d31717"/>
            <stop offset="68.75%" stopOpacity={userLikes > 10 ? '1' : '0'} stopColor="#d31717"/>
            <stop offset="75%" stopOpacity={userLikes > 11 ? '1' : '0'} stopColor="#d31717"/>
            <stop offset="81.25%" stopOpacity={userLikes > 12 ? '1' : '0'} stopColor="#d31717"/>
            <stop offset="87.5%" stopOpacity={userLikes > 13 ? '1' : '0'} stopColor="#d31717"/>
            <stop offset="93.75%" stopOpacity={userLikes > 14 ? '1' : '0'} stopColor="#d31717"/>
            <stop offset="100%" stopOpacity={userLikes > 15 ? '1' : '0'} stopColor="#d31717"/>
          </linearGradient>
          <linearGradient id="gradient2" x1="0.5" y1="1" x2="0.5" y2="0">
            <stop offset="100%" stopOpacity={1} stopColor="#505050"/>
          </linearGradient>
          <path fill="url(#gradient2)" d="M213.588,120.982L115,213.445l-98.588-92.463C-6.537,96.466-5.26,57.99,19.248,35.047l2.227-2.083
            c24.51-22.942,62.984-21.674,85.934,2.842L115,43.709l7.592-7.903c22.949-24.516,61.424-25.784,85.936-2.842l2.227,2.083
            C235.26,57.99,236.537,96.466,213.588,120.982z"/>
          <path fill="url(#gradient1)" d="M213.588,120.982L115,213.445l-98.588-92.463C-6.537,96.466-5.26,57.99,19.248,35.047l2.227-2.083
            c24.51-22.942,62.984-21.674,85.934,2.842L115,43.709l7.592-7.903c22.949-24.516,61.424-25.784,85.936-2.842l2.227,2.083
            C235.26,57.99,236.537,96.466,213.588,120.982z"/>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
      </span>
     {totalLikes} {copy}
    </div>
  )
}
