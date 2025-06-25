import React, { useState } from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";

const JobApplicationForm = ({ job, onSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    coverLetter: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let temp = {};
    temp.name = form.name ? "" : "Required";
    temp.email = /.+@.+\..+/.test(form.email) ? "" : "Valid email required";
    temp.coverLetter = form.coverLetter ? "" : "Required";
    setErrors(temp);
    return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      if (onSubmit) onSubmit(form);
      setForm({ name: "", email: "", coverLetter: "" });
    }
  };

  if (!job) return null;

  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: 500, mx: "auto", mt: 4 }}>
      <Typography variant="h6" mb={2}>
        Apply for: {job.title}
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Cover Letter"
          name="coverLetter"
          value={form.coverLetter}
          onChange={handleChange}
          error={!!errors.coverLetter}
          helperText={errors.coverLetter}
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Submit Application
        </Button>
      </Box>
    </Paper>
  );
};

export default JobApplicationForm;
