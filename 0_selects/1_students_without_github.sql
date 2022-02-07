SELECT id, name, email, cohort_id
FROM students
WHERE github IS NULL
ORDER BY cohort_id

-- 確認方法
-- vagrant > psql
-- \i 0_selects/1_students_without_github.sql