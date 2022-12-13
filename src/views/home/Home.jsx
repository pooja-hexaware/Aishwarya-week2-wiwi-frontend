import React from 'react'
import { styled } from '@mui/system'
import { SimpleCard } from 'components'
import { useSelector } from 'react-redux'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
//import Restaurant from 'views/restaurant/Restaurant'
const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    },
}))
const Home = () => {
    // const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleRestaurant =() => {
        navigate('/restaurant')
    }
    const loading = useSelector((state) => state.loading)
    return <Container>
        <SimpleCard title=" Good Food,Great Time" style={{margin: '50%'}}>
                {loading ? (
                    'Loading...'
                ) : (
                    <div >
                        Our chef's at wiwi make delicious food selections every week-you pick,we cook and deliver
                    </div>
                )}
            </SimpleCard>
            <div>
                <Button onClick={() => {
                    handleRestaurant()
                }}>Restaurant</Button>
            </div>
    </Container>
}
export default Home