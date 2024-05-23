import { NavLink } from 'react-router-dom';

export function Login() {
    return (
        <section className="flex flex-col justify-center items-center h-screen bg-primary">
            <div className="flex flex-col items-center justify-center w-80">
                <h2 className="font-bold text-3xl text-center text-white mb-2">
                    User Login
                </h2>
                <p className="text-center text-white">
                    Welcome! Enter your details to login into your account
                </p>

                <form className="mt-4 flex flex-col gap-6 w-full mb-10">
                    <div className="shadow-main p-2 rounded-xl bg-white flex gap-2">
                        <svg
                            className="w-6 h-6 text-gray-800 dark:text-black"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <input
                            className="w-[90%]"
                            type="text"
                            placeholder="User"
                        />
                    </div>
                    <div className="shadow-main p-2 rounded-xl bg-white flex gap-2">
                        <svg
                            className="w-6 h-6 text-gray-800 dark:text-black"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <input
                            className="w-[90%]"
                            type="password"
                            placeholder="Password"
                        />
                    </div>

                    <input
                        className="text-white bg-white/30 rounded-xl w-fit m-auto px-8 py-2 cursor-pointer hover:bg-white hover:text-primary hover:font-semibold"
                        type="submit"
                        value="Login"
                    />
                </form>
                <p className="text-white">
                    Don’t you have an account?{' '}
                    <NavLink className="font-bold underline decoration-2" to="/singUp">
                        REGISTER
                    </NavLink>
                </p>
            </div>
        </section>
    )
}
