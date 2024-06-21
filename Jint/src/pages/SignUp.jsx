import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Input } from '../components/Input';
import { UserIcon } from '../components/Icons/UserICon';
import { EmailIcon } from '../components/Icons/EmailIcon';
import { LockIcon } from '../components/Icons/LockIcon';

export function SignUp() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [lastName, setLastName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            console.log('Passwords do not match');
            return;
        }

        const profile_type_id = 1; // Adjust this value based on your application's logic

        try {
            const response = await fetch('http://jint_backend.test/api/users/store', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    lastname: lastName,
                    password,
                    profile_type_id,
                }),
            });

            if (!response.ok) {
                throw new Error('Error creating user');
            }

            const data = await response.json();
            console.log('Usuario creado con éxito', data);
        } catch (error) {
            console.log('Error al crear el usuario', error);
        }
    };

    return (
        <section className="flex flex-col justify-center items-center h-screen bg-primary">
            <div className="flex flex-col items-center justify-center w-80">
                <h2 className="font-bold text-3xl text-center text-white mb-2">
                    Sign Up
                </h2>
                <p className="text-center text-white">
                    Welcome! Come on and create your account{' '}
                </p>
                <form className="mt-4 flex flex-col gap-6 w-full mb-10" onSubmit={handleSignUp}>
                    <Input
                        title={'Name'}
                        onChange={(e) => setName(e.target.value)}
                        inputId={'name'}
                        icon={<UserIcon />}
                        type={'text'}
                    />
                    <Input
                        title={'Last Name'}
                        onChange={(e) => setLastName(e.target.value)}
                        inputId={'lastName'}
                        icon={<UserIcon />}
                        type={'text'}
                    />
                    <Input
                        title={'User'}
                        onChange={(e) => setUser(e.target.value)}
                        inputId={'user'}
                        icon={<UserIcon />}
                        type={'text'}
                    />
                    <Input
                        title={'Email'}
                        onChange={(e) => setEmail(e.target.value)}
                        inputId={'email'}
                        icon={<EmailIcon />}
                        type={'email'}
                    />
                    <Input
                        title={'Password'}
                        onChange={(e) => setPassword(e.target.value)}
                        inputId={'password'}
                        icon={<LockIcon />}
                        type={'password'}
                    />
                    <Input
                        title={'Confirm Password'}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        inputId={'passwordConfirm'}
                        icon={<LockIcon />}
                        type={'password'}
                    />
                    <input
                        className="w-full text-white bg-dark font-semibold rounded-xl px-8 py-2 cursor-pointer border-2 mt-2 border-dark hover:bg-white hover:text-dark transition-colors duration-200"
                        type="submit"
                        value="Sign Up"
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
    );
}

