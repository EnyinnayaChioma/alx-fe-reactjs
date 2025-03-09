import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
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
    staleTime: 5000 // Keep data fresh for 5 seconds
  });

  if (isLoading) {
    return <div style={{ padding: '20px' }}>Loading posts...</div>;
  }

  if (isError) {
    return (
      <div style={{ padding: '20px', color: 'red' }}>
        Error: {error.message}
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <button 
        onClick={refetch}
        style={{ 
          marginBottom: '20px',
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Refresh Posts
      </button>
      
      <div style={{ display: 'grid', gap: '20px' }}>
        {posts.map(post => (
          <div 
            key={post.id}
            style={{
              padding: '20px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              backgroundColor: '#f9f9f9'
            }}
          >
            <h3 style={{ marginTop: 0, color: '#333' }}>{post.title}</h3>
            <p style={{ color: '#666' }}>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsComponent;