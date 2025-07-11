const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/scripts", express.static(path.join(__dirname, "scripts")));

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// In-memory employee data
let employees = [
  {
    id: 1,
    firstName: "Alice",
    lastName: "Smith",
    email: "alice@example.com",
    department: "HR",
    role: "Manager",
  },
  {
    id: 2,
    firstName: "Bob",
    lastName: "Brown",
    email: "bob@example.com",
    department: "IT",
    role: "Developer",
  },
  {
    id: 3,
    firstName: "Charlie",
    lastName: "Lee",
    email: "charlie@example.com",
    department: "Finance",
    role: "Analyst",
  },
];

let nextId = 4;

// Home route
app.get("/", (req, res) => {
  res.render("index", { employees });
});

// Add new employee form
app.get("/edit", (req, res) => {
  res.render("addEdit", { employee: null });
});

// Edit existing employee form
app.get("/edit/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const employee = employees.find(emp => emp.id === id);
  if (!employee) return res.status(404).send("Employee not found");
  res.render("addEdit", { employee });
});

// Handle form submit for add/edit
app.post("/edit", (req, res) => {
  const { empId, firstName, lastName, email, department, role } = req.body;

  if (empId) {
    // Update existing
    const index = employees.findIndex(emp => emp.id === parseInt(empId));
    if (index !== -1) {
      employees[index] = {
        id: parseInt(empId),
        firstName,
        lastName,
        email,
        department,
        role
      };
    }
  } else {
    // Add new
    employees.push({
      id: nextId++,
      firstName,
      lastName,
      email,
      department,
      role
    });
  }

  res.redirect("/");
});

// ✅ Delete employee
app.post("/delete/:id", (req, res) => {
  const id = parseInt(req.params.id);
  employees = employees.filter(emp => emp.id !== id);
  res.redirect("/");
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
