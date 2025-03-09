import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
};

const PostsComponent = () => {
  const { 
    data: posts, 
    isLoading, 
    isError, 
    error,
    refetch 
  } = useQuery('posts', fetchPosts, {
    // Configuration options go here
    cacheTime: 600000,         // 10 minutes cache retention
    staleTime: 5000,           // Data becomes stale after 5s
    refetchOnWindowFocus: true,// Auto-refresh when window regains focus
    keepPreviousData: true,    // Keep previous data during refetches
    retry: 3                   // Retry failed requests 3 times
  });

  if (isLoading) return <div>Loading posts...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <button onClick={refetch}>Refresh Posts</button>
      
      <div className="posts-container">
        {posts.map(post => (
          <div key={post.id} className="post-card">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsComponent;