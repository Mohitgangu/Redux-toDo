import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../Utils/store";

const Form = () => {

    const dispatch=useDispatch()
    const ipRef=useRef()
    const taRef=useRef()
  return (
    <div style={{display:"flex",gap:"10px"}}>
      <input ref={ipRef} type="text" />
      <textarea ref={taRef}></textarea>

      <button
      style={{backgroundColor:"red",color:"white"}}
        onClick={() => {
          if (!ipRef.current.value || !taRef.current.value) {
            return alert("Required both fields");
          }
         
          dispatch(
            addItem({
              title: ipRef.current.value,
              desc: taRef.current.value,
            })
          )
          ipRef.current.value=""
          taRef.current.value=""
        }}
      >
        Add Item
      </button>
    </div>
  );
};

export default Form;