/* eslint-disable jsx-a11y/anchor-is-valid */

const Searchbar = (props) => {
  return (
    <>
      <div className="navbar-wrapper">
        <div className="container mx-auto">
          <div class="grid grid-cols-2 gap-4">
            <br />
            <div class="col-start-1 col-end-3">
              <label for="cars">Filter Countries By Region: </label>
              <br />
              <select
                type="text"
                placeholder="Filter Countries By Region"
                value={props.filtervalue}
                onChange={props.filterchange}
                className="dropdown"
              >
                <option value="">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
              </select>
            </div>
            <div class="col-end-7 col-span-2"></div>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
