import {Box} from '@mui/material'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'


export default function Home(){
    return(
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                width: '100vw',
                height: '120vh',
                justifyContent: 'space-around',
                m: '0 auto',
                border: 'solid 2px blue',
            }}
        >


        </Box>
    )
};