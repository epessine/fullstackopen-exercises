browser->server: HTTP POST /exampleapp/new_notes

note over server:
    server receives form data and pushes 
    it to the array notes, return 
    redirecting the browser to '/notes'
end note

browser->server: HTTP GET /exampleapp/notes
server-->browser: HTML-code
browser->server: HTTP GET /exampleapp/main.css
server-->browser: main.css
browser->server: HTTP GET /exampleapp/main.js
server-->browser: main.js

note over browser:
    browser executes main.js and
    requests data.json from server
    this time with the new note added 
    after the POST request
end note

browser->server: HTTP GET /exampleapp/data.json
server-->browser: data.json

note over browser:
    browser executes the event handler
    that renders notes to display
end note