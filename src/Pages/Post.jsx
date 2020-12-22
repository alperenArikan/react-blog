import React,{useEffect,useState} from 'react';
import firebase from "../firebase"

const Post = ({id}) => {
    const [post, setPost] = useState()
    useEffect(() => {
        var docRef = firebase.firestore().collection("posts").doc(`${id}`);

        docRef.get().then(doc => {
            setPost(doc.data())
        }).catch(error=> {
            console.log(error)
        });

    }, []);
    
    function createMarkup(post) {
     return {__html: post.body}
    }

    return (
        <React.Fragment>
            {
        post ? <div className="col-md-6 mx-auto">
        <div className="card mb-4">
            <img src={post.file} className="card-img-top" alt="placeholder" /> 
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text" dangerouslySetInnerHTML={createMarkup(post)}></p>
            </div>
            <div className="card-footer d-flex justify-content-between">
                <small className="text-muted">{post.date}</small>
                <small className="text-muted">{post.author}</small>
            </div>
            </div>
        </div>
        : ""
            }
          

        </React.Fragment>
    );
}

export default Post;
