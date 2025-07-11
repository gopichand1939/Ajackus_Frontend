

## 📌 Project Objective
The goal of this project was to build a complete **Employee Directory Web Application** using **HTML, CSS, JavaScript**, and **Freemarker templates** (EJS used in implementation). The challenge focused on modern UI/UX, responsive design, filtering, sorting, pagination, and form handling — all without any backend or database logic.

---

## ✨ Features Implemented

- 🔍 **Search**: Search by employee name or email in real-time
- 🔄 **Sorting**: Sort employees by first name or department
- 📊 **Filtering**: Filter employees by department and role
- ➕ **Add/Edit Form**: Form to add or update employee data with validation
- ❌ **Delete Functionality**: Confirm before deleting an employee
- 📄 **Freemarker Templates (EJS)**: Used to dynamically render views (`index`, `addEdit`)
- 📱 **Responsive Design**: Fully works across desktop, tablet, and mobile
- 📑 **Pagination**: Supports 10/25/50 items per page using JavaScript

---

## 📁 Project Structure

```

frontend/
├─ public/              # CSS styles
├─ scripts/             # app.js, mockData.js
├─ views/               # Freemarker/EJS templates
├─ server.js            # Express server (static + routing)
└─ README.md

````

---

## 🚀 Setup Instructions

1. Clone the repo:
   ```bash
   git clone https://github.com/gopichand1939/Ajackus_Frontend.git
   cd Ajackus_Frontend
````

2. Install dependencies (only Express needed):

   ```bash
   npm install express
   ```

3. Run the app:

   ```bash
   node server.js
   ```

4. Open in browser:

   ```
   http://localhost:3000/
   ```

---

## 🧠 My Learning & Experience

* I implemented **search, sort, filter, pagination, and form validation** completely in vanilla JS.
* I learned how to properly **structure a frontend-only app using Express + Freemarker (EJS)**.
* Responsive layout and modular JS helped keep things clean.
* Implemented **DOM rendering and pagination logic manually** — no libraries used.
* Made sure all actions (edit, delete) reflect immediately by updating local in-memory array.

---

## 🧩 Challenges Faced

* ❗ Managing state between list and form (edit flow) was tricky with just local data.
* ❌ Initially forgot to link edit buttons properly — fixed by syncing form with server-side render.
* 🧪 Form validations had bugs for empty email/roles, fixed using cleaner JS logic.

---

## ✅ What Could Be Improved

* Store data in localStorage or JSON file for persistence.
* Add toasts/snackbar UI instead of alert boxes.
* Improve styling with animations or transitions.
* Separate JS logic into modules (using ES6 imports).

---

## ⏱ Timeline

* Completed within **\~7 hours total** including design, logic, and testing.
* Worked on it in short sessions and revised bugs before finalizing submission.

---

## 👨‍💻 Author

**Gopi **
Frontend Developer & Engineer
[GitHub](https://github.com/gopichand1939)





![alt text](image.png)

![alt text](image-1.png)

![alt text](image-2.png)

![alt text](image-3.png)

![alt text](image-4.png)

![alt text](image-5.png)