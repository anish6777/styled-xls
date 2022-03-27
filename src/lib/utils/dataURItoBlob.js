function dataURItoBlob(dataURI,mimeType) {
  let byteString = atob(dataURI.split(',')[1]);
  let mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
  let ab = new ArrayBuffer(byteString.length);
  let ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
  }
  let blob = new Blob([ab], {type: mimeType||mimeString});
  return blob;

}

export default dataURItoBlob;