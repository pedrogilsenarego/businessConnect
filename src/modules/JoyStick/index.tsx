import { Grid } from "@mui/material";
import Cube from "./components/Cube";
import Arrow from "./components/Arrow";
import useJoyStick from "./useJoyStick";

const JoyStick = () => {
  const { move, setMove } = useJoyStick()

  return (
    <div style={{ position: "absolute" }}>
      <Grid container justifyContent='center'>
        <Grid item>
          <Arrow position="up" setMove={setMove} />
        </Grid>
      </Grid>
      <Grid container alignItems='center'>
        <Grid item>
          <Arrow position="left" setMove={setMove} />
        </Grid>
        <Grid item>
          <Cube move={move} setMove={setMove} />
        </Grid>
        <Grid item>
          <Arrow position="right" setMove={setMove} />
        </Grid>
      </Grid>
      <Grid container justifyContent='center'>
        <Grid item>
          <Arrow position="down" setMove={setMove} />
        </Grid>
      </Grid>
    </div>
  );
};

export default JoyStick;
