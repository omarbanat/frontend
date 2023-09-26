const BlogCard = ({ title, publisher, date, body }) => {
  return (
    <div className="blog-card">
      <h1>{title}</h1>
      <h3>{publisher}</h3>
      <h5>{date}</h5>
      <p>{body}</p>
    </div>
  );
};

export default BlogCard;
