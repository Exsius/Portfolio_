package app

func SetupAndRunApp() error {

	err := config.LoadENV()
	if err != nil {
		return err
	}

}
