import { useNavigate } from "react-router-dom";
import UserAvatar from "./avatar";

export default function PostCard(props) {

  const navigate = useNavigate()

  const goToSingle = ()=>{
    navigate(`/single/${props.id ||0}`)
  }

  return (
    <div onClick={goToSingle} style={{ display: "flex", cursor:"pointer", flexDirection: "column", gap: "10px" }}>
      <img style={{ borderRadius: "10px", width: "100%" }} src={props.image} width="100" alt="post_image" />
      <p className="text-primary"> {props.category} </p>
      <h4> {props.title} </h4>
      <p> {props.text} </p>
      <UserAvatar image={props.image} />
    </div>
  )
}