import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const AddQuote = ({ addNewQuote }) => {
  const [text, setText] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = event => {
    console.log('Submit');

    event.preventDefault();
    console.log('Submitting new quote');

    // Send the value to the App component
    addNewQuote(text).then(() => {
      console.log('New Quote Added');

      setText('');
      setRedirect(true);
    });
  };

  return (
    <>
      {redirect && <Redirect to="/quotes" />}

      {!redirect && (
        <div className="container">
          <h1>Add a New Quote</h1>

          <form onSubmit={handleSubmit}>
            <div style={{ width: '20em' }}>
              <div className="form-group">
                <input
                  style={{ width: '100%' }}
                  type="text"
                  name="quote"
                  id="quote"
                  placeholder="Please enter your quote"
                  value={text}
                  onChange={event => setText(event.target.value)}
                />
              </div>

              <input type="submit" className="btn btn-primary" value="Add" />
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AddQuote;
