import {CREATE_EVENT, GET_EVENTS, DELETE_EVENT } from "./types";
import api from '../utils/api';
export const getEvents = () => async dispatch => {
    try {
      const res = await api.get('/posts');
  
      dispatch({
        type: GET_EVENTS,
        payload: res.data
      });
    } catch (err) {
      console.log(err)
    }
  };

  export const deleteEvent =(id)=>async dispatch=>{
      try{
          await api.delete(`/posts/${id}`)
          dispatch({
              type: DELETE_EVENT,
              payload: id
          })
      }catch(err){
          console.log(err)
      }
  }


  // Add post
export const createEvent = formData => async dispatch => {
    try {
      const res = await api.post('/posts', formData);
  
      dispatch({
        type: CREATE_EVENT,
        payload: res.data
      });
  
      
    } catch (err) {
      console.log(err)
    }
  };
