import ReactDom from 'react-dom';
import React, { useRef, useState, useEffect} from "react";


function DisplayJsx(){
//1.---------------------------Display simple JSX------------------------------
  // return (
  // <React.Fragment>
  //   JSX is cool!
  // </React.Fragment>
  // );



//2.---------------------------Display array of users to browser---------------
  const Users = [
  {name: 'Divya', id: 1},
  {name: 'Alan', id: 2}
  ];

  //  return (
  //   <React.Fragment>
  //     <h2>Users Names</h2>
  //     <ul>{Users.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
  //   </React.Fragment>
  // )


//3.---------------------------Show/Hide Element on Screen-----------------------
  // const [show, setShow] = useState(true);

  // const buttonHandler = () => {
  //   setShow((show) => !show);
  // }

  // return (
  //   <React.Fragment>
  //     <button onClick={buttonHandler}>{show ? 'Hide me' : 'Show me'}</button>
  //     {show && <div>Divya</div>}
  //   </React.Fragment>
  // )



//4.---------------------------2 way data binding-----------------------------------

  /*------------(with useState)-----------*/

  // const [value, setValue] = useState();
  // const changeHandler = (event) =>{
  //   setValue(event.target.value);
  // };
  // const submitHandler = (event) => {
  //   setValue('');
  // }
  // return (
  //   <>
  //   <form onSubmit={submitHandler}>
  //       <input
  //           type='text'
  //           placeholder='EnterText'
  //           onChange={changeHandler}
  //           value={value}
  //         >
  //       </input>
  //       <button type='submit'>submit</button>
  //   </form>
  //   </>
  // )
 


//5.--------------------Disbale Button If input is empty-----------------
  // const [value, setValue] = useState('');
  // const changeHandler = (event) =>{
  //   setValue(event.target.value);
  // }

  // return (
  //   <>
  //     <h3>Disbale Button</h3>
  //     <input type='text' onChange={changeHandler}></input>
  //     <button disabled={value.length < 1}>submit</button>
  //   </>
  // )


//6.---------------------Update the parent state from child-----------------
  // function Child(props){

  //   const clickHandler = () => {
  //     props.setValue('Thanku!')
  //   };

  //   return (
  //     <>
  //       <h3>Child</h3>
  //       <button onClick={clickHandler}>Update Parent</button>
  //     </>
  //   )
  // };

  // function Parent(){
  //   const [value, setValue] = useState('I wanna update!');

  //   return (
  //     <>
  //       <h2>Update Parent</h2>
  //       <h3>Parent</h3>
  //       <div>{value}</div>
  //       <Child setValue={setValue}/>
  //     </>
  //   )
  // };

  //  export default Parent;


//7.------------------Dynamically add child components (React Children)-----------
  // function Child(){
  //   return(
  //     <>
  //       <h3>I am child and i am inside parent!</h3>
  //     </>
  //   )
  // };

  // function Parent(props){
  //   return(
  //     <>
  //       <h1>I am parent.</h1>
  //       {props.children}
  //     </>
  //   )
  // };

  // return(
  //   <Parent>
  //     <Child />
  //   </Parent>
  // )


//8.-----------------------Sum of Two Numbers----------------------
  // const [num1, setNum1] = useState();
  // const [num2, setNum2] = useState();
  // const [total, setTotal] = useState(0);

  // const firstInputHandler = (event) => {
  //   setNum1(event.target.value);
  // }
  // const secondInputHandler = (event) => {
  //   setNum2(event.target.value);
  // }

  // const calculateHandler = () => {
  //   setTotal(parseInt(num1) + parseInt(num2));
  //   //we need to convert into num.
  //   setNum1('');
  //   setNum2('');
  // }

  // return(
  //   <>
  //       <h2>Sum of two number---</h2>
  //       <input
  //         type='number'
  //         placeholder='Enter Number'
  //         value={num1}
  //         onChange={firstInputHandler}
  //       >
  //       </input>
  //       <input
  //         type='number'
  //         placeholder='Enter Number'
  //         value={num2}
  //         onChange={secondInputHandler}
  //       >
  //       </input>
  //       <button onClick={calculateHandler}>Submit</button>
  //       <p>Total: {total}</p>
  //   </>
  // )


//9.--------------------Create Counter App-----------------
  // const [counter, setCounter] = useState(0);

  // return(
  //   <>
  //     <h2>Counter: {counter}</h2>
  //     <button onClick={() => {setCounter(prevValue => prevValue + 1)}}>Increment</button>
  //     <button onClick={() => {setCounter(prevValue => prevValue - 1)}}>Decrement</button>
  //   </>
  // )

  const [counter, setCounter] = useState(0);

  return (
    <>
      {<div>Counter: {counter}</div>}
      <button onClick={(() => setCounter(prevValue => prevValue + 1))}>Increment</button>
      <button onClick={(() => setCounter(prevValue => prevValue - 1))}>Decrement</button>
    </>
  )


//10.------------------Fetch data from API-------------
  // const [data, setData] = useState({});

  // const getData = async () => {
  //   const response  =  await fetch("https://jsonplaceholder.typicode.com/users/1");
  //   const result = await response.json();
  //   setData(result);
  // }

  // useEffect(() =>{
  //   getData();
  // }, [])

  // return(
  //   <>
  //   <h1>User Data</h1>
  //   <p><strong>Name: </strong>{data.name}</p>
  //   <p><strong>Website: </strong>{data.website}</p>
  //   <p><strong>Email: </strong>{data.email}</p>
  //   <p><strong>Phone: </strong>{data.phone}</p>
  //   </>
  // )


 
//11.-------------------Build Search filter in React-----------
  /*search filter functionality to display a filtered list based on the search query entered by 
  the user.*/

  // const list = [
  //   'Neha',
  //   'Meenu',
  //   'Diksha',
  //   'Juhi',
  //   'Divya'
  // ];

  // const [filter, setFilter] = useState(list);

  // const inputHandler = (event) => {
  //   if(event.target.value === ''){
  //     setFilter(list)
  //     return;
  //   }
  //   const filterValue = list.filter((item) => 
  //     /*The filter() method creates a new array filled with elements that pass a test provided 
  //     by a function.*/
  //     item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
  //     //neha.indexOf(n) = 0 !== -1 = true
  //   )
  //   setFilter(filterValue);
  // };

  // return (
  //   <>
  //     <div>Search Me: <input type='text' onChange={inputHandler}></input></div>
  //     {filter && filter.map((item, index) =>
  //       <li key={index}>{item}</li>
  //     )}
  //   </>
  // );


//12.-----------------------Display a list in React---------

  // const Movies = [
  //   { id: 1, name: 'Reservoir Dogs' },
  //   { id: 2, name: 'Airplane' },
  //   { id: 3, name: 'Doctor Zhivago' },
  //   { id: 4, name: 'Mementoe' },
  //   { id: 5, name: 'Braveheart' },
  //   { id: 6, name: 'Beauty and the Beast' },
  //   { id: 7, name: 'Seven' },
  //   { id: 8, name: 'The Seven Samurai' }
  // ];

  // return(
  //   <>
  //     <div>{Movies.map((item) => <li key={item.id}>{item.name}</li>)}</div>
  //     {/*Keys are used in React to figure out how to update a list, be it adding, updating, or 
  //     deleting an item in a list. Since React uses a virtual DOM and depends on the key to 
  //     identifying items of a list*/}
  //   </>
  // )



//13.-------------------------Build Accordion in React----------- ---
  //Creating an accordion that toggles text content 

  // const accordionData = [
  //   {
  //     title: 'Section 1',
  //     content: `content-1`
  //   },
  //   {
  //     title: 'Section 2',
  //     content: `content-2`
  //   },
  //   {
  //     title: 'Section 3',
  //     content: `content-3`
  //   }
  // ];

  // const Accordion = (props) => {
  //     const [isActive, setIsActive] = useState(false);

  //     const clickHandler = () =>{
  //       setIsActive(!isActive);
  //     }

  //     return (
  //       <>
  //         <div>
  //           <button onClick={clickHandler}>
  //             {props.title}
  //             <div>{isActive ? '-' : '+'}</div>
  //           </button>
  //           {isActive && <div>{props.content}</div>}
  //         </div>
  //       </>
  //     )
  // }

  // return(
  //   <>
  //     <h1>React Accordion</h1>
  //     <div>{accordionData.map((items) => (
  //       <Accordion title={items.title} content={items.content}/>
  //     ))}</div>
  //   </>
  // )



//14.----------------Create a CheckList in React-------------

  // const [value, setValue] = useState("");
  // const [password, setPassword] = useState("");

  // const inputHandler = (event) => {
  //   setValue(event.target.value);
  // }
  // const passwordHandler = (event) => {
  //   setPassword(event.target.value);
  // }

  // const submitHandler = () => {
  //   setValue('');
  //   setPassword('');
  // }

  // const buttonHandler = (event) => {
  //   alert("Successfully logged in")
  // }

  // return (
  //   <>
  //     <form onSubmit={submitHandler}>
  //       <div>
  //       <label>Name</label>
  //         <input
  //           type='text'
  //           value={value}
  //           onChange={inputHandler}
  //         ></input>
  //       </div>
  //       <div>
  //       <label>Password</label>
  //         <input
  //         type='password'
  //         value={password}
  //         onChange={passwordHandler}
  //       ></input>
  //       </div>
  //       <button type='submit' onClick={buttonHandler}>Submit</button>
  //     </form>
  //   </>
  // )

//15.----------------------Delete item in react------------------------------------------------//
// import React, { Fragment, useState } from "react";

// function Solution() {
//   const [value, setValue] = useState("");
//   const [list, setList] = useState([]);

//   const inputHandler = (event) => {
//     setValue(event.target.value);
//   };

//   const buttonHandler = () => {
//     const newList = [...list, value];
//     setList(newList);
//     setValue("");
//   };

//   const delHandler = (id) => {
//     const newArr = list.filter((item, idx) => idx !== id);
//     setList(newArr);
//   };

//   return (
//     <Fragment>
//       <label>
//         <input type="string" value={value} onChange={inputHandler} />
//       </label>
//       <button onClick={buttonHandler}>Add</button>
//       {list &&
//         list.map((item, i) => (
//           <ul>
//             <li key={i}>{item}</li>
//             <button onClick={() => delHandler(i)}>Delete</button>
//           </ul>
//         ))}
//     </Fragment>
//   );
// }

// export default Solution;

};


export default DisplayJsx