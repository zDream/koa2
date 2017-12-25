var xmlhttp;
var formdata;
var key_;
self.onmessage = function (event) {
    key_ = event.data.file_name
    formdata = new FormData()
    for (var key in event.data) {
        formdata.append(key, event.data[key])
    }
    loadXMLDoc()
}

function loadXMLDoc() {
    xmlhttp = new XMLHttpRequest();
    if (xmlhttp != null) {
        xmlhttp.onload = state_Change;
        xmlhttp.open("POST", "fileUpload", true);
        xmlhttp.send(formdata);
    }
    else {
        alert("Your browser does not support XMLHTTP.");
    }
}

function state_Change() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {// 4 = "loaded"
        self.postMessage(key_)
    } else {
        self.postMessage('fail')
        alert("Problem retrieving XML data");
    }
}





