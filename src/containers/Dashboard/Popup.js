import React from 'react';

function Popup() {
  const classes = ['CS50', 'EC10a', 'EXPOS20'];
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const classSelector = classes.map(c => {
    return(
        <option value={c}>{c}</option>
    );
  });
  return (
    <div className='popup'>
      <div className='popup_inner'>
        <form>
          <h1>New Meeting</h1>
          <label>Class</label>
          <select name="classes" id="classes" required>
            {classSelector}
          </select>
          <label>Meeting date</label>
          <input 
              required
              type="date" 
              value={selectedDate}
              onChange={handleDateChange}
          ></input>          
          <label>Meeting time</label>
          <input type="time"
              required
              value={selectedDate}
              onChange={handleDateChange}></input>
          <button value="submit">Create Meeting</button>
        </form>
      </div>
    </div>
  );
  
}

export default Popup;