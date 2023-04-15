package app

import (
	"backend/config"
	"backend/routes"
	"os"

	_ "github.com/go-sql-driver/mysql"
	"github.com/labstack/echo/v4"
)

func SetupApp() error {

	err := config.LoadEnv()
	if err != nil {
		panic(err)
	}

	// set up database
	err = config.Connect()
	if err != nil {
		panic(err)
	}

	// set up echo web framework
	e := echo.New()
	routes.SetupRoutes(e)

	port := os.Getenv("PORT")
	e.Logger.Fatal(e.Start(":" + port))

	return nil
}
