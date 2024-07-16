
import React from 'react'



const Contact = () => {
  
  return (
    <div className=' md:mt-12 mt-8' id='contact'>
      
 <div className='h-full p-4 '>
         
 <h1 className=' text-center mx-auto  font-extrabold  justify-center  text-5xl py-3 px-4 '>
            Contact.
        </h1>
        
    <div className='  md:grid md:grid-cols-2 h-full py-5 px-4 md:px-12 '>
   

        <div className=' text-left py-6'>

<h1 className=' font-bold text-2xl uppercase pt-16'>Talk to us</h1>
   <p className=' py-2'>Feel free to leave a message and we will get back to you shortly.</p>

   <h1 className='font-bold py-2'>Address</h1>
    <p> Plot 833, 1st Street, Matsapha, Eswatini</p>

     <h1 className='font-bold py-2'>Phone</h1>
     <a href="tel:+26876000000">+268 2518 7891/2</a>
     
     <h1 className='font-bold py-2'>Email</h1>
     <a href="mailto:info@netcomm.co.sz">info@netcomm.co.sz</a>
   
</div>

<div className='flex py-5 '>
<form className='px-2 md:px-4 h-[480px] w-[100%] flex flex-col shadow-lg shadow-black rounded-md'>
<label className='p-2 font-semibold'>Name</label>
<input type="text" name="from_name" className='p-1 border rounded-md' />
<label className='p-2 font-semibold'>Email</label>
<input type="email" name="from_email" className='p-1 border rounded-md'/>
<label className='p-2 font-semibold'>Message</label>
<textarea name="message" className=' border rounded-md pb-16'/>
<button type="submit" value="send" className=' bg-blue-500 p-4 text-center font-bold mt-6 rounded-md text-white uppercase'> Send</button>
</form>

</div>


 

</div>
    </div>
    </div>
   

  )
}

export default Contact
