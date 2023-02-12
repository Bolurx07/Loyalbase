import './Style.css';
import Button from '../Components/Button';
import Input from '../Components/Input';
import logo from '../Assets/logo.svg';
import heroimg from '../Assets/heroimg.svg';
import ellipse1 from '../Assets/Ellipse-1.svg';
import ellipse2 from '../Assets/Ellipse-2.svg';
import ellipse3 from '../Assets/Ellipse-3.svg';
import star1 from '../Assets/Star3.svg';
import star2 from '../Assets/Star4.svg';
import heroscribe from '../Assets/heroscribe.svg';
import scribe from '../Assets/scribe2.svg';
import scribe2 from '../Assets/scribe3.svg';
import home from '../Assets/home.svg';
import phone from '../Assets/phone.svg';
import Heroform from '../Components/Heroform/Heroform';




const Loyalbaze = () => {

  return (
    <div className='maincontainer'>
        <img src={ellipse1} alt="ellipse" className='ellipse1' />
        <img src={ellipse2} alt="ellipse" className='ellipse2' />
        <img src={ellipse3} alt="ellipse" className='ellipse3' />
        <img src={star1} alt="star" className='star1' />
        <img src={star1} alt="star" className='star2' />
        <img src={star2} alt="star" className='star3' />
        <img src={star2} alt="star" className='star4' />
        <img src={heroscribe} alt="scribe" className='heroscribe' />


        <section className='sect1'>
            <header>
                <img src={logo} alt="logo" className='headerlogo' />
                <div className='headerbtn-div'>
                    <Button btnText={"Get Priority Access"} btnClass={"headerbtn"}/>
                </div>
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
            <div>
                <Heroform />
            </div>
            <div className='herouser'>
                <img src={heroimg} alt="user" />
                <p>+57 Joined</p>
            </div>
        </section>
        <section className='sect2'>
            <img src={ellipse2} alt="ellipse" className='ellipse4' />
            <img src={star1} alt="star" className='star5' />
            <img src={star2} alt="star" className='star6' />
            <img src={star2} alt="star" className='star7' />
            <img src={scribe2} alt="scribe" className='scribe2' />
            <img src={scribe2} alt="scribe" className='scribe3' />

            <div className='contentdiv'>
                <h2>Priority Access</h2>
                <img src={scribe} alt="scribe" />
                <p>
                    Get ready to revolutionize the way you interact with your customers 
                    and drive sales with Loyalbaze. Skip the waitlist and get exclusive 
                    priority access to LoyalBaze. Limited slots available. Please tell 
                    us a bit about your business and needs and of our consultants will 
                    be in touch Immediately!
                </p>
            </div>
            <form className='sect2form'>
                <h3>Book a Consultation with us</h3>
                <Input inputclass={'nameinput'} inputType={'name'} inputPlaceholder={'Enter your full name'} />
                <Input inputclass={'mailinput'} inputType={'email'} inputPlaceholder={'Enter your work email'} />
                <Input inputclass={'numinput'} inputType={'number'} inputPlaceholder={'Mobile number'} />
                <Input inputclass={'companyinput'} inputType={'name'} inputPlaceholder={'Company Name'} />
                <select name="country"  id='sect2select'> 
                        <option defaultValue="" selected>Select Country</option>
                        <option value="nigeria">Nigeria</option>
                        <option value="southafrica">South Africa</option>
                        <option value="kenya">Kenya</option>
                        <option value="russia">Russia</option>
                        <option value="sweden">Sweden</option>
                        <option value="portugal">Portugal</option>
                        <option value="usa">USA</option>
                        <option value="china">China</option>
                    </select>
                <textarea resize='none'  name="message" placeholder="Drop a message....." rows="5" cols="20" minLength={10} id="sect2message"></textarea>
                <Button btnText={'Send Request'} btnClass={'sect2button'} />
            </form>
        </section>
        <hr />
        <footer className='myfooter'>
            <div>
                <img src={home} alt="homeicon" />
                <p className='footerspecial'>2nd Floor, The Garnet Building, KM14 Lekki Epe Expressway, Lagos, Nigeria.</p>
            </div>
            <div>
                <p>Loyalbaze is almost here.</p>
            </div>
            <div>
                <img src={phone} alt="phoneicon" />
                <p>+234 903 618 9485</p>
            </div>
        </footer>
        
    </div>
  )
}

export default Loyalbaze