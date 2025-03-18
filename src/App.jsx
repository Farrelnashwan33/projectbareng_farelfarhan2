import { useEffect, useState } from 'react';
import './App.css';
import Student from './components/Student';
import Teacher from './components/Teacher';

function App() {
  // Deklarasi state
  const [unattended, setUnattended] = useState([]);
  const [reactjs, setReactjs] = useState([]);

  useEffect(() => {
    setUnattended([
      { name: 'dimas', index: 0, isTeacher: true },
      { name: 'januar', index: 0, isTeacher: true },
      { name: 'rofiq', index: 0, isTeacher: true },
      { name: 'adam', index: 0, isTeacher: false },
      { name: 'udin', index: 0, isTeacher: false },
      { name: 'hud', index: 0, isTeacher: false },
      { name: 'saleh', index: 0, isTeacher: false },
      { name: 'ibrahim', index: 0, isTeacher: false }
    ]);
  }, []); // Hanya dijalankan saat pertama kali komponen dimuat

  // methods
  const join = (name) => {
    const joinClass = () => {
      const person = unattended.find((item) => item.name === name);
      if (person) {
        const index = unattended.indexOf(person);
        unattended.splice(index, 1);
        setUnattended([...unattended]);
        setReactjsList([...reactjsList, person]);
      }
    };

    return <button type="button" onClick={joinClass}>Join ReactJS</button>;
  };

  // Render//
  const attendedList = unattended.map((item, index) => {
    return item.isTeacher ? (
      <Teacher key={index} name={item.name} action={"(join)"} />
    ) : (
      <Student key={index} name={item.name} />
    );
  });
  
  // Render daftar reactjs
  const reactjsList = reactJS.map((item, index) => {
    return item.isTeacher ? (
      <Teacher key={index} name={item.name} />
    ) : (
      <Student key={index} name={item.name} />
    );
  });


  return (
    <>
      <h1>Unattended</h1>
      {attendedList}
      
      <h1>Class ReactJS</h1>
      {reactjsList.length > 0 ? reactjsList : "No class today"}
    </>
  );
}  
  
  export default App;
  