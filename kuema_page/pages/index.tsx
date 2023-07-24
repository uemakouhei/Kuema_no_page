import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import MarkdownToJSX from 'markdown-to-jsx';
import Link from 'next/link';
import Image from 'next/image';
import TITLEIMG from './KOUHEIUEMA.svg';
import { Button, Card, Dialog, DialogContent, Paper, Stack, Tab, Typography } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import MediaControlCardComponent from './components/MusicCard';
import { useState } from 'react';
import JIKUU from "../public/TimeInverted-逆さの時空.jpeg";
interface HomeProps {
  bioContent: string;
}
interface TabProps {
  label: string;
  open : boolean;
  onClickTab : any
}

const TabButton: React.FC<TabProps> = ({ label ,onClickTab}) => {
  return (
    <motion.button
      onClick={onClickTab}
      whileHover={{ scale: 1.0, rotate: 15 }}
      whileTap={{ scale: 1.8, rotate: -25 }}
      style={{ fontSize: "1.0rem" ,margin:"auto" , textAlign:"center"}}
    >
      {label}
    </motion.button>
  );
};


const MusicComponent: React.FC<TabProps> = ({ label ,open}) => {
  return (
    <motion.div
      initial={{x: -1000}} animate={{ x: 0}}  transition={{ duration: 1.5 }}
      style={{ fontSize: "1.0rem" ,margin:"auto" , textAlign:"center" ,width:"auto" ,height:250}}
    >
      <MediaControlCardComponent />
    </motion.div>
  );
};


const Home: React.FC<HomeProps> = ({ bioContent }) => {
  const [open , setOpen] = useState<Boolean>(false);
  function HomeTabButton(label: String) {
    <motion.button
      whileHover={{ scale: 1.2, rotate: 15 }}
      whileTap={{
        scale: 0.8,
        rotate: -90,
        borderRadius: "100%"
      }} style={{ fontSize: "2.0rem" }}>{label}</motion.button>
  }
  return (
    <motion.div style={{ width: "100vw" }} initial={{x : -1000}} animate={{x:0}}>
      <Typography variant='h3' sx={{textAlign:"center"}} >KOUHEI UEMA</Typography>
      <motion.div
        initial={{ scale: 0, y: -360 }}
        animate={{ y: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
       
      >
           {open ? (
            <motion.div
            initial={{x: -1000}} animate={{ x: 0}}  transition={{ duration: 1.5 }}
            style={{ fontSize: "1.0rem" ,margin:"auto" , textAlign:"center" ,width:250 ,height:250}}
          >
              <Typography variant='caption'>Time Inverted: 逆行の時波</Typography>
              <motion.div
      whileHover={{ scale: 1.0, rotate: 15 }}
      whileTap={{ scale: 2.0, rotate: 0 }}
      style={{ fontSize: "1.0rem" ,margin:"auto" , textAlign:"center"}}
    >
             <Image src={JIKUU} alt="sakasanojikuu"  height={250} />
             </motion.div>
             <MusicComponent label='Fav' open={open} />
             <Button sx={{ ml: "auto" , mr : "auto"}}color="error" onClick={() => setOpen(false)}>閉じる</Button>
             </motion.div>
          ) : (  <Image
            style={{margin:"auto"}}
           alt="kouhei uema"
           width={250}
           height={250} src={TITLEIMG} ></Image>)}
      </motion.div>
     
     
      <Stack spacing={10} sx={{display : open ? "none" : ""}}>
          <Typography sx={{textAlign: "center"}} variant='h6' >My Creations!</Typography> 
          <TabButton label='Art & Music' onClickTab={() => setOpen(true)}/>
          <TabButton label='App'/>
          <TabButton label='Game' />
          <Link href="/Galireo" >
        SNSページへ
      </Link>
      </Stack>
    </motion.div>
  );
};

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'bio.md');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { content } = matter(fileContent);

  return {
    props: {
      bioContent: content,
    },
  };
}

export default Home;
