const endPoint = "http://restapi.test/api/posts"
const updatePoint = "http://restapi.test/api/post/9";
const token = "34|jm69dBBMXlVPuL59VMse8r7xb9jR2gFb5bBNUEld08fca156";

const getAll = async () => {
    try{
        const request = await fetch(endPoint)

        const response = await request.json(request)

        console.log(response.data)
    } catch(err) {
        console.log(err)
    }

}
const get1 = async () => {
    try{
        const request = await fetch(updatePoint)

        const response = await request.json()

        console.log(response.data)
    } catch(err) {
        console.log(err)
    }
}



// get1()


const update = async () => {
    const updateData = {
        title: "lashfljhasdfljh",
        newsContent: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto consequatur quo optio odit repudiandae ipsa?"
       };
    try{ 
        const requestOption = {
          method: "PATCH",
          headers: {
            Accept: "application/json, */*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updateData),
        };  
        const request = await fetch(updatePoint, requestOption)

        const response = await request.json()

        console.log(response)

    }catch(err) {
        console.log(err)
    }
} 

update()