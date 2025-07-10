const tableData = document.getElementById("table-data");
const errMsg = document.getElementById("err-msg");

async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    tableData.innerHTML = "";

    
    
    data.map((user) => {
      setTimeout(() => {
        tableData.innerHTML += `
            <tr>
             <td>${user.name}</td>
                <td>${user.email}</td>
                 <td>${user.address.city}</td>
            </tr>
               
            `;
      }, 5000);
      
    });
  } catch (err) {
    errMsg.innerText = err.message;
    console.log("Error :", err.message);
  } finally {
    document.getElementById("loader-container").style.display = "none";
  }
}

fetchData();
