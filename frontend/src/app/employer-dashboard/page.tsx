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
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
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
      id={`employer-tabpanel-${index}`}
      aria-labelledby={`employer-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `employer-tab-${index}`,
    "aria-controls": `employer-tabpanel-${index}`,
  };
}

interface JobPost {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  requirements: string;
  salary: string;
  applicants: Applicant[];
}

interface Applicant {
  id: string;
  name: string;
  email: string;
  status: "pending" | "shortlisted" | "rejected";
}

const dummyPostedJobs: JobPost[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    location: "Remote",
    description:
      "We are looking for a highly skilled Senior Frontend Developer...",
    requirements: "5+ years of React experience, strong JavaScript skills...",
    salary: "$120,000 - $150,000",
    applicants: [
      {
        id: "a1",
        name: "Alice Smith",
        email: "alice@example.com",
        status: "pending",
      },
      {
        id: "a2",
        name: "Bob Johnson",
        email: "bob@example.com",
        status: "shortlisted",
      },
      {
        id: "a3",
        name: "Charlie Brown",
        email: "charlie@example.com",
        status: "rejected",
      },
    ],
  },
  {
    id: "2",
    title: "Backend Engineer",
    company: "DataDriven Corp.",
    location: "San Francisco, CA",
    description: "Join our backend team to build scalable APIs...",
    requirements: "Node.js, Python, SQL, AWS experience...",
    salary: "$110,000 - $140,000",
    applicants: [
      {
        id: "a4",
        name: "David Lee",
        email: "david@example.com",
        status: "pending",
      },
      {
        id: "a5",
        name: "Eve Davis",
        email: "eve@example.com",
        status: "pending",
      },
    ],
  },
];

export default function EmployerDashboard() {
  const [value, setValue] = useState(0);
  const [postedJobs, setPostedJobs] = useState<JobPost[]>(dummyPostedJobs);
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");
  const [salary, setSalary] = useState("");
  const [selectedJobApplicants, setSelectedJobApplicants] = useState<
    Applicant[]
  >([]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handlePostJob = (event: React.FormEvent) => {
    event.preventDefault();
    const newJob: JobPost = {
      id: String(postedJobs.length + 1),
      title: jobTitle,
      company: companyName,
      location: location,
      description: description,
      requirements: requirements,
      salary: salary,
      applicants: [], // No applicants initially for a new job
    };
    setPostedJobs([...postedJobs, newJob]);
    // Clear form fields
    setJobTitle("");
    setCompanyName("");
    setLocation("");
    setDescription("");
    setRequirements("");
    setSalary("");
    alert("Job Posted Successfully!");
  };

  const handleViewApplicants = (jobId: string) => {
    const job = postedJobs.find((job) => job.id === jobId);
    if (job) {
      setSelectedJobApplicants(job.applicants);
      setValue(2); // Switch to the "Applicants" tab
    }
  };

  return (
    <Container component="main" maxWidth="md" sx={{ mt: 8, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 3, boxShadow: 3 }}>
        <Typography component="h1" variant="h4" gutterBottom>
          Employer Dashboard
        </Typography>

        <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="Employer Dashboard tabs"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Post a New Job" {...a11yProps(0)} />
            <Tab label="My Posted Jobs" {...a11yProps(1)} />
            <Tab label="Applicants" {...a11yProps(2)} />
          </Tabs>
        </Box>

        <CustomTabPanel value={value} index={0}>
          <Typography variant="h6" gutterBottom>
            Post a New Job
          </Typography>
          <Box
            component="form"
            onSubmit={handlePostJob}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField
              label="Job Title"
              variant="outlined"
              fullWidth
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              required
            />
            <TextField
              label="Company Name"
              variant="outlined"
              fullWidth
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
            <TextField
              label="Location"
              variant="outlined"
              fullWidth
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
            <TextField
              label="Job Description"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <TextField
              label="Requirements"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
              required
            />
            <FormControl fullWidth variant="outlined">
              <InputLabel>Salary Range</InputLabel>
              <Select
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                label="Salary Range"
                required
              >
                <MenuItem value="">Select Salary Range</MenuItem>
                <MenuItem value="$50,000 - $70,000">$50,000 - $70,000</MenuItem>
                <MenuItem value="$70,000 - $90,000">$70,000 - $90,000</MenuItem>
                <MenuItem value="$90,000 - $120,000">
                  $90,000 - $120,000
                </MenuItem>
                <MenuItem value="$120,000+">$120,000+</MenuItem>
              </Select>
            </FormControl>
            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
              Post Job
            </Button>
          </Box>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
          <Typography variant="h6" gutterBottom>
            My Posted Jobs
          </Typography>
          {postedJobs.length === 0 ? (
            <Typography>You have not posted any jobs yet.</Typography>
          ) : (
            <List>
              {postedJobs.map((job) => (
                <Card key={job.id} sx={{ mb: 2, p: 2, boxShadow: 1 }}>
                  <CardContent>
                    <Typography variant="h6">{job.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {job.company} - {job.location}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Salary: {job.salary}
                    </Typography>
                    <Box
                      sx={{
                        mt: 2,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="body2">
                        Applicants: {job.applicants.length}
                      </Typography>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => handleViewApplicants(job.id)}
                      >
                        View Applicants
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </List>
          )}
        </CustomTabPanel>

        <CustomTabPanel value={value} index={2}>
          <Typography variant="h6" gutterBottom>
            Applicants for Selected Job
          </Typography>
          {selectedJobApplicants.length === 0 ? (
            <Typography>
              Select a job from "My Posted Jobs" to view its applicants.
            </Typography>
          ) : (
            <List>
              {selectedJobApplicants.map((applicant) => (
                <Card key={applicant.id} sx={{ mb: 2, p: 2, boxShadow: 1 }}>
                  <CardContent>
                    <Typography variant="h6">{applicant.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {applicant.email}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Status: {applicant.status}
                    </Typography>
                    {/* Add more applicant details here */}
                  </CardContent>
                </Card>
              ))}
            </List>
          )}
        </CustomTabPanel>
      </Paper>
    </Container>
  );
}
