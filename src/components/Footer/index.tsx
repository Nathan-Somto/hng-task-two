import Facebook from '../../assets/Facebook.svg'
import Twitter from '../../assets/Twitter.svg'
import Instagram from '../../assets/Instagram.svg'
import Youtube from '../../assets/Youtube.svg'

export default function Footer() {
  return (
    <footer className='max-w-[500px] w-[60%] mt-8 py-6 min-w-[300px] items-center mx-auto text-lg font-semibold flex flex-col gap-9'>
        <div className='flex gap-8 items-center justify-center'>
           <a href="https://facebook.com">
            <img src={Facebook} alt='facebook icon'/>
           </a>
           <a href='https://x.com'>
            <img src={Twitter} alt='twitter icon'/>
           </a>
           <a href="https://instagram.com">
           <img src={Instagram} alt='instagram icon'/>
           </a>
           <a href="https://youtube.com">
            <img src={Youtube} alt='youtube icon'/>
           </a>
        </div>
        <div className='flex gap-4 justify-center text-gray-900'>
            <p>Conditions of use</p>
            <p>Privacy & Policy</p>
            <p>Press Room</p>
        </div>
        <p className='text-gray-500'>&copy;{new Date().getFullYear()} MovieBox by Somtochi Mkparu</p>
    </footer>
  )
}
