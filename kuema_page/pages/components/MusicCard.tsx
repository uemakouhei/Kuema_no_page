import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import AudioPlayer from './AudioPlayer';


const MediaControlCardComponent: React.FC = () => {
  const theme = useTheme();

  return (
    <Card sx={{width :"auto"}}>
      <Box sx={{  flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' ,textAlign:"center"}}>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Baby Trip
          </Typography>
        </CardContent>
        <Box sx={{ pl: 1, pb: 1 ,mr: "auto" , ml: "auto"}}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <AudioPlayer src='/BABYTRIP.mp3'/>
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
};

export default MediaControlCardComponent;
