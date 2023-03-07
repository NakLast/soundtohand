import { Button, Container, Typography, Box, TextareaAutosize } from "@mui/material";
import MicIcon from '@material-ui/icons/Mic';
import React, { useState, useEffect } from "react";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import axios from 'axios';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import { red } from '@material-ui/core/colors';

const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'th-Th'

function VoiceToHand() {
  const [isListening, setIsListening] = useState(false)
  const [note, setNote] = useState(null)
  const [cutWordTH, setCutWordTH] = useState([])

  var wordList = {};

  useEffect(() => {
    handleListen();
  }, [isListening])

  const handleListen = () => {
    if (isListening) {
      mic.start()
    } else {
      mic.stop()
    }
    mic.onresult = event => {
      const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')
      setNote(transcript)

      let config = { 'Apikey': 'rBOeYWQF1L4QEfhffQB7ubqYAJqYSWvQ' };

      axios.get("https://api.aiforthai.in.th/tlexplus?text=" + transcript, { headers: config }).then((response) => {
        wordList = response.data.tokens; 
        setCutWordTH(wordList);
      });
    }
  }

    return (
        <Box
         mt={10}
         textAlign='center'
        >
            <Typography variant="h4" textAlign="center"> Voice To Hand </Typography>
            <br />
            <Typography variant="h6" textAlign="center"> Text </Typography>
            <br />

            <Container
             textAlign='center'
             sx={{
                width: 500,
                height: 100,
                border: '1px solid black',
             }}
            >
              {note}
            </Container>
            <br />

            <Container textAlign='center'>
                {isListening ? <span> <MicIcon color='action'/> </span> : <span> 
                                                                            <FiberManualRecordIcon style={{ color: red[500] }} /> 
                                                                            <MicIcon color="action" /> 
                                                                          </span>}
                <br />
                
                <Button variant='contained' color='primary'
                 onClick={() => setIsListening(prevState => !prevState)}
                >
                  Start/Stop
                </Button>
            </Container>
            <br />

            <center>
                <table border='1'>
                <tr className='row'>
                    <th width='80px; text-align=center;'>Word</th>
                    <th width='80px; text-align=center;'>Video</th>
                </tr>
                    {cutWordTH.map(word =>{
                    return <tr key={word}>
                        <td>
                            {word}
                        </td>
                        <td>
                            <Video className='Video' muted
                                   controls={['PlayPause', 'Seek', 'Time', 'Fullscreen']}
                                   onCanPlayThrough={() => {
                            }}>
                              <source src={`video/${word}.mp4`} type="video/mp4" />
                            </Video>
                        </td>
                    </tr>
                    })}
                </table>
            </center>
        </Box>
    );
}

export default VoiceToHand;