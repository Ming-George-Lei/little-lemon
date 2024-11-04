import menuList from "./MenuList";

const Menu = () => {
    return (
        <section className="menu-container">
            <div className="menu-header">
                <h1>Specials</h1>
                <button className="online-menu">Online Menu</button>
            </div>
            <div className="menus">
                {
                    menuList.map((menuItem) => 
                        <div key={menuItem.id}  className="menu-item">
                            <img src={menuItem.image} alt="menu-image"></img>
                            <div className="menu-summary">
                                <h4>{menuItem.name}</h4>
                                <p>{menuItem.price}</p>
                            </div>
                            <p className="menu-description">{menuItem.description}</p>
                            <button className="order-button">Order a delivery</button>
                        </div>
                    )
                }
            </div>
        </section>
    );
}

export default Menu;

// <button className="online-menu">Online Menu</button>