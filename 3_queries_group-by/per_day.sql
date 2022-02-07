SELECT day, count(*) as total_assignments 
FROM assignments
GROUP BY day
ORDER BY day;

-- \i 3_queries_group-by/per_day.sql