import { useEffect } from "react";

const BlogCard = (props) => {

  useEffect((props) => {
    console.log(props);
  }, [])
  return (
    <div className="bg-tertiary rounded-lg flex flex-row justify-between h-60 overflow-hidden mb-4">
        <img
          className="h-full w-40p object-cover object-center rounded-tl-lg rounded-bl-lg"
          src="https://source.unsplash.com/random"
          alt="random"
        ></img>
        <div className="flex-grow p-4 max-w-60p">
          <p className="text-lg font-bold">{props.entrydata.title}</p>
          <div className="flex flex-row justify-between">
            <span className="text-primary text-xs">{props.entrydata.createdAt}</span>
            <span className="text-primary text-xs">{props.entrydata.author}</span>
          </div>
          <p className="text-md">
            {props.entrydata.text}
          </p>
        </div>
    </div>
  );
}

export default BlogCard
