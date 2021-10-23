import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import "../../App.css";



export default function Letter({ currentPage, handlePageChange, setQuery }) {
  const [stateLtrNum, setStateLtrNum] = useState([]);

  useEffect(() => {
    const objLtrNum = { 0: { orgLtrNum: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" } }

    const ltrNumArray = [...objLtrNum[0].orgLtrNum]

    setStateLtrNum(ltrNumArray);

  }, [setStateLtrNum])

  const renderLtrNum = () => {
    return (
      stateLtrNum.map((character) => {
        return (
          <div key={character} className="avatarStyles" onClick={() => {setQuery(character); handlePageChange("LetterResults")}}>
            <Avatar variant="outlined" alt={character} sx={{ width: 50, height: 50, fontSize: "x-large",  backgroundColor: "royalblue" }}>{character}</Avatar>
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


