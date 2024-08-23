import { on } from 'events';
import React, { useState } from 'react'

// 컴포넌트로 상태 전달 :
// - 부모요소에서 자식 요소로 상태를 전달할 수 있음
// - 자식 요소의 속성으로 전달

export default function ForwardingComponent() {

  const [count, setCount] = useState<number>(0);
  const onIncrease = () => {
    // setCount(count + 1);
    setCount(count =>  count + 1);
};

  return (
    <div>
        <Child1 count={count}/>
        <Child2/>
        <Child3 onIncrease={onIncrease}/>
    </div>
  )
}

interface Child1Props {
    count: number;
}

function Child1 ({ count }: Child1Props) {
    return (
        <div style={{ height:'200px', backgroundColor: 'red' }}>
            <h1>{count}</h1>
        </div>
    )
}
function Child2 () {
    return (
        <div style={{ height:'200px', backgroundColor: 'black' }}></div>
    )
}

interface Child3Props {
    // count: number;
    // setCount: React.Dispatch<React.SetStateAction<number>>;
    onIncrease: () => void;
}

// count 를 받아오지않아도 setcount를 아래와 같이 사용하여 상태변경가능
function Child3 ( { /*count, setCount*/ onIncrease }: Child3Props) {

    // const onIncrease = () => {
    //     // setCount(count + 1);
    //     setCount(count =>  count + 1);
    // };

    return (
        <div style={{ height:'200px', backgroundColor: 'aqua' }}>
            <button style={{width:'50%', height:'50%'}} onClick={onIncrease}>+</button>
        </div>
    )
}