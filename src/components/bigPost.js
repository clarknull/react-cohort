import { useNavigate } from "react-router-dom";
import UserAvatar from "./avatar";

export default function BigPostCard(props) {
  const navigate = useNavigate()

  const goToSingle = ()=>{
    navigate(`/single/${props.id ||0}`)
  }

  return (
    <div onClick={goToSingle} style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <div>
        <img style={{ width: "100%", maxWidth: "900px", borderRadius: "40px" }} src={props.image} alt="post_image" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <p className="text-primary"> {props.category} </p>
        <h4> {props.title} </h4>
        <p> {props.text} </p>
        <UserAvatar image={props.image} />
      </div>
    </div>
  )
}