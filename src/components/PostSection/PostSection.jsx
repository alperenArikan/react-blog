import React,{useEffect,useState} from 'react';
import firebase from "../../firebase"
import Posts from "./Posts/Posts"
const PostSection = () => {
  const [posts, setPosts] = useState([]);
  useEffect( () => {
var unsubscribe = firebase.firestore().collection("posts")
    .onSnapshot((doc) =>{
      setPosts(doc.docs)
    })
return unsubscribe

  }, []);
    
    return (
        <React.Fragment>
          <div className="col-md-8">
            {posts ? posts.map(x=>{
            return(
              <Posts key={x.id} x={x}/>
            )
          }): ""}
          </div>

        </React.Fragment>
    );
}

export default PostSection;
