import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function ServiceCard({ title }) {
  const classes = useStyles();

  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`https://picsum.photos/id/${getRandomArbitrary(
            1,
            200
          )}/250/140`}
          title
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="p"
            style={{ textAlign: 'center' }}
          >
            11 Nov 2021
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ textAlign: 'center', marginTop: 10, marginBottom: 10 }}
          >
            {`${title}, Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quasi, tempore!`}
          </Typography>
          <Link
            to="#"
            component="div"
            style={{ textAlign: 'center', marginTop: 10, marginBottom: 10 }}
          >
            For more
          </Link>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
