import React from "react";
import { Grid, Avatar, Typography } from "@material-ui/core";
function SingleBirthday({ name, age }) {
  return (
    <Grid container direction="column" className="p-6 border-b-2">
      <Grid container item spacing={3}>
        <Grid item>
          <Avatar alt="Remy Sharp" src="https://picsum.photos/200" />
        </Grid>
        <Grid item>
          <Grid item direction="column" container spacing={1}>
            <Typography variant="h6" color="initial">
              {name}
            </Typography>
            <Typography variant="subtitle1" color="initial">
              {age}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SingleBirthday;
