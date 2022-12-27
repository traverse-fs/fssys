# fssys
npm module to read write folder/files, fs util functions, traverse files and folder using code, or cli, or use glob patterns

# APIs fssys
APIs to read write folder/files, fs util functions, traverse files and folder using code, or cli, or use glob patterns


Find the demos in the [demos folder](./demos)


## traverse-fs functions
[traverse-fs](https://www.npmjs.com/package/traverse-fs) functions, traverse files and folder using code, or cli, or use glob patterns


#### .search
Usage: .search(d, r, cb = searchCallback, pe, pef, type = "flatarray", options = { search: "all", text: [] })


#### .filter
Usage: .filter(d, r, cb = searchCallback, pe, pef, type = "flatarray", options = { search: "all", text: [] })


#### .regex
Usage: .regex(d, r, cb = searchCallback, pe, pef, type = "flatarray", options = { regex: "all", pattern: null, text: [] })


#### .dir
Usage: .dir(directory, recursive, fetchModifierCallback, handleProcessExit, errorHandler, type, options = { before: () => { }, after: () => { } })


#### .returnNestedArray
Usage: .returnNestedArray(directory, recursive, fetchModifierCallback = defaultFetch, handleProcessExit, errorHandler, type = "nestedarray", options)


#### .returnFlatArray
Usage: .returnFlatArray(directory, recursive, fetchModifierCallback = defaultFetch, handleProcessExit, errorHandler, type = "flatarray", options)


#### .returnJSON
Usage: .returnJSON(directory, recursive, fetchModifierCallback = defaultJSONFetch, handleProcessExit, errorHandler, type = "json", options)


#### .cliargs
Usage: .cliArgs(argList)


#### .callbacks._________

`defaultFetch` Usage: .callbacks.defaultFetch(directory, fileDirent)


`jsonFetch` Usage: .callbacks.jsonFetch(directory, fileDirent)


`errorHandler` Usage: .callbacks.errorHandler(error)


`search` Usage: .callbacks.search(d, f, searchPattern, flag = undefined)


`searchFiles` Usage: .callbacks.searchFiles(d, f, searchPattern, flag = undefined)


`searchFolder` Usage: .callbacks.searchFolder(d, f, searchPattern, flag = undefined)


#### .fsutils._________
read write folder/files


`_isinbuilt` Usage: .fsutils._isinbuilt(mod)


`_createFolders` Usage: .fsutils._createFolders(localGitDir)


`_writeFile` Usage: .fsutils._writeFile(localPath, data, options)


`_registerNodeCache` Usage: .fsutils._registerNodeCache(localGitFileCacheUrl, options)



### Contributions

Contributions, Feature Improvements, Bugs, and Issues are invited. [raising an issue](https://github.com/traverse-fs/fssys/issues)


# License

[MIT License](./LICENSE)
