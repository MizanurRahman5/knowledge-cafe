
const Bookmarks = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div>
            <h1 className="p-3 bg-slate-500 my-2"> {title}</h1>
        </div>
    );
};

export default Bookmarks;