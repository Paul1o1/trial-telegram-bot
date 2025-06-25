"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Container,
  Paper,
  TextField,
  Button,
} from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function JobSeekerDashboard() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container component="main" maxWidth="md" sx={{ mt: 8, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 3, boxShadow: 3 }}>
        <Typography component="h1" variant="h4" gutterBottom>
          Job Seeker Dashboard
        </Typography>

        <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="Job Seeker Dashboard tabs"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Profile" {...a11yProps(0)} />
            <Tab label="Recommended Jobs" {...a11yProps(1)} />
            <Tab label="Applications" {...a11yProps(2)} />
            <Tab label="Shortlisted" {...a11yProps(3)} />
            <Tab label="Rejected" {...a11yProps(4)} />
          </Tabs>
        </Box>

        <CustomTabPanel value={value} index={0}>
          <Typography variant="h6" gutterBottom>
            Profile Information
          </Typography>
          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <Typography variant="subtitle1" sx={{ mt: 2, mb: 1 }}>
              Contact Information
            </Typography>
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              defaultValue="John Doe"
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              defaultValue="john.doe@example.com"
            />
            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              defaultValue="+1234567890"
            />
            <TextField
              label="Location"
              variant="outlined"
              fullWidth
              defaultValue="New York, NY"
            />

            <Typography variant="subtitle1" sx={{ mt: 3, mb: 1 }}>
              Professional Headline
            </Typography>
            <TextField
              label="Headline"
              variant="outlined"
              fullWidth
              defaultValue="Experienced Software Engineer seeking new opportunities"
            />

            <Typography variant="subtitle1" sx={{ mt: 3, mb: 1 }}>
              Summary/Objective
            </Typography>
            <TextField
              label="Professional Summary"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              defaultValue="Highly motivated and results-oriented software engineer with 5+ years of experience in developing web applications. Proficient in React, Node.js, and database management."
            />

            <Typography variant="subtitle1" sx={{ mt: 3, mb: 1 }}>
              Work Experience
            </Typography>
            <Box sx={{ border: "1px dashed #ccc", p: 2, borderRadius: 1 }}>
              <Typography variant="body2" color="text.secondary">
                No work experience added yet.
                <Button size="small" sx={{ ml: 1 }}>
                  Add Experience
                </Button>
              </Typography>
            </Box>

            <Typography variant="subtitle1" sx={{ mt: 3, mb: 1 }}>
              Education
            </Typography>
            <Box sx={{ border: "1px dashed #ccc", p: 2, borderRadius: 1 }}>
              <Typography variant="body2" color="text.secondary">
                No education added yet.
                <Button size="small" sx={{ ml: 1 }}>
                  Add Education
                </Button>
              </Typography>
            </Box>

            <Typography variant="subtitle1" sx={{ mt: 3, mb: 1 }}>
              Skills
            </Typography>
            <TextField
              label="Skills (e.g., React, Node.js, Python)"
              variant="outlined"
              fullWidth
              defaultValue="React, Node.js, JavaScript, Python, SQL, Git, AWS"
            />

            <Typography variant="subtitle1" sx={{ mt: 3, mb: 1 }}>
              Links
            </Typography>
            <TextField
              label="LinkedIn Profile"
              variant="outlined"
              fullWidth
              defaultValue="https://linkedin.com/in/johndoe"
            />
            <TextField
              label="Portfolio Website"
              variant="outlined"
              fullWidth
              defaultValue="https://johndoeportfolio.com"
            />
            <TextField
              label="GitHub Profile"
              variant="outlined"
              fullWidth
              defaultValue="https://github.com/johndoe"
            />

            <Button variant="contained" sx={{ mt: 4, alignSelf: "flex-end" }}>
              Save Profile
            </Button>
          </Box>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
          <Typography variant="h6">Recommended Jobs</Typography>
          <Typography>
            This section will display job recommendations based on your profile.
          </Typography>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={2}>
          <Typography variant="h6">My Applications</Typography>
          <Typography>
            View all your submitted job applications here.
          </Typography>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={3}>
          <Typography variant="h6">Shortlisted Applications</Typography>
          <Typography>
            See jobs for which your application has been shortlisted.
          </Typography>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={4}>
          <Typography variant="h6">Rejected Applications</Typography>
          <Typography>
            Review jobs for which your application was rejected.
          </Typography>
        </CustomTabPanel>
      </Paper>
    </Container>
  );
}
