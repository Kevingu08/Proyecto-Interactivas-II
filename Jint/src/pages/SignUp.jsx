import { NavLink } from 'react-router-dom'
import { ROUTE_PATHS } from '../routes'
import { Input } from '../components/Input'
import { UserIcon } from '../components/Icons/UserICon'
import { EmailIcon } from '../components/Icons/EmailIcon'
import { LockIcon } from '../components/Icons/LockIcon'

export function SignUp() {
    return (
        <section className="flex flex-col justify-center items-center h-screen bg-primary">
            <div className="flex flex-col items-center justify-center w-80">
                <h2 className="font-bold text-3xl text-center text-white mb-2">
                    Sing Up
                </h2>
                <p className="text-center text-white">
                    Welcome! Come on and create your account{' '}
                </p>

                <form  className="mt-4 flex flex-col gap-6 w-full mb-10">
                    <Input
                        title={'User'}
                        inputId={'userInput'}
                        icon={<UserIcon />}
                        type={'text'}
                    />
                    <Input
                        title={'Email'}
                        inputId={'emailInput'}
                        icon={<EmailIcon />}
                        type={'email'}
                    />
                    <Input
                        title={'Password'}
                        inputId={'passwordInput'}
                        icon={<LockIcon />}
                        type={'password'}
                    />
                    <Input
                        title={'Confirm Password'}
                        inputId={'passwordConfirmInput'}
                        icon={<LockIcon />}
                        type={'password'}
                    />
                    <input
                        className="w-full text-white bg-dark font-semibold rounded-xl px-8 py-2 cursor-pointer border-2 mt-2 border-dark hover:bg-white hover:text-dark transition-colors duration-200"
                        type="submit"
                        value="Sing Up"
                    />
                </form>
                <p className="text-white">
                    Do you have an account?{' '}
                    <NavLink
                        className="font-bold underline decoration-2"
                        to={ROUTE_PATHS.LOGIN}
                    >
                        LOGIN
                    </NavLink>
                </p>
            </div>
        </section>
    )
}
