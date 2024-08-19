import React from 'react'

export default function CurlyBraces() {
    // Curly Braces:
    // - JSX에서 자바스크립트 표현식을 작성할 때 사용하는 방법
    // - JSX 안에 { }로 영역을 지정하여 그 안에 자바스크립트를 작성

    const title = 'Curly Braces';

    return (
       <>
        <h1 style={{ backgroundColor: 'red'}}>{title}</h1>
        <p>{10 + 20}</p>
       </> 
    )
}
