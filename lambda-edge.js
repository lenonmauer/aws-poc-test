let cache = new Date().getTime()



exports.handler = (event, ctx, callback) => {
    const request = event.Records[0].cf.request

    const headerName = 'X-Date-Now'
    request.headers[headerName.toLowerCase()] = [{ key: headerName, value: 'custom-header' }];

    console.log('request payload preview')
    console.log(request)

    console.log('now')
    console.log(cache)

    callback(null, request)
};
