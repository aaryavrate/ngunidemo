Project created from https://github.com/ssunils/angularadmin  
To test ng-universal   with express-routes-mapper

When trying to build with custom routes, following happens:

Issue 1 - Not able to add mapper without custom webpack: It complains of following:  

Error: Cannot find module '/Users/prabhatsingh/helossr/api/ctrls/Test.js'

Issue 2- When I add the custom-webpack:   
  "builder": "@angular-builders/custom-webpack:server",   
I get following error: Seems like quotes are stripped from the values of webpack.   


Compiled successfully.
/Users/prabhatsingh/ngunidemo/dist/ngunidemo/server/main.js:219284
  if (( true && Object({"rules":Object({"0":Object({"test":/\.js$/,"use":Object({"0":Object({"loader":'file-loader',"options":Object({"name":api/ctrls/[name].js,"publicPath":((p) => p.replace("api/ctrls", ""))})})})})})}) !== null) && module.exports) {
                                                                                                                                             ^

ReferenceError: api is not defined
    at Object.<anonymous> (/Users/prabhatsingh/ngunidemo/dist/ngunidemo/server/main.js:219284:142)
    at Object../node_modules/ipaddr.js/lib/ipaddr.js (/Users/prabhatsingh/ngunidemo/dist/ngunidemo/server/main.js:219949:4)
    at __webpack_require__ (/Users/prabhatsingh/ngunidemo/dist/ngunidemo/server/main.js:20:30)
    at Object../node_modules/proxy-addr/index.js (/Users/prabhatsingh/ngunidemo/dist/ngunidemo/server/main.js:231898:14)
    at __webpack_require__ (/Users/prabhatsingh/ngunidemo/dist/ngunidemo/server/main.js:20:30)
    at Object../node_modules/express/lib/utils.js (/Users/prabhatsingh/ngunidemo/dist/ngunidemo/server/main.js:212134:17)
    at __webpack_require__ (/Users/prabhatsingh/ngunidemo/dist/ngunidemo/server/main.js:20:30)
    at Object../node_modules/express/lib/application.js (/Users/prabhatsingh/ngunidemo/dist/ngunidemo/server/main.js:208441:19)
    at __webpack_require__ (/Users/prabhatsingh/ngunidemo/dist/ngunidemo/server/main.js:20:30)
    at Object../node_modules/express/lib/express.js (/Users/prabhatsingh/ngunidemo/dist/ngunidemo/server/main.js:209091:13)

A server error has occurred.
node exited with 1 code.
