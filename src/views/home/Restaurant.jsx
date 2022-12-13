import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchRestaurant } from 'restuarant/store/restaurant.action';
export default function Restaurant() {
  const dispatch = useDispatch();
  const restaurants = useSelector((state)=> state.Restaurant.restaurants);
  
  useEffect(() => {
    dispatch(fetchRestaurant());
  }, []);
  useEffect(() => {
    console.log(restaurants)
  }, [restaurants]);

  const navigate = useNavigate()

  const handleMenu =() => {

    navigate('/Menu')

}

  return (
    <div >
      <div style={{ display: 'grid', margin: '0px 250px', 'grid-template-columns': 'auto auto' }}>
        {
          restaurants?.map((rest) => {
            return (
              <Card style={{ margin: '50px 50px', maxWidth: 400 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={rest.store_image}
                  alt="restaurant image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <h3>{rest.store_name}</h3>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <h5>{rest.store_address}</h5>
                    <h5>{rest.store_city}-{rest.store_zip}</h5>
                    <h5>{rest.store_state}</h5>
                    <h5>{rest.store_phone}</h5>
                  </Typography>
                </CardContent>
                <CardActions>

                  <div>

                    <Button onClick={() => {

                      handleMenu()

                    }}>Menu</Button>

                  </div>

                </CardActions>
              </Card>
              // </Paper>
            )
          })
        }
      </div>
    </div>
  );
}    
  

