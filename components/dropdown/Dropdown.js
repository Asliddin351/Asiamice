import React from 'react';
import {CustomDropdown} from '@material-ui/core'

const buttonProps = { round: true, color: "info" };

export default function Dropdown(){
  return (
    <CustomDropdown
      dropup
      dropdownHeader="Dropdown header"
      buttonText="Dropup"
      buttonProps={buttonProps}
      dropdownList={[
        "Action",
        "Another action",
        "Something else here",
        {divider: true},
        "Separated link",
        {divider: true},
        "One more separated link",
      ]}
    />
  );
}

CustomDropdown.defaultProps = {
    caret: true,
    dropup: false,
    hoverColor: "primary",
  };
  
  CustomDropdown.propTypes = {
    hoverColor: PropTypes.oneOf([
      "dark",
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "rose",
    ]),
    buttonText: PropTypes.node,
    buttonIcon: PropTypes.object,
    dropdownList: PropTypes.array,
    buttonProps: PropTypes.object,
    dropup: PropTypes.bool,
    dropdownHeader: PropTypes.node,
    rtlActive: PropTypes.bool,
    caret: PropTypes.bool,
    dropPlacement: PropTypes.oneOf([
      "bottom",
      "top",
      "right",
      "left",
      "bottom-start",
      "bottom-end",
      "top-start",
      "top-end",
      "right-start",
      "right-end",
      "left-start",
      "left-end",
    ]),
    noLiPadding: PropTypes.bool,
    innerDropDown: PropTypes.bool,
    navDropdown: PropTypes.bool,
    // This is a function that returns the clicked menu item
    onClick: PropTypes.func,
  };