import Image from "next/image"
import Link from "next/link"

export default function WhoAmI() {

    return (
        <div className="w-full h-full NanumSquareNeo-Variable absolute z-10">
            <div className="text-2xl text-center pt-24 text-white">Who am I?</div>
            <div className="md:flex gap-36 text-center justify-center items-center pt-20 ">
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
                    <div className="block m-auto w-72 h-10 p-2 bg-[#42ACFE] text-white rounded-[10px]">
                        ross1222@naver.com
                    </div>
                    <div className="mt-8 block m-auto w-72 h-10 p-2 bg-[#42ACFE] text-white rounded-[10px]">
                        <Link href="https://github.com/Dragonite-Lee">
                            GitHub
                        </Link>
                    </div>
                    <div className="mt-8 block m-auto w-72 h-10 p-2 bg-[#42ACFE] text-white rounded-[10px]">
                        <Link href="https://www.notion.so/7e19b612f5aa4fa5a60a53ba84abfca8">
                            Notion
                        </Link>
                    </div>
                    <div className="mt-8 block m-auto w-72 h-10 p-2 bg-[#42ACFE] text-white rounded-[10px]">
                        <Link href="https://open.kakao.com/o/sXsLA2Qe">
                            KakaoTalk
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}