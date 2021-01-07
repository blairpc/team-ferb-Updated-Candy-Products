import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Collapse } from '@material-ui/core';



const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background: "rgba(0,0,0,0.5)",
    margin: "20px",
  },
  media: {
    height: 440,
  },
  title: {
      fontFamily: "Nunito",
      fontWeight: "bold",
      fontSize: "2rem",
      color: "#fff",
  },
  desc: {
      fontFamily: "Nunito",
      fontsize: "1.1rem",
      color: "#ddd",
  
  }   
  
});

export default function ImageCard({candy, checked}) {
  const classes = useStyles();

  return (
      <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
    <Card className={classes.root}> 
    <Button
           className={classes.button}
            href={candy.button}
           Link
         >
    <CardActionArea>
        
        <CardMedia
          className={classes.media}
          image={candy.imageUrl}
          title="Simply Sweet"
        />
        <CardContent>
          <Typography 
          gutterBottom variant="h5" 
          component="h2" 
          className={classes.title}
          >
         {candy.title}
          </Typography>
          <Typography 
          variant="body2" 
          color="textSecondary" 
          component="p" 
          className={classes.desc}
          >
         {candy.description} 
          </Typography>
        </CardContent>
        
          </CardActionArea>
        </Button>
    </Card> 
    </Collapse>
  );
}