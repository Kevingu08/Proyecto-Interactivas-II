import './index.css'

export function Welcome(){
    return(
        <>
        <div className='h-screen bg-gradient-to-b from-violet-c to-violet-500'>
        <div>
        <p className='font-primary font-bold text-7xl text-primary pt-5 px-10'>J</p> 
        </div>
        <div className='flex items-center justify-center pt-60'>
            <h1 className='font-primary font-bold text-7xl text-white'>Welcome to <span className='text-primary'>Jint</span></h1>
        </div>
        <div className='flex items-center justify-center'>
            <h1 className='text-center font-primary font-light text-5xl text-white pt-16'>The Best Way to Manage Your <br />Time</h1>
        </div>
        <div className='flex items-center justify-center mt-24'>
        <button className='rounded-full bg-white bg-opacity-30 hover:bg-opacity-50 text-xl text-white px-4 py-2'>Get Started Now</button>
        </div>
        <div>
            <p className='text-center font-primary font-extralight text-2xl text-white pt-16'> Do you have an account? <a className='underline font-bold hover:opacity-50' href="LOGIN">LOGIN</a></p>
            </div>
        </div>
        </>
    
    )
}