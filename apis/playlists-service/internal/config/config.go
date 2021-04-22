package config

import (
	"flag"
	"fmt"

	"github.com/spf13/viper"
)

var (
	GrpcPort string

	DatabaseHost     string
	DatabasePort     string
	DatabaseUser     string
	DatabasePassword string
	DatabaseName     string
	DatabaseKind     string

	MusicsServiceAddress string
)

func Initialize() {
	configFile := getConfigFile()

	viper.SetConfigFile(configFile)
	if err := viper.ReadInConfig(); err != nil {
		panic(fmt.Sprintf("Failed to read config file: %+v", err))
	}

	initVariables()
}

func getConfigFile() string {
	var configFile string

	flag.StringVar(&configFile, "config", "", "Configuration file")
	flag.Parse()

	return configFile
}

func initVariables() {
	GrpcPort = viper.GetString("channels.grpc.port")

	DatabaseHost = viper.GetString("database.host")
	DatabasePort = viper.GetString("database.port")
	DatabaseUser = viper.GetString("database.user")
	DatabasePassword = viper.GetString("database.password")
	DatabaseName = viper.GetString("database.name")
	DatabaseKind = viper.GetString("database.kind")

	MusicsServiceAddress = viper.GetString("integrations.musics_service_address")
}
