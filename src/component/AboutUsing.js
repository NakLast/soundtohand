import React from "react";
import { Container, Typography, Box } from "@mui/material";

function AboutUsing() {

    return (
        <Box 
         mt={10} 
         textAlign='center'
        >
            <Typography variant='h4'> วิธีการใช้งาน </Typography>
            <br />
            <Container>
                <Typography variant='h6'> 1.ไปยังหน้า Learning </Typography>
                <Typography variant='h6'> 2.กดปุ่ม Start/Stop เพื่อทำการอัดเสียง </Typography>
                <Typography variant='h6'> 3.กดปุ่ม Start/Stop อีกครั้งเมื่ออัดเสร็จ </Typography>
                <Typography variant='h6'> 4.หลังจากนั้น วิดีโอก็จะแสดงให้คุณเห็นด้านล่าง </Typography>
                <Typography variant='h6'> 5.คำไหนที่ไม่มีวิดีโอขึ้น คือคำที่ยังไม่มีในระบบ </Typography>
            </Container>
        </Box>
    );
}

export default AboutUsing;