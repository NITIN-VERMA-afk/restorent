  const RestaurantSignup=()=>{
    return(
        <>
         <h3>signup component</h3>
        <div className="input-wrapper">
           
            <div className="input-wrapper">
            <input className="input-field" type="text" placeholder="Enter email id"/>
            <input className="input-field" type="password" placeholder="Enter paswword"/>
            <input className="input-field" type="password" placeholder="Confirm password"/>
            <input className="input-field" type="text" placeholder="Enter city"/>
            <input className="input-field" type="text" placeholder="Enter full city"/>
            <div className="input-wrapper">
                <button className="button" >signup</button>
            </div>

            </div>
        </div>
        </>


    )

}
export default RestaurantSignup