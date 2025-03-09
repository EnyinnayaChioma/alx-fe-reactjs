import { useParams } from 'react-router-dom';

export default function Post() {
  const { postId } = useParams();
  return (
    <div>
      <h1>Post {postId}</h1>
      <p>Content for post {postId}</p>
    </div>
  );
}