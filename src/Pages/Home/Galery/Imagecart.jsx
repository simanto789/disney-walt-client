

const Imagecart = ({image}) => {
    const {img , tittle} = image;
    return (
        <div className="card w-96 bg-base-100">
            <img className="p-4" src={img} alt="Shoes" />
            <div className="card-body">
                <h2 className="card-title p-2 ">
                    {tittle}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
            </div>
        </div>
    );
};

export default Imagecart;