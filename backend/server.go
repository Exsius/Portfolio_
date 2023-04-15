package main

import "backend/app"

func main() {

	err := app.SetupApp()
	if err != nil {
		panic(err)
	}
}
