import Image from "next/image";
import ProHeader from "../../components/pro_header";

export default function Underpath() {
    
    return (
        <div className="w-full NanumSquareNeo-Variable h-[calc(100vh)] ]">
            <ProHeader />
            <div>
                <div className="text-3xl text-left text-black pt-[96px] pb-12 pl-12 ">UNDERPATH UI/UX</div>
            </div>
            <div className="bg-[#D7E9FF] p-20 Pretendard-Regular">
                <div className="text-3xl Pretendard-Bold pb-24">   
                    Underpath UIUX 프로그램은 UI UX에 대한 기초를 알려주며, 매주 과제를 수행해오면, <br />
                    실무자분이 피드백을 해주며, 실무에선 이렇더라 이런 관점이 좋더라 얘기해주는 멘토링 프로그램입니다.
                </div>  
                <div className="text-2xl flex justify-evenly align-center pb-24">
                    <div>
                        자주 사용하는 서비스를 골라 페르소나를 고민해보고, <br />
                        고객 관점에서 좋은 ux사례인지, 나쁜 ux사례인지 <br />
                        좋은 ux는 어떤 이유에서 좋았는지 공부했으며, <br />
                        앱의 구성에는 어떤 의미가 있고, 그냥 배치한 것이 아니라 <br />
                        유저들의 성향을 고민해보며, 간편함을 줄이기 위한 고민이 담겨 있음을 <br />
                        알게 되었습니다.
                    </div>
                    <Image 
                        src={require('../../src/underpath/week2_under.png')}
                        alt="underpath"
                        className="w-[22vw] h-[30vw]"
                    />
                </div>
                <div className="text-2xl flex justify-evenly align-center pb-24">
                    <Image 
                        src={require('../../src/underpath/week3_under.png')}
                        alt="underpath"
                        className="w-[22vw] h-[30vw]"
                    />
                    <div>
                        그리고 유저의 액션들을 비교해 usability를 공부해서  <br />
                        유저들에게 직관성과 익숙함을 높이며, <br />
                        액션을 최소화 시키는 과정에서 꼭 필요한 액션은 무엇인지 <br />
                        빠져도되는 액션은 무엇인지 공부했습니다. <br />
                        마지막으론 내가 매일 사용하는 앱은 어떤 앱이며 <br />
                        어떤 트리거로 나를 매일 끌어들이고 있는지 알 수 있었습니다.
                    </div>
                </div>
                <div className="text-3xl Pretendard-Bold pb-24">   
                    이 프로그램을 통해 개발을 직접적으로 배운건 아니지만, <br />
                    프론트엔드 개발자도 알면 좋을만한 UI/UX의 상식을 배웠고, <br />
                    내가 UI개발을 하고 있을 때, 단순히 구현뿐 아니라, 이런 관점에서 배치된 것이구나 알며, <br />
                    디자이너와 기획자와의 감수성을 높일 수 있는 과정이었다고 생각합니다.
                </div>  
                <div className="text-2xl">
                    <div>
                        <a href="https://sustaining-character-714.notion.site/UI-UX-abe7ec4688254c96b8f5dd801865387b">👉🏻 해당 노션 바로가기</a>
                    </div>
                    <div>
                        <a href="https://brunch.co.kr/@13335218e68a4e8/22">👉🏻 인터뷰 바로가기</a>
                    </div>
                </div>
            </div>
        </div>
    )
}