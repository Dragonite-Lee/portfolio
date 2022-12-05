import Image from "next/image"
import Link from "next/link"

export default function WhoAmI() {

    return (
        <div className="w-full NanumSquareNeo-Variable">
            <div className="text-2xl text-center pt-24 text-white">Who am I?</div>
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
                <span className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#26EFE6] to-[#094BA0]">FrontEnd</span>를 공부하며 바닥에 차곡차곡 쌓이는 눈처럼 실력을 쌓아나가는 개발자입니다. <br />
                새로운 것을 학습하는 것을 두려워하지 않으며,  <span className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#26EFE6] to-[#094BA0]">BackEnd</span>에도 관심사를 넓혀가고 있습니다. <br />
                또한, 개발이 아닌 여러가지 분야에도 <span className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#26EFE6] to-[#094BA0]">감수성</span>을 가지며, 개발을 단순히 코딩이 아닌 <br />
                <span className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#26EFE6] to-[#094BA0]">문제해결 수단</span>으로 보기 위한 시야를 넓히려고 노력중입니다. <br />
            </div>
        </div>
    )
}