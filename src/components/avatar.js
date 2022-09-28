export default function UserAvatar(props) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <div style={{ borderRadius: "20px" }}>
        <img src={props.image} style={{ borderRadius: "20px" }} height="30" width="30" alt="avatar_image" />
      </div>
      <div>
        <p style={{fontWeight:"600"}}> Super Admin </p>
        <p> June 21, 2020 </p>
      </div>
    </div>
  )
}