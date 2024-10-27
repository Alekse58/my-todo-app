import React from 'react';
import {Input} from '@/components/ui/input';
import LoginButton from './LoginButton';
import useLogin from '@/hooks/useLogin';

const LoginForm: React.FC = () => {
    const {
        email,
        setEmail,
        password,
        setPassword,
        error,
        isLoading,
        handleLogin,
    } = useLogin();

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await handleLogin();
    };

    return (
        <form onSubmit={onSubmit} className="bg-white p-8 rounded-lg shadow-md w-96">
            <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">Вход</h2>
            {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Почта
                </label>
                <Input
                    type="email"
                    id="email"
                    placeholder="Введите вашу почту"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 text-gray-700"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Пароль
                </label>
                <Input
                    type="password"
                    id="password"
                    placeholder="Введите ваш пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 text-gray-700"
                />
            </div>
            <LoginButton isLoading={isLoading}/>
        </form>
    );
};

export default LoginForm;
