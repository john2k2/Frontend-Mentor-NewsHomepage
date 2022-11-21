const NavLinkHeader = ({ text }) => {
    return (
        <div className="relative mb-11 text-2xl font-bold capitalize md:mb-0 ">
            <a href="#">{text}</a>
        </div>
    );
};

export default NavLinkHeader;
