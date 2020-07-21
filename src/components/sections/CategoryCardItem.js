import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styles from './styles/categoryCard.module.css';

const CategoryCardItem = ({ index, large, image, title, size }) => {
  return (
    <div key={index} className={styles.root}>
      <Card className={styles.item}>
        <CardActionArea>
          <CardMedia
            image={image}
            style={{
              zIndex: 10,
              height: 150,
            }}
            title='Contemplative Reptile'
          />
          <CardContent className={styles.BottomContent}>
            <Typography
              gutterBottom
              variant='h6'
              className={styles.title}
              component='h6'
            >
              {title}
            </Typography>
            <Typography variant='body2' component='p'>
              {'(' + size + ')'} songs
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default CategoryCardItem;
