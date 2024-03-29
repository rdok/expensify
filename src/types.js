import PropTypes from "prop-types";
import { momentObj } from "react-moment-proptypes";

// eslint-disable-next-line import/prefer-default-export
export const ExpensePropType = {
  id: PropTypes.string,
  createdAt: momentObj,
  description: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};
