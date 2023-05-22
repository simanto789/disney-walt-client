import img from '../../../../assets/fif1.avif'
import img2 from '../../../../assets/fif2.avif'
import img3 from '../../../../assets/fif3.avif'
import img4 from '../../../../assets/fif4.avif'
import img5 from '../../../../assets/fif5.webp'
import img6 from '../../../../assets/gif6.webp'

const OurBrands = () => {
    return (
        <div className='mb-10'>
            <h5 className="text-center text-3xl mt-5">Featured Brands</h5>
            <div className='grid grid-cols-3 lg:grid-cols-6'>
                <div>
                    <img src={img} alt="" />
                    <h5 className='text-center font-bold text-xl'>Barbie</h5>
                </div>
                <div>
                    <img src={img2} alt="" />
                    <h5 className='text-center font-medium text-xl'>Barbie Alive</h5>
                </div>
                <div>
                    <img src={img3} alt="" />
                    <h5 className='text-center font-medium text-xl'>Dragon-I</h5>
                </div>
                <div>
                    <img src={img4} alt="" />
                    <h5 className='text-center font-medium text-xl'>Fisher-Price</h5>
                </div>
                <div>
                    <img src={img5} alt="" />
                    <h5 className='text-center font-medium text-xl'>Animals Planet</h5>
                </div>
                <div>
                    <img src={img6} alt="" />
                    <h5 className='text-center font-medium text-xl'>Rubbabu</h5>
                </div>
            </div>

        </div>
    );
};

export default OurBrands;