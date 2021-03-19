browser->server: HTTP GET /exampleapp/spa
server-->browser: HTML-code
browser->server: HTTP GET /exampleapp/main.css
server-->browser: main.css
browser->server: HTTP GET /exampleapp/spa.js
server-->browser: main.js

note over browser:
    browser executes spa.js and
    requests data.json from server
end note

browser->server: HTTP GET /exampleapp/data.json
server-->browser: data.json

note over browser:
    browser executes event handler
    that renders notes to display
end note

browser: Submit Form

note over browser:
    browser executes event handler
    that prevents default form submit,
    adds the note to the notes object
    and redraws the notes
end note

browser->server: HTTP POST /exampleapp/new_note_spa
server-->browser: [{"message": "note created"}]