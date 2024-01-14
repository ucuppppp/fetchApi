const endPoint = "http://restapi.test/api/posts"
const endPoint2 = "http://restapi.test/api/post"
const endPointLogin = "http://restapi.test/api/login";
const endPointLogout = "http://restapi.test/api/logout";
const token = "34|jm69dBBMXlVPuL59VMse8r7xb9jR2gFb5bBNUEld08fca156";
const isi = document.querySelector('tbody')
// fetch(endpoint)
//   .then((response) => response.json())
//   .then(data => console.log(data))
// let postData = []


// async function hitAPI(){
//     try{
//         const api = await fetch(endPoint)
//         const {data} = await api.json()
//         // console.log(data)
//         loadPostData(data)
//     }catch (err){
//         console.log(err)
//     }
    
// }
    
//     const loadPostData = (data) => {
//         let no = 1;
//         const output = data.map((e) => {
//             return `
//             <tr>
//             <td>`+(no++)+`</td>
//             <td>${e.title}</td>
//             <td>${e.image}</td>
//             <td>${e.content}</td>
//             <td>${e.waktuDibuat}</td>
//             </tr>
//             `
//         }).join('')
//         // console.log(output)
//         isi.innerHTML = output;
//     }


// hitAPI()

// Membuat objek yang akan dikirim sebagai body permintaan
// const dataToSend = {
//   email: "jeff.treutel@example.net",
//   password: "password"
// };

// // Mengonversi objek menjadi string JSON
// const jsonData = JSON.stringify(dataToSend);

// // Memastikan bahwa string JSON yang dihasilkan adalah benar
// console.log(jsonData); // Melihat isi string JSON sebelum dikirim

// // Kemudian, melakukan permintaan dengan menggunakan fetch
// const endpoint = "http://restapi.test/api/login";

// fetch(endpoint, {
//   method: "POST",
//   headers: {
//     Accept: "application/json, text/plain, */*",
//     "Content-Type": "application/json"
//   },
//   body: jsonData // Mengirimkan data JSON yang telah disiapkan
// })
//   .then((response) => console.log(response))
//   .then(data => console.log(data))
//   .catch(err => {
//     console.log(err);
//   });


//   async function loginUser() {
//     const dataToSend = {
//       email: "jeff.treutel@example.net",
//       password: "password",
//     };

//     try {
//       const response = await fetch("http://restapi.test/api/login", {
//         method: "POST",
//         headers: {
//           Accept: "application/json, text/plain, */*",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(dataToSend),
//       });

//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }

//       const data = await response.json();
//       console.log(data); // Menampilkan data respons dari permintaan login

//       // Lakukan sesuatu dengan data, seperti menyimpan token
//     } catch (error) {
//       console.error("There was a problem with the login request:", error);
//     }
//   }

//   // Panggil fungsi loginUser untuk melakukan permintaan login
//   loginUser();





// const getData = async () => {
//     try {
//         const fetchh = await fetch("http://restapi.test/api/posts")
//         const datas = await fetchh.json()
//         console.log(datas)
//     } catch (err) {
//         console.log(err)
//     }
// }

// getData()


const login = async () => {
    const dataLogin = {
      email: "12@gmail.com",
      password: "password",
    };
    try {
      const requestOption = {
        method: "POST",
        headers: {
          Accept: "application/json, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataLogin),
      };
        const response = await fetch(endPointLogin, requestOption);
        const token = await response.json()
        console.log(token)
    } catch (err){
        console.log(err)
    }
}


// const logout = async () => {
//   try{
//   $logout = await fetch(endPointLogout, {
//     method:"POST",
//     headers:{
//       'Content-Type':'application/json',
//       'Authorization':`Bearer ${token}`
//     }
//   });
// } catch (err){
//   console.log(err)
// }
// }


const create = async () => {
  const form = document.querySelector(".myForm");
  const title = document.querySelector("#title");
  const newsContent = document.querySelector("#newsContent");
  const imageInput = document.querySelector("#image"); 
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title.value);
    formData.append("newsContent", newsContent.value);
    // imageInput.files[0];
    formData.append("image", imageInput.files[0]);
    // console.log(imageInput.files)

    try {
      const request = await fetch(endPoint2, {
        method: "POST",
        headers: {
          Accept: "application/json, */*",
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const response = await request.json();
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  });
};

const update = async () => {
  const form = document.querySelector(".myForm");
  const title = document.querySelector("#title");
  const newsContent = document.querySelector("#newsContent");
  const imageInput = document.querySelector("#image"); 
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title.value);
    formData.append("newsContent", newsContent.value);
    // imageInput.files[0];
    formData.append("image", imageInput.files[0]);
    // console.log(imageInput.files)

    try {
      const request = await fetch(endPoint2, {
        method: "POST",
        headers: {
          Accept: "application/json, */*",
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const response = await request.json();
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  });
};



// login()
// create()
// hitAPI()