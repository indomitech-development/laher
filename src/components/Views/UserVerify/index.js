import React, { Component } from 'react'
import { Verify } from '../../../Redux/actions/UserAction'
import { connect } from 'react-redux'
import  { Link } from 'react-router-dom'
class Verification extends Component {

    componentDidMount() {
        var url = window.location.pathname
        var token = url.substr(url.lastIndexOf('/') + 1)
        this.props.Verify(token)

    }


    render() {
        return (
            <div>
               


<div className="login">
                    <div className="container">
                        <div className="row">
                            <div className=" col-lg-3 col-md-1 col-sm-3"></div>
                            <div className=" col-lg-6 col-md-10 col-sm-12 ">
                                <div className="logo-img">
                                    <img src="images/logo.png" alt="image_logo"/>
                                </div>
                                <div className="forgot-form">

                                    {/* {

                                        this.state.ismessage && this.state.message.length ? <div className="alert alert-success">{this.state.message}</div> : null

                                    } */}
                                    <h3 className="text-center text-uppercase font-bold mt-4">Success!</h3>
                                    <br></br>
                                    <div className="panel-body " style={{ textAlign: 'center' }}>
                                    <img className="icon icons8-Star-Filled" src="data:image/png;base64,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"
                                     width="100" height="100" alt="image_icon" />
                                    <p className="text-muted ">
                                        Hello <b>youremail@domain.com</b>. Congratulation your email Verification are Successfully Completed.
                                        <br></br>
                                        Go to<Link to="/login"> SignIn</Link>
                    </p>
                                </div>
                                        
                                </div>
                                {/* {this.state.Show ?
                                            <div className="alert alert-success col-md-12" role="alert" id="notes" style={{ marginTop: '2rem' }}>
                                                <ul>
                                                    <li style={{ listStyle:'none' , fontSize:'12px'}}>If somehow, you did not recieve the verification email then <a href="#">resend the verification email</a></li>
                                                </ul>
                                            </div> */}
                                            {/* : null} */}
                            </div>
                            
                            <div className="col-lg-3 col-md-1 col-sm-4"></div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}


const mapStateToProps = (state) => ({

    message: state.auth.MessageAdmin


})
export default connect(mapStateToProps, { Verify })(Verification)