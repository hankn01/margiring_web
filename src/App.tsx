import React from 'react'; //VSCode에서 필요없다고 표시되더라도 지우지 마세요. Routes 구현에 필요합니다.
import {Routes, Route} from 'react-router-dom';
import Blockcoding from './Blockcoding'; //블록코딩 화면 컴포넌트(SPA 구현용)
import Header from './Header';
import Mainscr from './Mainscr'; //메인 화면 컴포넌트(SPA 구현용)

import './App.css'; //App.css 파일은 기본 설정 삭제 후 현재 인터페이스에 맞게 변경 예정


function App() {
  return (
    <Routes> {/*Route v6입니다. v5코드문법(exact 등)를 사용할 경우 오류나 버그가 발생합니다. */}
      <Route path="/" element={<Mainscr />} />
      <Route path="/block" element={<Blockcoding />} />
      <Route path="/header" element={<Header />} />
    </Routes>
  );
}

export default App;
