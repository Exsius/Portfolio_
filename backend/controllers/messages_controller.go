package controllers

import (
	"backend/config"
	"backend/models"
	"context"
	"log"
	"net/http"

	"github.com/labstack/echo/v4"
)

func GetMessages(c echo.Context) error {

	ctx := context.Background()

	q := models.New(config.DB)

	messages, err := q.GetMessages(ctx, 5)
	if err != nil {
		log.Println(err)
	}

	return c.JSON(http.StatusOK, messages)
}

func AddMessage(c echo.Context) error {

	ctx := context.Background()

	q := models.New(config.DB)

	_, err := q.AddMessage(ctx, models.AddMessageParams{
		Username: "test",
		Body:     "hello world",
	})
	if err != nil {
		log.Println(err)
	}

	return c.String(http.StatusOK, "added message")
}
