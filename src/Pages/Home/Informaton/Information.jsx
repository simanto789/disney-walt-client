import img1 from '../../../assets/delivery.png'
import img2 from '../../../assets/call.png'
import img3 from '../../../assets/bulk1.png'
import img4 from '../../../assets/happy.png'

const Information = () => {
    return (
        <div>
            <h5 className='text-center text-3xl mt-5 mb-5'>Come To US</h5>
            <div className=' grid grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto  mb-10 mt-10'>
            
            <div className=' space-y-3'>
                <img className='w-28 rounded-xl' src={img1} alt="" />
                <div className='font-semibold'>Free Shipping</div>
                <div>on everything</div>
            </div>
            <div className=' space-y-3'>
                <img className='w-28 rounded-xl' src={img2} alt="" />
                <div className='font-semibold'>Give Us A Call</div>
                <div>01517037832</div>
            </div>
            <div className='space-y-3'>
                <img className='w-28 rounded-xl ' src={img3} alt="" />
                <div className='font-semibold'>Bulk Inquiry</div>
                <div>abcd@gmail.com</div>
            </div>
            <div className='space-y-3'>
                <img className='w-28 rounded-xl' src={img4} alt="" />
                <div className='font-semibold'>Quality Assurance</div>
                <div>Every product is <br /> original fresh and <br /> high quality</div>
            </div>

        </div>
        </div>
    );
};

export default Information;