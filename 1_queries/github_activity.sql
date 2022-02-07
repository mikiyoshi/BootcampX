SELECT name, email, phone
FROM students
WHERE github IS NULL
AND end_date IS NOT NULL;

-- \i 1_queries/github_activity.sql