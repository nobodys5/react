import { title } from 'process'
import React, { ReactNode } from 'react'

// Properties (속성)
// - 부모 컴포넌트(호출부)에서 자식 컴포넌트로 데이터를 전달하기 위한 *객체*
// - 부모 컴포넌트에서는 HTML과 동일한 방식으로(속성명=데이터)로 전달
// - 자식 컴포넌트에서는 함수의 매개변수 방식으로 속성 값을 받음
// - 전달할 수 있는 데이터는 변수에 담을 수 있는 모든 데이터 형태
// - 컴포넌트가 리렌더링되는 기준
// - Properties는 부모 -> 자식으로 데이터 전송 o / 자식 -> 부모로 데이터 전송 x

// interface로 props 객체 생성 부모 컴포넌트역할
interface Props {
    sequence: number;
    title:string;
    subTitle: string;
    contents: string;
    Child?: ReactNode;

}

// 중가로안에 값들은 props를 자식요소가 받고있는것과 같은상태 child는 자식컴포넌트
function Child({sequence,title, subTitle, contents, Child}:Props) {

    // 구조 파괴를 이용한 프롭스 전달방법
    // const {title, subTitle, contents } = props;


    return (
        <div>
            <h1>{title}</h1>
            <h1>{sequence}</h1>
            <h4>{subTitle}</h4>
            <p>{contents}</p>
            <p>{Child}</p>
        </div>
    )
}

export default function Properties() {

    const article = {
        sequence: 10,
        title: '하이',
        subTitle: '히',
        contents: '내여',
        Child: '어린이'
    }

  return (
    <div>
        <Child sequence={article.sequence} title= {article.title} subTitle='최경미 기자' contents='행보' Child={article.Child} />
        <Child {...article} Child= {<h1>안녕하세요</h1>} />
    </div>
  )
}
