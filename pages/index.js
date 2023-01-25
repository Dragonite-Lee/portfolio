import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import Header from '../components/header'
import Content from '../components/content'
import {NOTION_TOKEN,NOTION_DATABASE_ID} from '../config/index'

export default function HomePage({skillsName}) {
  const snowRef = useRef(null)
  useEffect(()=>{

    // *눈을 만들어주는 함수
    function createSnow() {
      if (typeof window !== 'undefined') {
        const el = document.createElement('div');
        el.classList.add(`w-[7px]`);
        el.classList.add(`h-[7px]`)
        el.classList.add('bg-white')
        el.classList.add('opacity-0')
        el.classList.add('rounded-[50%]')
        el.classList.add('relative')
        el.classList.add('blur-[1px]')
        el.classList.add(`animate-[snow_linear_infinite]`)
        el.style.marginLeft = randomPosition() + 'px'
        el.style.animationDuration = `${Math.random() * (20 - 8) + 8}s`
        snowRef.current.appendChild(el);
      }
    };
    // *눈 생성 함수
    for(let i = 0; i < 500; i++) {
      createSnow()  
    }
  },[])
  
  
  function randomPosition() {
    if (typeof window !== 'undefined') {
      return Math.floor(Math.random() * window.innerWidth)
    }
  }
  
  return (
    <div className=' bg-gradient-to-b from-[#1b2735] via-[#3F4852] to-[#84787E] h-full overflow-hidden'>
       <Head>
          <title>junyoung portfolio</title>
          <meta name='description' content='안녕하세요 이준영입니다.' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <Header></Header>
      <div className='static min-w-[516px]'>
        <div ref={snowRef} className='pt-[64px]'>
          <Content skillsName={skillsName} />
        </div>
        
      </div>
      
      
    </div>
  )
}


//빌드 타임에 호출 데이터가져와서 화면에 렌더링
export async function getStaticProps() {

  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'content-type': 'application/json',
      'Authorization' : `Bearer ${NOTION_TOKEN}`
    },
    body: JSON.stringify({
      "sorts": [
          {
              "property": "id",
              "direction": "ascending"
          }
      ],
      page_size: 100
    })
  }
  
  const res = await fetch(`https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`, options);

  const skills = await res.json()
  
  const skillsName = skills.results.map((skill,index)=>(
    skill.properties.name.title[0].plain_text
  ))
  
  
  return {
    props: {skillsName}, // will be passed to the page component as props
  }
}