const Nav = ({ links = [] }) => {
  return (
    <nav>
      <ul>
        nav
        {links.map((link) => {
          <li>
            <a href="link.url">Link</a>
          </li>;
        })}
      </ul>
    </nav>
  );
};

export default Nav;
