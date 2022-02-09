const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx',
});

// SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
// FROM teachers
// JOIN assistance_requests ON teacher_id = teachers.id
// JOIN students ON student_id = students.id
// JOIN cohorts ON cohort_id = cohorts.id
// WHERE cohorts.name = '${process.argv[2] || 'JUL02'}'
// ORDER BY teacher;

// const limit = process.argv[2] || 'JUL02';
// const values = [limit];
// const queryString

const limit = process.argv[2] || 'JUL02';
const values = [limit];

const queryString = `
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = $1
ORDER BY teacher;
`;
pool
  .query(queryString, values)
  .then((res) => {
    res.rows.forEach((user) => {
      console.log(`${user.cohort} ${user.teacher}`);
    });
  })
  .catch((err) => console.error('query error', err.stack));

// vagrant [bootcamp_app]> node teachers.js
// JUL02 Cheyanne Powlowski
// JUL02 Georgiana Fahey
// JUL02 Helmer Rodriguez
// JUL02 Jadyn Bosco
// JUL02 Roberto Towne
// JUL02 Rosalyn Raynor
// JUL02 Talon Gottlieb
// JUL02 Waylon Boehm
