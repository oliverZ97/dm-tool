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
   <main>
     
     {state.isLoading === false && state.data.map((entry) => {
       return <BlogCard key={entry._id} entrydata={entry}></BlogCard>
     })}
   </main>
  )
};

export default Home;
