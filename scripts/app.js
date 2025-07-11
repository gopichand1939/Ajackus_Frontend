let employees = [];
const rawData = document.getElementById("employee-data")?.getAttribute("data-employees");
if (rawData) {
  employees = JSON.parse(rawData);
}
let filteredEmployees = [...employees];
let currentPage = 1;
let itemsPerPage = 10;

function renderEmployees(list) {
  const container = document.getElementById("employee-list");
  const paginationContainer = document.getElementById("pagination-buttons");
  if (!container || !paginationContainer) return;

  const totalPages = Math.ceil(list.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedList = list.slice(startIndex, endIndex);

  container.innerHTML = "";
  paginatedList.forEach((emp) => {
    const card = document.createElement("div");
    card.className = "employee-card";
    card.innerHTML = `
      <h3>${emp.firstName} ${emp.lastName}</h3>
      <p><strong>Email:</strong> ${emp.email}</p>
      <p><strong>Department:</strong> ${emp.department}</p>
      <p><strong>Role:</strong> ${emp.role}</p>
      <button onclick="editEmployee(${emp.id})">Edit</button>
      <form method="POST" action="/delete/${emp.id}" onsubmit="return confirm('Delete this employee?');">
        <button type="submit">Delete</button>
      </form>
    `;
    container.appendChild(card);
  });

  paginationContainer.innerHTML = "";
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if (i === currentPage) btn.classList.add("active");
    btn.addEventListener("click", () => {
      currentPage = i;
      renderEmployees(filteredEmployees);
    });
    paginationContainer.appendChild(btn);
  }
}

function applyFilters() {
  const search = document.getElementById("searchInput")?.value.toLowerCase() || "";
  const dept = document.getElementById("filterByDept")?.value || "";
  const role = document.getElementById("filterByRole")?.value || "";
  const sort = document.getElementById("sortBy")?.value || "";

  filteredEmployees = employees.filter((emp) => {
    const matchesSearch =
      emp.firstName.toLowerCase().includes(search) ||
      emp.lastName.toLowerCase().includes(search) ||
      emp.email.toLowerCase().includes(search);
    const matchesDept = dept ? emp.department === dept : true;
    const matchesRole = role ? emp.role === role : true;

    return matchesSearch && matchesDept && matchesRole;
  });

  if (sort === "firstName") {
    filteredEmployees.sort((a, b) => a.firstName.localeCompare(b.firstName));
  } else if (sort === "department") {
    filteredEmployees.sort((a, b) => a.department.localeCompare(b.department));
  }

  currentPage = 1;
  renderEmployees(filteredEmployees);
}

function editEmployee(id) {
  window.location.href = `/edit/${id}`;
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("searchInput")?.addEventListener("input", applyFilters);
  document.getElementById("sortBy")?.addEventListener("change", applyFilters);
  document.getElementById("filterByDept")?.addEventListener("change", applyFilters);
  document.getElementById("filterByRole")?.addEventListener("change", applyFilters);
  document.getElementById("itemsPerPage")?.addEventListener("change", (e) => {
    itemsPerPage = parseInt(e.target.value);
    currentPage = 1;
    renderEmployees(filteredEmployees);
  });

  renderEmployees(filteredEmployees);
});
