import React, { useState } from 'react';

const DesignForm = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [customCategory, setCustomCategory] = useState(''); // New state for custom category input
  const [price, setPrice] = useState('');
  const [size, setSize] = useState('');
  const [sheetsize, setSheetSize] = useState(''); 
  const [description, setDescription] = useState('');
  const [designImage, setDesignImage] = useState(null);
 



  const handleNameChange = (e) => setName(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);
  const handleSizeChange = (e) => setSize(e.target.value);
  const handleSheetSizeChange = (e) => setSheetSize(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleDesignImageChange = (e) => setDesignImage(e.target.files[0]);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('category', category || customCategory); // Use selected category if available, otherwise use custom category
    // formData.append('category', setCustomCategory || customCategory); // Use custom category if selected, otherwise use dropdown
    formData.append('price', price);
    formData.append('size', size);
    formData.append('sheetsize', sheetsize);
    formData.append('description', description);
    formData.append('designImage', designImage);
  
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/design/createdesign`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Upload successful!');
      } else {
        console.error('Upload failed.');
      }
    } catch (error) {
      console.error('Error uploading:', error);
    }
  };
  

  return (
    <div className="ventor-form">
      <h1>New Design</h1>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={handleNameChange} required />
      <label htmlFor="price">Price:</label>
      <input type="text" id="price" value={price} onChange={handlePriceChange} required />

      <label htmlFor="size">Size:</label>
      <input type="text" id="size" value={size} onChange={handleSizeChange} required />

      <label htmlFor="sheetsize">Sheet Size:</label>
      <input type="text" id="sheetsize" value={sheetsize} onChange={handleSheetSizeChange} required />

      <label htmlFor="description">Description:</label>
      <input type="text" id="description" value={description} onChange={handleDescriptionChange} required />
      <label htmlFor="category">Category:</label>
      <select type="text" id="category" value={category} onChange={handleCategoryChange}>
        <option value="">Select Category</option>
        <option value="Wedding">Wedding</option>
        <option value="Birthday">Birthday</option>
        <option value="Ceremony">Ceremony</option>
        <option value="Frames">Frames</option>
      </select>

      <label htmlFor="designImage">Image:</label>
      <input type="file" id="designImage"  onChange={handleDesignImageChange} accept="image/*" required />



      <button type="button" onClick={handleUpload}>
        Upload
      </button>
    </div>
  );
};

export default DesignForm;
