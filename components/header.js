import { useState } from "react";
import useScrollRedux from "../hooks/useScrollRedux";

export default function Header() {
    const [state, dispatch] = useScrollRedux();
    const [menuModal, setMenuModal] = useState(false);

    const toWhoAmI = () => {
        // console.log(state.WhoAmI)
        window.scrollTo({left: 0, top : state.WhoAmI, behavior : 'smooth'})
    };
    const toSkills = () => {
        // console.log(state.Skills)
        window.scrollTo({left: 0, top : state.Skills, behavior : 'smooth'})
    };
    const toCertificate = () => {
        // console.log(state.Certificate)
        window.scrollTo({left: 0, top : state.Certificate, behavior : 'smooth'})
    };
    const toAward = () => {
        // console.log(state.Award)
        window.scrollTo({left: 0, top : state.Award, behavior : 'smooth'})
    };
    const toActivity_Project = () => {
        // console.log(state.Award)
        window.scrollTo({left: 0, top : state.Activity_Project, behavior : 'smooth'})
    };

    return (
        <div className="NanumSquareNeo-Variable w-full px-12 fixed z-40 bg-[#D7E9FF] min-w-[516px] border-b font-bold">
            <div className="flex justify-between items-center h-16 ">
                <div className="text-lg">
                    PORTFOLIO
                </div>
                <div className="md:hidden ">
                    <button
                        onClick={()=>setMenuModal(!menuModal)}
                    >
                        { menuModal ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                            </svg>
                        )}
                        
                    </button>
                    
                </div>
                
                <div className="hidden md:flex gap-6">
                    <div onClick={()=>toWhoAmI()}>
                        Who am I
                    </div>
                    <div onClick={()=>toSkills()}>
                        Skills
                    </div>
                    <div onClick={()=>toCertificate()}>
                        Certificate
                    </div>
                    <div onClick={()=>toAward()}>
                        Award
                    </div>
                    <div onClick={()=>toActivity_Project()}>
                        Activity & Projects
                    </div>
                </div>
                
            </div>
            <div className="transition-2s">
            <div className={`grid gap-y-3 pt-4 pb-2 text-sm  ${menuModal?'':'hidden'}  
            `}>
                <div onClick={()=>toWhoAmI()}>
                    Who am I
                </div>
                <div onClick={()=>toSkills()}>
                    Skills
                </div>
                <div onClick={()=>toCertificate()}>
                    Certificate
                </div>
                <div onClick={()=>toAward()}>
                    Award
                </div>
                <div onClick={()=>toActivity_Project()}>
                    Activity & Projects
                </div>
            </div>
            </div>
        </div>
    )
}