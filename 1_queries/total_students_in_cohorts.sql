SELECT count(id)
FROM students 
WHERE cohort_id IN (1,2,3);

-- \i 1_queries/total_students_in_cohorts.sql