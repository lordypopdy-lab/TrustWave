import React from 'react'
import toast from 'react-hot-toast'
import MainNavBar from '../components/MainNavBar'

const Deposite = () => {
    const handleCopy = async (textToCopy) => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            toast.success("Copied successfully!");
        } catch (err) {
            toast.error("Failed to copy!")
        }
    };
    const walletConnect = async () => {
        toast.success("Wallet Connect Comming Soon!")
    }
    return (
        <>
            <MainNavBar />
            <div style={{ marginTop: "80px" }} className="container-scroller">
                <div className="container-fluid page-body-wrapper">
                    <div className="main-panel m-0 w-100">
                        <div className="content-wrapper">
                            <div className="row">
                                <div style={{ borderRadius: "0px" }} className="col-xl-4 p-2 col-sm-4">
                                    <button onClick={walletConnect} className='btn btn-secondary w-100'><i className="fas fa-wallet text-warning m-2"></i>Connect Wallet</button>
                                    <div style={{ border: "none", borderRadius: "9px" }} className="card card-gradient">
                                        <div className="card-body card-gradient">
                                        <h5 onClick={() => handleCopy("1GNu6gMQMR2rWxZubMQ46icSSuTUbrNZLZ")}>bc1q7ppeu0vywh0fejmjc7jznq9nf50xj..<i style={{ cursor: "pointer" }} className="fas fa-copy text-warning m-1"></i></h5>
                                            <h4 className="card-title">Deposit Using Bitcoin | USDT(TRC20)</h4>
                                            <p className="card-description">Bitcoin | USDT Deposit Method</p><hr />
                                            <form className="forms-sample">
                                                <p className="card-description"><span className="text-warning">Please make sure you upload your payment proof for quick payment verification On confirmation,</span> <span className="text-primary">our system will automatically Fund your account and notify you via email address.</span></p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ borderRadius: "0px" }} className="col-xl-4 p-2 col-sm-4">
                                    <button onClick={walletConnect} className='btn btn-secondary w-100'><i className="fas fa-wallet text-warning m-2"></i>Connect Wallet</button>
                                    <div style={{ border: "none", borderRadius: "9px" }} className="card card-gradient">
                                        <div className="card-body card-gradient">
                                        <h5 onClick={() => handleCopy("0x18562342774d0f6db54264edcdc650a6e2c7d45c")}>0x422D59551478E493b8e4489a308dA7...<i style={{ cursor: "pointer" }} className="fas fa-copy text-warning m-1"></i></h5>
                                            <h4 className="card-title">Deposit Using Ethereum | USDT(ERC20)</h4>
                                            <p className="card-description">Ethereum | USDT Deposit Method</p><hr />
                                            <form className="forms-sample">
                                                <p className="card-description"><span className="text-warning">Please make sure you upload your payment proof for quick payment verification On confirmation,</span> <span className="text-primary">our system will automatically Fund your account and notify you via email address.</span></p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-4 grid-margin mt-5">
                                    <div style={{ border: "none", borderRadius: "9px" }} className="card card-gradient">
                                        <div className="card-body card-gradient">
                                        <h5 onClick={() => handleCopy("TAjZkvRtK5cdoG11udBx628Ncw8mPSh2Sc")}>TGMSYN1kCo8egaaAtNugu3qrLXnCd...<i style={{ cursor: "pointer" }} className="fas fa-copy text-warning m-1"></i></h5>
                                        <h4 className="card-title">Deposit Using USDT | USDT(TRC20)</h4>
                                        <p className="card-description">USD | USDT Deposit Method</p><hr />
                                            <p className="card-description">Request other available Deposit Method</p>
                                            <p className="card-description"><span className="text-success">Once requested, you will receive the payment details via our support mail....Once payment</span> is made using this method you are to send your payment proof to our support mail support@hintsprimefx.com</p>
                                    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Deposite
