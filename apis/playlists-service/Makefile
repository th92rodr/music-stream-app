GO_CMD=go
GO_BUILD=$(GO_CMD) build
GO_CLEAN=$(GO_CMD) clean
GO_TEST=$(GO_CMD) test
GO_MOD=$(GO_CMD) mod
GO_TOOL=$(GO_CMD) tool
GO_RUN=$(GO_CMD) run

BINARY_NAME=bin

COVERAGE_FILE=coverage.out
COVERAGE_DIR=coverage

PROTO_PATH=protos
PROTO_FILE=playlists_service.proto

CONFIG_FILE=config/config.json

help:
	@sed -ne '/@sed/!s/##//p' $(MAKEFILE_LIST)

build: ##
	$(GO_BUILD) -o $(BINARY_NAME) -v

run: ##
	$(GO_RUN) main.go -config $(CONFIG_FILE)

test: ##
	$(GO_TEST) -v ./...

coverage: ##
	mkdir $(COVERAGE_DIR)
	$(GO_TEST) -coverprofile=./$(COVERAGE_DIR)/$(COVERAGE_FILE) ./...
	$(GO_TOOL) cover -html=./$(COVERAGE_DIR)/$(COVERAGE_FILE)
	rm -rf $(COVERAGE_DIR)

clean: ##
	$(GO_CLEAN)
	$(GO_CLEAN) -testcache
	rm -f $(BINARY_NAME)
	rm -rf $(COVERAGE_DIR)

deps: ##
	$(GO_MOD) download
	$(GO_MOD) tidy

generate-proto: ##
	protoc --go_out=plugins=grpc:. --go_opt=paths=source_relative ./$(PROTO_PATH)/$(PROTO_FILE)
