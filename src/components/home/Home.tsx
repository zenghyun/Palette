const Home = ({ content }: { content: JSX.Element | undefined }) => {
  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {content}
    </section>
  );
};

export default Home;
