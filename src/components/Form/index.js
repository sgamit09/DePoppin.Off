import React, { useState } from 'react';
import Modal from '../Modal';



const DepopForm = () => {
  // Here we set two state variables for firstName and lastName using `useState`
  const [itemDescription, setItem] = useState('');
  const [itemFlaws, setFlaws] = useState('');
  const [size, setSize] = useState('');
  const [measurements, setMeasurements] = useState('');
  const [message, setMessage] = useState('');
  const [tags, setTags] = useState('');

  const [show, setShow] = useState(false);

  const clearForm = (e) => {
    e.preventDefault();

    navigator.clipboard.writeText(
      `${itemDescription}
Flaws: ${itemFlaws}
Size: ${size}
Measurements: ${measurements}
${message}
Tags: ${tags}
      `)

    // alert("Copied to Clipboard");

    setShow(true)
    setItem('');
    setFlaws('');
    setSize('');
    setMeasurements('');
    setMessage('');
    setTags('');

  };

  return (
    <div>
      <form className="form">
        <label>Item Description 👕</label>
        <br></br>
        <input
          value={itemDescription}
          name="itemDescription"
          size="50"
          onChange={(e) => setItem(e.target.value)}
          type="text"
        />
        <br></br>
        <br></br>
        <label>Flaws 🧵</label>
        <br></br>
        <input
          value={itemFlaws}
          name="flaws"
          size="50"
          onChange={(e) => setFlaws(e.target.value)}
          type="text"
        />
        <br></br>
        <br></br>
        <label>Size 🏷️</label>
        <br></br>
        <input
          value={size}
          name="size"
          size="50"
          onChange={(e) => setSize(e.target.value)}
          type="text"
        />
        <br></br>
        <br></br>
        <label>Measurements 📐</label>
        <br></br>
        <input
          value={measurements}
          name="measurements"
          size="50"
          onChange={(e) => setMeasurements(e.target.value)}
          type="text"
        />
        <br></br>
        <br></br>
        <label>Additional Message 📃</label>
        <br></br>
        <input
          value={message}
          name="message"
          size="50"
          onChange={(e) => setMessage(e.target.value)}
          type="text"
        />
        <br></br>
        <br></br>
        <label>Tags 🔖</label>
        <br></br>
        <input
          value={tags}
          name="tags"
          size="50"
          onChange={(e) => setTags(e.target.value)}
          type="text"
        />
        <br></br>
        <br></br>
        </form>
        <br></br>
        <h2>Listing Preview</h2>
        <div className="results">
          <h6 >
            Item: {itemDescription} <br />
            <br></br>
            Flaws: {itemFlaws} <br />
            <br></br>
            Size: {size} <br />
            <br></br>
            Measurements: {measurements} <br />
            <br></br>
            Note: {message} <br />
            <br></br>
            Tags: {tags} <br />
          </h6>
        </div>
      <br></br>
      <button className="button" onClick={clearForm}> Copy Listing to Clipboard </button>
      <Modal onClose={() => setShow(false)} show={show} />
    </div>

  );
}

export default DepopForm;