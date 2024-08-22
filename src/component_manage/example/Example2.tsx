import React from 'react'
import './Example2.css';
 

interface Props {
    num: number
    name: string
    office:boolean
}

function Table ( { num, name, office }: Props) {
    
    

    return (
        <div>

            <h1>{num}</h1>
            <h1>{name}</h1>
            <h1>{office}</h1>
        </div>
    )
}

function TableHeader() {
    return (
        <div className='th'>
            <div className='td'>사번</div>
            <div className='td'>이름</div>
            <div className='td'>출근상태</div>
        </div>
    );
}

interface TableRowProps {
    employeeNumber: string;
    employeeName: string;
    workState: boolean;
}

function TableRow ({ employeeNumber, employeeName, workState }: TableRowProps) {

    const color = workState ? 'blue' : 'red';

    return (
        <div className='tr'>
            <div className='td'>202401</div>
            <div className='td'>홍길동</div>
            <div className='td' style={{ color }}>●</div>
        </div>
            // 속성명 = 변수명 같을때 위에처럼 사용가능
    )
}

interface TableDataTrProps {
    type: 'tr';
    employeeNumber: string;
    employeeName: string;
    workState: boolean;
}

interface TableDataThProps {
    type: 'th';
    
}

// 공통으로 가진 요소만 아래와 같이 const로 꺼내올수있다.
// 리턴에서 td들을 리턴시키면 그에 맞는요소들을 const로 꺼내올수있음
function TableData(props: TableDataTrProps | TableDataThProps) {

    const { type } = props;
    if (type === 'th') {
        return (
            <div className='th'>
            <div className='td'>사번</div>
            <div className='td'>이름</div>
            <div className='td'>출근상태</div>
        </div>
        );
    }

    const { employeeNumber, employeeName, workState } = props;
    const color = workState ? 'blue' : 'red';

    return (
        <></>
    );
}

    
export default function Example2() {
    
    const employee1 = {
        employeeNumber: '202401',
        employeeName: '홍길동',
        workState: false
    }
    const employee2 = {
        employeeNumber: '202402',
        employeeName: '이영희',
        workState: true
    }
    const employee3 = {
        employeeNumber: '202403',
        employeeName: '김철수',
        workState: true
    }

  return (
      <div className='table'>
        {/* <Table num={Table1.num} name={Table1.name} office={Table1.jobstatus}/> */}
        {/* <Table num={Table2.num} name={'홍길동'} office={true}/>
        <Table num={Table3.num} name={'홍길동'} office={true}/> */}
            {/* <TableHeader/>
             <TableRow {...employees[0]}/>
            <TableRow {...employees[1]}/>
            <TableRow {...employees[2]}/> */}

                <TableHeader/>
                {employees.map((employee, index) => <TableRow key={index} {...employee}/>)}

            {/* <TableData type='th'/>
            <TableData type='tr' {...employee1}/>
            <TableData type='tr' {...employee2}/>
            <TableData type='tr' {...employee3}/> */}

            {/* <TableRow employeeNumber='202402' employeeName='이영희' workState />
            <TableRow employeeNumber='202403' employeeName='김철수' workState /> */}
        <div className='th'>
            {/* <div className='td'>사번</div>
            <div className='td'>이름</div>
            <div className='td'>출근상태</div> */}
        </div>

        {/* <div className='tr'>
            <div className='td'>202401</div>
            <div className='td'>홍길동</div>
            <div className='td' style={{color:'red'}}>●</div>
        </div>
        <div className='tr'>
            <div className='td'>202402</div>
            <div className='td'>이영희</div>
            <div className='td' style={{color:'blue'}}>●</div>
        </div>
        <div className='tr'>
            <div className='td'>202403</div>
            <div className='td'>김철수</div>
            <div className='td' style={{color:'blue'}}>●</div>
        </div> */}

        
    </div>
  )
}

const employees = [
        {
        employeeNumber: '202401',
        employeeName: '홍길동',
        workState: false
        },
        {

            employeeNumber: '202402',
            employeeName: '이영희',
            workState: true
        },
        {
            employeeNumber: '202403',
            employeeName: '김철수',
            workState: true
        }

]
