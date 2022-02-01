import React from "react";

function Contact(){

    return (
        <div className="contact">
            <h1 className="page-title">Contact</h1>
            <form className="form">
                <div>
                    <label className="form-label">Name</label>
                    <input 
                        className="input"
                        type="name" 
                        placeholder="Name"
                        name="name"
                    />
                </div><br />
                <div>
                    <label className="form-label">Company</label>
                    <input  
                        className="input"
                        type="company" 
                        placeholder="Company"
                        name="company"
                    />
                </div><br />
                <div>
                    <label className="form-label">Email</label>
                    <input  
                        className="input"
                        type="email" 
                        placeholder="Email"
                        name="email"
                    />
                </div><br />
                <div>
                    <label className="form-label">Message</label>
                    <textarea  
                        className="input"
                        type="message" 
                        placeholder="Message"
                        name="message"
                    />
                </div>
            </form>
        </div>
    )
}

export default Contact;