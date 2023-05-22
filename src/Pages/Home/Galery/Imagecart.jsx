const Imagecart = ({ image }) => {
    const { img, title } = image;
  
    return (
      <div className="relative " data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500">
        <img className="w-full" src={img} alt={title} />
        <div className="absolute inset-0 flex items-center justify-center opacity-10 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
          <h2 className="text-white text-xl font-bold">{title}</h2>
        </div>
      </div>
    );
  };
  
  export default Imagecart;

