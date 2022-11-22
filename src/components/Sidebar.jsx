//images and icons
import logo from '../assets/logo.png'
import menu from '../assets/menu.svg'
import Calendar from '../assets/Calendar.svg'
import Activity from '../assets/Activity.svg'
import Chart from '../assets/Chart.svg'
import Notification from '../assets/Notification.svg'
import Ticket from '../assets/Ticket.svg'
import Setting from '../assets/Setting.svg'
import Document from '../assets/Document.svg'
import sidebar from '../assets/sidebar.svg'
//react
import { useState } from 'react'

const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const mobile = window.innerWidth <= 768 ? true : false;

    return (
        <>
            <div className="absolute left-0 top-0 w-[84px] h-[1200px] sm:h-fit flex flex-col gap-[115px] bg-white">
                <div className="pt-[27px] pl-[11px] sm:pl-[35px] sm:pt-[20px]">
                    <img src={logo} alt="" className='sm:h-[35px] sm:w-[40px]' />
                </div>
                {mobile === false && <div className="flex flex-col gap-[40px] items-center">
                    <div className=""><img src={menu} alt="" /></div>
                    <div className=""><img src={Chart} alt="" /></div>
                    <div className=""><img src={Ticket} alt="" /></div>
                    <div className=""><img src={Document} alt="" /></div>
                    <div className=""><img src={Calendar} alt="" /></div>
                    <div className=""><img src={Activity} alt="" /></div>
                    <div className=""><img src={Notification} alt="" /></div>
                    <div className=""><img src={Setting} alt="" /></div>
                </div>}

            </div>
            {mobile &&
                <img src={sidebar} alt="" className='absolute left-[-15px] top-[10px]' onClick={() => setShowSidebar(
                    showSidebar === false ? true : false
                )} />
            }
            <div className="absolute bg-white px-[50px] z-10">
                {showSidebar === true && (
                    <div className="flex flex-col gap-[40px] items-center">
                        <div className=""><img src={menu} alt="" /></div>
                        <div className=""><img src={Chart} alt="" /></div>
                        <div className=""><img src={Ticket} alt="" /></div>
                        <div className=""><img src={Document} alt="" /></div>
                        <div className=""><img src={Calendar} alt="" /></div>
                        <div className=""><img src={Activity} alt="" /></div>
                        <div className=""><img src={Notification} alt="" /></div>
                        <div className=""><img src={Setting} alt="" /></div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Sidebar;