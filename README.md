# fssys

npm module to read write folder/files, fs util functions, traverse files and folder using code, or cli, or use glob patterns

Find the demos in the [demos folder](./demos)

### APIs fssys

APIs to read write folder/files, fs util functions, traverse files and folder using code, or cli, or use glob patterns

# APIs fssys

- fssys functions
  - [\_isinbuilt](#isinbuilt), [\_createFolders](#createfolders), [\_writeFile](#writefile)
- traverse-fs functions
  - [search](#search), [filter](#filter), [regex](#regex), [dir](#dir), [returnNestedArray](#returnnestedarray), [returnFlatArray](#returnflatarray), [returnJSON](#returnjson), [cliargs](#cliargs)
- cli

### fssys functions

##### .\_isinbuilt

Usage: 

```
._isinbuilt(mod)
```

##### .\_createFolders

Usage: 

```
._createFolders(localGitDir)
```

##### .\_writeFile

Usage: 

```
._writeFile(localPath, data, options)
```

## traverse-fs functions

[traverse-fs](https://www.npmjs.com/package/traverse-fs) functions, traverse files and folder using code, or cli, or use glob patterns

##### .search

Usage: 

```
.search(d, r, cb, pe, pef, type, options)
```

##### .filter

Usage: 

```
.filter(d, r, cb, pe, pef, type, options)
```

##### .regex

Usage: 

```
.regex(d, r, cb, pe, pef, type, options)
```

##### .dir

Usage: 

```
.dir(directory, recursive, fetchModifierCallback, handleProcessExit, errorHandler, type, options)
```

##### .returnNestedArray

Usage: 
```
.returnNestedArray(directory, recursive, fetchModifierCallback, handleProcessExit, errorHandler, type, options)
```

##### .returnFlatArray

Usage: 

```
.returnFlatArray(directory, recursive, fetchModifierCallback, handleProcessExit, errorHandler, type, options)
```

##### .returnJSON

Usage: 

```
.returnJSON(directory, recursive, fetchModifierCallback, handleProcessExit, errorHandler, type, options)
```

##### .cliargs

Usage: 

```
.cliArgs(argList)
```

#### .callbacks.\_\_\_

`defaultFetch` 

Usage: 

```
.callbacks.defaultFetch(directory, fileDirent)
```

`jsonFetch` 

Usage: 

```
.callbacks.jsonFetch(directory, fileDirent)
```

`errorHandler` 

Usage: 

```
.callbacks.errorHandler(error)
```

`search` 

Usage: 

```
.callbacks.search(d, f, searchPattern, flag)
```

`searchFiles` 

Usage: 

```
.callbacks.searchFiles(d, f, searchPattern, flag)
```

`searchFolder` 

Usage: 

```
.callbacks.searchFolder(d, f, searchPattern, flag)
```

#### .utils.\_\_\_

read write folder/files

`_isinbuilt` 

Usage: 

```
.utils._isinbuilt(mod)
```

`_createFolders` 

Usage: 

```
.utils._createFolders(localGitDir)
```

`_writeFile` 

Usage: 

```
.utils._writeFile(localPath, data, options)
```

`_registerNodeCache` 

Usage: 

```
.utils._registerNodeCache(localGitFileCacheUrl, options)
```

`_writeFile` 

Usage: 

```
.utils._writeFile(localPath, data, options)
```





### Contributions

Contributions, Feature Improvements, Bugs, and Issues are invited. [raising an issue](https://github.com/traverse-fs/fssys/issues)

# License

[MIT License](./LICENSE)
