



const Banner = () => {
  return (
   <div >
   
   <div className="mt-5 mx-auto container  ">
   <ul className="flex lg:justify-evenly gap-2">
  <button className="btn btn-accent btn-sm">
    Web Development
  </button>
  <button className="btn btn-accent btn-sm">
    Digital Marketing
  </button>
  <button className="btn btn-accent btn-sm">
    Graphics Design
  </button>
</ul>
   </div>
<div className="hero min-h-screen mt-5" style={{backgroundImage: 'url(https://i.ibb.co/3Y93ybT/b1.webp)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      
    </div>
  </div>
</div>
   </div>
  );
};

export default Banner;