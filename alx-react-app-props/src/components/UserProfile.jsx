import  { useContext } from 'react';
import UserContext from './UserContext';

const UserProfile = ()=>{
  const userData = useContext(UserContext);

  return (
   
    <div>
     const userData = useContext(UserContext);

return (
  <div>
    <p>Name: {userData.name}</p>
    <p>Email: {userData.email}</p>
    <p>Email: {userData.bio}</p>

  </div>
);

    </div>
  )
}

export default UserProfile
