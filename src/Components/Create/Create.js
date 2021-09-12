import React, { Fragment,useState,useContext } from 'react';
import { useHistory } from 'react-router-dom';
import './Create.css';
import Header from '../Header/Header';
import {FirebaseContext,AuthContext} from '../../store/Context'

const Create = () => {
  const {firebase} =useContext(FirebaseContext);
  const  {user} =useContext(AuthContext);
  const history =useHistory();
  const [item, setItem]= useState('');
  const [category, setCategory]= useState('');
  const [price,setPrice]= useState('');
  const [image,setImage]=useState(null);
  const date = new Date();
  const handleSubmit = ()=>{
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
        
        firebase.firestore().collection('products').add({
          item,
          category,
          price,
          url,
          userId:user.uid,
          createdAt:date.toDateString()
        })
        history.push('/')
      })
    });

  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
      
            <label htmlFor="fname">Item</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              defaultValue="John"
              value={item}
              onChange={(e)=>{setItem(e.target.value)}}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              defaultValue="John"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price"
            value={price}
            onChange={(e)=>setPrice(e.target.value)} />

            <br />
         
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>
          
            <br />
            <input type="file" 
            onChange={(e)=>{setImage(e.target.files[0])}} />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
