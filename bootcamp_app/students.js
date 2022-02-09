const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx',
});

// pool
//   .query(
//     `
// SELECT id, name, cohort_id
// FROM students
// LIMIT 5;
// `
//   )
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.error('query error', err.stack));

// Result {
//   command: 'SELECT',
//   rowCount: 5,
//   oid: null,
//   rows: [ ... ],
//   ...

// pool
//   .query(
//     `
// SELECT id, name, cohort_id
// FROM students
// LIMIT 5;
// `
//   )
//   .then((res) => {
//     res.rows.forEach((user) => {
//       console.log(
//         `${user.name} has an id of ${user.id} and was in the ${user.cohort_id} cohort`
//       );
//     });
//   });

//   id |       name       | cohort_id
//   ----+------------------+-----------
//     1 | Armand Hilll     |         1
//     2 | Stephanie Wolff  |         1
//     3 | Stan Miller      |         1
//     4 | Elliot Dickinson |         1
//     5 | Lloyd Boehm      |         1

// pool
//   .query(
//     `
// SELECT students.id as student_id, students.name as name, cohorts.name as cohort
// FROM students
// JOIN cohorts ON cohorts.id = cohort_id
// LIMIT 5;
// `
//   )
//   .then((res) => {
//     res.rows.forEach((user) => {
//       console.log(
//         `${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`
//       );
//     });
//   });

//   vagrant [bootcamp_app]> node students.js
// Armand Hilll has an id of 1 and was in the FEB12 cohort
// Stephanie Wolff has an id of 2 and was in the FEB12 cohort
// Stan Miller has an id of 3 and was in the FEB12 cohort
// Elliot Dickinson has an id of 4 and was in the FEB12 cohort
// Lloyd Boehm has an id of 5 and was in the FEB12 cohort

// `
// SELECT students.id as student_id, students.name as name, cohorts.name as cohort
// FROM students
// JOIN cohorts ON cohorts.id = cohort_id
// WHERE cohorts.name LIKE '%${process.argv[2]}%'
// LIMIT ${process.argv[3] || 5};
// `
// replace to following data
// const cohortName = process.argv[2];
// const limit = process.argv[3] || 5;
// const values = [`%${cohortName}%`, limit];
// const queryString

const cohortName = process.argv[2];
const limit = process.argv[3] || 5;
// Store all potentially malicious values in an array.
const values = [`%${cohortName}%`, limit];

const queryString = `
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE $1
LIMIT $2;
`;
pool
  .query(queryString, values)
  .then((res) => {
    res.rows.forEach((user) => {
      console.log(
        `${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`
      );
    });
  })
  .catch((err) => console.error('query error', err.stack));

//   vagrant [bootcamp_app]> node students.js FEB 2
//   Armand Hilll has an id of 1 and was in the FEB12 cohort
//   Stephanie Wolff has an id of 2 and was in the FEB12 cohort
