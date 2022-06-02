import React, { useState } from 'react';
import Firststep from './Firststep';
import Secondstep from './Secondstep';
import Thirdstep from './Thirdstep';
import Fourthstep from './Fourthstep';
import '../../CSS/form.css';

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    property: "",
    mobile: "",
    area: ""
  })

  const FormTitles = ["Basic Info", "Property Details", "General Info", "Location Info"];

  const PageDisplay = () => {
    if (page === 0) {
      return <Firststep formData={formData} setFormData={setFormData}/>
    } else if (page === 1) {
      return <Secondstep formData={formData} setFormData={setFormData}/>
    } else if (page === 2) {
      return <Thirdstep formData={formData} setFormData={setFormData}/>
    } else {
      return <Fourthstep/>
    }
  }

  return (
    <div className='form'>
      <div className="progressbar">
      </div>

      <div className="form-containter">
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button 
            className='prev'
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);  
            }}
          >Previous</button>
          <button 
            className='next'
            onClick={() => {
              if (page === FormTitles.length-1) {
                alert('Form Submitted')
                console.log(formData)
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length-1 ? "Add Property" : "Save & Continue"}
          </button>
        </div>
      </div>

    </div>
  )
}

export default Form