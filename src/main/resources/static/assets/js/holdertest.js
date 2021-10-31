// var holder = document.getElementById('holder'),
//     state = document.getElementById('status');
//
// if (typeof window.FileReader === 'undefined') {
//     state.className = 'fail';
// } else {
//     state.className = 'success';
//     state.innerHTML = '';
// }
//
// holder.ondragover = function () { this.className = 'hover'; return false; };
// holder.ondragend = function () { this.className = ''; return false; };
// holder.ondrop = function (e) {
//     this.className = '';
//     e.preventDefault();
//
//    var file = e.dataTransfer.files[0],
//        reader = new FileReader();
//
//    console.log("file"+file)
//    console.log("reader"+reader)
//
//     reader.onload = function (event) {
//         console.log("event.target"+event.target);
//         holder.style.background = 'url(' + event.target.result + ') no-repeat center';
//         console.log(holder.style.background)
//         console.log(holder.style)
//
//     console.log(file);
//     reader.readAsDataURL(file);
//     console.log(reader.readAsDataURL(file))
//
//     const imageBase64 = reader.readAsDataURL(file);
//
//     const decodImg = atob(imgBase64.split(',')[1]);
//
//     console.log(imgBase64)
//
//     let array = [];
//     for (let i = 0; i < decodImg.length; i++) {
//         array.push(decodImg.charCodeAt(i));
//     }
//
//     const file = new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
//     const fileName = 'canvas_img_' + new Date().getMilliseconds() + '.jpg';
//     let formData = new FormData();
//     formData.append('file', file, fileName);
//
//     console.log("formData"+ formData)
//     console.log(formData.get('file'))
//
//
//     async function uploadCanvas() {
//
//         const response = await axios.post('/uploadCanvas', formData,
//             {cache: false,
//                 processData: false,
//                 data:formData,
//                 contentType: false}
//         )
//         const data = response.data
//
//
//         showUploadCanvas(data)
//
//     }
//
//
//
//
//     uploadCanvas()
//
// }
//
//
// function showUploadCanvas(arr){
//
//     console.log('--------------------------------')
//     console.log(arr)
//
//     let str = "";
//
//     for(let i = 0; i < arr.length; i++){
//
//         const obj = arr[i];
//
//         var fileCallPath =  encodeURIComponent( obj.savePath+ "/h_"+obj.uuid +"_"+obj.fileName)
//
//         str +=
//             `<li data-path=${obj.savePath} data-uuid=${obj.uuid} data-filename=${obj.fileName} data-selfdrawing="true"><div>
//                   <span>${obj.fileName}</span>
//                  <button type='button' data-file=${fileCallPath} data-type='image' class='btn btn-warning btn-circle'><i class='fa fa-times'></i></button><br>
//                  <img src='/display?fileName=${fileCallPath}'>
//                  </div>
//                  </li>`
//
//     }
//
//     //console.log(str)
//     uploadUL.innerHTML += str
//
//
// }
//
//
//
