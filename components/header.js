import { useState } from "react";
import useScrollRedux from "../hooks/useScrollRedux";

export default function Header() {
    const [state, dispatch] = useScrollRedux();
    const [menuModal, setMenuModal] = useState(false);

    const toWhoAmI = () => {
        console.log(state.WhoAmI)
        window.scrollTo(0,state.WhoAmI)
    }
    const toSkills = () => {
        console.log(state.Skills)
        window.scrollTo(0,state.Skills)
    }

    return (
        <div className="NanumSquareNeo-Variable w-full px-12 fixed z-40 bg-white min-w-[516px]">
            <div className="flex justify-between items-center h-16 border-b">
                <div className="text-lg">
                    JUNYOUNG
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
                        Who I am?
                    </div>
                    <div onClick={()=>toSkills()}>
                        Skills
                    </div>
                    <div>
                        Award & Certificate
                    </div>
                    <div>
                        Career
                    </div>
                    <div>
                        Projects
                    </div>
                </div>
                
            </div>
            <div className="transition-2s">
            <div className={`grid gap-y-3 pt-4 pb-2 text-sm  ${menuModal?'':'hidden'}  
            `}>
                <div onClick={()=>toWhoAmI()}>
                    Who I am?
                </div>
                <div onClick={()=>toSkills()}>
                    Skills
                </div>
                <div>
                    Award & Certificate
                </div>
                <div>
                    Career
                </div>
                <div>
                    Projects
                </div>
            </div>
            </div>
        </div>
    )
}