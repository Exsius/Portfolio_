// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.17.0

package models

import (
	"database/sql"
)

type Message struct {
	ID        int64        `json:"id"`
	Username  string       `json:"username"`
	Body      string       `json:"body"`
	Createdat sql.NullTime `json:"createdat"`
}

type User struct {
	ID int64 `json:"id"`
}