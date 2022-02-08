SELECT day, count(*) as number_of_assignments, sum(duration) as duration
FROM assignments
GROUP BY day
ORDER BY day;


-- \i 4_queries/total_assignments_and_duration.sql