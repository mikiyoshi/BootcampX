SELECT name, id, cohort_id
FROM students
WHERE end_date IS NULL
ORDER BY cohort_id;

-- \i 1_queries/currently_enrolled_students.sql