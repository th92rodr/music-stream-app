FROM golang:1.16-buster
WORKDIR /src
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -o app .
CMD go run cmd/initDatabase.go -config config/config.json && export GOLANG_PROTOBUF_REGISTRATION_CONFLICT=warn && ./app -config config/config.json