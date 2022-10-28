import React, {useState ,useRef } from 'react';
import Text from '../Text/Text';
import emailjs from '@emailjs/browser';

import './Form.css'

const Form = () => {

    const [nom , setNom] = useState('');
    const [prenom , setPrenom] = useState('');
    const [age , setAge] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [confPassword , setConfPassword] = useState('');

    // Constante de changement de l'état du nom
    const EditNom =(e)=>{
        setNom(e.target.value);
      }

      // Constante de changement de l'état du prenom
    const EditPrenom =(e)=>{
      setPrenom(e.target.value);
    }

      // Constante de changement de l'état de l'age
      const EditAge =(e)=>{
        setAge(e.target.value);
      }

      // Constante de changement de l'état de l'email
      const EditEmail =(e)=>{
        setEmail(e.target.value);
      }

      // Constante de changement de l'état du mot de passe
      const EditPassword =(e)=>{
        setPassword(e.target.value);
      }

      // Constante de changement de l'état de la confirmation du mot de passe
      const EditPasswordChange =(e)=>{
        setConfPassword(e.target.value);
      }
      
      const form = useRef();

      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_v2verfb', 'template_4hw0ctt', form.current, '6m1G9yVvyC5_pzFF3')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };


    return ( 

<div className="form">
<header className="header">
        <form ref={form} onSubmit={sendEmail}>
        <Text content='Authentication form' size='large'></Text>
        <Text content='Nom' size='small'></Text>
        <input type="text" value={nom} name={nom} required onChange={(e)=> {EditNom(e)}} /><br/>

        <Text content='Prénom' size='small'></Text>
        <input type="text" value={prenom} name={prenom} required onChange={(e)=> {EditPrenom(e)}} /><br/>

        <Text content='Age' size='small'></Text>
        <input type="number" value={age} name={age} required onChange={(e)=> {EditAge(e)}} /><br/>

        <Text content='Adresse email' size='small'></Text>
        <input type="email" value={email} name={email} required onChange={(e)=> {EditEmail(e)}} /><br/>

        <Text content='Mot de passe' size='small'></Text>
        <input type="password" value={password} name={password} required onChange={(e)=> {EditPassword(e)}} /><br/>

        <Text content='Confirmer le mot de passe' size='small'></Text>
        <input type="password" value={confPassword} name={confPassword} required onChange={(e)=> {EditPasswordChange(e)}} />
        <br/>
        <br/>
        <input type="submit" value="Submit" id='button'/>
      </form>
      </header>
    </div>  
    );
}

export default Form;