package main

import (
	"net/http"

	"io/ioutil"

	"fmt"

	"github.com/gin-gonic/gin"
)

func getHandler(c *gin.Context) {
	c.String(http.StatusOK, "Hello world")
}

func postHandler(c *gin.Context) {
	body, _ := ioutil.ReadAll(c.Request.Body)
	reqBody := string(body)

	fmt.Print(reqBody)

	c.String(http.StatusCreated, reqBody)
}

func main() {
	router := gin.Default()

	router.GET("/data", getHandler)
	router.POST("/api", postHandler)

	router.Run()
}
