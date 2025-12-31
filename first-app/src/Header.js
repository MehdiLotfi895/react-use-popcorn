import "./Header.css"
function Header({search,setSearch,searchList,loading,setState}){
    return(
        <div id="header">
            <div id="siteName"><span id="popcorn">🍿</span>usePopcorn</div>
            <div style={{width:"34%"}}>
                <input type="search" id="searchInput" placeholder="Search Movies..." value={search} onChange={(e)=>{
                    setSearch(e.target.value)
                }}/>
            </div>
            <div id="searchlistNumber">Found {(loading)?searchList.length:0} top result</div>
            <div id="nav">
                <button style={{fontSize:"20px",backgroundColor:"rgb(91,56,210)",border:"none",marginRight:"1px"}}onClick={()=>{
                    setState(0);
                    setSearch("")
                }}>
                    <img src="./home1.png" style={{width:"30px",color:"white"}}/>
                </button>
            </div>
        </div>
    )
}

export default Header;