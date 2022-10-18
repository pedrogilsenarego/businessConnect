import { Typography, Grid, Box } from "@mui/material"
import { Colors } from "../../constants/pallette"

const Home = () => {
  return (
    <>
      <Grid container alignItems="center" justifyContent="center" style={{ height: "100vh", width: "100vw", backgroundColor: Colors.BACKGROUND_COLOR }}>
        <Box style={{ backgroundColor: "lightBlue", padding: "10px", borderRadius: "5px" }}>
          <Typography style={{ fontSize: "34px", fontWeight: 800 }}>Connect your business to the digital world</Typography>
        </Box>
      </Grid>
    </>
  )
}

export default Home