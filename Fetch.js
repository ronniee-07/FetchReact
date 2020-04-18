const Fetch = props => {
    const [posts, setPost] = React.useState([]);

    // const url = 'https://stg-api2.vserv.com/index.php/demand/vmap/index'S
    // sessionStorage.get('token':'0p8t8r7oa0cl9395ps6qrjov27^_#720601')
    
    React.useEffect(()=>{
        // const myHeaders = new Headers({
        //     'Content-Type': 'application/json',
        //     'Authorization': JSON.stringify('token':'0p8t8r7oa0cl9395ps6qrjov27^_#720601'),
        // });

        // const url = 'https://stg-api2.vserv.com/index.php/demand/vmap/index'
        // fetch(url,{
        //     method : "GET",
        //     headers : myHeaders,
        //     mode : 'cors',
        // })
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 0p8t8r7oa0cl9395ps6qrjov27^_#720601',
                'My-Custom-Header': 'foobar'
            },
            body: JSON.stringify({ title: 'VMAP User data' })
        };
        fetch('https://stg-api2.vserv.com/index.php/demand/vmap/index', requestOptions)
        .then((data) => {
            console.log('success');
            console.log(data);
             setPost([null]);
        })
        .catch(err =>{
            console.log("Error 404 Not Found..",err);
        });
        
        // fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        // .then((response) => {
        //     if(response.ok){
        //         return response.json();
        //     }else{
        //         throw new Error("Something went wrong")
        //     }          
        // })
        // .then((data) => {
        //     console.log(data);
        //     setPost(data);
        // })
        // .catch(err =>{
        //     console.log("Error 404 Not Found..",err);
        // });
    },[]);

    return(
        React.createElement("div", null,
        React.createElement("h1", null, "User Data"),
        // React.createElement(Input, {
        //     id : 'userInput',
        //     change : handleChange
        // }),
        React.createElement(FetchData, {
            data: posts
        }))
    )
}

const Input = props => {
    return (
            React.createElement("input", {
            type: "text",
            id: "myInput",
            onChange: props.change,
            placeholder: "Search for names.."
            })
        )
};

const FetchData = props => {
    const renderData = () => {
      return props.data.map(user => {
         const { userId, id, title, body } = user 
         return (
           React.createElement("tr", {key: id}, 
           React.createElement("td", null, userId), 
           React.createElement("td", null, id), 
           React.createElement("td", null, title), 
           React.createElement("td", null, body))
         )
      })
   }

   const renderHeader = () => {    
         return (
            React.createElement("tr", null, 
            React.createElement("th", null, "User ID"), //vmap_key : VMAP ID
            React.createElement("th", null, "ID"), //developer : DEVELOPER
            React.createElement("th", null, "Name"), //interval : NO. OF INTERVALS
            React.createElement("th", null, "Authority")) //ID : ACTION
         )
      }
    
    return(
        React.createElement("div", null, 
        // React.createElement("h1", null, "User Data"),
        React.createElement("table", {className: "table table-bordered"},
        React.createElement("thead", null, renderHeader()), 
        React.createElement("tbody", {id: "search"}, renderData())))
        )
}

ReactDOM.render(
  React.createElement(Fetch, null),
  document.getElementById('source')
);


