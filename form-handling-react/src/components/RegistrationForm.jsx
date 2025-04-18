// import React, { useState } from 'react';

// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: ''
//   });
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//     setErrors(prev => ({ ...prev, [name]: '' }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = {};

//     if (!formData.username.trim()) newErrors.username = 'Username required';
//     if (!formData.email.trim()) newErrors.email = 'Email required';
//     if (!formData.password.trim()) newErrors.password = 'Password required';

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     console.log('Submitting:', formData);
//     setFormData({ username: '', email: '', password: '' });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Username:</label>
//         <input
//           type="text"
//           name="username"
//           value={formData.username}
//           onChange={handleChange}
//         />
//         {errors.username && <div className="error">{errors.username}</div>}
//       </div>
//       <div>
//         <label>Email:</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         {errors.email && <div className="error">{errors.email}</div>}
//       </div>
//       <div>
//         <label>Password:</label>
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//         />
//         {errors.password && <div className="error">{errors.password}</div>}
//       </div>
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default RegistrationForm;


import React, { useState } from 'react';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!username) newErrors.username = 'Username required';
    if (!email) newErrors.email = 'Email required';
    if (!password) newErrors.password = 'Password required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log('Submitting:', { username, email, password });
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <div className="error">{errors.username}</div>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <div className="error">{errors.email}</div>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <div className="error">{errors.password}</div>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;