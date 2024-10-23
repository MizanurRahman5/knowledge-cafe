import { useState } from 'react'
import './App.css'
import Blogs from './components/Bolgs/Blogs'
import Bookmark from './components/Bookmark/Bookmark'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readTime, setReadTime] = useState(0)

  const handleBookmarks = blog =>{
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }
  const handleReadTime = time => {
    const newTime = readTime + time;
    setReadTime(newTime)
  }
  

  return (
    <>
      <Header></Header>
      <div className='md:flex container gap-3 max-w-7xl mx-auto'>
      <Blogs 
      handleBookmarks={handleBookmarks} 
      handleReadTime={handleReadTime}></Blogs>
      <Bookmark bookmarks={bookmarks} readTime={readTime}></Bookmark>
      </div>
    </>
  )
}

export default App
