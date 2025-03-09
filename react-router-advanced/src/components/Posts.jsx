import { Link } from 'react-router-dom';

export default function Posts() {
  const postIds = [1, 2, 3];
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {postIds.map(id => (
          <li key={id}>
            <Link to={`/posts/${id}`}>Post {id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}