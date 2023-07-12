// ** Demo Components Imports
import Grid from '@mui/material/Grid'
import CardTwitter from "../../views/ui/cards/basic/CardTwitter";


const DashBoardTwittercard = () => {
  return (
    <Grid container spacing={6}>
      {
        [1,2,3,4,5,6,7,8].map((itm,idx)=>{
          return (
            <Grid key={idx} item xs={12} sm={6} md={7}>
              <CardTwitter />
            </Grid>
          );
        })
      }

    </Grid>



  )
}

export default DashBoardTwittercard




