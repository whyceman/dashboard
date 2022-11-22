//images and icons
import logout from '../assets/Logout.png'
import profile_pic from '../assets/profile pic.png'

const Navbar = () => {
    const mobile = window.innerWidth <= 768 ? true : false;

    return (
        <div className='w-full h-[80px] sm:h-[70px] bg-white flex justify-between sm:items-center overflow-hidden'>
            <h3 className='text-black text-[15px] font-medium pl-[111px] pt-[26px] sm:pt-0 sm:pl-[90px]'>Urdery Client Management</h3>

            {mobile === false ?
                <div className="flex pt-[20px] pr-[35px]">
                    <div className="w-[45px] h-[43px] bg-[#F1F4FA] rounded-[12px] mr-[10px]">
                        <img src={profile_pic} alt="" />
                    </div>

                    <div className="flex flex-col pr-[32px]">
                        <span className='text-[13px] text-black'>Easin Arafat</span>
                        <span className="text-[10px] text-black/50">Free Account</span>
                    </div>
                    <div className="pt-[20px]">
                        <img src={logout} alt="" className="w-[12px] h-[20px] " />
                    </div>
                </div> : (
                    <div className="flex gap-[15px] items-center">
                        <div className="w-[40px] h-[35px] bg-[#F1F4FA] rounded-[12px] ">
                            <img src={profile_pic} alt="" />
                        </div>
                        <div className="">
                            <img src={logout} alt="" className="w-[17px] h-[20px] mr-[10px]" />
                        </div>
                    </div>

                )}
        </div>
    );
}

export default Navbar;