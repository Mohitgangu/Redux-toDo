import { useSelector } from "react-redux";
import { Store } from "../Utils/store";


const Display = () => {
    const data= useSelector((state)=>state.data)
  return (
    <div>
  {data.map((item, index) => {
    return (
      <article key={index}>
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
      </article>
    );
  })}
</div>
  );
};

export default Display;