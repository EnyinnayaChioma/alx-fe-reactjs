
import PropTypes from 'prop-types';

function UserProfile({name,age,bio}) {
  return (
   
    <div>
        <h2>Name:{name}</h2>
       <p>Age: {age}</p>
       <p>Bio: {bio}</p>
    </div>
  )
}


UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired, // Ensure name is a required string
};
export default UserProfile
