-- name: GetUsers :many
SELECT * FROM users;

-- name: GetUser :one
SELECT * FROM users WHERE id = ? LIMIT 1;



-- name: GetMessages :one
SELECT * FROM messages ORDER BY createdAt DESC LIMIT ?;

-- name: GetMessage :one
SELECT * FROM messages WHERE id = ? LIMIT 1;

-- name: AddMessage :execresult
INSERT INTO messages (username, body) VALUES (?, ?);