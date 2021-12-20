import BlogCard from "../components/BlogCard";
import React, { useState, useEffect } from "react";
import api from "../api";

const Home = () => {
  const [state, setState] = useState({
    data: [],
    isLoading: true,
  });

  useEffect(() => {
    loaddata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loaddata = async () => {
    setState({ data: [], isLoading: true });

    await api.getAllBlogentries().then((blogentries) => {
      //console.log(blogentries)
      setState({
        data: blogentries.data.data,
        isLoading: false,
      });

      console.log(blogentries.data.data);
      console.log(state);
    });
  };

  return (
   <main className="flex flex-row flex-wrap content-start">
     {state.isLoading === false && state.data.map((entry) => {
       return <div className="px-2 w-50x"><BlogCard key={entry._id} entrydata={entry}></BlogCard></div>
     })}
   </main>
  )
};

export default Home;
