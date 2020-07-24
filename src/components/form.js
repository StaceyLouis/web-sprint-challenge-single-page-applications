import React from 'react'
import '../App.css'

function Form(props) {
    console.log(props)
    const {onInputChange,
         onCheckChange, 
         value, 
         disabled,
          onSubmit,
           errors} = props

    return (
        <div>
<form onSubmit={onSubmit}>

<div className="form-wrapper">
    <div id="form-header">
        <div class="jumbotron"></div>
    </div>
    <div className="parent">
  <div className="form-content" >
        <h2>Build Your Own Pizza</h2>
    <label  htmlFor="name"> Name <br /> </label>
    <input
      name='name'
      type='text'
      id='name'
      placeholder='Enter Name'
      value={value.name}
      onChange={onInputChange} />

    <p>
      <label htmlFor="size"> Choose Size <br /></label>
      <select
        name='size'
        value={value.size}
        onChange={onInputChange}
      >
          <option value="">Select a size ...</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
</select>
    </p>

      <p>
      <label htmlFor="pepperoni"> Pepperoni</label>
      <input
        type="checkbox"
       className="toppings"
        name="pepperoni"
        checked={value.toppings.pepperoni === true}
        onChange={onCheckChange} />

<label htmlFor="mushroom">Mushroom</label>
      <input
        type="checkbox"
       className="toppings"
        name="mushroom"
        checked={value.toppings.mushroom=== true}
        onChange={onCheckChange} />

        <label htmlFor="chicken"> Chicken</label>
      <input
        type="checkbox"
       className="toppings"
        name="chicken"
        checked={value.toppings.chicken === true}
        onChange={onCheckChange} />
        

    </p>
    <p>
        <label htmlFor="anchovies">Anchovies</label>
        <input
        type="checkbox"
        className="toppings"
        name="anchovies"
        checked={value.toppings.anchovies === true}
        onChange={onCheckChange} />
    </p>
    <h3>Absolutely no Subsitutions!</h3>
    <p>
        <h3>Special Instructions:</h3>
        <textarea id="textarea"></textarea>
    </p>
    <p>
      <button disabled={disabled} >Add to Order</button>
    </p>

    <div className="errors">
      <div>{errors.name}</div>
    </div>


  </div>
</div>
</div>

</form>



       
        </div>
    )
}

export default Form;