import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Post from './Post';
import BackToTopButton from './BackToTopButton';
import './Post.css';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [pageNumber, setPageNumber] = useState(2);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts.results);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  const fetchMoreData = () => {
    if (posts.length < 826) {
      fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
        .then((res) => res.json())
        .then((nextPosts) => {
          setPosts(posts.concat(nextPosts.results));
          setPageNumber(pageNumber + 1);
        })
        .catch((error) => setError(error.message))
        .finally(() => setIsLoading(false));
    } else {
      setHasMore(false);
    }
  };

  console.log(fetchMoreData);

  if (isLoading) {
    return <h1>...Loading</h1>;
  }

  if (error) {
    return <h1>Error:{error}</h1>;
  }

  return (
    <div className="posts">
      <InfiniteScroll
        className="infinityScroll"
        dataLength={posts.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<p>Loading...</p>}
        endMessage={<p>список персонажей окончен</p>}
      >
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
        <BackToTopButton />
      </InfiniteScroll>
    </div>
  );
}

export default Posts;
