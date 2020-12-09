import { Grid, Container, Button, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";

import SingleBirthday from "./SingleBirthday";

const birthdays = [
  {
    name: "Mark",
    age: "21 years",
  },
  {
    name: "Bob",
    age: "35 years",
  },
  {
    name: "Mike",
    age: "24 years",
  }
];

export default function Home() {
  const [TheNumberOfBirthdays, setTheNumberOfBirthdays] = useState([]);

  useEffect(() => {
    setTheNumberOfBirthdays(birthdays);
    return () => {
      setTheNumberOfBirthdays([]);
    };
  }, []);
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className="h-screen overflow-hidden bg-gray-100"
    >
      <Grid item>
        <Typography
          variant="h2"
          color="initial"
        >{`There are ${TheNumberOfBirthdays.length} birthdays`}</Typography>
      </Grid>
      <Container
        className="overflow-auto bg-white rounded-md max-h-3/4"
        maxWidth="sm"
        disableGutters
      >
        {
          TheNumberOfBirthdays.map((birth) => (
            <SingleBirthday name={birth.name} age={birth.age} />
          ))}

        <Button
          variant="contained"
          color="secondary"
          fullWidth
          style={{ marginTop: "0.5rem", position: "sticky", bottom: "0" }}
          onClick={() => {
            setTheNumberOfBirthdays([]);
          }}
        >
          Clear All
        </Button>
      </Container>
    </Grid>
  );
}
