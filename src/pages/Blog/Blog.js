import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase/config";
import { BlogCard } from './BlogCard';

export const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const blogsRef = collection(db, "blog");

  useEffect(() => {
    async function fetchBlogs() {
      const data = await getDocs(blogsRef);
      setBlogs(data.docs.map((document) => (
        { ...document.data(), id: document.id }
      )));
    }
    console.log('-----');
    fetchBlogs();
  }, [])

  return (
    <main className="flex flex-wrap">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} date={blog.date} author={blog.author} title={blog.title} desc={blog.description} poster={blog.poster} />
      ))}
    </main>
  )
}
