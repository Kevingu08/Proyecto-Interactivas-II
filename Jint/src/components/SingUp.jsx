import './index.css'

export function SingUp(){
    return (
        <section className="flex flex-col justify-center items-center h-screen bg-primary">
            <div className='flex flex-col items-center justify-center w-80'>
                <h2 className="font-bold text-3xl text-center text-white mb-2">Sing Up</h2>
                <p className='text-center text-white'>Welcome! Come on and create your account </p>

                <form className="mt-4 flex flex-col gap-6 w-full mb-10">
                    <div className="shadow-main p-2 rounded-xl bg-white flex gap-2">
                        <svg className="w-6 h-6 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd"/>
                        </svg>
                        <input className='w-[90%]' type="text"  placeholder="User" />
                    </div>
                    <div className="shadow-main p-2 rounded-xl bg-white flex gap-2">
                    <svg className="w-6 h-6 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z"/>
                      <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z"/>
                    </svg>
                        <input className='w-[90%]' type="email"  placeholder="Email" />
                    </div>
                    <div className="shadow-main p-2 rounded-xl bg-white flex gap-2">
                        <svg className="w-6 h-6 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path fill-rule="evenodd" d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z" clip-rule="evenodd"/>
                        </svg>
                        <input className='w-[90%]' type="password" placeholder="Password" />
                    </div>
                    <div className="shadow-main p-2 rounded-xl bg-white flex gap-2">
                        <svg className="w-6 h-6 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path fill-rule="evenodd" d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z" clip-rule="evenodd"/>
                        </svg>
                        <input className='w-[90%]' type="password" placeholder="Confirm Password" />
                    </div>

                    <input className='text-white bg-white/30 rounded-xl w-fit m-auto px-8 py-2 cursor-pointer hover:bg-white hover:text-primary hover:font-semibold' type="submit" value="Sing Up"/>
                </form>
                <p className='text-white'>Do you have an account?  <a className='font-bold underline decoration-2' href="#">LOGIN</a></p>
            </div>
        </section>
    )
}