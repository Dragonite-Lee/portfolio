import { useState } from "react"

export default function Header() {

    const [menuModal, setMenuModal] = useState(false);

    return (
        <div className="NanumSquareNeo-Variable w-full px-12 fixed z-2 bg-white">
            <div className="flex  justify-between items-center h-16 border-b">
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
                    <div>
                        Who I am?
                    </div>
                    <div>
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
            <div className={`grid gap-y-3 pt-4 text-sm  ${menuModal?'':'hidden'}  
            `}>
                <div>
                    Who I am?
                </div>
                <div>
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