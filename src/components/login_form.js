import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default function Login(){

    const handlesubmit=async(event)=>{
        event.preventDefault();
    }

    // let a1=document.getElementById('username').value;
    // let b1=document.getElementById('password').value;

    // let username1=phone;
    // let login_password=password;

    //     if(username1 === phone && login_password === password){
    //         alert('Login Successfully');
    //     }

    return(
        <>
            <div className='container'>
                <div>
                    <h2 className='text-center'>Login Form</h2>
                </div>
                    <form onSubmit={handlesubmit}>

                        <div className='row mt-5 text-center'>
                            <div className='col-lg-3'>&nbsp;</div>
                                <div className='col-lg-3'>
                                    <h5>Username : </h5>
                                </div>
                                <div className='col-lg-3'>
                                    <input type="text" name='username' id='username' className='form-control'/>
                                </div>
                            <div className='col-lg-3'>&nbsp;</div>
                        </div>

                        <div className='row mt-4 text-center'>
                            <div className='col-lg-3'>&nbsp;</div>
                                <div className='col-lg-3'>
                                    <h5>Password : </h5>
                                </div>
                                <div className='col-lg-3'>
                                    <input type="password" name='login_password' id='login_password' className='form-control'/>
                                </div>
                            <div className='col-lg-3'>&nbsp;</div>
                        </div>

                        <div className='text-center mt-5'>
                            <Link to='/Login'>
                                <button className='btn btn-info'>Login</button>
                            </Link>
                        </div>

                    </form>
            </div>        
        </>
    );
}