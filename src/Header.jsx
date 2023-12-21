import './App.css';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scroll, setScroll] = useState(0);

  // 첫 렌더링시 스크롤값 나오고 스크롤시에도 체크
  useEffect(() => {
    function handleScroll() {
      console.log(window.scrollY);
      setScroll(window.scrollY);
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    // 클린업함수는 이펙트를 사용하는 컴포넌트가 화면에서 사라질때 발생
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return <header className='header'>헤더{scroll}</header>;
}
