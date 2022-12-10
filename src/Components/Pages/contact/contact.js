import React, { useRef, useState } from 'react'
import SayHi from '../../../assests/images/SendMsg.svg'
import MsgSend from '../../../assests/images/MsgSend.svg'
import Error from '../../../assests/images/Error.svg'

import {ContactSection} from './ContactStyle'
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [SendWord,SetWord]=useState("Send")
  const [ContactImg,SetImg]=useState(SayHi);

  const sendEmail = async (e) => {
    e.preventDefault();
    SetWord("Sending");
    await emailjs.sendForm('service_1mq0vw9', 'template_grx5z2m', form.current, 'izrbZm5kyHwl1s3sT')
      .then((result) => {
          SetImg(MsgSend);
      }, (error) => {
          SetImg(Error);
      });
    SetWord("Send");
  };
  return (
    <ContactSection>
      <img src={ContactImg} alt='Something did go wrong'/>
      <form ref={form} onSubmit={sendEmail} id="Contact_form">
         <input type="text" name="First_name" required placeholder='First Name' />
         <input type="text" name="Last_name" required placeholder='Last Name' />
         <input type="email" name="User_Email"  required placeholder='Email'/>
         <input type="number" name="Phone_Number"  required placeholder='Phone No.'/>
         <textarea name="message" required placeholder='message' />
         <input type="submit" value={SendWord} id="send"/>
         <input type="reset" value="Rest"  id="reset" onClick={()=>{SetImg(SayHi)}}/>
      </form>
    </ContactSection>
  )
}
