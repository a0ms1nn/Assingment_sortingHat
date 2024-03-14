import React, { useState } from 'react';

function random() {
  const [n, setN] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const numberN = parseInt(n, 10);
    if (isNaN(numberN)) {
      alert('กรุณากรอกจำนวนเต็ม');
    } else {
      // ดำเนินการต่อกับจำนวน N ที่ผู้ใช้งานกรอกเข้ามา
      console.log('จำนวน N ที่ผู้ใช้งานกรอกเข้ามา:', numberN);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          กรอกจำนวน N:
          <input
            type="number"
            value={n}
            onChange={(event) => setN(event.target.value)}
          />
        </label>
        <button type="submit">ส่ง</button>
      </form>
    </div>
  );
}

export default App;