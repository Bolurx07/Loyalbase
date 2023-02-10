import './Style.css';
import logo from '../Assets/logo.svg';
import Button from '../Components/Button';
import Input from '../Components/Input';

const Loyalbaze = () => {
  return (
    <div className='maincontainer'>
        <section className='sect1'>
            <header>
                <img src={logo} alt="logo" className='headerlogo' />
                <Button btnText={"Get Priority Access"} btnClass={"headerbtn"}/>
            </header>
            <div className='herodiv'>
                <h1>Turn your best customers into <span>Loyal fans</span></h1>
                <p>Loyalbaze, empowers businesses to offer digital, mobile-first 
                    loyalty programs to their customers. With our AI Powered platform, 
                    you can easily create and manage custom loyalty and rewards programs, 
                    track customer engagement, and gain valuable insights to improve 
                    your business. Sign up now to get early access.
                </p>
            </div>
            <form action="">
                <Input inputclass={'heroinput'} inputType={'name'} inputPlaceholder={'Tell us your name'}  />
                <Input inputclass={'heroinput'} inputType={'email'} inputPlaceholder={'Enter your email address'}  />
                <Button btnText={'Get early access'} btnClass={'herobtn'}/>
            </form>
        </section>
    </div>
  )
}

export default Loyalbaze