import bannerImg from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bannerImg}
    />
    <div>
      <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
      <button className="btn btn-primary my-10 ml-16  w-fit bg-cyan-500">View The List</button>
    </div>
  </div>
</div>
    );
};

export default Banner;