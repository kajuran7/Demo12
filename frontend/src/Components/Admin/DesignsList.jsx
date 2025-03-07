
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DesignList = () => {
  const [designs, setDesigns] = useState([]);

  useEffect(() => {
    const fetchDesigns = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/design/getdesign`);
        setDesigns(response.data);
      } catch (error) {
        console.error('Error fetching designs:', error);
      }
    };

    fetchDesigns();
  }, []);

  const handleEdit = (id) => {
    // Navigate to edit page or show edit modal
    console.log('Editing design with ID:', id);
  };

  const handleDelete = async (id) => {
    try {
      await fetch.delete(`/api/design/${id}`);
      setDesigns(designs.filter((design) => design._id !== id));
    } catch (error) {
      console.error('Error deleting design:', error);
    }
  };

  return (
    <div className="designlist">
      <h2>Design List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Design Name</th>
            <th>Sheetsize</th>
            <th>Size</th>
            <th>Description</th>
            <th>Prize</th>
            <th>category</th>
            <th>designImage</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {designs.map((design) => (
            <tr key={design._id}>
              <td>{design._id}</td>
              <td>{design.name}</td>
              <td>{design.sheetsize}</td>
              <td>{design.size}</td>
              <td>{design.description}</td>
              <td>{design.price}</td>
              <td>{design.category}</td>
             
              <td>
                {design.designImage && (
                  <img src={design.designImage.url} alt="Design" style={{ width: '100px', height: 'auto' }} />
                )}
              </td>
              <td>
                <button className="btn btn-primary btn-sm mr-2" onClick={() => handleEdit(design._id)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(design._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DesignList;
