import Header from '../Header/Header';

const ErrorPage = () => {
    return (
        <div>
            <Header></Header>
            <h1 className='text-[100px] text-center'>Error 404</h1>
            <h2 className='text-[80px] text-center'>Try again</h2>
        </div>
    );
};

export default ErrorPage;