import { createContext, useContext } from "react";
import postImage from '../images/bg.jpg'



const PostContext = createContext()

export function PostContextProvider({ children }) {

  const posts = [
    { id: 1, title: "6 Books About Technology Asset You Should Read ", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", category: 'Technolgy', image: postImage },
    { id: 2, title: "LG is adding an NFT platform to its smart TVs", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", category: 'NFT', image: postImage },
    { id: 6, title: "China Approves New Games From Tencent and NetEase", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", category: 'Games', image: postImage },
    { id: 4, title: "15 Lessons About NFT You Need To Learn To Succeed", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", category: 'NFT', image: postImage },
    { id: 5, title: "Nvidia GeForce RTX 3050 Review", text: "lorem", category: 'Games', image: postImage },
    { id: 3, title: "The 3 Greatest Moments in Technology", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", category: 'Technology', image: postImage },
    { id: 6, title: "GPU Mining Is Dead, Where Are My Cheap GPUs?", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", category: 'Games', image: postImage },
  ]

  return (
    <PostContext.Provider value={{ posts }}>
      {children}
    </PostContext.Provider>
  )
}

export function usePostContext() {
  return useContext(PostContext)
}