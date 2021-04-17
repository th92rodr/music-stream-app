package config

import (
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
)

func Initialize() {
	initVariables()
}

func initVariables() {
	GrpcPort = viper.GetString("channels.grpc.port")

	DatabaseHost = viper.GetString("database.host")
	DatabasePort = viper.GetString("database.port")
	DatabaseUser = viper.GetString("database.user")
	DatabasePassword = viper.GetString("database.password")
	DatabaseName = viper.GetString("database.name")
	DatabaseKind = viper.GetString("database.kind")
}
