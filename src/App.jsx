import { useState } from 'react'
import './App.css'
import Blogs from './components/Bolgs/Blogs'
import Bookmark from './components/Bookmark/Bookmark'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])

  const handleBookmarks = () =>{
    console.log('added bookmarks coming soon')
  }
  

  return (
    <>
      <Header></Header>
      <div className='md:flex container mx-auto max-w-7xl mx-auto'>
      <Blogs handleBookmarks={handleBookmarks}></Blogs>
      <Bookmark></Bookmark>
      </div>
    </>
  )
}

export default App
