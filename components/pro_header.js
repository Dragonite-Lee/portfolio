import { useState } from "react";
import useScrollRedux from "../hooks/useScrollRedux";

export default function ProHeader() {
    const [state, dispatch] = useScrollRedux();
    const [menuModal, setMenuModal] = useState(false);
    
    const toActivity_Project = () => {
        
        window.scrollTo({left: 0, bottom : 0, behavior : 'smooth'})
        
    };

    return (
        <div className="NanumSquareNeo-Variable w-full px-12 fixed z-40 bg-[#D7E9FF] min-w-[516px] border-b font-bold">
            <div className="flex justify-between items-center h-16 ">
                <a href="/" onClick={()=>toActivity_Project()}>
                    <div className="text-lg">
                        Home
                    </div>
                </a>
                {/* <div className="hidden md:flex gap-6">
                    <div >
                        Activity & Projects
                    </div>
                </div> */}
            </div>
        </div>
    )
}