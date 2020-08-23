function easyHTTP(){
    this.http = new XMLHttpRequest();
}

easyHTTP.prototype.get = function(url, callback){
    this.http.open('GET', url, true);
    let self = this;
    this.http.onload = function(){
        if(self.http.status === 200){
            callback(null, self.http.responseText);
        }
        else{
            callback(self.http.status);
        }
    }
    this.http.send();
}

easyHTTP.prototype.post = function(url, data , callback){
    this.http.open('POST', url, true);
    let self = this;
    this.http.setRequestHeader('Content-type','application/json');
    this.http.onload = function(){
        callback(null, self.http.responseText);
    }
    this.http.send(JSON.stringify(data));
}

easyHTTP.prototype.put = function(url, data, callback){
    this.http.open('PUT', url, true);
    let self = this;
    this.http.setRequestHeader('Content-type', 'application/json');
    this.http.onload = function(){
        callback(self.http.responseText);
    }
    this.http.send(JSON.stringify(data));
}

easyHTTP.prototype.delete  = function(url, data, callback){
    this.http.open('DELETE', url, true);
    let self = this;
    this.http.setRequestHeader('Content-type', 'application/json');
    this.http.onload = function(){
        callback(null, 'removed successfully');
    }
    this.http.send(JSON.stringify(data));
}