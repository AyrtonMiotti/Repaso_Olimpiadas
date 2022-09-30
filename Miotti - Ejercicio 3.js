function encript(message){
  let mensaje = []
  let newMessage = ""
  let arr1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'].sort(function() { return Math.random() - 0.5 });
  let arr2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  mensaje = message.split('');
  for(let x = 0; x < mensaje.length; x++){
    for(let i = 0; i < arr1.length; i++){
      if(mensaje[x] == arr1[i]){
        newMessage = newMessage + arr2[i];
      }
    }
  }
  console.log('\n Texto plano: ' + message + '\n Texto cifrado: ' + newMessage);
} 

for(let i = 0; i<10; i++){
  encript("abcdefghijklmnñopqrstuvwxyz")
}