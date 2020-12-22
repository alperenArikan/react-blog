import React,{useState,useEffect} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import firebase from "../firebase"
const Compose = () => {

    var dateObj = new Date();
    var month = dateObj.getMonth() + 1;
    var day = dateObj.getDate();
    var year = dateObj.getFullYear();
    let newdate = day + "/" + month + "/" + year;
    const [prePost, setPrePost] = useState({
            title: "",
            body: "",
            author: "",
            date: newdate,
            file: "",
    })
    const [post, setPost] = useState()
    const [file,setFile] = useState();
    const [ready,setReady] =useState(false);

    // we use this in order to handle async action in submithandle function // wait for response from storage then when ready state is ready post it 
    useEffect(() => {
        if(ready === false){
            return
        }
        firebase.firestore().collection("posts").add(post)
        setReady(false)

    }, [ready]);

    //Selecting File from local
    const fileChange = (e)=>{
        setFile(e.target.files[0])
    }
    // Sending Post To database
    const submitHandle = async (e)=>{
        let imageID = new Date().getTime()
        let storageRef = await firebase.storage().ref(`images/${imageID}`)
        let uploadTask = storageRef.put(file)
        
        uploadTask.on("state_changed",
        function(snapshot) {
        }, function(error) {
            console.log(error)
        }, function() {
            // Upload completed successfully, now we can get the download URL
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                    setPost({
                        ...prePost,
                        file:downloadURL
                    })
                    setReady(true);
            });
        });
        e.preventDefault();
    }

    // 2-way binding
    const handleChange =  (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        setPrePost({
            ...prePost,
            [name] : value,
        })
    }
    const editorHandler =(e)=>{

        let value = e.target.getContent()
            setPrePost({
            ...prePost,
            body:value,
        })

    }

    
    return (
        <React.Fragment>

            <div className="compose-background text-white fw-bolder">
                <div className="container-md d-flex flex-column align-items-center">
                    <div className="col-12 col-md-6">
                            <form  onSubmit={submitHandle}>
                                <div className="mb-3">
                                <label htmlFor="title"  className="form-label">Title</label>
                                <input value={prePost.title} type="text" onChange={handleChange}  onBlur={handleChange} name="title" className="form-control" id="title" placeholder="Title" />
                                {prePost.title ? "": <span style={{fontSize: "13px", fontWeight:"bold", color:"red",}}>*Required</span>}
                                </div>
                                {/* <div className="mb-5">
                                <label htmlFor="body" className="form-label">Post Body</label>
                                <textarea value={prePost.body} onChange={handleChange} onBlur={handleChange} className="form-control" name="body" id="body" rows="15"></textarea>
                                
                                </div> */}
                                <Editor
                                init={{
                                height: 300,
                                menubar: true,
                                plugins: [
                                    'advlist autolink lists link image', 
                                    'charmap print preview anchor help',
                                    'searchreplace visualblocks code',
                                    'insertdatetime media table paste wordcount'
                                ],
                                toolbar:
                                    'undo redo | formatselect | bold italic | \
                                    alignleft aligncenter alignright | \
                                    bullist numlist outdent indent | help'
                                }}
                                onChange={editorHandler}
                                apiKey={process.env.REACT_APP_EDITOR_API}
                            />
                                <div className="my-5">
                                <label htmlFor="formFile" className="form-label">Head Image </label>
                                <input accept="image/x-png,image/gif,image/jpeg" className="form-control" name="file" type="file" id="formFile" onChange={fileChange}/>
                                {file ? "": <span style={{fontSize: "13px", fontWeight:"bold", color:"red",}}>*Required</span>}
                                </div>
                                <div className="mb-3">
                                <label htmlFor="author" className="form-label">Title</label>
                                <input value={prePost.author} onChange={handleChange} onBlur={handleChange} type="text" name="author" className="form-control" id="author" placeholder="Author" />
                                {prePost.author ? "": <span style={{fontSize: "13px", fontWeight:"bold", color:"red",}}>*Required</span>}
                                </div> 
                                <button className="btn btn-outline-primary btn-lg rounded-0" disabled={prePost.title  && prePost.author && file ? false : true} >Send</button>

                                
                            </form>   
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Compose;
