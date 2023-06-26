//17:30
//list all item with listAll()

import { useState, useEffect } from 'react';
import { ref, uploadBytes, listAll } from 'firebase/storage'; //utilisé pour specifier ou et comment stocker les images    -   storage seem to be a service (can't change it as a variable)
import { storage } from './firebase';
import { v4 } from 'uuid';


function App() {

  const folderUrl = ref(storage, '/images')

  const [imageList, setimageList] = useState([]);
  const [imageUpload, setImageUlpoad] = useState(null)

  const uploadImage = (e) => {         //upload the image to the database
    if (imageUpload == null) return;

    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);//access the storage(firebase) and add a save it in the path as 2e parameter (create folder images)

    try {

      uploadBytes(imageRef, imageUpload).then(() => {     //actually upload the image in the database
        alert("Image Sent")
      })

      document.getElementById("submitButton").value = null
    } catch (error) {
      console.log("error = " + error)
    }



    useEffect(() => {
      //   listAll(folderUrl).then((response => {
      //     console.log("response = " + response)
      //   }))
    })

  }

  return (
    <>
      <div className='App'>
        <input type="file" id="submitButton" onChange={(even) => { setImageUlpoad(even.target.files[0]) }} />   {/*selection  */}

        <button onClick={uploadImage}>Upload Image</button>     {/* envoi */}



      </div>
    </>
  )
}

export default App
