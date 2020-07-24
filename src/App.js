import React,{ useState, useEffect} from "react";
import Home from './components/homepage'
import Form from './components/form'
import axios from 'axios'
import * as yup from 'yup'
import formSchema from './validation/formSchema'
import Submission from './components/submission'
import {Switch, Link, Route, useHistory} from 'react-router-dom'


const initialFormValues= {
  name: "",
  size:"",
  toppings:{
      pepperoni: false,
      mushroom: false,
      chicken:false,
      anchovies:false
  },
instructions:""
}

const initialFormErrors ={
  name:"",
}

const App = () => {
  const history = useHistory();
  const [pizza, setPizza] = useState([]);
const [formValues , setForm] = useState(initialFormValues)
const[formErrors, setErrors] = useState(initialFormErrors)
const [disabled, setDisabled] = useState(true)

const postPizza = newPizza => {
    axios.post('https://reqres.in/api/users', newPizza)
      .then(res => {
      
        setPizza([res.data, ...pizza]);
        setForm(initialFormValues)
        history.push('/thanks');
      })
      .catch(err => {
        console.log(err)
      })
  }
  const onInputChange = event => {
    const name = event.target.name
    const value = event.target.value

    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setErrors({
          ...formErrors,
          [name]: "",
        })
      })
      
      .catch(err => {
        setErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })

  setForm({
    ...formValues,
    [name]:value
  })
  }

  const onCheckChange = event => {
    const name = event.target.name
    const checked = event.target.checked

    setForm({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]:checked
      }
    })
  }

  const onSubmit = event =>{
    event.preventDefault(); 
   

  const newPizza ={
    name: formValues.name.trim(),
    size: formValues.size,
    instructions : formValues.instructions.trim(),
    toppings: Object.keys(formValues.toppings).filter(topping =>
      (formValues.toppings[topping] ===true))
  }
  postPizza(newPizza)
  console.log(newPizza)

  }

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid);
    });
  }, [formValues])

  return (
    <>
     <Link to='/' id="home">Home</Link>
        


        <Switch>
          <Route path='/thanks'>
            <Submission values={formValues}/>
          </Route>
            <Route path='/pizza'>
            <Form onInputChange={onInputChange} onCheckChange={onCheckChange} value={formValues} disabled={disabled} onSubmit={onSubmit} errors={formErrors} style={{dislay: 'none'}}/>
            </ Route>
        
    <Route path='/'>
    <Home />
    </Route>
    </Switch>
     
    </>
  );
};
export default App;
