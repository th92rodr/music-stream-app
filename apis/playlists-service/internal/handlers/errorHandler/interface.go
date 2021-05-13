package errorHandler

type IErrorHandler interface {
	HandleError(err error)
	IsTrustedError(err error) bool
}
