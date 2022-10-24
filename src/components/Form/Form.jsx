import React, {useState} from 'react';
import './Form.css'

const Form = () => {

    const [nom , setNom] = useState('');
    const [age , setAge] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [confPassword , setConfPassword] = useState('');

    // Constante de changement de l'état du nom
    const EditNom =(e)=>{
        setNom(e.target.value);
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

      // Verification que le champ mot de passe et confirmation mot de passe soit cohérent
      const CheckingPassword =(e)=>{
        if(password!==confPassword)
        {
          alert("Le mot de passe est incorrect !");
        }
        else{
          alert('Le formulaire a été envoyé au nom de ' + nom +
          ' , avec un age de '+ age +' et pour adresse e-mail ' + email + ' ' + '✅');
        }
        e.preventDefault();

      }

    return ( 
<div>
        <form onSubmit={(e) => {CheckingPassword(e)}}>
    <h2>NSK</h2>
    <h3>Formulaire de contact</h3>
        <label>Nom</label><br/>
        <input type="text" value={nom} required onChange={(e)=> {EditNom(e)}} /><br/>

        <label>Age: </label><br/>
        <input type="text" value={age} required onChange={(e)=> {EditAge(e)}} /><br/>

        <label>@Mail:</label><br/>
        <input type="email" value={email} required onChange={(e)=> {EditEmail(e)}} /><br/>

        <label>Mot de passe :</label><br/>
        <input type="password" value={password} required onChange={(e)=> {EditPassword(e)}} /><br/>

        <label>Confirmer le mot de passe :</label><br/>
        <input type="password" value={confPassword} required onChange={(e)=> {EditPasswordChange(e)}} /><br/>

        <input type="submit" value="Submit"/>
      </form>
    </div>  
    );
}

export default Form;