module.exports = function check(str, bracketsConfig) {
  if((str.length)%2 != 0) return false;
  let arrStr = str.split('');
  let buff = [];
  let flag = false;
  
  for(let i=0; i< arrStr.length ; i++ ){
      for (let j=0; j< bracketsConfig.length ; j++ ){
        if (arrStr[i] == bracketsConfig[j][0]){
            if(bracketsConfig[j][0] == bracketsConfig[j][1] && flag){
                flag=true;
            } else buff.push(arrStr[i]);
        }
        if(arrStr[i] == bracketsConfig[j][1] && buff[buff.length-1] == bracketsConfig[j][0]){
            if(bracketsConfig[j][0] == bracketsConfig[j][1] && !flag){
                flag=true;
            }else {
                buff.pop();
                if(bracketsConfig[j][0] == bracketsConfig[j][1])flag=false;
            }
        }
      }
  }

  return buff.length == 0;
}
