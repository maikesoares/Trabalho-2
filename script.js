
let pessoas, index;

 function gravaPessoa(nome, email, telefone){
  
  pessoas =document.getElementById("tbPessoas");
  
  const qtdeLinhas= pessoas.rows.length;
  const linha= pessoas.insertRow(qtdeLinhas);
  
  const cellID= linha.insertCell(0);
  const cellNome= linha.insertCell(1);
  const cellEmail= linha.insertCell(2);
  const cellTelefone= linha.insertCell(3);
  
  cellID.innerHTML=qtdeLinhas;
  cellNome.innerHTML= nome;
  cellEmail.innerHTML= email;
  cellTelefone.innerHTML=telefone;
  
  percorrerLinhas();
  
}

function percorrerLinhas(){
  
  for(let i=0; i< pessoas.rows.length; i++){
    
    pessoas.rows[i].onclick= function(){
      
      index =this.rowIndex;
      document.getElementById("txtID").value=pessoas.rows[index].cells[0].innerText;
      document.getElementById("txtNome").value=pessoas.rows[index].cells[1].innerText;
      document.getElementById("txtEmail").value=pessoas.rows[index].cells[2].innerText;
      document.getElementById("txtTelefone").value=pessoas.rows[index].cells[3].innerText;
      
      
    }
    
  }
  
}

  
  function excluiDados (){
  
  for(let i=0; i< pessoas.rows.length; i++) {
    
    if(index == i){
      
      pessoas.deleteRow(index);
      return;
      
    }
  }
}