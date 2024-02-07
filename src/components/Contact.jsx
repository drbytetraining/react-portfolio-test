import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'
import toast, {Toaster} from 'react-hot-toast';
import {motion} from 'framer-motion'

const Contact = () => {
  const form = useRef();

const sendEmail = (e)=>{
  e.preventDefault();

  emailjs.sendForm("service ID", "template id", form.current, 'publickey')
  
  .then((result) => {
    console.log(result.text);
    form.current.reset();
    toast.success(
      'Message sent succesfully'
    )
  },(error) =>{

    console.log(error.text);
    toast.error("Message Not Sent")
  })
}


  return (
    <div>
      <h1>This is Contact Page</h1>
     <div className="flex">
                    <div className="w-1/2"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108852.64967372711!2d74.3243776!3d31.506432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b5836f3f113%3A0x2a62621a26352d43!2sMayo%20Hospital!5e0!3m2!1sen!2s!4v1706958570594!5m2!1sen!2s" className='w-full' height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
      <div className=""> <form ref={form} onSubmit={sendEmail}>
        <input className='px-3 py-2 border-2 border-red-500' type="text" name='from_name'  required placeholder='Enter Your Name'/>
        <br />
        <br />
        <input className='px-3 py-2 border-2 border-red-500' type="email" name='from_email' required placeholder='Enter Your Email'/>
        <br />
        <br />
        <input  className='px-3 py-2 border-2 border-red-500' type="text" name='message' required placeholder='Enter Your Message'/>
        <br />
        <br />
        <motion.button
          whileHover={{ scale: 1.2, rotate: 360 }}
          whileTap={{
            scale: 0.8,
            rotate: -180,
            borderRadius: "100%"
          }}
        className='border-2 border-red-600 bg-red-200 px-2 py-1'>Send</motion.button>
      </form></div>
     </div>

      <Toaster
  position="top-right"
  reverseOrder={false}
/>


    </div>
  )
}

export default Contact
