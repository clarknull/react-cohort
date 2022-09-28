import BigPostCard from "../components/bigPost"
import PostCard from "../components/post"
import { usePostContext } from "../context/postContext"


const categories = [
  'Fantacy', 'NFT', 'Abstract', "Anime", "Games", 'Technology'
]

const gapString = "calc(20px + 3vw)"
const smallGapString = "calc(20px + 1vw)"


export default function HomePage() {

  const {posts} = usePostContext()


  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: smallGapString }}>
      <div>
        <div style={{ backgroundColor: "#00153f", padding: "50px", textAlign: "center", borderRadius: "20px", color: "white" }}>
          <h1> Blog </h1>
        </div>

        <div style={{ display: "flex", gap: "10px", borderRadius: "7.5px", backgroundColor: "white", boxShadow: '0px 0px 5px black', maxWidth: "200px", marginRight: "auto", marginLeft: "auto", marginTop: '-20px', padding: "15px" }}>
          <p> Fantacy </p>
        </div>

      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: "center", justifyContent: "center", gap: gapString, padding: "20px" }} >
        <button className="primary-btn"> All </button>
        {
          categories.map(category => (
            <button className="flat-btn" key={category}> {category} </button>
          ))
        }
      </div>

      <div>
        <BigPostCard  {...posts[0]} />
      </div>

      <div style={{ display: "flex", gap: smallGapString, flexWrap: "wrap" }}>
        {
          posts.slice(1).map((post, index) => (
              <div style={{ width: "100%", maxWidth: "400px" }}>
                <PostCard {...post} />
              </div>
          ))
        }

      </div>

    </div>

  )
}