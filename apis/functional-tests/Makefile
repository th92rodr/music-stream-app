GO_CMD=go
GODOG=godog
GO_MOD=$(GO_CMD) mod
GO_GET=$(GO_CMD) get

help:
	@sed -ne '/@sed/!s/##//p' $(MAKEFILE_LIST)

run: ##
	export MODE=QUIET && $(GODOG)

run_verbose: ##
	export MODE=VERBOSE && $(GODOG)

deps: ##
	$(GO_GET) github.com/cucumber/godog/cmd/godog
	$(GO_MOD) download
	$(GO_MOD) tidy
