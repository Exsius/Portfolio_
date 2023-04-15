package routes

import (
	"backend/controllers"

	"github.com/labstack/echo/v4"
)

func SetupRoutes(e *echo.Echo) error {

	e.GET("/messages", controllers.GetMessages)
	e.GET("/add", controllers.AddMessage)

	return nil
}
