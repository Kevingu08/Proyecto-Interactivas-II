import { useState } from 'react';
import { ROUTE_PATHS } from '../routes';
import { NavLink } from 'react-router-dom';
import { Input } from '../components/Input';
import { UserIcon } from '../components/Icons/UserICon';
import { EmailIcon } from '../components/Icons/EmailIcon';
import { LockIcon } from '../components/Icons/LockIcon';
import axios from 'axios';

export function SignUp() {
    const [username, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [lastname, setLastName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const lastname = e.target.lastname.value;
        const username = e.target.username.value;
        const password = e.target.password.value;
        const confirmPassword= e.target.confirmPassword.value;
        console.log(name, email, lastname, username, password);
        if (password !== confirmPassword) {
            console.log('Passwords do not match');
            return;
        
        }

        const profile_type_id = 2; 

        try {
            const response = await axios.post('http://jint_backend.test/api/users/store', {
            // const response = await axios.post('http://127.0.0.1:8000/api/users/store', {
                username,
                name,
                email,
                lastname,
                password,
                profile_type_id,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            console.log('Usuario creado con éxito', response.data);
        } catch (error) {
            console.log('Error al crear el usuario', error.response ? error.response.data : error.message);
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
                <form method='POST' className="mt-4 flex flex-col gap-6 w-full mb-10" onSubmit={handleSignUp}>
                    <Input
                        title={'Name'}
                        inputId={'name'}
                        icon={<UserIcon />}
                        type={'text'}
                    />
                    <Input
                        title={'Last Name'}
                        inputId={'lastname'}
                        icon={<UserIcon />}
                        type={'text'}
                    />
                    <Input
                        title={'User'}
                        inputId={'username'}
                        icon={<UserIcon />}
                        type={'text'}
                    />
                    <Input
                        title={'Email'}
                        inputId={'email'}
                        icon={<EmailIcon />}
                        type={'email'}
                    />
                    <Input
                        title={'Password'}
                        inputId={'password'}
                        icon={<LockIcon />}
                        type={'password'}
                    />
                    <Input
                        title={'Confirm Password'}
                        inputId={'confirmPassword'}
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

