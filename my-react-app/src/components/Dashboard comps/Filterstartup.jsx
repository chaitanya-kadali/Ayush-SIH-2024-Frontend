import PrintList from './PrintList.jsx';
import React from 'react'
import '../styles/Filterstartup.css';
export default function Filterdoctor() {
  const faqData = [
    {name:"raju",Email:"raj@gmail.com",phone:"9045643891",district:"west godavari"},
    {  name:"giri",Email:"giri@gmail.com",phone:" 87345445897",district:"krishna" },
    {  name:"venu",Email:"venu@gmail.com",phone:"9947646747",district:" kadapa" },
    {  name:"venkat",Email:"venkat@gmail.com",phone:"9848162013",district:"east godavari" },
  ];


  return (
    <> 
    <p className='startup-info'>Startup Info</p>

    {faqData.map((obj,index) => (
        
      <PrintList   name1={obj.name} Email1={obj.Email} phone1={obj.phone} district1= {obj.district} ></PrintList>
           ))}
   </>
  );
}