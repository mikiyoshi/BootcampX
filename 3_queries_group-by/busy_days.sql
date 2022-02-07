SELECT day, count(*) as total_assignments 
FROM assignments
GROUP BY day
HAVING count(*) >= 10
ORDER BY day;


-- \i 3_queries_group-by/busy_days.sql