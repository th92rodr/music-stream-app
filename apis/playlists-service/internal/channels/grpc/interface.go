package grpc

type IGrpcChannel interface {
	Start()
	Stop()
}
