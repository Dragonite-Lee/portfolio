import Image from "next/image"
import Link from "next/link"
import { useRef, useEffect } from "react"
import useScrollRedux from "../hooks/useScrollRedux";
import { dispatchWhoAmI } from "../store/modules/scroll";

export default function WhoAmI() {
    const [state, dispatch] = useScrollRedux();
    
    const scrollTopRef = useRef(null);
    
    const distanceChildFromTop = () => {
        if(scrollTopRef.current) {
            let whoAmITop = scrollTopRef.current.getBoundingClientRect().top + window.pageYOffset;;
            console.log("whoami top", whoAmITop);
            dispatch(dispatchWhoAmI(whoAmITop))
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", distanceChildFromTop);
    }, []);
    
    console.log(state.WhoAmI)
    return (
        <div className="w-full NanumSquareNeo-Variable" >
            <div className="text-2xl text-center pt-24 text-white" ref={scrollTopRef} >Who am I?</div>
            <div className="md:flex md:px-12 md:gap-24 lg:gap-36 text-center justify-center items-center pt-20 ">
                <div>
                    <Image 
                        className="rounded-[10px] block m-auto"
                        src={require("../src/myImg.jpg")}
                        alt="myImg"
                        width={350}
                        height={350}
                    />
                </div>
                <div className="pt-8 text-center">
                    <div className="block m-auto w-72 h-10 p-2 bg-[#002558] text-white opacity-80 rounded-[10px]">
                        ross1222@naver.com
                    </div>
                    <div className="mt-8 block m-auto w-72 h-10 p-2 bg-[#002558] text-white opacity-80 rounded-[10px]">
                        <Link href="https://github.com/Dragonite-Lee">
                            GitHub
                        </Link>
                    </div>
                    <div className="mt-8 block m-auto w-72 h-10 p-2 bg-[#002558] text-white opacity-80 rounded-[10px]">
                        <Link href="https://www.notion.so/7e19b612f5aa4fa5a60a53ba84abfca8">
                            Notion
                        </Link>
                    </div>
                    <div className="mt-8 block m-auto w-72 h-10 p-2 bg-[#002558] text-white opacity-80 rounded-[10px]">
                        <Link href="https://open.kakao.com/o/sXsLA2Qe">
                            KakaoTalk
                        </Link>
                    </div>
                </div>
            </div>
            <div className="text-white text-center mt-12 text-lg px-12">
                <span className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#26EFE6] to-[#FC94C4]">FrontEnd</span>??? ???????????? ????????? ???????????? ????????? ????????? ????????? ??????????????? ??????????????????. <br />
                ????????? ?????? ???????????? ?????? ??????????????? ?????????,  <span className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#26EFE6] to-[#FC94C4]">BackEnd</span>?????? ???????????? ???????????? ????????????. <br />
                ??????, ????????? ?????? ???????????? ???????????? <span className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#26EFE6] to-[#FC94C4]">?????????</span>??? ?????????, ????????? ????????? ????????? ?????? <br />
                <span className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#26EFE6] to-[#FC94C4]">???????????? ??????</span>?????? ?????? ?????? ????????? ???????????? ??????????????????. <br />
            </div>
        </div>
    )
}