package main

import (
	"os"

	"functional-tests/steps"

	"github.com/cucumber/godog"
)

func InitializeTestSuite(ctx *godog.TestSuiteContext) {
	ctx.BeforeSuite(func() {})
}

func InitializeScenario(ctx *godog.ScenarioContext) {
	ctx.BeforeScenario(func(*godog.Scenario) {})

	steps.InitializeScenario(ctx, getExecutionMode())
}

func getExecutionMode() string {
	mode := os.Getenv("MODE")

	if mode == "" {
		return "QUIET"
	}

	return mode
}
