import {
  Button,
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Icon,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import {
  Home as HomeIcon,
  Work as WorkIcon,
  PersonSearch as PersonSearchIcon,
} from "@mui/icons-material";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
      {/* Hero Section */}
      <section className="relative w-full py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex flex-col items-center justify-center text-center px-4">
        <Container maxWidth="md">
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            className="font-extrabold leading-tight"
          >
            Your Future Starts Here.
          </Typography>
          <Typography
            variant="h5"
            component="p"
            className="mt-4 max-w-2xl mx-auto opacity-90"
          >
            Connect with top companies or find the perfect talent for your team.
            Rendo Jobs makes it simple.
          </Typography>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/jobs" passHref>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className="bg-white text-blue-600 hover:bg-gray-100 transition-all duration-200 shadow-lg"
                sx={{ px: 4, py: 1.5, borderRadius: "9999px" }}
              >
                Find Jobs (Job Seeker)
              </Button>
            </Link>
            <Link href="/employer/post-job" passHref>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-200"
                sx={{ px: 4, py: 1.5, borderRadius: "9999px" }}
              >
                Post a Job (Employer)
              </Button>
            </Link>
          </div>
        </Container>
        {/* Optional: Add an image/illustration here */}
        <Box
          className="mt-12 w-full max-w-xl md:max-w-3xl lg:max-w-4xl"
          sx={{ height: { xs: 150, sm: 200, md: 250 } }}
        ></Box>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-16 px-4 bg-white dark:bg-gray-800">
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            className="font-bold mb-10"
          >
            How Rendo Jobs Works
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid component="div">
              <Card
                elevation={3}
                sx={{
                  p: 4,
                  textAlign: "center",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Icon
                  component={PersonSearchIcon}
                  sx={{ fontSize: 60, color: "primary.main", mb: 2 }}
                />
                <Typography variant="h5" gutterBottom className="font-semibold">
                  For Job Seekers
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Browse a wide range of job opportunities, get personalized
                  recommendations, and apply directly through our streamlined
                  forms. Track your applications with ease.
                </Typography>
                <Box sx={{ mt: 3 }}>
                  <Link href="/jobs" passHref>
                    <Button variant="text" color="primary">
                      Browse Jobs
                    </Button>
                  </Link>
                </Box>
              </Card>
            </Grid>
            <Grid component="div">
              <Card
                elevation={3}
                sx={{
                  p: 4,
                  textAlign: "center",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Icon
                  component={WorkIcon}
                  sx={{ fontSize: 60, color: "secondary.main", mb: 2 }}
                />
                <Typography variant="h5" gutterBottom className="font-semibold">
                  For Employers
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Post your job openings to a vibrant community of
                  professionals. Manage applicants, review profiles, and find
                  the perfect match for your team efficiently.
                </Typography>
                <Box sx={{ mt: 3 }}>
                  <Link href="/employer/post-job" passHref>
                    <Button variant="text" color="secondary">
                      Post a Job
                    </Button>
                  </Link>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Key Features Section (simple example) */}
      <section className="w-full py-16 px-4 bg-gray-100 dark:bg-gray-900">
        <Container maxWidth="md">
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            className="font-bold mb-10"
          >
            Why Choose Rendo Jobs?
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {[
              "Intuitive Interface",
              "Personalized Matching",
              "Easy Application Process",
              "Efficient Applicant Tracking",
            ].map((feature, index) => (
              <Grid key={index} component="div">
                <Card
                  elevation={1}
                  sx={{
                    p: 2,
                    textAlign: "center",
                    bgcolor: "background.paper",
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" className="font-medium">
                      {feature}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>

      {/* Final Call to Action */}
      <section className="w-full py-16 px-4 bg-blue-500 text-white text-center">
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom className="font-bold">
            Ready to Get Started?
          </Typography>
          <Typography variant="body1" className="mt-4 mb-8 opacity-90">
            Join Rendo Jobs today and take the next step in your career or
            hiring journey.
          </Typography>
          <Link href="/signup" passHref>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              className="bg-white text-blue-600 hover:bg-gray-100 transition-all duration-200 shadow-lg"
              sx={{ px: 6, py: 1.5, borderRadius: "9999px" }}
            >
              Sign Up Now
            </Button>
          </Link>
        </Container>
      </section>

      <footer className="py-6 text-center text-gray-500 dark:text-gray-400 w-full">
        © 2023 Rendo Jobs. All rights reserved.
      </footer>
    </div>
  );
}
