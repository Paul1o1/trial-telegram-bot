import React, { useState } from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";

const JobPostForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    company: "",
    location: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let temp = {};
    temp.title = form.title ? "" : "Required";
    temp.description = form.description ? "" : "Required";
    temp.company = form.company ? "" : "Required";
    temp.location = form.location ? "" : "Required";
    setErrors(temp);
    return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      if (onSubmit) onSubmit(form);
      setForm({ title: "", description: "", company: "", location: "" });
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: 500, mx: "auto", mt: 4 }}>
      <Typography variant="h5" mb={2}>
        Post a Job
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          label="Job Title"
          name="title"
          value={form.title}
          onChange={handleChange}
          error={!!errors.title}
          helperText={errors.title}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Description"
          name="description"
          value={form.description}
          onChange={handleChange}
          error={!!errors.description}
          helperText={errors.description}
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <TextField
          label="Company"
          name="company"
          value={form.company}
          onChange={handleChange}
          error={!!errors.company}
          helperText={errors.company}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Location"
          name="location"
          value={form.location}
          onChange={handleChange}
          error={!!errors.location}
          helperText={errors.location}
          fullWidth
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Post Job
        </Button>
      </Box>
    </Paper>
  );
};

export default JobPostForm;
