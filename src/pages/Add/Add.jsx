import React, {useEffect, useState} from 'react';
import './Add.scss';
import { Navbar, Sidebar } from '../../components';
import { MdDriveFolderUpload } from "react-icons/md";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db, storage } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";

const Add = ({inputs, title}) => {

  const [file, setFile] = useState("")
  const [data, setData] = useState({})
  const [percentage, setPercentage] = useState(null);
  const navigate = useNavigate()

  // If you need to store large files, such as images or videos, or if you have a simple data storage requirement, 
  //Cloud Storage may be the better option. On the other hand, if you need to store structured data, 
  //sync it across multiple devices in real-time, or perform complex queries, Firestore may be a better fit.

  useEffect(() => {                   // immediately store the image as soon as the imgae is uploaded in the UI
    const uploadFile = () => {
      const storageRef = ref(storage, file.name) 
      const uploadTask = uploadBytesResumable(storageRef, file);

      //listening the uploading process
      uploadTask.on('state_changed', 
        (snapshot) => {

          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          //console.log('Upload is ' + progress + '% done');
          setPercentage(progress)

          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
            default:
              break;  
          }
        }, 
        (error) => {
          console.log(error)  // Handle unsuccessful uploads

        }, () => {
          // Handle successful uploads on complete
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({...prev, img: downloadURL})) // cannot use(...data), cuz it is dependency, instead use function it is the same thing.
          });
        }
      );
    }
    file && uploadFile()
  }, [file])
  

  const handleSubmit = async(e) => { // on clicking the submit button on the form.
    e.preventDefault()
    try{

      const res = await createUserWithEmailAndPassword( // creating the new field in database with new email and password
        auth, 
        data.email,
        data.password
      )
      await setDoc(doc(db, "users", res.user.uid),   // can use setDoc (used with document reference) but need to specify id, 
      {                                             // used to store data to firebase database, however we ca use addDoc( used with collection reference) without id .
        ...data,
        timeStamp: serverTimestamp(),
      })
      navigate(-1) // just go back to previous page
    } catch(err) {
      console.log(err)
    }

  }

  const handleInput = (e) => { // populating data state with changed value in input field. 
    const id = e.target.id    // from dummy data , userInput's id
    const value = e.target.value

    setData({ ...data, [id]: value })
  }

  return (
    <div className='add'>
      <Sidebar/>
      <div className='new-container'>

        <Navbar/>
        <div className="top">
          <h1>{title}</h1>
        </div>

        <div className="bottom">

          <div className="left">
            <img               
              alt="no-image" 
              src= {file
                      ? URL.createObjectURL(file)
                      :"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" 
                    }
            />
          </div>

          <div className="right">
            <form onSubmit = {handleSubmit}> 

              <div className="forminput">
                <label 
                    htmlFor="file" 
                    style={{
                         display: 'flex',
                        alignItems: "center",
                        gap: '10px'
                    }}
                > 
                  Upload Image: <MdDriveFolderUpload />
                </label>
                <input 
                  type="file" 
                  id="file" 
                  onChange={(e) => setFile(e.target.files[0])} 
                  style = {{display: 'none'}} 
                />
              </div>

              { inputs.map((input) => (         // Use the dummy data userInputs for mapping and duplicating the input field
                <div className="forminput" key = {input.id}>
                  <label> {input.label}</label>
                  <input    
                    id = {input.id}           // userInputs data ids from dummydata.
                    type={`${input.type}`} 
                    placeholder={`${input.placeholder}`}
                    onChange = { handleInput }
                  />
                </div>
              ))}

              <button disabled={percentage !== null && percentage < 100} type='submit'> Submit </button>

            </form>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Add