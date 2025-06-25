import React from "react";
import { Box, Button, Typography, Paper, Stack } from "@mui/material";

const JobList = ({ jobs, onApply }) => {
  return (
    <Box sx={{ maxWidth: 700, mx: "auto", mt: 4 }}>
      <Typography variant="h5" mb={2}>
        Available Jobs
      </Typography>
      <Stack spacing={2}>
        {jobs.length === 0 ? (
          <Typography>No jobs available.</Typography>
        ) : (
          jobs.map((job, idx) => (
            <Paper key={idx} elevation={2} sx={{ p: 2 }}>
              <Typography variant="h6">{job.title}</Typography>
              <Typography variant="subtitle1">
                {job.company} - {job.location}
              </Typography>
              <Typography variant="body2" mb={1}>
                {job.description}
              </Typography>
              <Button variant="outlined" onClick={() => onApply(job)}>
                Apply
              </Button>
            </Paper>
          ))
        )}
      </Stack>
    </Box>
  );
};

export default JobList;
