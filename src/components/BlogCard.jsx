import { useEffect } from "react";

const BlogCard = (props) => {

  useEffect((props) => {
    console.log(props);
  }, [])
  return (
    <div className="bg-tertiary rounded-lg flex flex-col justify-between h-120 w-full overflow-hidden mb-4">
        <img
          className="w-full object-cover object-center rounded-tl-lg rounded-tr-lg max-h-100"
          src={props.entrydata.file_ID ? "https://source.unsplash.com/" + props.entrydata.file_ID : "https://source.unsplash.com/random" }
          alt="random"
        ></img>
        <div className="flex-grow p-4">
          <p className="text-lg font-bold">{props.entrydata.title}</p>
          <div className="flex flex-row justify-between pb-4">
            <span className="text-primary text-sm">{props.entrydata.createdAt}</span>
          </div>
          <p className="text-md truncate">
            {props.entrydata.text}
          </p>
        </div>
        <div className="flex flex-row justify-start items-center px-4 pb-4">
          <img className="w-10 h-10 object-cover object-center rounded-full mr-2" src="https://source.unsplash.com/random" alt="profile"></img>
          <span className="text-primary text-sm">{props.entrydata.author}</span>
        </div>
    </div>
  );
}

export default BlogCard
