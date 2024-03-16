import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const HomeAllocation = () => {
  const [inputText, setInputText] = useState('');
  const [members, setMembers] = useState([]);
  const [homes, setHomes] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [memberCount, setMemberCount] = useState(0);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = () => {
    const newMembers = inputText.split('/').filter(member => member.trim() !== '');
    setMembers(newMembers);
    setSubmitted(true);
    setMemberCount(newMembers.length);

    const shuffledMembers = shuffleArray(newMembers);
    const avgMembersPerHome = Math.ceil(shuffledMembers.length / 4);
    const updatedHomes = Array.from({ length: 4 }, (_, index) =>
      shuffledMembers.slice(index * avgMembersPerHome, (index + 1) * avgMembersPerHome)
    );
    setHomes(updatedHomes);
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleClear = () => {
    setInputText('');
    setMembers([]);
    setHomes([]);
    setSubmitted(false);
    setMemberCount(0);
  };

  const sethome = (index) => {
    if (index + 1 === 1) {
      return "Prachachuen Tech. School. (เทคโนโลยีประชาชื่น)";
    } if (index + 1 === 2) {
      return "INDARA CONSTRUCTION (ช่างก่อสร้างอินทร)";
    } if (index + 1 === 3) {
      return "Kanok Vocational Education (กนกอาชีวะ)";
    }else {
      return "BURANABONDH (ช่างกลบุรณพนธ์))";
    }
  }

  return (
    <div>
      <img className='Intro' src='src\picture\hathat.PNG' alt='4kingXharrypotter' />
      

      <div class="overlay"></div>

      <div class="text">
        <div class="wrapper">
          <div id="S" class="letter">S</div>
          <div class="shadow">S</div>
        </div>
        <div class="wrapper">
          <div id="O" class="letter">O</div>
          <div class="shadow">O</div>
        </div>
        <div class="wrapper">
          <div id="R" class="letter">R</div>
          <div class="shadow">R</div>
        </div>
        <div class="wrapper">
          <div id="T" class="letter">T</div>
          <div class="shadow">T</div>
        </div>
        <div class="wrapper">
          <div id="I" class="letter">I</div>
          <div class="shadow">I</div>
        </div>
        <div class="wrapper">
          <div id="N" class="letter">N</div>
          <div class="shadow">N</div>
        </div>
        <div class="wrapper">
          <div id="G" class="letter">G</div>
          <div class="shadow">G</div>
        </div>
        <div class="wrapper">
          <div id=" " class="letter"> </div>
          <div class="shadow"> </div>
        </div>
        <div class="wrapper">
          <div id="H" class="letter">H</div>
          <div class="shadow">H</div>
        </div>
        <div class="wrapper">
          <div id="A" class="letter">A</div>
          <div class="shadow">A</div>
        </div>
        <div class="wrapper">
          <div id="T" class="letter">T</div>
          <div class="shadow">T</div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    
      <h9 className='welcome'> Welcome to Sorting into the 4 King House </h9>
      <div className='enter'>Please enter all names to begin sorting.</div>
      <div>(ชื่อของแต่ละคนจะถูกคั่นด้วย /)</div>
      <br></br>
      <br></br>
       <br></br>
      <input className='textbox' type="text"  value={inputText} onChange={handleInputChange} />
      <br></br>
      <br></br>
      <button className='submit' onClick={handleSubmit}>Submit</button>
      <button className='clear' onClick={handleClear}>Clear</button>
      {submitted && (
        <div>
          <br></br>
          <div className='countpeople'>Number of Members: {memberCount}</div> { }
          <br></br>
          <div className='sum'>Selection Summary</div>
          <div className='sumth'>สรุปผลการคัดเลือก</div>
          {homes.map((home, homeIndex) => (
            <div key={`home_${homeIndex}`}>
              <h3>{sethome(homeIndex)}</h3>
              <ul>
                {home.map((member, memberIndex) => (
                  <div className='name' key={`home_${homeIndex}_member_${memberIndex}`}>{member}</div>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
      <img className='end' src='src\picture\IMG_0283.PNG' alt='4king' />
    </div>
  );
};

export default HomeAllocation;