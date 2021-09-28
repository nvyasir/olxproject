import React,{useState, useEffect,useContext} from 'react'
import { FirebaseContext } from '../../store/Context';
import { PostContext } from '../../store/PostContext';


import './View.css';
function View() {
  const [userDetails,setUserDetails] = useState()
    const {postDetails} = useContext(PostContext)
    const {firebase} = useContext(FirebaseContext)
    useEffect(()=>{
            const {userId} = postDetails
            firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
                res.forEach(doc=>{
                        setUserDetails(doc.data())
                        
                        
                    });
            })
        },[])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.item}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
         
        
        { userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>Name: {userDetails.username} </p>
          <p>Phone: {userDetails.phone}</p>
        </div>}
         
      </div>
    </div>
  );
}
export default View;
