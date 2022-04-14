import  { useEffect, useState } from 'react';
import useDrivePicker from 'react-google-drive-picker'

const BrowseFile = () => {

  const [openPicker, data, authResponse] = useDrivePicker();
  
  const [paths, setpaths] = useState([])

  const handleOpenPicker = () => {
    openPicker({
      clientId: "222911307633-sj7fribhvd3lbpdkhp791jrtqce6gqhu.apps.googleusercontent.com",
      developerKey: "AIzaSyCArtGktZ6VrNt0ut3zfERgDnY0MePjw3Q",
      viewId: "DOCS, FOLDERS, DOCS_IMAGES_AND_VIDEOS",
      // token: token, // pass oauth token in case you already have one
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      setIncludeFolders:true,
      setSelectFolderEnabled:true,
      URL:true,

  
      // customViews: customViewsArray, // custom view
    })
  }


  useEffect(() => {

    let url= "https://drive.google.com/drive/folders/";
    let arr=[];
    
    if(data){
      console.log(data)
      //data.docs.map(i => console.log(i.name))

      data.docs.map(i => arr.push(url+=i.name))
      
    }
   data && setpaths(arr)
   data && console.log(paths)

  }, [data])

  return (
    <div>
 
 <button onClick={() => handleOpenPicker()}>Select GoogleDrive File...</button>

{paths && paths.map((el)=>(
<div>Selected file : {el}</div>
)
)}
    </div>
  )
}

export default BrowseFile