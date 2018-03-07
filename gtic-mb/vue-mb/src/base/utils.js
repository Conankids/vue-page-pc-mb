export function getParams() {
  const params = {}
  const url = location.href
  if(!url.split('?')[1]) return false
  let arr = url.split('?')[1]
  arr = arr.split('&')
  for(let i in arr){
    params[arr[i].split('=')[0]] = arr[i].split('=')[1]
  }
  return params
}

export function isIos() {
  if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) { //判断iPhone|iPad|iPod|iOS
    return true
  }
  return false
}