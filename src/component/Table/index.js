// // render() {
// //   return (<div>
// //   {this.state.people.map((person, index) => (
// //       <p key={index}>Hello, {person.name} from {person.country}!</p>
// //   ))}
// //   </div>);
// // }

// let a1 = [
//   {
//     "EmpID":1,
//     "EmpName" :"Antim",
//     "nickname": "ant" 
//   },
//   {
//     "EmpID":2,
//     "EmpName" :"anamika", 
//     "nickname": "anu" 
//     } ,
//     {
//       "EmpID":3,
//       "EmpName" :"anu", 
//       "nickname": "anu" 
//       } 
// ]

// let a2 = [
//   {
//     "EmpID":1,
//     "Designation" :"doctor", 
//   },
//   {
//     "EmpID":2,
//     "Designation" :"nurse", 
//     } 
// ]

// const merge = (arr1, arr2) => {
//   const temp = []

//   arr1.map(x => {
//     arr2.map(y => {
//       if (x.EmpID === y.EmpID) {
//         temp.push({ ...x, ...y })
//       }
//     })
//   })

//   return temp
// }

// console.log(merge(a1, a2))



//   Read employee list from employee json 
// Ex : [{EmpID:1,EmpName :name1,Designation :'doctor', nickname: nickname 1},
//                          {EmpID:2,EmpName :name2, Designation :'nurse', nickname: nickname 2} ]
// •             Grade list shared by manager from grade json 
// Ex: [{EmpID:1, grade :'A'},
//        {EmpID:2, grade :'B'},
//       {EmpID:3, grade :'C'}]
                 
// Save the below list of data into databaseSend the same to UI
//                 Display the employee list grade wise in UI
//                 Nurses list
//                 Doctors list
// Note : Display the nick name only if  the number of characters in employee name is more than 25 characters, otherwise display the name
