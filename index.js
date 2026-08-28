// Package Imports
const app = require('express')

// Server Set up
const server = app()
server.listen(2007, '0.0.0.0', () => {
    console.log('Server is running in 0.0.0.0:2007...')
})