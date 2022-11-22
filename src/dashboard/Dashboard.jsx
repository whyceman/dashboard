//components
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
//images and icons
import arrow from '../assets/arrow.png';
import bag from '../assets/bag.svg';
import work from '../assets/Work.svg';
import heart from '../assets/Heart.svg';
import game from '../assets/Game.svg';
import camera from '../assets/camera.svg';
import gown from '../assets/gown.svg';
import bottle from '../assets/bottle.svg';
import bottle2 from '../assets/bottle2.svg';
import steak from '../assets/steak.png'
import steak2 from '../assets/steak2.svg'
import chicken from '../assets/chicken.svg'


const Dashboard = () => {
    const mobile = window.innerWidth <= 768 ? true : false;

    return (
        <div className="bg-[#F1F4FA] w-full overflow-hidden">
            <Navbar />
            <Sidebar />
            <div className="mt-[30px] ml-[148px] sm:ml-[10px] flex">
                <h1 className="text-[27px] font-bold mr-[32px] sm:text-[18px] sm:mr-[20px]">Dashboard</h1>
                <div className="w-[140px] h-[42px] sm:w-[90px] sm:px-[5px] sm:py-[12px] bg-white border rounded-md py-[11px] px-[18px] mr-[15px] sm:mr-[5px] flex gap-[7px]">
                    <span className="text-[15px] sm:text-[10px] text-[#06152B]">10-06-2021</span>
                    <span className="translate-y-3"><img src={arrow} alt="" /></span>
                </div>
                <div className="w-[140px] h-[42px] sm:w-[90px] sm:px-[5px] sm:py-[12px] bg-white border rounded-md py-[11px] px-[18px] flex gap-[7px]">
                    <span className="text-[15px] sm:text-[10px] text-[#06152B]">10-10-2021</span>
                    <span className="translate-y-3"><img src={arrow} alt="" /></span>
                </div>
            </div>
            <div className="mt-[30px] ml-[148px] sm:ml-0 flex sm:flex-col sm:gap-[5px] sm:items-center gap-[25px]">
                <div className="w-[280px] h-[122px] bg-white border rounded-[10px] flex items-center">
                    <div className="w-[63px] h-[63px] rounded-full bg-[#99B2C6]/10 flex justify-center items-center ml-[28px] mr-[24px]">
                        <img src={heart} alt="" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[24px] text-[#06152B] font-bold">178+</span>
                        <span className="text-[15px] text-[#06152B] ">Leads</span>
                    </div>
                </div>
                <div className="w-[280px] h-[122px] bg-white border rounded-[10px] flex items-center">
                    <div className="w-[63px] h-[63px] rounded-full bg-[#03A39E]/10 flex justify-center items-center ml-[28px] mr-[24px]">
                        <img src={game} alt="" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[24px] text-[#06152B] font-bold">20+</span>
                        <span className="text-[15px] text-[#06152B] ">Clients</span>
                    </div>
                </div>
                <div className="w-[280px] h-[122px] bg-white border rounded-[10px] flex items-center">
                    <div className="w-[63px] h-[63px] rounded-full bg-[#FF69B4]/10 flex justify-center items-center ml-[28px] mr-[24px]">
                        <img src={bag} alt="" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[24px] text-[#06152B] font-bold">190+</span>
                        <span className="text-[15px] text-[#06152B] ">Merchants</span>
                    </div>
                </div>
                <div className="w-[280px] h-[122px] bg-white border rounded-[10px] flex items-center">
                    <div className="w-[63px] h-[63px] rounded-full bg-[#99B2C6]/10 flex justify-center items-center ml-[28px] mr-[24px]">
                        <img src={work} alt="" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[24px] text-[#06152B] font-bold">12+</span>
                        <span className="text-[15px] text-[#06152B] ">Orders</span>
                    </div>
                </div>
            </div>
            <div className="mt-[30px] ml-[148px] flex gap-[30px] sm:mx-[10px] sm:flex-col">
                <div className="w-[710px] sm:w-[100%] h-[315px] border rounded-[10px] bg-white"></div>
                <div className="w-[450px] sm:w-[100%] h-[315px] sm:h-[250px] border rounded-[10px] bg-white"></div>
            </div>
            <div className="mt-[10px] ml-[148px] sm:ml-0 flex sm:flex-col gap-[30px]">
                <div className="w-[710px] sm:w-full h-[440px] sm:h-[585px] border rounded-[10px] bg-white">
                    <h1 className="text-[18px] font-medium p-[25px]">Recent Orders</h1>
                    <div className="flex flex-col gap-[12px] ">
                        <div className="grid grid-lg grid-sm sm:text-center  px-[30px] sm:px-[5px] text-[12px] pb-[15px] border-b border-black/5">
                            <span className="">Tracking no</span>
                            <span className="">Product Name</span>
                            <span className="">Price {mobile && <span>/Total</span>} </span>
                            {!mobile && <span className="ml-[20px]  sm:ml-[10px]">Total {mobile && <br />}Order </span>}
                            <span className="">Total Amount</span>
                        </div>
                        <div className="grid grid-lg grid-sm  px-[30px] sm:px-[5px] text-[12px] items-center">
                            <span className=" ">#876364</span>
                            <span className=" flex gap-[10px] items-center ">
                                <img src={camera} alt="" className="" />
                                <span>Camera Lens</span>
                            </span>
                            <span className="flex flex-col items-center "><span>$178</span>
                                {mobile && <span className=" w-[50px] sm:w-[40px] h-[30px] border rounded-[8px] bg-[#3836DB]/20 flex justify-center items-center ml-[20px] sm:ml-[10px] ">
                                    <span className="">325</span>
                                </span>}</span>
                            {!mobile && <span className=" w-[50px] sm:w-[40px] h-[30px] border rounded-[8px] bg-[#3836DB]/20 flex justify-center items-center ml-[20px] sm:ml-[10px] ">
                                <span className="">325</span>
                            </span>}
                            <span className="">$1,46,660</span>
                        </div>
                        <div className="grid grid-lg grid-sm mx-[30px] sm:mx-[5px] py-[10px] rounded-[5px] text-[13px] items-center border bg-[#F1F4FA]">
                            <span className=" ">#876364</span>
                            <span className=" flex gap-[10px] items-center">
                                <img src={gown} alt="" />
                                <span>Black Sleep Dress</span>
                            </span>
                            <span className="flex flex-col items-center "><span>$14</span>
                                {mobile && <span className=" w-[50px] sm:w-[40px] h-[30px] border rounded-[8px] bg-[#3836DB]/20 flex justify-center items-center ml-[20px] sm:ml-[10px] ">
                                    <span className="">53</span>
                                </span>}</span>
                            {!mobile && <span className=" w-[50px] sm:w-[40px] h-[30px] border rounded-[8px] bg-[#3836DB]/20 flex justify-center items-center ml-[20px] sm:ml-[10px] ">
                                <span className="">53</span>
                            </span>}
                            <span className="">$1,46,660</span>
                        </div>
                        <div className="grid grid-lg grid-sm px-[30px] sm:px-[5px] text-[13px] items-center">
                            <span className=" ">#876364</span>
                            <span className="  flex gap-[10px] items-center">
                                <img src={bottle} alt="" />
                                <span>Argan Oil</span>
                            </span>
                            <span className="flex flex-col items-center "><span>$21</span>
                                {mobile && <span className=" w-[50px] sm:w-[40px] h-[30px] border rounded-[8px] bg-[#3836DB]/20 flex justify-center items-center ml-[20px] sm:ml-[10px] ">
                                    <span className="">78</span>
                                </span>}</span>
                            {!mobile && <span className=" w-[50px] sm:w-[40px] h-[30px] border rounded-[8px] bg-[#3836DB]/20 flex justify-center items-center ml-[20px] sm:ml-[10px] ">
                                <span className="">78</span>
                            </span>}
                            <span className="">$3,46,676</span>
                        </div>
                        <div className="grid grid-lg grid-sm mx-[30px] sm:mx-[5px] py-[10px] rounded-[5px] text-[13px] items-center border bg-[#F1F4FA]">
                            <span className="">#876364</span>
                            <span className=" flex gap-[10px] items-center">
                                <img src={bottle2} alt="" />
                                <span>EAU DE Parfum</span>
                            </span>
                            <span className="flex flex-col items-center "><span>$32</span>
                                {mobile && <span className=" w-[50px] sm:w-[40px] h-[30px] border rounded-[8px] bg-[#3836DB]/20 flex justify-center items-center ml-[20px] sm:ml-[10px] ">
                                    <span className="">98</span>
                                </span>}</span>
                            {!mobile && <span className=" w-[50px] sm:w-[40px] h-[30px] border rounded-[8px] bg-[#3836DB]/20 flex justify-center items-center ml-[20px] sm:ml-[10px] ">
                                <span className="">98</span>
                            </span>}
                            <span className="">$3,46,981</span>
                        </div>
                        <div className="grid grid-lg grid-sm px-[30px] sm:px-[5px] text-[13px] items-center">
                            <span className=" ">#876364</span>
                            <span className=" flex gap-[10px] items-center">
                                <img src={bottle2} alt="" />
                                <span>EAU DE Parfum</span>
                            </span>
                            <span className="flex flex-col items-center "><span>$32</span>
                                {mobile && <span className=" w-[50px] sm:w-[40px] h-[30px] border rounded-[8px] bg-[#3836DB]/20 flex justify-center items-center ml-[20px] sm:ml-[10px] ">
                                    <span className="">98</span>
                                </span>}</span>
                            {!mobile && <span className=" w-[50px] sm:w-[40px] h-[30px] border rounded-[8px] bg-[#3836DB]/20 flex justify-center items-center ml-[20px] sm:ml-[10px] ">
                                <span className="">98</span>
                            </span>}
                            <span className="">$3,46,981</span>
                        </div>
                        <div className="grid grid-lg grid-sm mx-[30px] sm:mx-[5px] py-[10px] rounded-[5px] text-[13px] items-center border bg-[#F1F4FA]">
                            <span className="">#876364</span>
                            <span className="  flex gap-[10px] items-center">
                                <img src={bottle2} alt="" />
                                <span>EAU DE Parfum</span>
                            </span>
                            <span className="flex flex-col items-center "><span>$32</span>
                                {mobile && <span className=" w-[50px] sm:w-[40px] h-[30px] border rounded-[8px] bg-[#3836DB]/20 flex justify-center items-center ml-[20px] sm:ml-[10px] ">
                                    <span className="">98</span>
                                </span>}</span>
                            {!mobile && <span className=" w-[50px] sm:w-[40px] h-[30px] border rounded-[8px] bg-[#3836DB]/20 flex justify-center items-center ml-[20px] sm:ml-[10px] ">
                                <span className="">98</span>
                            </span>}
                            <span className="">$3,46,981</span>
                        </div>

                    </div>
                </div>
                <div className="w-[450px] h-[440px] sm:w-full border rounded-[10px] bg-white mb-[20px]">
                    <h1 className="text-[18px] font-medium p-[25px]">Top Selling Products</h1>
                    <div className="text-[14px] sm:text-[12px] font-medium flex flex-col gap-[36px] pl-[30px]">
                        <div className="flex gap-[30px]">
                            <img src={steak} alt="" />
                            <div className="">
                                <span className="">Top Round Steak</span>
                                <span className="">lamb chops fresh and tasty. lamb <br /> chops fresh and tasty. lamb <br /> chops fresh and tasty. </span>
                            </div>
                        </div>
                        <div className="flex gap-[15px]">
                            <img src={chicken} alt="" />
                            <div className="">
                                <span className="">Top Round Steak</span>
                                <span className="">lamb chops fresh and tasty. lamb <br /> chops fresh and tasty. lamb <br /> chops fresh and tasty. </span>
                            </div>
                        </div>
                        <div className="flex gap-[30px]">
                            <img src={steak2} alt="" />
                            <div className="">
                                <span className="">Top Round Steak</span>
                                <span className="">lamb chops fresh and tasty. lamb <br /> chops fresh and tasty. lamb <br /> chops fresh and tasty. </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Dashboard;