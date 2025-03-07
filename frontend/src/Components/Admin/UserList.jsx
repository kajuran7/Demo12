import React, { useState, useEffect } from 'react';


const UserList = () => {
  const [user,setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/users/getallusers`);
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUser(data);

      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUser();
  }, []);
 


 
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/users/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Failed to delete user');
      }
      // Filter out the deleted user from the state
      setUser(user.filter(user => user._id !== id));
      console.log('User deleted successfully');
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className='userlist'>
      <h2>User List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>UserID</th>
            <th>User Name</th>
            <th>EmailAddress</th>            
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>


              <td>
              
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(user._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
