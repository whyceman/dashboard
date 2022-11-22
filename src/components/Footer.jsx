import logo from '../assets/logo.png'

const Footer = () => {
    const mobile = window.innerWidth <= 768 ? true : false;
    return (
        <div className="w-full h-[230px] bg-white pl-[84px] sm:pl-[10px] pt-[40px] pr-[30px] sm:pr-[10px] sm:h-[330px]">
            <div className="flex sm:flex-col sm:gap-[10px] border-b border-black pb-[5px]">
                <div className="flex pl-[100px] sm:self-center sm:pl-0 sm:pr-0  pr-[55px]">
                    <img src={logo} alt="" className='h-[56px] w-[46px]' />
                    <span className='font-bold text-[35px]'>Urdery</span>
                </div>
                <div className="text-[16px] font-bold text-[#79787A] pr-[100px] sm:pr-0">	CONTACT Urdery {!mobile && <br />}
                    ORDERING:		1-800-441-0998 {!mobile && <br />}
                    TECHNICAL:		1-877-583-9659
                </div>
                <div className="text-[16px] font-bold text-[#79787A] pr-[70px]">	CUSTOMER SERVICE <br />
                    Help Center
                </div>
                <div className="text-[16px] font-bold text-[#79787A]">
                    ABOUT US {!mobile && <br />}
                    Careers {!mobile && <br />}
                    Leadership {!mobile && <br />}
                    News
                </div>
            </div>
            <div className="pt-[30px] sm:pt-[10px] text-[18px] sm:text-[12px] text-[#514F4F] font-bold flex ">
                <span className="pl-[150px] pr-[150px] sm:pl-0 sm:pr-0">	© 2022 Urdery. All Rights Reserved.	v2022-R0.1.0 </span>
                <span className="">Terms of Service	 |  Privacy Policy</span>
            </div>
        </div>
    );
}

export default Footer;