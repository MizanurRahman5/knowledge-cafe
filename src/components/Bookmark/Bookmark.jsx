import Bookmarks from "../Bookmarks/Bookmarks";

const Bookmark = ({bookmarks, readTime}) => {
    return (
        <div className='md:w-1/3'>
          <div>
            <h1>total read time {readTime}</h1>
          </div>
          <h1 className="text-2xl">book mark : {bookmarks.length}</h1>
          <div>
          {
            bookmarks.map(bookmark => <Bookmarks 
              key={bookmark.id} 
              bookmark={bookmark}
              >
              </Bookmarks>)
          }
          </div>
        </div>
       
    );
};

export default Bookmark;