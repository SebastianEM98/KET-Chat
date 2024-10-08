import useLogout from "../hooks/useLogout";

const LogoutButton = () => {
    const { loading, logout } = useLogout();

    return (
        <button className="btn btn-outline-light mx-4" type="button" onClick={logout}>
            {loading ? (<div className="spinner-border m-0 p-0" role="status"></div>) : "Cerrar sesión"}
        </button>
    );
};
export default LogoutButton;