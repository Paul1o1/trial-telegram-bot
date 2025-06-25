"use client";

import {
  Button,
  Container,
  Typography,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import {
  Work as WorkIcon,
  PersonSearch as PersonSearchIcon,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";
import React from "react";

export default function RoleSelectionPage() {
  const router = useRouter();

  const handleRoleSelection = (role: "job_seeker" | "employer") => {
    // In a real application, you would typically store this role in a database
    // associated with the user, and perhaps in local storage/cookies for session management.
    // For now, we'll simulate it by redirecting.
    console.log(`User selected role: ${role}`);
    if (role === "job_seeker") {
      router.push("/job-seeker-dashboard");
    } else if (role === "employer") {
      router.push("/employer-dashboard");
    }
  };

  return (
    <Container component="main" maxWidth="sm" sx={{ mt: 8, mb: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "background.paper",
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography
          component="h1"
          variant="h4"
          sx={{ mb: 3, fontWeight: "bold" }}
        >
          Choose Your Role
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          align="center"
          sx={{ mb: 4 }}
        >
          Please select whether you are looking for a job or looking to hire
          talent. This helps us personalize your experience.
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 3,
            flexDirection: { xs: "column", sm: "row" },
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Card
            variant="outlined"
            sx={{
              p: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flexGrow: 1,
              cursor: "pointer",
              "&:hover": {
                borderColor: "primary.main",
                boxShadow: 1,
              },
            }}
            onClick={() => handleRoleSelection("job_seeker")}
          >
            <PersonSearchIcon
              sx={{ fontSize: 60, color: "primary.main", mb: 2 }}
            />
            <CardContent
              sx={{ textAlign: "center", p: 0, "&:last-child": { pb: 0 } }}
            >
              <Typography variant="h6" component="div" sx={{ mb: 1 }}>
                Job Seeker
              </Typography>
              <Typography variant="body2" color="text.secondary">
                I am looking for a job.
              </Typography>
            </CardContent>
            <Button
              variant="contained"
              sx={{ mt: 2 }}
              onClick={() => handleRoleSelection("job_seeker")}
            >
              Find Jobs
            </Button>
          </Card>

          <Card
            variant="outlined"
            sx={{
              p: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flexGrow: 1,
              cursor: "pointer",
              "&:hover": {
                borderColor: "secondary.main",
                boxShadow: 1,
              },
            }}
            onClick={() => handleRoleSelection("employer")}
          >
            <WorkIcon sx={{ fontSize: 60, color: "secondary.main", mb: 2 }} />
            <CardContent
              sx={{ textAlign: "center", p: 0, "&:last-child": { pb: 0 } }}
            >
              <Typography variant="h6" component="div" sx={{ mb: 1 }}>
                Employer
              </Typography>
              <Typography variant="body2" color="text.secondary">
                I am looking to hire.
              </Typography>
            </CardContent>
            <Button
              variant="contained"
              color="secondary"
              sx={{ mt: 2 }}
              onClick={() => handleRoleSelection("employer")}
            >
              Post a Job
            </Button>
          </Card>
        </Box>
      </Box>
    </Container>
  );
}
