/* eslint-disable eqeqeq */
import { useParams } from "react-router-dom"
import UserAvatar from "../components/avatar"
import BigPostCard from "../components/bigPost"
import PostCard from "../components/post"
import { usePostContext } from "../context/postContext"

import postImage from '../images/bg.jpg'

const smallGapString = "calc(20px + 1vw)"
export default function SinglePage() {

  const { id } = useParams()
  const { posts } = usePostContext()

  const post = posts.find(item => item.id == id) || posts[0]

  const relatedPost = posts.filter(item => item.category === post.category && item.id != post.id)


  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: smallGapString }}>
      <div>
        <div style={{ backgroundColor: "#00153f", display: "flex", padding: "50px 100px 120px", flexWrap: "wrap", gap: "20px", borderRadius: "20px", color: "white" }}>
          <div style={{ flexGrow: 1 }}>
            <p className="text-primary"> {post.category} </p>
            <h1 style={{ marginTop: "20px", fontSize: '2.5em' }} > {post.title} </h1>
          </div>
          <UserAvatar image={post.image} />
        </div>

        <div style={{ borderRadius: "7.5px", marginRight: "auto", marginLeft: "auto", marginTop: '-120px', padding: "50px 100px 100px", }}>
          <img style={{ width: "100%", borderRadius: "50px" }} src={postImage} alt="post_mage" />
          <p style={{ marginTop: "20px" }}> {post.text} </p>
        </div>

      </div>

      <h2 style={{ textAlign: "center", fontSize: "2em" }}> Related Articles </h2>

      <div style={{ display: "flex", gap: smallGapString, flexWrap: "wrap" }}>
        {
          relatedPost.slice(0, 3).map((post, index) => (
            <div style={{ width: "100%", maxWidth: "400px" }}>
              <PostCard key={index} {...post} />
            </div>
          ))
        }

      </div>

      <div>
        {relatedPost[3]?.id && <BigPostCard  {...posts[3]} />}
      </div>

    </div>

  )
}