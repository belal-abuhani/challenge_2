var text = document.getElementById("text-josn");
var subBtn =document.getElementById("submit");


var sendHttpRequest = (method, url, data) => {
    var promise = new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.responseType = 'json';
      if (data) {
        xhr.setRequestHeader('Content-Type', 'application/json');
      }
  
      xhr.onload = () => {
        if (xhr.status >= 400) {
          reject(xhr.response);
        } else {
          resolve(xhr.response);
        }
      }
  
      xhr.onerror = () => {
        reject('Something went wrong!');
      }
  
      xhr.send(data);
    })
    return promise
  }

var sendJosn = (txtJosn) => {
    sendHttpRequest('POST', 'http://127.0.0.1:3000/upload-json', txtJosn)
      .then(responseData => {
        console.log(responseData)
      })
      .catch(err => {
        console.log(err)
      })
  }

var txtJosn={}
var onChange = (e) => {
    txtJosn = e.target.value
    console.log(txtJosn)

}


 var onclick = (e)=>{
        e.preventDefault()
        console.log(txtJosn)
        sendJosn(txtJosn)
    }

text.addEventListener("change",onChange)

subBtn.addEventListener("click",onclick)