

let Api_users = "https://jsonplaceholder.typicode.com/users"


async function Mostrar_Users(api){

    try{
        let obtener = await fetch(api);
        let dato = await obtener.json();

        let caja = document.querySelector(".BOX");

        dato.forEach(element =>{
      
            let div = document.createElement("div")
            
            div.innerHTML =`

            <div class="caja1">
                <div class="circulo"></div>
                <h2 class="username">${element["username"]}</h2>            
            </div>
           
                <div class="caja2">
                    <h4>Email:${element["email"]}</h4>
                    <h4>Phone:${element["phone"]}</h4>
                    <h4>Company:${element["company"]["name"]}</h4>
                </div>
            `;
            
            div.classList.add("user_box")
            caja.appendChild(div);
        
          
        }) 
    }catch{

    }

}

Mostrar_Users(Api_users); //Ejecutando función