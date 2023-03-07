import { Box, Container, Typography, Button, TextareaAutosize } from "@mui/material"
import React, { useState, useEffect } from "react"

import axios from "axios"

import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

function TextToHand() {
    const [input, setInput] = useState("")
    const [cutWordTH, setCutWordTH] = useState([])
    const [visible, setVisible] = useState(false)

    var wordList = {};

    useEffect(() => {
        handleText()
    }, [input])

    const handleText = () => {

        let config = { 'Apikey': 'rBOeYWQF1L4QEfhffQB7ubqYAJqYSWvQ' };
            
        axios.get("https://api.aiforthai.in.th/tlexplus?text=" + input, { headers: config }).then((response) => {
            console.log(response.data)
            wordList = response.data.tokens; 
            setCutWordTH(wordList);
        });
    }

    return(
        <Box
         mt={10}
         textAlign='center'
        >
            <Typography variant="h4" textAlign="center"> Text To Hand </Typography>
            <br />
            <Typography variant="h6" textAlign="center"> Text </Typography>
            <br />

            <Container textAlign='center'>
                <TextareaAutosize
                 
                 aria-label="minimum height"
                 minRows={8}
                 placeholder="Add text..."
                 style={{ width: 500 }}
                 onInput={(e)=>setInput(e.target.value)}
                />
            </Container>
            <br />

            <Container>
                <Button variant='contained' color='primary'
                    onClick={() => setVisible(visible => !visible)}
                >
                    Tranlate
                </Button>
            </Container>
            <br />

            {visible &&
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
                                // Do stuff
                            }}>
                            <source src={`video/${word}.mp4`} type="video/webm" />
                            </Video>
                        </td>
                    </tr>
                    })}
                </table>
            </center>
            }
        </Box>
    )
}

export default TextToHand