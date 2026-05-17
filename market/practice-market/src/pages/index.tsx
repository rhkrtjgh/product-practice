// pages/index.tsx
import styled from 'styled-components';

// 스타일드 컴포넌트 예시
const Title = styled.h1`
  color: #0070f3;
  font-size: 2.5rem;
`;

export default function Home() {
  return (
    <div>
      <Title>스타일드 컴포넌트가 적용된 메인 페이지입니다!</Title>
    </div>
  );
}