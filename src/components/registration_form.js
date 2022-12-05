import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default function Register(){

            const handlesubmit=async(event)=>{
                event.preventDefault();
                var dast=(new FormData(event.target))
                var con={headers:{"enctype":"multipart/form-data"}};
            }

            let firstname=document.getElementById('firstname').value;
            let lastname=document.getElementById('firstname').value;
            let email=document.getElementById('firstname').value;
            let phone=document.getElementById('firstname').value;
            let password=document.getElementById('firstname').value;
            let teststring=/^[A-Za-z]{4,15}$/;
            
            
            if(firstname === '' && firstname === 0){
                    alert('please enter proper firstname');
                    
            }

            else if(!teststring.test(firstname)){
                alert('enter firstname within 15 digit');
                document.getElementById('firstname').value = '';
            }

            else if(lastname === '' && lastname === 0){
                    alert('please enter proper lastname');
                    
                }

            else if(!teststring.test(lastname)){
                alert('enter lastname within 15 digit');
                document.getElementById('lastname').value = '';
            }

            else if(email === '' && email === 0){
                alert('please enter proper email');
                
            }

            else if(!teststring.test(email)){
                alert('enter email within 15 digit');
                document.getElementById('email').value = '';
            }

        else{
              await axios.post('http://localhost:3002/Register',dast,con)
                        .then(function(p){
                        if(p.data.status === 'error'){
                            alert('error');
                            window.location.reload();
                        }
                        else if(p.data.status === 'Success'){
                            alert('Data Inserted');
                            window.location.reload();
                        }
                        })
                            .catch(function(error){
                            alert(error);
                            window.location.reload();
                            })
                    }
                

    return(
        <>
            <div className='container'>
                <div>
                    <h2 className='text-center'>Registration Form</h2>
                </div>
                    <form onSubmit={handlesubmit}>

                        <div className='row mt-5 text-center'>
                            <div className='col-lg-3'>&nbsp;</div>
                                <div className='col-lg-3'>
                                    <h5>First Name : </h5>
                                </div>
                                <div className='col-lg-3'>
                                    <input type="text" name='firstname' id='firstname' className='form-control'/>
                                </div>
                            <div className='col-lg-3'>&nbsp;</div>
                        </div>

                        <div className='row mt-3 text-center'>
                            <div className='col-lg-3'>&nbsp;</div>
                                <div className='col-lg-3'>
                                    <h5>Last Name : </h5>
                                </div>
                                <div className='col-lg-3'>
                                    <input type="text" name='lastname' id='lastname' className='form-control'/>
                                </div>
                            <div className='col-lg-3'>&nbsp;</div>
                        </div>

                        <div className='row mt-3 text-center'>
                            <div className='col-lg-3'>&nbsp;</div>
                                <div className='col-lg-3'>
                                    <h5>Email : </h5>
                                </div>
                                <div className='col-lg-3'>
                                    <input type="text" name='email' id='email' className='form-control'/>
                                </div>
                            <div className='col-lg-3'>&nbsp;</div>
                        </div>

                        <div className='row mt-3 text-center'>
                            <div className='col-lg-3'>&nbsp;</div>
                                <div className='col-lg-3'>
                                    <h5>Phone : </h5>
                                </div>
                                <div className='col-lg-3'>
                                    <input type="text" name='phone' id='phone' className='form-control'/>
                                </div>
                            <div className='col-lg-3'>&nbsp;</div>
                        </div>

                        <div className='row mt-3 text-center'>
                            <div className='col-lg-3'>&nbsp;</div>
                                <div className='col-lg-3'>
                                    <h5>Password : </h5>
                                </div>
                                <div className='col-lg-3'>
                                    <input type="password" name='password' id='password' className='form-control'/>
                                </div>
                            <div className='col-lg-3'>&nbsp;</div>
                        </div>

                        <div className='text-center mt-5'>
                            <Link to='/'>
                                <button className='btn btn-success'>Register</button>
                            </Link>
                        </div>

                    </form>   
            </div>
        </>        
    );
}

