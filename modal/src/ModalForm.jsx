import React, { useState } from 'react';

export default function ModalForm() {
  // State for handling the tags, input field, and checkboxes
  const [tags, setTags] = useState([]);
  const [currentTag, setCurrentTag] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [checked, setChecked] = useState({ display: false, commenting: false });

  // Handle input changes
  const handleInputChange = (e) => {
    setCurrentTag(e.target.value);
    setIsTyping(true);
  };

  // Add tag when + button is clicked or Enter key is pressed
  const handleAddTag = () => {
    if (currentTag.trim() !== "" && tags.length < 8) {
      setTags([...tags, currentTag.trim()]);
      setCurrentTag('');
    }
    setIsTyping(false);
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag();
    }
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setChecked((prevChecked) => ({ ...prevChecked, [name]: checked }));
  };

  return (
    <div className="modal-form-container">
      <div className="tag-and-input-container">
        <div className="add-tags-container">
          <h4>Add Tags</h4>
          <p>(max.8)</p>
        </div>

        <div className="input-container">
          <input
            type="text"
            placeholder="Add Tags..."
            value={currentTag}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className={isTyping ? "input-typing" : ""}
          />
          <button onClick={handleAddTag} disabled={!currentTag.trim()}>
            +
          </button>
        </div>

        <div className="tags-container">
          {tags.map((tag, index) => (
            <div key={index} className="tag">
              {tag}
              <span onClick={() => handleRemoveTag(tag)}>&times;</span>
            </div>
          ))}
        </div>
      </div>

      <div className="checkbox-and-access-section">
        <div className="members-access-container">
          <p>Members with access</p>
        </div>

        <div className="checkbox-section">
          <input
            type="checkbox"
            name="display"
            checked={checked.display}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="display">Display on profile</label>
          <button>NEW</button>
        </div>

        <div className="checkbox-section">
          <input
            type="checkbox"
            name="commenting"
            checked={checked.commenting}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="disable">Disable commenting</label>
        </div>
      </div>

      <div className="bottom-section">
        <div className="add-group-container">
          <div className="add-and-choose-container">
            <div className="add">
              <h5>Add to portfolio</h5>
              <p>Choose a portfolio to add to your work</p>
            </div>

            <div className="button-container">
              <button>Choose</button>
            </div>
          </div>

          <div className="add-and-choose-container">
            <div className="add">
              <h5>Add Download File</h5>
              <p>Share your file and allow download</p>
            </div>

            <div className="button-container">
              <button>Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
