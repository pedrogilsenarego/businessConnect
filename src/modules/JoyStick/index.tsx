import { Grid } from "@mui/material";
import Cube from "./components/Cube";
import Arrow from "./components/Arrow";
import useJoyStick from "./useJoyStick";

interface Props {
  page: "home" | "whoWeAre"
  setPage: (page: "home" | "whoWeAre") => void
}

const JoyStick = ({ page, setPage }: Props) => {
  const { move, setMove } = useJoyStick()

  return (
    <Grid container justifyContent="flex-end" style={{ position: "absolute", padding: "2%" }}>
      <Grid item>
        <Grid container justifyContent='center'>
          <Grid item>
            <Arrow position="up" setMove={setMove} page={page} setPage={setPage} />
          </Grid>
        </Grid>
        <Grid container alignItems='center'>
          <Grid item>
            <Arrow position="left" setMove={setMove} page={page} setPage={setPage} />
          </Grid>
          <Grid item>
            <Cube move={move} setMove={setMove} />
          </Grid>
          <Grid item>
            <Arrow position="right" setMove={setMove} page={page} setPage={setPage} />
          </Grid>
        </Grid>
        <Grid container justifyContent='center'>
          <Grid item>
            <Arrow position="down" setMove={setMove} page={page} setPage={setPage} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default JoyStick;
