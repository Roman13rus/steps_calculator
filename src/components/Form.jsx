import React, { useState } from 'react'


const Form = (props) => {
  const { handleAdd } = props

  
  const [data, setData] = useState({
    date: '',
    range: ''
  })


  const handleSubmit = (evt) => {
    handleAdd(data);
    setData({
      date: '',
      range: ''
    })
    evt.preventDefault();
    
    };
  const handleDataChange = ({target}) =>{
    const {name, value} = target;
    setData(prevForm => ({...prevForm, [name]: value}));
  }

  const handleRangeChange = ({target}) =>{
    const {name, value} = target;
    setData(prevForm => ({...prevForm, [name]: value}));
  }
  

  return (
  <React.Fragment>
    <div className='form_box'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="data" >Дата(ДД.ММ.ГГ)</label>
        <input
        type="date" id="date" name="date"
        value={data.date}
        onChange={handleDataChange}
        required/>
        <label htmlFor="range" >Пройдено км</label>
        <input
        id="range" name="range"
        value={data.range}
        onChange={handleRangeChange}
        required/>
        <button type="submit">OK</button>
      </form>
    </div>
  </React.Fragment>
  )
}

export default Form