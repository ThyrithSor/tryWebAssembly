# My first play with web assembly

By spending long hours looking for how to start, I can finally run my compiled C function on web browser

## What to do with these bunch of files
Nothing to do with them. Just try to create more C functions and see its performance.

It is also possible for other programming languages such as C++, TypeScript, Rust, etc. However, it might not work for my case.

## How to make it works
*   Create `C` files in `/wasm` directory.\
    ***Note:*** that the file name and function name must be the same
*   Run my custom script `npm run compilec`.\
    ***Note:*** you need to install compiler from [webassembly offical website](https://webassembly.org)
*   The script will create `.wasm` file and `.js` file in the same directory
*    Fetch the wasm file in html script
*    Set function to `window` instance
*    Call the function
*    Run `http-server` to host it.\
    ***Note:*** you might need to run `npm install -g http-server`