import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rendo Jobs - Find Your Next Opportunity",
  description: "Connecting talent with opportunity in the modern job market.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppBar position="static" sx={{ bgcolor: "#1976d2" }}>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontWeight: "bold" }}
            >
              Rendo Jobs
            </Typography>
            <Box>
              <Link href="/login" passHref>
                <Button
                  color="inherit"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  Login
                </Button>
              </Link>
              <Link href="/signup" passHref>
                <Button
                  color="inherit"
                  sx={{ color: "white", fontWeight: "bold", ml: 1 }}
                >
                  Sign Up
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
        {children}
      </body>
    </html>
  );
}
