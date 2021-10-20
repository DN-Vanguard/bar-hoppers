import React, { useEffect, useState } from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';


export default function Letter({ currentPage, handlePageChange }) {
  const [stateLtrNum, setStateLtrNum] = useState([]);

  useEffect(() => {
    const objLtrNum = { 0: { orgLtrNum: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" } }

    const ltrNumArray = [...objLtrNum[0].orgLtrNum]

    setStateLtrNum(ltrNumArray);

  }, [setStateLtrNum])

  // console.log(stateLtrNum);

  const renderLtrNum = () => {
    return (
      stateLtrNum.map((character) => {
        return (
          <div key={character} className="buttonStyles" onClick={() => handlePageChange(character)}>
            <Avatar alt={character} sx={{ width: 50, height: 50, zIndex: -1, fontSize: "x-large" }}>{character}</Avatar>
          </div>
        )
      }))
  };

  return (
    <div className="alphabetContainer">
      {renderLtrNum()}
    </div>
  );
}


