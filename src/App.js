import React from 'react';
import Header from './conponents/Header';
import Section from './conponents/Section';
import Footer from './conponents/Footer';


const App = () => {

  let users = [{
    name: "Kanai",
    lastName: 'Bakirov',
    age: '22',
    id: 1
  },
{
  name: "Aidana",
  lastName: 'Bakirov',
  age: '22',
  id: 2,
},
{
  name: "Eldana",
  lastName: "Sagynbekova",
  age: 2,
  id: 1,
}]


  return (
    <div>
      <main style={{minHeight: '90vh'}}>
      <Header  />
      {users.map((item)=>
      <Section name = {item.name} lastName = {item.lastName} age = {item.age} id = {item.id}/>
      )}
      </main>
      <Footer/>

      
    </div>

  );
};

export default App;