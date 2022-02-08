SELECT avg(started_at-created_at) as average_wait_time
FROM assistance_requests;


-- \i 4_queries/average_assistance_request_wait_time.sql