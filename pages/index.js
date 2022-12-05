import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import Header from '../components/header'
import Content from '../components/content'

export default function Home() {
  const snowRef = useRef(null)
  useEffect(()=>{

    // *눈을 만들어주는 함수
    function createSnow() {
      if (typeof window !== 'undefined') {
        const el = document.createElement('div');
        el.classList.add(`w-[8px]`);
        el.classList.add(`h-[8px]`)
        el.classList.add('bg-white')
        el.classList.add('opacity-0')
        el.classList.add('rounded-[50%]')
        el.classList.add('relative')
        el.classList.add(`animate-[snow_10s_linear_infinite]`)
        el.style.marginLeft = randomPosition() + 'px'
        snowRef.current.appendChild(el);
      }
    };
    // *눈 생성 함수
    for(let i = 0; i < 300; i++) {
      createSnow()  
    }
  },[])
  
  
  function randomPosition() {
    if (typeof window !== 'undefined') {
      return Math.floor(Math.random() * window.innerWidth)
    }
  }
  
  return (
    <div className='min-w-[516px] bg-gradient-to-b from-[#1b2735] via-[#3F4852] to-[#090a0f] h-full overflow-hidden'>
       <Head>
          <title>junyoung portfolio</title>
          <meta name='description' content='안녕하세요 이준영입니다.' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <Header></Header>
      <div className='static'>
        <div ref={snowRef} className='pt-[64px]'>
          <Content />
        </div>
        
      </div>
      
      
    </div>
  )
}
