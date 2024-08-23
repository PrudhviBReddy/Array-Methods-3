import './App.css';

function App() {

  let groupOfFriends=["Prudhvi", "Vamshi", "Shiva", "Shashi", "Pranay", "Sridhar", "RajKumar"];


  return (
    <div className="App">
      <h1>Array Methods and Properties</h1> 

      <button type="button" onClick={()=>{
        console.log(groupOfFriends.length);
        console.log(groupOfFriends[2]);
        for(let i=0; i<groupOfFriends.length; i++){
          console.log(groupOfFriends[i]);
        }
      }}>Length</button>

      <button type="button" onClick={()=>{
         for(let i=0; i<groupOfFriends.length; i++){
          console.log(groupOfFriends.at(i));
        }
      }}>Array at</button>

      <button type="button" onClick={()=>{
        console.log(groupOfFriends.toString());
      }}>toString</button>

      <button type="button" onClick={()=>{
        console.log(groupOfFriends.join(" | "))
      }}>join</button>

      <button type="button" onClick={()=>{
        delete groupOfFriends[5];
        console.log(groupOfFriends);
      }}>delete</button>

      <button type="button" onClick={()=>{
        groupOfFriends.pop();
        console.log(groupOfFriends);
      }}>Pop</button>

      <button type="button" onClick={()=>{
        groupOfFriends.shift();
        console.log(groupOfFriends);
      }}>Shift</button>

      <button type="button" onClick={()=>{
        groupOfFriends.push("Reddy");
        console.log(groupOfFriends);
      }}>Push</button>

      <button type="button" onClick={()=>{
        groupOfFriends.unshift();
        console.log(groupOfFriends);
      }}>Unshift</button>

      <button type="button" onClick={()=>{
        groupOfFriends.splice(3,0, "Praveen", "Laxman");
        console.log(groupOfFriends);
      }}>Splice</button>

      <button type="button" onClick={()=>{
         let family = ["Ram", "Shiva"];
         let family2 = ["Vamshi", "Prudhvi"];

         let familyTree = family.concat(family2);
         let familyTree2 = [...family, ...family2]; 

         console.log(family);
         console.log(family2);
         console.log(familyTree);
         console.log(familyTree2)
      }}>Concat</button>

      <button type="button" onClick={()=>{
        let family1 = [["Ram","Sunitha"], "Prudhvi"];
        let family2 = [["Shiva","Akshitha"],["Vamshi","Jyothi"]];
        
        let totalFamily = [family1, family2];

        let totalFamily2 = totalFamily.flat(2);

        console.log(totalFamily);
        console.log(totalFamily2);
      }}>Flat</button>

      <button type="button" onClick={()=>{
        let slicedArr = groupOfFriends.slice(0,3);
        console.log(slicedArr);
      }}>Slice</button>

      <button type="button" onClick={()=>{
        let newArr = groupOfFriends.fill("King", 3,4);
        console.log(newArr);
      }}>Fill</button>

      <button type="button" onClick={()=>{
        console.log(Array.from("PRUDHVI"));
      }}>From</button>

      <button type="button" onClick={()=>{
        console.log(groupOfFriends.includes("Shiva"));
        console.log(groupOfFriends.includes("Rama"));
      }}>Inclides</button>

      <button type="button" onClick={()=>{
        console.log(groupOfFriends.indexOf("Shiva"));
        console.log(groupOfFriends.indexOf("shaun"));
      }}>IndexOf</button>

      <button type="button" onClick={()=>{
        console.log(groupOfFriends.lastIndexOf("Shiva"));
        console.log(groupOfFriends.lastIndexOf("Prudhvi"));
      }}>LastIndexOf</button>

      <button type="button" onClick={()=>{
        console.log(groupOfFriends);
        groupOfFriends.reverse();
        console.log(groupOfFriends);
      }}>Reverse</button>

      <button type="button" onClick={()=>{
        console.log(Array.isArray("abc"));
        console.log(Array.isArray(true));
        console.log(Array.isArray(123));
        console.log(Array.isArray([1,2,3]));
      }}>isArray</button>

      <button type="button" onClick={()=>{
        groupOfFriends.forEach(()=>{
          console.log("inside callback fun");

          groupOfFriends.forEach((ele,i)=>{
            console.log(`${i}--->${ele}`);
          });
        });
      }}>ForEach</button>

      <button type="button" onClick={()=>{
        console.log(groupOfFriends);
        console.log(groupOfFriends.copyWithin(2,0));
        console.log(groupOfFriends.copyWithin(2,1));
        console.log(groupOfFriends.copyWithin(2,1,2));
        console.log(groupOfFriends.copyWithin(2,0,2));
        console.log(groupOfFriends.copyWithin(2));
      }}>CopyWithin</button>

      <button type="button" onClick={()=>{
        let prudhviMarks=[99,88,77,66,55,99];
        let passMarks = 35;

        let result = prudhviMarks.every((ele,i)=>{
          return ele >= passMarks;
        });

        if(result == true){
          console.log("Student Passed in Exams");
        }else{
          console.log("Student Failed in Exams");
        }

        // if(prudhviMarks[0] >= passMarks &&
        //   prudhviMarks[1] >= passMarks &&
        //   prudhviMarks[2] >= passMarks &&
        //   prudhviMarks[3] >= passMarks &&
        //   prudhviMarks[4] >= passMarks &&
        //   prudhviMarks[5] >= passMarks  
        // ){
        //   console.log("Student Passed in Exams");
        // }else{
        //   console.log("Student Failed in Exams");
        // }
      }}>Every</button>

      <button type="button" onClick={()=>{
         let prudhviMarks=[99,88,77,66,55,99];
         let passMarks = 35;
 
         let result = prudhviMarks.some((ele,i)=>{
           return ele < passMarks;
         });
 
         if(result == true){
           console.log("Student Failed in Exams");
         }else{
           console.log("Student Passed in Exams");
         }
      }}>Some</button>

      <button type="button" onClick={()=>{
         let prudhviMarks=[99,88,77,66,55,99,99,88,77,66,55,99,99,88,77,66,55,99,99,88,77,66,55,99,99,88,77,66,55,99,99,88,77,66,55,99,99,88,77,66,55,99,99,88,77,66,55,99];
         let passMarks = 35;
 
         let filteredArr = prudhviMarks.filter((ele,i)=>{
           return ele > 70 ;
         });
         console.log(filteredArr);

         let filteredArr2 = prudhviMarks.filter((ele,i)=>{
          return ele < 70 ;
        });
        console.log(filteredArr2);

        let filteredArr3 = prudhviMarks.filter((ele,i)=>{
          return ele % 2 == 0 ;
        });
        console.log(filteredArr3);

        let filteredArr4 = prudhviMarks.filter((ele,i)=>{
          return ele % 2 != 0 ;
        });
        console.log(filteredArr4);
         
      }}>Filter</button>

      <button type="button" onClick={()=>{
        let marks = [88,78,34,56,78,87,43,54,65,47,56,61];

        let result = marks.find((ele,i)=>{
          return ele > 87 ; 
        });
        console.log(result);
      }}>find</button>

      <button type="button" onClick={()=>{
        let marks = [88,78,34,56,78,87,43,54,65,47,56,61];

        let result = marks.findIndex((ele,i)=>{
          return ele > 56 ; 
        });
        console.log(result);
      }}>findIndex</button>

      <button type="button" onClick={()=>{
        let marks = [88,78,34,56,78,87,43,54,65,47,56,61];

        let result = marks.findLast((ele,i)=>{
          return ele > 61 ; 
        });
        console.log(result);
      }}>findLast</button>

      <button type="button" onClick={()=>{
        let marks = [88,78,34,56,78,87,43,54,65,47,56,61];

        let result = marks.findLastIndex((ele,i)=>{
          return ele > 78 ; 
        });
        console.log(result);
      }}>findLastIndex</button>

      <button type="button" onClick={()=>{
        let marks = [88,78,34,56,78,87,43,54,65,47,56,61];
        let totalMarks = marks.reduce((ele,tot)=>{
          return (tot+=ele);
        });
        console.log(totalMarks);
      }}>Reduce</button>

      <button type="button" onClick={()=>{
         let marks = [88,78,34,56,78,87,43,54,65,47,56,61];
         let totalMarks = marks.reduce((ele,tot)=>{
           return (tot+=ele);
         });
         console.log(totalMarks);

         let name = ["P","R","U","D","H","V","I"];
         let fullName = name.reduce((ele,tot)=>{
          return (tot+=ele);
         });
         console.log(fullName);

         let name2 = ["P","R","U","D","H","V","I"];
         let fullName2 = name.reduceRight((ele,tot)=>{
          return (tot+=ele);
         });
         console.log(fullName2);
      }}>ReduceRight</button>

      <button type="button" onClick={()=>{
        let marks = [56,29,76,87,11,45,91,100,1001];
        marks.sort((a,b)=>{
          return a-b;
        });
        console.log(marks);

        let marks2 = [56,29,76,87,11,45,91,100,1001];
        marks2.sort((a,b)=>{
          return a-b;
        });
        marks2.reverse();
        console.log(marks2);
      }}>Sort</button>

      <button type="button" onClick={()=>{
        let greatPeronalitiesOfIndia = ["Shivaji Maharaj", "Swami Vivekananda", "Sardar Vallabai Patel", "PrithviRaj Chouhan", "APJ Abdul Kalam"];

        let newArr = greatPeronalitiesOfIndia.map((ele,i)=>{
          return `shri ${ele} ji`;
        });
        console.log(greatPeronalitiesOfIndia);
        console.log(newArr);

        let marks = [56,29,76,87,11,45,91,100,1001];
        let newArr2 = marks.map((ele,i)=>{
          return ele + 10 ;
        });
        console.log(newArr2);
        
        let familyMembers = ["Ram", "Shiva", "Vamshi", "Prudhvi"];
        let fullName = familyMembers.map((ele,i)=>{
          return `Bokka ${ele} Reddy`;
        });
        console.log(fullName);
      }}>map</button>
  



    </div>
  );
}

export default App;
