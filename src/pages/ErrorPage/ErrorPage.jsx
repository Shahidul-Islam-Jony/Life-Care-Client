import { Link, useRouteError } from "react-router-dom";
import errorPage from '../../assets/images/ErrorPage/errorPage.avif'

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="">
            {
                error?.status === 404 && <div className="text-center relative">
                    <img src={errorPage} className='mx-auto' alt="" />
                    <div className='absolute md:-bottom-16 right-1/3'>
                        <p className='text-5xl font-bold text-center mt-4'>Page Not Found</p>
                        <Link className='btn btn-primary mt-4 px-16 mb-6' to='/'>Go Back to home</Link>
                    </div>
                </div>
            }
        </div>
    );
};

export default ErrorPage;