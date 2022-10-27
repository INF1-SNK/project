import React, {useState} from 'react';
import Text from '../Text/Text';
import Title from '../Title/Title';
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

      // Verification que le champ mot de passe et confirmation mot de passe soit cohérent
      const CheckingPassword =(e)=>{
        if(password!==confPassword)
        {
          alert("Le mot de passe est incorrect ! ❌ ");
        }
        else{
          alert('Formulaire de la part de ' + nom + ' ' + prenom + ', avec un age de '+ age + ' ' + 'ans' + ' ' + 'dont l\'email est ' + email + ' ' + '✅');
        }
        e.preventDefault();

      }

    return ( 

<div className="form">
<header className="header">
        <form onSubmit={(e) => {CheckingPassword(e)}}>
        <Title text='Contact us ?' size='medium'></Title>

        <Text content='Nom' size='small'></Text>
        <input type="text" value={nom} required onChange={(e)=> {EditNom(e)}} /><br/>

        <Text content='Prénom' size='small'></Text>
        <input type="text" value={prenom} required onChange={(e)=> {EditPrenom(e)}} /><br/>

        <Text content='Age' size='small'></Text>
        <input type="number" value={age} required onChange={(e)=> {EditAge(e)}} /><br/>

        <Text content='Adresse email' size='small'></Text>
        <input type="email" value={email} required onChange={(e)=> {EditEmail(e)}} /><br/>

        <Text content='Mot de passe' size='small'></Text>
        <input type="password" value={password} required onChange={(e)=> {EditPassword(e)}} /><br/>

        <Text content='Confirmer le mot de passe' size='small'></Text>
        <input type="password" value={confPassword} required onChange={(e)=> {EditPasswordChange(e)}} />
        <br/>
        <br/>
        <input type="submit" value="Submit" id='button'/>
      </form>
      </header>
    </div>  
    );
}

export default Form;