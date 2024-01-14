


// function getData(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//         if(xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 success(xhr.response);
//             } else if (xhr.status === 404) {
//                 error()
//             }
//         }
//     }

//     xhr.open('get', url)
//     xhr.send()
// }

// getData('index.html', e => console.log(e) , () => {
//     return 'oiii'
// })

// AJAX JQUERy

// $.ajax({
//     url: 'http://restapi.test/api/posts',
//     success: posts =>  console.log(posts)
// })

// VANILLA

// const posts = fetch('http://restapi.test/api/posts')
// .then(response => response.json()).then(response => console.log(response))


