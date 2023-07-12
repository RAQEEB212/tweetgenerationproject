// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'


// ** Icon Imports
import Icon from 'src/@core/components/icon'

const CardTwitter = () => {
  return (
    <Card sx={{ border: 5, boxShadow: 0, color: 'common.white', backgroundColor: 'white' }}>
      <CardContent sx={{ p: theme => `${theme.spacing(3.25, 5, 4.5)} !important` }}>
        <Box sx={{ mr: 2, display: 'flex', alignItems: 'center'}}>
          <Avatar alt='Mary Vaughn' src='/images/avatars/6.png' sx={{ width: 34, height: 34, mr: 2.75 }} />
          <Typography variant='body2' fontWeight={650} sx={{ color: 'common.black' }}>
            Mary Vaughn
          </Typography>
          <Typography >
             @Mary Vaughn
          </Typography>

        </Box>
        <Typography variant='body2' sx={{ mb: 3, color: 'common.black' }}>
          Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as
          well.
        </Typography>

      </CardContent>
    </Card>
  )
}

export default CardTwitter
