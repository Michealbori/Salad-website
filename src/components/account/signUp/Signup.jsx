import '../signUp/Signup.css'








export default function SignUp()
{
    return(
        <div className="SignUp">
            
            <div className="firstLoginSection">
               <h5>
               Your Favourite Food <br /> Delivered hot & <br /> Fresh
               </h5>

               <p>
                      
               </p>
          </div>


          <div className="secondLoginSection">
             {/* <span>
                   Create Your Account
             </span> */}
               <form action="">
                 <input type="text"  placeholder='First name' required/>
                 <input type="text" placeholder='Last name'required/>
                 <input type="text" placeholder='Email' required/>
                 <input type="text" placeholder='Password' required/>
                 <button> Create Account </button>
               </form>

          </div>


        </div>
    )
}