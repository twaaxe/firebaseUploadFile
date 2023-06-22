import { useState } from 'react';
import { ref, uploadBytes } from 'firebase/storage'; //utilisé pour specifier ou et comment stocker les images
import { storage } from './firebase';
import { v4 } from 'uuid';


function App() {

  const [imageUpload, setImageUlpoad] = useState(null)
  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);//access the storage(firebase) and add a save it in the path as 2e parameter
    uploadBytes(imageRef, imageUpload).then(() => {
      alert("ez")
    })

  }

  return (
    <>
      <div className='App'>
        <input type="file" onChange={(even) => { setImageUlpoad(even.target.files[0]) }} />
        <button onClick={uploadImage}>Upload Image</button>



      </div>
    </>
  )
}

export default App
