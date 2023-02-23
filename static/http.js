const sendHttpRequest = (method, url, data, headers) => {
    const promise = new Promise((resolve,reject) => {

        const xhr = new XMLHttpRequest();
        xhr.open(method, url);

        if (typeof headers !== 'undefined') {
            for (const [key, value] of Object.entries(headers)) {
                xhr.setRequestHeader(key,value);
            }
        }


        xhr.onload = () => {
            if(xhr.status >= 400){
                reject(xhr.response);
            }
            resolve(xhr.response);
        };

        xhr.onerror = () => {
            reject('Something went wrong!')
        }

        xhr.setRequestHeader('X-RequestedWith', 'XMLHttpRequests');
        
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');

        xhr.send(JSON.stringify(data));
                        
    });

    return promise;
};

const makeAPIButton = (method, url, data, headers, input, button, output) => {
    const getData = () => {
        if(!$(input).val())
            return;
        sendHttpRequest('GET', url + "/" + $(input).val()).then(responseData => {
            var jsonPretty = JSON.stringify(JSON.parse(responseData),null,2);  
            $(output).html(jsonPretty);
        }).catch(err => {
            $(output).html(err);
        })
    };
    
    $(button).on('click', getData);
}
