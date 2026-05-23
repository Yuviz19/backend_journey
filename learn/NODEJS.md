[> [!NOTE]
> 
> All the stuff that we did till now with JS,
> - it was all done within the browser
]

# NODEJS
- it is a cross platform runtime environment (an environment where a program runs) that allows us to execute JS outside of browser.
- now we only need to install node and use the libraries and import them to our code base.
- npm -> it is a package manager that is used to install more, multiple libraries.


## Notes for the todo app

### using the fs module (file system)

> importing fs -> "const fs = require('fs')"

#### Read from a file. (.json file)
- to load stuff from a file, synchronously..
- we use dataBuffer = fs.readFileSync(/filePath);
    - this returns a raw binary file, called the data buffer.

- now we need to convert this into string, usually called as dataJSON
    - dataJSON = dataBuffer.toString();

- now we need to parse this dataJSON, to convert to JS object.
    - JSON.parse(dataJSON)

#### Writing to a file.
- we need to get the data back to string
    - const dataJSON = JSON.stringify(tasks)

- now write to file,
    - fs.writeFileSync(filePath, dataJSON)

## also using the process module
  - this does not need any importing
- using process.argv
  1. node command is the process.argv[0]
  2. file path is the process.argv[1]
  3. all other commands start from 3rd index
