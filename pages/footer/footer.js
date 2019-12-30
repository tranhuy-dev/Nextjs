import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';
function Footer() {
    return (
        <div className="contact-container">
            <div className="form-contact">
                <div>
                CONTACT
                    <br />
                    tqhuy1996.developer@gmail.com
                    <br />
                    Tel: 84-946515847
                </div>

            </div>
            <div className="social-container">
                <a href="https://www.facebook.com/huytran.prince" target="_blank">
                    <FaFacebookF color="white" size="30px" />
                </a>
                <a href="https://www.linkedin.com/in/huy-tran-777551178/" target="_blank">
                    <FaLinkedinIn color="white" size="30px" />
                </a>
                <a href="https://github.com/tqhuy-dev" target="_blank">
                    <FaGithub color="white" size="30px" />
                </a>
            </div>

            <style jsx>
                {
                    `
                    .contact-container{
                        color: white;
                        padding-top: 3rem;
                        padding-bottom: 3rem;
                        background-color: #222437 ;
                    }
                    
                    .form-contact{
                        display:flex;
                        flex-direction:row;
                        justify-content: center;
                        margin-bottom: 3rem;
                    }
                    
                    .social-container{
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                    }
                    
                    .social-container a{
                        margin: 1rem;
                    }`
                }
            </style>
        </div>
    )
}

export default Footer