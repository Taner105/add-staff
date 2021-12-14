import {useState} from "react";
import './App.css';
import AddStaff from "./components/AddStaff";
import Header from './components/Header';
import Staffs from "./components/Staffs";

function App() {
  const [staffs, setStaffs] = useState([
    {
      id:1,
      name:"Taner",
      surname:"Aydogan",
      email:"taneraydogan59@gmail.com"

    },
    {
      id:2,
      name:"Ayse",
      surname:"Aydogan",
      email:"ayseaydogan123@gmail.com"

    },
    {
      id:3,
      name:"Enes",
      surname:"Aydogan",
      email:"enesaydogan4@gmail.com"

    }
  ])

  const deleteId = (deleteSatffId) => {
    // console.log("deleted");
    setStaffs(staffs.filter((staff) => deleteSatffId !== staff.id))
  };

  const addStaff = (newStaff) => {
    const ıd = Math.floor(Math.random() * 100) + 1;
    const newAddStaff = {ıd, ...newStaff};
    setStaffs([...staffs, newAddStaff]) 
  }
  const [showAddStaff, setShowAddStaff] =useState(false);
  const handleClick = () => {
    // console.log("handleclick");
    setShowAddStaff(!showAddStaff)
    
  }

  return (
    <div className="container">
      <Header handleClick={handleClick}/>
      {showAddStaff && <AddStaff addStaff={addStaff}/>}
      {staffs.length > 0 ? (
      <Staffs staffs={staffs} deleteId={deleteId}/>
      ) : (<p style={{textAlign:"center"}}>NO STAFF TO SHOW</p>)}
    </div>
  );
}

export default App;
