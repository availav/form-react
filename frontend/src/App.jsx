//without preview




// import React, { useState } from 'react';
import "./App.css"

// function App() {
//   const [showModal, setShowModal] = useState(false);
//   const [formData, setFormData] = useState({
//     zipFile: '',
//     name: '',
//     price: '',
//     image: '',
//   });

//   const handleClick = () => {
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your form submission logic here
//     console.log('Form submitted:', formData);
//     console.warn("You've added a new item!");
//     setShowModal(false);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Open Form</button>
//       {showModal && (
//         <div className="modal-overlay">
//           <div className="modal">
//             <button className="close-btn" onClick={handleCloseModal}>Close</button>
//             <form onSubmit={handleSubmit}>
//               <label>
//                 Zip File:
//                 <input
//                   type="file"
//                   name="zipFile"
//                   onChange={handleChange}
//                   required
//                 />
//               </label>
//               <br />
//               <label>
//                 Name:
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   style={{ width: '240px', height: '20px', marginLeft: '45px' }}
//                 />
//               </label>
//               <br />
//               <label>
//                 Price:
//                 <input
//                   type="number"
//                   name="price"
//                   value={formData.price}
//                   onChange={handleChange}
//                   required
//                   style={{ width: '240px', height: '20px', marginLeft: '45px' }}
//                 />
//               </label>
//               <br />
//               <label>
//                 Image:
//                 <input
//                   type="file"
//                   name="image"
//                   onChange={handleChange}
//                   required
//                 />
//               </label>
//               <br />
//               <button type="submit">Submit</button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;



// with preview



// import React, { useState } from 'react';
// import "./App.css"

// function App() {
//   const [showModal, setShowModal] = useState(false);
//   const [formData, setFormData] = useState({
//     zipFile: '',
//     name: '',
//     price: '',
//     image: '',
//   });
//   const [imagePreview, setImagePreview] = useState('');

//   const handleClick = () => {
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === 'image') {
//       const file = files[0];
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result);
//       };
//       if (file) {
//         reader.readAsDataURL(file);
//       }
//     }
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your form submission logic here
//     console.log('Form submitted:', formData);
//     console.warn("You've added a new item!");
//     setShowModal(false);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Open Form</button>
//       {showModal && (
//         <div className="modal-overlay">
//           <div className="modal">
//             <button className="close-btn" onClick={handleCloseModal}>Close</button>
//             <form onSubmit={handleSubmit}>
//               <label>
//                 Zip File:
//                 <input
//                   type="file"
//                   name="zipFile"
//                   onChange={handleChange}
//                   required
//                 />
//               </label>
//               <br />
//               <label>
//                 Name:
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   style={{ width: '240px', height: '20px', marginLeft: '45px' }}
//                 />
//               </label>
//               <br />
//               <label>
//                 Price:
//                 <input
//                   type="number"
//                   name="price"
//                   value={formData.price}
//                   onChange={handleChange}
//                   required
//                   style={{ width: '240px', height: '20px', marginLeft: '45px' }}
//                 />
//               </label>
//               <br />
//               <label>
//                 Image:
//                 <input
//                   type="file"
//                   name="image"
//                   onChange={handleChange}
//                   required
//                 />
//               </label>
//               <div className="image-preview">
//                 {imagePreview && <img src={imagePreview} alt="Uploaded" style={{ width: '100px', height: '100px' }} />}
//               </div>
//               <br />
//               <button type="submit">Submit</button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;



//  for backend purpose

//  for pinata

// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [showModal, setShowModal] = useState(false);
//   const [formData, setFormData] = useState({
//     zipFile: '',
//     name: '',
//     price: '',
//     image: '',
//   });
//   const [imagePreview, setImagePreview] = useState('');

//   const handleClick = () => {
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === 'image') {
//       const file = files[0];
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result);
//       };
//       if (file) {
//         reader.readAsDataURL(file);
//       }
//     }
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const pinataApiKey = 'd6484ac6015b56f0315b';
//     const pinataSecretApiKey = '194bee1a94a82f794f7828af7db40b041b3f8f29905cc2462474a6b6ac1bc4c5';

//     const formData = new FormData();
//     formData.append('file', formData.image);

//     const pinataOptions = {
//       method: 'POST',
//       url: 'https://api.pinata.cloud/pinning/pinFileToIPFS',
//       data: formData,
//       headers: {
//         'pinata_api_key': pinataApiKey,
//         'pinata_secret_api_key': pinataSecretApiKey,
//         'Content-Type': 'multipart/form-data',
//       },
//     };

//     try {
//       const response = await axios(pinataOptions);
//       const CID = response.data.IpfsHash;
//       const ImgHash = `https://gateway.pinata.cloud/ipfs/${CID}`;
//       console.log('Image Hash:', ImgHash);
//       alert('Form submitted successfully!');
//       setShowModal(false);
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Error submitting form. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Open Form</button>
//       {showModal && (
//         <div className="modal-overlay">
//           <div className="modal">
//             <button className="close-btn" onClick={handleCloseModal}>
//               Close
//             </button>
//             <form onSubmit={handleSubmit}>
//               <label>
//                 Zip File:
//                 <input type="file" name="zipFile" onChange={handleChange} required />
//               </label>
//               <br />
//               <label>
//                 Name:
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   style={{ width: '240px', height: '20px', marginLeft: '45px' }}
//                 />
//               </label>
//               <br />
//               <label>
//                 Price:
//                 <input
//                   type="number"
//                   name="price"
//                   value={formData.price}
//                   onChange={handleChange}
//                   required
//                   style={{ width: '240px', height: '20px', marginLeft: '45px' }}
//                 />
//               </label>
//               <br />
//               <label>
//                 Image:
//                 <input type="file" name="image" onChange={handleChange} required />
//               </label>
//               <div className="image-preview">
//                 {imagePreview && <img src={imagePreview} alt="Uploaded" style={{ width: '100px', height: '100px' }} />}
//               </div>
//               <br />
//               <button type="submit">Submit</button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;




// sucessfull uploading file


// import { useState } from "react";

// function App() {
//   const [selectedFile, setSelectedFile] = useState();
//   const changeHandler = (event) => {
//     setSelectedFile(event.target.files);
//   };

//   const handleSubmission = async () => {
//     try {
//       const formData = new FormData();
//       Array.from(selectedFile).forEach((file) => {
//         formData.append("file", file);
//       });
//       const metadata = JSON.stringify({
//         name: "File name",
//       });
//       formData.append("pinataMetadata", metadata);

//       const options = JSON.stringify({
//         cidVersion: 0,
//       });
//       formData.append("pinataOptions", options);

//       const res = await fetch(
//         "https://api.pinata.cloud/pinning/pinFileToIPFS",
//         {
//           method: "POST",
//           headers: {
//             Authorization: `Bearer ${import.meta.env.VITE_PINATA_JWT}`,
//           },
//           body: formData,
//         }
//       );
//       const resData = await res.json();
//       console.log(resData);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       <label className="form-label"> Choose File</label>
//       <input
//         directory=""
//         webkitdirectory=""
//         type="file"
//         onChange={changeHandler}
//       />
//       <button onClick={handleSubmission}>Submit</button>
//     </>
//   );
// }

// export default App;

//  successfull



// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [file, setFile] = useState(null);
//   const [image, setImage] = useState(null);
//   const [name, setName] = useState('');
//   const [fileCID, setFileCID] = useState('');
//   const [imageCID, setImageCID] = useState('');
//   const [finalCID, setFinalCID] = useState('');

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleFileUpload = async () => {
//     const formData = new FormData();
//     formData.append('file', file, file.name);

//     const JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJjMzJkMGViNy05MmEwLTQ3OTctODgxNi0wMTMzZTI3M2I3MjYiLCJlbWFpbCI6InZpc2hhbGR1YmV5ODEzMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiMmViMzY5ZjE2YmIwY2RhN2UyZjQiLCJzY29wZWRLZXlTZWNyZXQiOiJmNGUzNTYzODllNmM4NGRjYjY1OGNkZGJkNmNiOTAwNzRiMGVmNDE1NGU1YThjNTEwMzQ2NTM4ZTJkODU4YTcyIiwiaWF0IjoxNzE0MDM3MDQ4fQ.zhaM6JNFaVIWN2smCdRzPHviMEO8IFMklO9Vl2S8G5s';

//     try {
//       const response = await axios.post(
//         'https://api.pinata.cloud/pinning/pinFileToIPFS',
//         formData,
//         {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//             Authorization: `Bearer ${JWT}`,
//           },
//         }
//       );

//       console.log('File CID:', response.data.IpfsHash);
//       setFileCID(response.data.IpfsHash);
//     } catch (error) {
//       console.error('Error uploading file:', error.response.data);
//     }
//   };

//   const handleImageUpload = async () => {
//     const formData = new FormData();
//     formData.append('file', image, image.name);

//     const JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJjMzJkMGViNy05MmEwLTQ3OTctODgxNi0wMTMzZTI3M2I3MjYiLCJlbWFpbCI6InZpc2hhbGR1YmV5ODEzMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiNWFkOTYxYTc4NzA0MWU3ODZmM2IiLCJzY29wZWRLZXlTZWNyZXQiOiIxNTE4MjY3ZDc2YmVmYmVmOTUzNmRlZmNiMTllMGQxN2E3ZTQwM2JhZjFhNWI2MjNhNDFjZDllYzk3MzRmNWY5IiwiaWF0IjoxNzE0MDM3MzMyfQ.6JDhcqcVQyBP28OZEXOID5uyrIIdFbOjsfawFPFYoV8';

//     try {
//       const response = await axios.post(
//         'https://api.pinata.cloud/pinning/pinFileToIPFS',
//         formData,
//         {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//             Authorization: `Bearer ${JWT}`,
//           },
//         }
//       );

//       console.log('Image CID:', response.data.IpfsHash);
//       setImageCID(response.data.IpfsHash);
//     } catch (error) {
//       console.error('Error uploading image:', error.response.data);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = {
//       name: name,
//       fileCID: fileCID,
//       imageCID: imageCID,
//     };

//     const JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJjMzJkMGViNy05MmEwLTQ3OTctODgxNi0wMTMzZTI3M2I3MjYiLCJlbWFpbCI6InZpc2hhbGR1YmV5ODEzMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiZmEzNjM1YWI3MWNmNTVhODUyMTciLCJzY29wZWRLZXlTZWNyZXQiOiJhNDFiOGMzOTZiYzhiOWExZjg2YTQ0MWQyOWM2NjY5Y2E0OTcyYmJjMzZjZjdkNGVkOWFlZTRmM2FjODlhZGI4IiwiaWF0IjoxNzE0MDM3NDEzfQ.nO_XBffqzGrIALYTIIpMcSzOuHpcManBrLtDnaxVdnE';

//     try {
//       const response = await axios.post(
//         'https://api.pinata.cloud/pinning/pinJSONToIPFS',
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${JWT}`,
//           },
//         }
//       );

//       console.log('Final CID:', response.data.IpfsHash);
//       setFinalCID(response.data.IpfsHash);
//     } catch (error) {
//       console.error('Error submitting form data:', error.response.data);
//     }
//   };

//   return (
//     <div>
//       <h1>Upload Files</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="file" onChange={handleFileChange} />
//         <button onClick={handleFileUpload}>Upload File</button>
//         <br />
//         <input type="file" onChange={handleImageChange} />
//         <button onClick={handleImageUpload}>Upload Image</button>
//         <br />
//         <input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//       <div>
//         <h2>File CID: {fileCID}</h2>
//         <h2>Image CID: {imageCID}</h2>
//         <h2>Final CID: {finalCID}</h2>
//       </div>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [fileCID, setFileCID] = useState('');
  const [imageCID, setImageCID] = useState('');
  const [finalCID, setFinalCID] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append('file', file, file.name);

    const JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJjMzJkMGViNy05MmEwLTQ3OTctODgxNi0wMTMzZTI3M2I3MjYiLCJlbWFpbCI6InZpc2hhbGR1YmV5ODEzMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiMmViMzY5ZjE2YmIwY2RhN2UyZjQiLCJzY29wZWRLZXlTZWNyZXQiOiJmNGUzNTYzODllNmM4NGRjYjY1OGNkZGJkNmNiOTAwNzRiMGVmNDE1NGU1YThjNTEwMzQ2NTM4ZTJkODU4YTcyIiwiaWF0IjoxNzE0MDM3MDQ4fQ.zhaM6JNFaVIWN2smCdRzPHviMEO8IFMklO9Vl2S8G5s';

    try {
      const response = await axios.post(
        'https://api.pinata.cloud/pinning/pinFileToIPFS',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${JWT}`,
          },
        }
      );

      console.log('File CID:', response.data.IpfsHash);
      setFileCID(response.data.IpfsHash);
    } catch (error) {
      console.error('Error uploading file:', error.response.data);
    }
  };

  const handleImageUpload = async () => {
    const formData = new FormData();
    formData.append('file', image, image.name);

    const JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJjMzJkMGViNy05MmEwLTQ3OTctODgxNi0wMTMzZTI3M2I3MjYiLCJlbWFpbCI6InZpc2hhbGR1YmV5ODEzMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiNWFkOTYxYTc4NzA0MWU3ODZmM2IiLCJzY29wZWRLZXlTZWNyZXQiOiIxNTE4MjY3ZDc2YmVmYmVmOTUzNmRlZmNiMTllMGQxN2E3ZTQwM2JhZjFhNWI2MjNhNDFjZDllYzk3MzRmNWY5IiwiaWF0IjoxNzE0MDM3MzMyfQ.6JDhcqcVQyBP28OZEXOID5uyrIIdFbOjsfawFPFYoV8';

    try {
      const response = await axios.post(
        'https://api.pinata.cloud/pinning/pinFileToIPFS',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${JWT}`,
          },
        }
      );

      console.log('Image CID:', response.data.IpfsHash);
      setImageCID(response.data.IpfsHash);
    } catch (error) {
      console.error('Error uploading image:', error.response.data);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: name,
      fileCID: fileCID,
      imageCID: imageCID,
    };

    const JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJjMzJkMGViNy05MmEwLTQ3OTctODgxNi0wMTMzZTI3M2I3MjYiLCJlbWFpbCI6InZpc2hhbGR1YmV5ODEzMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiZmEzNjM1YWI3MWNmNTVhODUyMTciLCJzY29wZWRLZXlTZWNyZXQiOiJhNDFiOGMzOTZiYzhiOWExZjg2YTQ0MWQyOWM2NjY5Y2E0OTcyYmJjMzZjZjdkNGVkOWFlZTRmM2FjODlhZGI4IiwiaWF0IjoxNzE0MDM3NDEzfQ.nO_XBffqzGrIALYTIIpMcSzOuHpcManBrLtDnaxVdnE';

    try {
      const response = await axios.post(
        'https://api.pinata.cloud/pinning/pinJSONToIPFS',
        formData,
        {
          headers: {
            Authorization: `Bearer ${JWT}`,
          },
        }
      );

      console.log('Final CID:', response.data.IpfsHash);
      setFinalCID(response.data.IpfsHash);
    } catch (error) {
      console.error('Error submitting form data:', error.response.data);
    }
  };

  return (
    <div>
      <h1>Upload Files</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleFileUpload}>Upload File</button>
        <br />
        <input type="file" onChange={handleImageChange} />
        <button onClick={handleImageUpload}>Upload Image</button>
        <br />
        <input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
        <br />
        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>File CID: {fileCID}</h2>
        <h2>Image CID: {imageCID}</h2>
        <h2>Final CID: {finalCID}</h2>
      </div>
    </div>
  );
}

export default App;







