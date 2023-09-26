import { useEffect, useState } from 'react';
import './App.css';
import BlogCard from './components/BlogCard';
import AddBlog from './components/AddBlog';

function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch('http://localhost:8000/blog/getAll')
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <AddBlog />
      <div className="container">
        {data.map((blog) => (
          <BlogCard
            key={blog._id}
            title={blog.title}
            publisher={blog.publisher}
            date={blog.date}
            body={blog.body}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
