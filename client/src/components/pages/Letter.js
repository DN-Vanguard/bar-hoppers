import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <div className="alphabetContainer">
      <Box className="buttonStyles">
        <Button variant="outlined">A</Button>
        <Button variant="outlined">B</Button>
        <Button variant="outlined">C</Button>
        <Button variant="outlined">D</Button>
        <Button variant="outlined">E</Button>
        <Button variant="outlined">F</Button>
      </Box>
      <Box className="buttonStyles">
        <Button variant="outlined"sx={{width: 40, height:40}}>G</Button>
        <Button variant="outlined">H</Button>
        <Button variant="outlined">I</Button>
        <Button variant="outlined">J</Button>
        <Button variant="outlined">K</Button>
        <Button variant="outlined">L</Button>
      </Box>
      <Box className="buttonStyles">
        <Button variant="outlined">M</Button>
        <Button variant="outlined">N</Button>
        <Button variant="outlined">PP</Button>
        <Button variant="outlined">P</Button>
        <Button variant="outlined">Q</Button>
        <Button variant="outlined">R</Button>
      </Box>
      <Box className="buttonStyles">
        <Button variant="outlined">S</Button>
        <Button variant="outlined">T</Button>
        <Button variant="outlined">U</Button>
        <Button variant="outlined">V</Button>
        <Button variant="outlined">W</Button>
        <Button variant="outlined">X</Button>
      </Box>
      <Box className="buttonStyles">
        <Button variant="outlined">Y</Button>
        <Button variant="outlined">Z</Button>
        <Button variant="outlined">0</Button>
        <Button variant="outlined">1</Button>
        <Button variant="outlined">2</Button>
        <Button variant="outlined">3</Button>
      </Box>
      <Box className="buttonStyles">
        <Button variant="outlined">4</Button>
        <Button variant="outlined">5</Button>
        <Button variant="outlined">6</Button>
        <Button variant="outlined">7</Button>
        <Button variant="outlined">8</Button>
        <Button variant="outlined">9</Button>
      </Box>
    </div>
  );
}