import React, { useState } from "react";
import JobPostForm from "./components/JobPostForm";
import JobList from "./components/JobList";
import JobApplicationForm from "./components/JobApplicationForm";
import {
  AppBar,
  Tabs,
  Tab,
  Box,
  Toolbar,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";

function App() {
  const [tab, setTab] = useState(0);
  const [jobs, setJobs] = useState([
    {
      title: "Frontend Developer",
      description: "Build and maintain web interfaces.",
      company: "Tech Corp",
      location: "Remote",
    },
    {
      title: "Backend Engineer",
      description: "Develop robust backend services.",
      company: "DataSoft",
      location: "New York",
    },
  ]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleTabChange = (e, newValue) => {
    setTab(newValue);
    setSelectedJob(null);
  };

  const handlePostJob = (job) => {
    setJobs([job, ...jobs]);
    setSnackbar({
      open: true,
      message: "Job posted successfully!",
      severity: "success",
    });
    setTab(1); // Switch to job list after posting
  };

  const handleApply = (job) => {
    setSelectedJob(job);
    setTab(2); // Switch to application form
  };

  const handleApplicationSubmit = (application) => {
    setSnackbar({
      open: true,
      message: "Application submitted!",
      severity: "success",
    });
    setSelectedJob(null);
    setTab(1); // Go back to job list
  };

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Job Portal
          </Typography>
        </Toolbar>
        <Tabs value={tab} onChange={handleTabChange} centered>
          <Tab label="Post a Job" />
          <Tab label="Job Listings" />
          <Tab label="Apply" disabled={!selectedJob} />
        </Tabs>
      </AppBar>
      <Box sx={{ mt: 2 }}>
        {tab === 0 && <JobPostForm onSubmit={handlePostJob} />}
        {tab === 1 && <JobList jobs={jobs} onApply={handleApply} />}
        {tab === 2 && selectedJob && (
          <JobApplicationForm
            job={selectedJob}
            onSubmit={handleApplicationSubmit}
          />
        )}
      </Box>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default App;
