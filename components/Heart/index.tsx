import * as React from 'react'
import styles from './Heart.module.css'

type Props = {
  articleSlug: string,
}

export const Heart = (props: Props) => {
  const [totalLikes, setTotalLikes] = React.useState(0);
  const [userLikes, setUserLikes] = React.useState(0);

  const { articleSlug } = props;

  const getLikes = async () => {
    const response = await fetch(`/api/getLikes?slug=${articleSlug}`);
    response.json().then(response => {
      setTotalLikes(response.data.totalLikes)
      setUserLikes(response.data.userLikes)
    });
  };

  const setLikes = async () => {
    if (userLikes === 10) return;

    const response = await fetch(`/api/like`, {
      method: 'POST',
      body: JSON.stringify({slug: articleSlug})
    });
    response.json().then((res) => {
      console.log(res)
      setTotalLikes(res.data.totalLikes)
      setUserLikes(res.data.userLikes)
    });
  };

  React.useEffect(() => {
    getLikes();
  }, []);

  return (
    <>
      <span className={styles.heart}>
        <svg className={`${userLikes < 16 ? styles.incomplete : styles.complete}`} onClick={setLikes} x="0px" y="0px" viewBox="0 0 230 230">
          <linearGradient id="gradient1" x1="0.5" y1="1" x2="0.5" y2="0">
            <stop offset="10%" stop-opacity={userLikes > 0 ? '1' : '0'} stop-color="#d31717"/>
            <stop offset="20%" stop-opacity={userLikes > 1 ? '1' : '0'} stop-color="#d31717"/>
            <stop offset="30%" stop-opacity={userLikes > 2 ? '1' : '0'} stop-color="#d31717"/>
            <stop offset="40%" stop-opacity={userLikes > 3 ? '1' : '0'} stop-color="#d31717"/>
            <stop offset="50%" stop-opacity={userLikes > 4 ? '1' : '0'} stop-color="#d31717"/>
            <stop offset="60%" stop-opacity={userLikes > 5 ? '1' : '0'} stop-color="#d31717"/>
            <stop offset="70%" stop-opacity={userLikes > 6 ? '1' : '0'} stop-color="#d31717"/>
            <stop offset="80%" stop-opacity={userLikes > 7 ? '1' : '0'} stop-color="#d31717"/>
            <stop offset="90%" stop-opacity={userLikes > 8 ? '1' : '0'} stop-color="#d31717"/>
            <stop offset="100%" stop-opacity={userLikes > 9 ? '1' : '0'} stop-color="#d31717"/>
          </linearGradient>
          <linearGradient id="gradient2" x1="0.5" y1="1" x2="0.5" y2="0">
            <stop offset="100%" stop-opacity={1} stop-color="#505050"/>
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
     {totalLikes} likes!
    </>
  )
}
