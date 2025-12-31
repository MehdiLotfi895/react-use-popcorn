import { useEffect, useState } from 'react';
import './App.css';
import Header from "./Header.js";
const films = [
  {
    img:"./1.jpg",
    name:"Inception",
    yearOfDate:"2010",
    date:"16 Jul 2010",
    min:"148",
    type:"Action,Adventure,Sci-Fi",
    IMDb:"8.8",
    decription:"A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    staring:"Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page",
    Directed:"Christopher Nolan",
    rate:0,
    id:0
  },

  {
    img:"./2.jpg",
    name:"Interstellar",
    yearOfDate:"2014",
    date:"07 Nov 2014",
    min:"169",
    type:"Adventure,Drama,Sci-Fi",
    IMDb:"8.6",
    decription:"A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    staring:"Matthew McConaughey, Anne Hathaway, Jessica Chastain",
    Directed:"Christopher Nolan",
    rate:0,
    id:1
  },
  {
    img:"./3.jpg",
    name:"The Dark Knight",
    yearOfDate:"2008",
    date:"18 Jul 2008",
    min:"152",
    type:"Action,Crime,Drama",
    IMDb:"9.0",
    decription:"Batman sets out to dismantle the remaining criminal organizations, but the rise of the Joker causes chaos in Gotham.",
    staring:"Christian Bale, Heath Ledger, Aaron Eckhart",
    Directed:"Christopher Nolan",
    rate:0,
    id:2
  },
  {
    img:"./4.jpg",
    name:"Avatar",
    yearOfDate:"2009",
    date:"18 Dec 2009",
    min:"162",
    type:"Action,Adventure,Fantasy",
    IMDb:"7.9",
    decription:"A paraplegic Marine is dispatched to the moon Pandora and becomes torn between following orders and protecting the world.",
    staring:"Sam Worthington, Zoe Saldana, Sigourney Weaver",
    Directed:"James Cameron",
    rate:0,
    id:3
  },
  {
    img:"./5.jpg",
    name:"Titanic",
    yearOfDate:"1997",
    date:"19 Dec 1997",
    min:"194",
    type:"Drama,Romance",
    IMDb:"7.9",
    decription:"A romance blossoms between a wealthy woman and a poor artist on the doomed RMS Titanic.",
    staring:"Leonardo DiCaprio, Kate Winslet, Billy Zane",
    Directed:"James Cameron",
    rate:0,
    id:4
  },
  {
    img:"./6.jpg",
    name:"The Matrix",
    yearOfDate:"1999",
    date:"31 Mar 1999",
    min:"136",
    type:"Action,Sci-Fi",
    IMDb:"8.7",
    decription:"A computer hacker learns that reality is a simulation and joins a rebellion to free humanity.",
    staring:"Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",
    Directed:"Lana & Lilly Wachowski",
    rate:0,
    id:5
  },
  {
    img:"./7.jpg",
    name:"Gladiator",
    yearOfDate:"2000",
    date:"05 May 2000",
    min:"155",
    type:"Action,Adventure,Drama",
    IMDb:"8.5",
    decription:"A former Roman General seeks revenge against the corrupt emperor who murdered his family.",
    staring:"Russell Crowe, Joaquin Phoenix, Connie Nielsen",
    Directed:"Ridley Scott",
    rate:0,
    id:6
  },
  {
    img:"./8.jpg",
    name:"Forrest Gump",
    yearOfDate:"1994",
    date:"06 Jul 1994",
    min:"142",
    type:"Drama,Romance",
    IMDb:"8.8",
    decription:"Forrest Gump, a simple man with a low IQ, ends up influencing several historical events in unexpected ways.",
    staring:"Tom Hanks, Robin Wright, Gary Sinise",
    Directed:"Robert Zemeckis",
    rate:0,
    id:7
  },
  {
    img:"./9.jpg",
    name:"John Wick",
    yearOfDate:"2014",
    date:"24 Oct 2014",
    min:"101",
    type:"Action,Thriller",
    IMDb:"7.4",
    decription:"A retired hitman seeks vengeance for the killing of his beloved dog.",
    staring:"Keanu Reeves, Michael Nyqvist, Alfie Allen",
    Directed:"Chad Stahelski",
    rate:0,
    id:8
  },
  {
    img:"./10.jpg",
    name:"The Godfather",
    yearOfDate:"1972",
    date:"24 Mar 1972",
    min:"175",
    type:"Crime,Drama",
    IMDb:"9.2",
    decription:"The aging patriarch of an organized crime dynasty transfers control of his empire to his reluctant son.",
    staring:"Marlon Brando, Al Pacino, James Caan",
    Directed:"Francis Ford Coppola",
    rate:0,
    id:9
  },
  {
    img:"./11.jpg",
    name:"Joker",
    yearOfDate:"2019",
    date:"04 Oct 2019",
    min:"122",
    type:"Crime,Drama,Thriller",
    IMDb:"8.4",
    decription:"A mentally troubled comedian embarks on a downward spiral that leads to the creation of the iconic villain.",
    staring:"Joaquin Phoenix, Robert De Niro, Zazie Beetz",
    Directed:"Todd Phillips",
    rate:0,
    id:10
  },
  {
    img:"./12.jpg",
    name:"Avengers: Endgame",
    yearOfDate:"2019",
    date:"26 Apr 2019",
    min:"181",
    type:"Action,Adventure,Sci-Fi",
    IMDb:"8.4",
    decription:"The Avengers assemble once more to reverse Thanos' actions and restore balance to the universe.",
    staring:"Robert Downey Jr., Chris Evans, Scarlett Johansson",
    Directed:"Anthony & Joe Russo",
    rate:0,
    id:11
  },
  {
    img:"./13.jpg",
    name:"The Shawshank Redemption",
    yearOfDate:"1994",
    date:"14 Oct 1994",
    min:"142",
    type:"Drama",
    IMDb:"9.3",
    decription:"Two imprisoned men bond over several years, finding solace and eventual redemption.",
    staring:"Tim Robbins, Morgan Freeman",
    Directed:"Frank Darabont",
    rate:0,
    id:12
  },
  {
    img:"./14.jpg",
    name:"Pulp Fiction",
    yearOfDate:"1994",
    date:"14 Oct 1994",
    min:"154",
    type:"Crime,Drama",
    IMDb:"8.9",
    decription:"The lives of criminals intertwine in a series of darkly comedic and violent events.",
    staring:"John Travolta, Uma Thurman, Samuel L. Jackson",
    Directed:"Quentin Tarantino",
    rate:0,
    id:13
  },
  {
    img:"./15.jpg",
    name:"Fight Club",
    yearOfDate:"1999",
    date:"15 Oct 1999",
    min:"139",
    type:"Drama",
    IMDb:"8.8",
    decription:"An insomniac office worker forms an underground fight club with a soap salesman.",
    staring:"Brad Pitt, Edward Norton, Helena Bonham Carter",
    Directed:"David Fincher",
    rate:0,
    id:14
  },
  {
    img:"./16.jpg",
    name:"The Wolf of Wall Street ",
    yearOfDate:"2013",
    date:"25 Dec 2013",
    min:"180",
    type:"Biography,Crime,Drama",
    IMDb:"8.2",
    decription:"The true story of Jordan Belfort's rise and fall on Wall Street.",
    staring:"Leonardo DiCaprio, Jonah Hill, Margot Robbie",
    Directed:"Martin Scorsese",
    rate:0,
    id:15
  },
  {
    img:"./17.jpg",
    name:"Mad Max: Fury Road",
    yearOfDate:"2015",
    date:"15 May 2015",
    min:"120",
    type:"Action,Adventure,Sci-Fi",
    IMDb:"8.1",
    decription:"In a post-apocalyptic wasteland, Max joins forces with Furiosa to escape a tyrant.",
    staring:"Tom Hardy, Charlize Theron",
    Directed:"George Miller",
    rate:0,
    id:16
  },
  {
    img:"./18.jpg",
    name:"The Lion King",
    yearOfDate:"1994",
    date:"24 Jun 1994",
    min:"88",
    type:"Animation,Adventure,Drama",
    IMDb:"8.5",
    decription:"A young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.",
    staring:"Matthew Broderick, Jeremy Irons, James Earl Jones",
    Directed:"Roger Allers, Rob Minkoff",
    rate:0,
    id:17
  },
  {
    img:"./19.jpg",
    name:"Dune",
    yearOfDate:"2021",
    date:"22 Oct 2021",
    min:"155",
    type:"Adventure,Drama,Sci-Fi",
    IMDb:"8.0",
    decription:"Paul Atreides must travel to the most dangerous planet to secure the future of his family and people.",
    staring:"Timothée Chalamet, Zendaya, Rebecca Ferguson",
    Directed:"Denis Villeneuve",
    rate:0,
    id:18
  },
  {
    img:"./20.jpg",
    name:"The Revenant",
    yearOfDate:"2015",
    date:"08 Jan 2016",
    min:"156",
    type:"Action,Adventure,Drama",
    IMDb:"8.0",
    decription:"A frontiersman fights for survival after being left for dead by his own hunting team.",
    staring:"Leonardo DiCaprio, Tom Hardy",
    Directed:"Alejandro G. Iñárritu",
    rate:0,
    id:19
  }
];
let x="";
function App() {
  const[search,setSearch]=useState("");
  const[show1,setShow1]=useState(true);
  const[show2,setShow2]=useState(true);
  const[content,setContent]=useState('');
  const [value, setValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(0);
  const[watchList,setWatchList]=useState([]);
  const[loading,setLoading]=useState(false);
  const[state,setState]=useState(0);
  function f1(watchList){
    if(watchList.length==0){
      return(0)
    }
    let sum=0;
    for(let i=0;i<watchList.length;i++){
      sum+=Number(watchList[i].min);
    }
    return(sum/watchList.length)
  }
  function f2(watchList){
    if(watchList.length==0){
      return(0.0)
    }
    let sum=0;
    for(let i=0;i<watchList.length;i++){
      sum+=Number(watchList[i].IMDb);
    }
    return(sum/watchList.length)
  }
  function f3(watchList){
    if(watchList.length==0){
      return(0.0)
    }
    let sum=0;
    for(let i=0;i<watchList.length;i++){
      sum+=Number(watchList[i].rate);
    }
    return(sum/watchList.length)
  }
  const searchList=films.filter(value=>{
    if(search){
      if(value.name.toLowerCase().includes(search.toLowerCase())){
        return(value)
      }
    }
  })
  console.log(searchList)
  if(x!=search){
    setLoading(false);
    setTimeout(()=>{
        setLoading(true)
      },4000)
    
    x=search;
  }
  console.log(loading)
  useEffect(()=>{
    if(content==""){
      document.title="usePopcorn"
    }
    else{
      document.title=`Movie | ${content.name}`;
    }
  },[content])
  useEffect(()=>{
    if(search!=""){
      setState(1);
    }
  },[search])
  useEffect(()=>{
    if(content!=""){
      setState(2);
    }

  },[content])
  return (
    <div>
      <Header search={search} setSearch={setSearch} searchList={searchList} loading={loading} setState={setState}></Header>
      <div className="display" id="first" style={(searchList.length<=6)?{}:(loading)?{height:`${96.5*searchList.length+4}px`}:{}}>
        {(show1)?
        <>
        
        <button className="button" onClick={()=>{setShow1(false)}}><div style={{backgroundColor:"white",width:"10px",height:"1px"}}></div></button>
        
        { (search)?
          (loading)?
          searchList.map((value,index)=>{
            return(
            <div className="searchItems">
          <div onClick={()=>{setContent(value)}}className="searchitem" id={(index==0)?"firstItem":"elseItems"}>
            <img src={value.img} className="searchImg"/>
            <div style={{marginLeft:"30px"}}>
              <div>{value.name}</div>
              <div style={{marginTop:"5px"}}>🗓️{value.yearOfDate}</div>
            </div>
          </div>
          <div id="decoration"></div>
          </div>
          )}):<div id="loadingDiv">LOADING...</div>:<></>
        }
        </>
       
        :<button className="button" onClick={()=>{setShow1(true)}}>+</button>
      }
      </div>
      <div className="display" id="second" style={(watchList.length<=4)?{}:(content!="")?{}:{height:`${115.5*watchList.length+76}px`}}>
        {
          (show2)?(content)?
          <>
          <button className="button" onClick={()=>{setShow2(false)}}><div style={{backgroundColor:"white",width:"10px",height:"1px"}}></div></button> 
          <div className="displayContent">
            <img src={content.img} style={{width:"133px",WebkitBorderTopLeftRadius:"7px"}}/>
            <button style={{width:"30px",height:"30px",backgroundColor:"white",borderRadius:"100%",fontSize:"20px",border:"none",position:"relative",left:"-125px",top:"4px"}}onClick={()=>{setContent("")}}>⬅</button>
            <div style={{marginTop:"30px",marginLeft:"30px",color:"white",fontSize:"13px"}}>
              <div className="margin" style={{fontSize:"25px",fontWeight:"bold"}}>{content.name}</div>
              <div className="margin">{content.date}. {content.min} min</div>
              <div className="margin">{content.type}</div>
              <div className="margin">⭐{content.IMDb} IMDb rating</div>
            </div>
          </div>
          <div id="rate" style={(value!=0)?{height:"120px"}:{height:"45px"}}>
            {
              (content.rate==0)?
              <>
                <div id="rateDive"style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            color: "gold",
            cursor: "pointer",
            marginLeft:"17px"
    }}>
      
      <div style={{ display: "flex" }}>
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={i}
            onClick={() => setValue(i + 1)}
            onMouseEnter={() => setHoverValue(i + 1)} 
            onMouseLeave={() => setHoverValue(0)}     
            style={{
              color: i < (hoverValue || value) ? "gold" : "#444",
              marginRight: "3px"
            }}
          >
            ★
          </span>
        ))}
      </div>

      <div style={{ color: "gold" ,fontSize:"18px",marginTop:"7px"}}>{value}</div>
    
    </div>
    {
      (value!=0)?<button onClick={()=>{
        films[content.id].rate=value;
        const arr=[...watchList];
        content.rate=value;
        arr.push(content);
        setWatchList(arr);
        console.log(watchList)
        setContent("")
        setValue(0)
      }}style={{marginTop:"20px",width:"250px",height:"40px",borderRadius:"20px",border:"none",marginLeft:"50px",backgroundColor:"blueviolet",color:"white",fontSize:"17px"}}>+add to list</button>:<></>
    }
              </>:(<><div style={{color:"white",position:"relative",top:"10px",left:"80px"}}>you rated this movie {content.rate}🌟</div></>)
              
            }
          
        </div>
        <div className="description">
         {content.decription}
        </div>
        <div className="end">staring {content.staring}</div>
        <div className="end">Directed by {content.Directed}</div>
          </>:
          <>
          <div id="imformation">
              <button className="button" onClick={()=>{setShow2(false)}}><div style={{backgroundColor:"white",width:"10px",height:"1px"}}></div></button>
                <div className="div1"style={{marginTop:"-15px"}}>MOVIES YOU WATCHED</div>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"5px"}}>
                    <div className="div1">#️⃣{watchList.length} movies</div> <div>⭐{f2(watchList).toFixed(1)}</div> <div>🌟{f3(watchList).toFixed(1)}</div>  <div className="div2">⌛{f1(watchList).toFixed(1)} min</div>
                </div>
          </div>
          {
            watchList.map(value=>{
              return(
                <>
                <div style={{display:"flex",alignItems:"center",width:"90%",marginLeft:"50px",color:"white",fontSize:"14px",marginTop:"25px"}} onClick={()=>{setContent(value)}}>
                  <img src={value.img} style={{width:"40px",height:"auto",}}/>
                  <div>
                    <div style={{marginLeft:"40px"}}>{value.name}</div>
                    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"5px",gap:"10px"}}>
                    <div style={{marginLeft:"40px"}}>⭐{value.IMDb}</div> <div>🌟{value.rate}</div>  <div style={{marginRight:"75px"}}>⌛{value.min} min</div>
                </div>
                  </div>
                </div>
                <button onClick={()=>{
                  const arr=[]
                  for(let i=0;i<watchList.length;i++){
                    if(watchList[i].name==value.name) continue
                    arr.push(watchList[i])
                  }
                  setWatchList(arr);
                  films[value.id].rate=0;
                }}style={{backgroundColor:"red",borderRadius:"100%",border:"none",width:"22px",height:"22px",fontSize:"18px",fontWeight:"bold",display:"flex",justifyContent:"center",alignItems:"center",position:"relative" ,top:"-40px",color:"black"}} id="delete">✕</button>
                <div style={{width:"100%",height:"1px",backgroundColor:"rgba(79, 76, 76, 0.2)",marginTop:"10px"}}></div>
                </>
              )
            })
          }
          </>   
   :<button className="button" onClick={()=>{setShow2(true)}}>+</button>
        }
          
     </div>
     <div id="single" >
     {
          (state!=0)?(state==2)?
          <>
          <div className="displayContent">
          <button style={{width:"30px",height:"30px",backgroundColor:"white",borderRadius:"100%",fontSize:"20px",border:"none",position:"absolute",left:"6px",top:"6px"}}onClick={()=>{setState(1);setContent('')}}>⬅</button>
            <img src={content.img} style={{WebkitBorderTopLeftRadius:"7px"}}/>
            <div id="p"style={{color:"white",fontSize:"11px"}}>
              <div className="margin" style={{fontSize:"20px",fontWeight:"bold"}}>{content.name}</div>
              <div className="margin">{content.date}. {content.min} min</div>
              <div className="margin">{content.type}</div>
              <div className="margin">⭐{content.IMDb} IMDb rating</div>
            </div>
          </div>
          <div id="rate" style={(value!=0)?{height:"120px"}:{height:"30px"}}>
            {
              (content.rate==0)?
              <>
                <div style={{
            display: "flex",
            alignItems: "center",
            gap: "10%",
            color: "gold",
            fontSize: "18px",
            cursor: "pointer",
            marginLeft:"5px"
    }}>
      
      <div style={{ display: "flex",width:"80%" }}>
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={i}
            onClick={() => setValue(i + 1)}
            onMouseEnter={() => setHoverValue(i + 1)} 
            onMouseLeave={() => setHoverValue(0)}     
            style={{
              color: i < (hoverValue || value) ? "gold" : "#444",
              marginRight: "3px"
            }}
          >
            ★
          </span>
        ))}
      </div>

      <div style={{ color: "gold" ,fontSize:"18px",marginTop:"7px"}}>{value}</div>
    
    </div>
    {
      (value!=0)?<button onClick={()=>{
        films[content.id].rate=value;
        const arr=[...watchList];
        content.rate=value;
        arr.push(content);
        setWatchList(arr);
        console.log(watchList)
        setContent("")
        setValue(0)
        setState(0)
      }}style={{marginTop:"20px",width:"80%",height:"40px",borderRadius:"20px",border:"none",marginLeft:"10%",backgroundColor:"blueviolet",color:"white",fontSize:"17px"}}>+add to list</button>:<></>
    }
              </>:(<><div id="setRate"style={{color:"white",position:"relative",width:"80%",marginLeft:"10%",top:"7%"}}>you rated this movie {content.rate}🌟</div></>)
              
            }
          
        </div>
        <div className="description">
         {content.decription}
        </div>
        <div className="end">staring {content.staring}</div>
        <div className="end" id="secondEnd">Directed by {content.Directed}</div>
          </>:
          <>
          { (search)?
          (loading)?
          searchList.map((value,index)=>{
            return(
            <div className="searchItems">
          <div onClick={()=>{setContent(value)}}className="searchitem" id={(index==0)?"firstItem":(index==(searchList.length-1))?"lastItem":"elseItems"}>
            <img src={value.img} className="searchImg"/>
            <div style={{marginLeft:"30px"}}>
              <div>{value.name}</div>
              <div style={{marginTop:"5px"}}>🗓️{value.yearOfDate}</div>
            </div>
          </div>
          <div id="decoration"></div>
          </div>
          )}):<div id="loadingDiv">LOADING...</div>:<></>
        }
          </>:
          <>
          <div id="imformation">
                <button style={{position:"absolute",top:"8px",left:"85%",fontSize:"20px",backgroundColor:"rgb(42,51,53)",border:"none",width:"15%"}} onClick={()=>{setState(1)}}><img src="./search.png" style={{width:"70%"}}/></button>
                <div id="div1">MOVIES YOU WATCHED</div>
                <div id="div2"style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"10px",}}>
                    <div >#️⃣{watchList.length} movies</div> <div>⭐{f2(watchList).toFixed(1)}</div> <div>🌟{f3(watchList).toFixed(1)}</div>  <div >⌛{f1(watchList).toFixed(1)} min</div>
                </div>
          </div>
          {
            watchList.map(value=>{
              return(
                <>
                
                <div style={{display:"flex",alignItems:"center",width:"90%",marginLeft:"5%",color:"white",fontSize:"12px",marginTop:"15px",height:"auto"}} onClick={()=>{setContent(value); setState(2)}}>
                  <img src={value.img} style={{width:"40px",height:"auto",}}/>
                  <div>
                    <div style={{marginLeft:"15%"}}>{value.name}</div>
                    <div style={{display:"flex",alignItems:"center",marginTop:"5px",gap:"10px",marginLeft:"15%",width:"100%"}}>
                    <div >⭐{value.IMDb}</div> <div>🌟{value.rate}</div>  <div >⌛{value.min} min</div>
                </div>
                  </div>
                </div>
                <button onClick={()=>{
                  const arr=[]
                  for(let i=0;i<watchList.length;i++){
                    if(watchList[i].name==value.name) continue
                    arr.push(watchList[i])
                  }
                  setWatchList(arr);
                  films[value.id].rate=0;
                }}style={{backgroundColor:"red",borderRadius:"100%",border:"none",width:"22px",height:"22px",fontSize:"18px",fontWeight:"bold",display:"flex",justifyContent:"center",alignItems:"center",position:"relative" ,top:"-60px",left:"90%",color:"black"}}>✕</button>
                <div style={{width:"100%",height:"1px",backgroundColor:"rgba(79, 76, 76, 0.2)",marginTop:"-10px"}}></div>
                </>
              )
            })
          }
          </>   
   
        }
     </div>
    </div>
    
  );

}

export default App;

