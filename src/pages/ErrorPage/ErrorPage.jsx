import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center text-3xl mt-52">
            <h1 className="font-bold text-5xl">Oppsss!!!!!!!!!</h1>
            <h1 className="mt-2 mb-3">not Found</h1>
           <Link to={'/'} className="btn btn-info text-white">GoTo Home</Link>
        </div>
    );
};

export default ErrorPage;