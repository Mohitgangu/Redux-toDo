import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../Utils/store";

const Form = () => {
  const dispatch = useDispatch();
  const ipRef = useRef();
  const taRef = useRef();

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Add New Item</h2>
      
      <div style={styles.inputGroup}>
        <label style={styles.label}>Title</label>
        <input 
          ref={ipRef} 
          type="text" 
          placeholder="Enter title..." 
          style={styles.input} 
        />
      </div>

      <div style={styles.inputGroup}>
        <label style={styles.label}>Description</label>
        <textarea 
          ref={taRef} 
          placeholder="Enter description..." 
          rows={4} 
          style={styles.textarea}
        ></textarea>
      </div>

      <button
        style={styles.button}
        onClick={() => {
          if (!ipRef.current.value || !taRef.current.value) {
            return alert("Required both fields");
          }

          dispatch(
            addItem({
              title: ipRef.current.value,
              desc: taRef.current.value,
            })
          );
          ipRef.current.value = "";
          taRef.current.value = "";
        }}
      >
        Add Item
      </button>
    </div>
  );
};

// Styling Object
const styles = {
  container: {
    maxWidth: "400px",
    margin: "20px auto",
    padding: "24px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  heading: {
    margin: "0 0 8px 0",
    color: "#333",
    fontSize: "20px",
    textAlign: "center",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  label: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#555",
  },
  input: {
    padding: "10px 12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
    outline: "none",
  },
  textarea: {
    padding: "10px 12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
    outline: "none",
    resize: "vertical",
  },
  button: {
    padding: "12px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#ff4d4f",
    color: "#fff",
    fontSize: "15px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
  },
};

export default Form;