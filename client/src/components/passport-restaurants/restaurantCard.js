import React, { useState, useEffect } from "react";
import { Icon, Modal, Button } from "semantic-ui-react";
// import _ from "lodash";
import RestaurantInfo from "./restaurant-info";
import { addVisited, delVisited } from "../../actions/Restaurants"; //redux
import { connect } from "react-redux"; //redux


const RestaurantModal = props => {
  // const { setSavedRestaurants } = props;
  // const { savedRestaurants } = props;

  const restaurantId = props.rest.id;
  const targetRestaurant = props.restaurants.filter(rest => rest.id === restaurantId);

  const [checked, setChecked] = useState();
  const [cardHovered, setCardHovered] = useState(false);

  const toggleCardButtons = () => {
    setCardHovered(!cardHovered);
  };
 
  // const [restId, setRestId] = useState();

  const handleAdd = event => {
    event.stopPropagation();
    event.preventDefault();
    // setRestId(restaurantId);
    props.addVisited(restaurantId);
  };

  const handleRemove = event => {
    event.stopPropagation();
    event.preventDefault();
    // setRestId(restaurantId);
    props.delVisited(restaurantId);
  };



  console.log("rest card:", props.rest.id, restaurantId, checked)
  
  return (
    <div
      className="px-6 py-4"
      onMouseEnter={toggleCardButtons}
      onMouseLeave={toggleCardButtons}
      onClick={toggleCardButtons}
    >

      <Modal
        style={{ width: "40%" }}
        closeIcon
        trigger={
          <Button basic className="column basic restaurant-card" as="div">
            <p className="rest-details rest-name">
              {props.rest.name}
              {checked && (
                <Icon
                  name="check"
                  style={{
                    fontSize: "10px",
                    margin: "auto 0",
                    paddingLeft: "10px",
                    color: "##49beb7"
                  }}
                />
              )}
            </p>
            <p className="rest-details">{`${props.rest.city}, ${props.rest.country}`}</p>
            <p className="rest-details">{`${props.rest.type}`}</p>
            <div className="add-remove-buttons">
              {checked && cardHovered && (
                <button className="add">

                  <Icon
                    name="minus"
                    style={{ color: "#FF2400", fontSize: "25px" }}
                    className="removeBtn"
                    onClick={handleRemove}
                  />
                </button>
              )}

              {!checked && cardHovered && (
                <button className="remove" name="add" value={restaurantId}>

                  <Icon
                    name="plus"
                    style={{ color: "#085f63", fontSize: "25px" }}
                    className="addBtn"
                    onClick={handleAdd}
                  />
                </button>
              )}
            </div>
          </Button>
        }
      >
        <RestaurantInfo
          info={props.rest}
          setSavedRestaurants={props.setSavedRestaurants}
          savedRestaurants={props.savedRestaurants}
          setChecked={setChecked}
          checked={checked}
          setCardHovered={setCardHovered}
          handleAdd={handleAdd}
          handleRemove={handleRemove}
        />
      </Modal>
    </div>
  );
};


const mapStateToProps = state => ({
  error: state.error,
  addingRest: state.addingRest,
  delRest: state.delRest,
  restaurants: state.restaurants
});

export default connect(
  mapStateToProps,
  { 
    addVisited,
    delVisited
  }
)(RestaurantModal);

